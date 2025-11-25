import * as fs from 'fs';
import fsExtra from 'fs-extra';
import crypto from 'crypto';

const forceGenerate = process.argv[2] === 'force';

if (forceGenerate) {
  fsExtra.emptyDirSync('./public/audio/yukkuri');
}

// Audio cache file path
const AUDIO_CACHE_PATH = './transcripts/playground-audio-cache.json';

type AudioCache = {
  [textHash: string]: {
    id: string;
    audioDurationFrames: number;
  };
};

function getTextHash(text: string): string {
  return crypto.createHash('md5').update(text).digest('hex');
}

(async () => {
  // Import config
  const playgroundModule = await import('../transcripts/playground');
  const talks = playgroundModule.PLAYGROUND_TALKS;
  const settings = playgroundModule.PLAYGROUND_SETTINGS;

  // Load existing cache
  let audioCache: AudioCache = {};
  if (fs.existsSync(AUDIO_CACHE_PATH)) {
    audioCache = JSON.parse(fs.readFileSync(AUDIO_CACHE_PATH, 'utf-8'));
  }

  // Generate audio for each talk
  const { generateVoicevoxAudio } = await import('./voicevoxUtils');
  const SPEAKER_ID = 3; // Zundamon

  for (const talk of talks) {
    const textHash = getTextHash(talk.text);
    let audioInfo = audioCache[textHash];

    if (!audioInfo || forceGenerate) {
      // Generate new audio
      const id = require('uuid').v4().replaceAll('-', '');
      const filename = `${id}.wav`;
      const filepath = `./public/audio/yukkuri/${filename}`;

      if (!fs.existsSync('./public/audio/yukkuri')) {
        fs.mkdirSync('./public/audio/yukkuri', { recursive: true });
      }

      try {
        console.log(`Generating audio: ${talk.text.substring(0, 30)}...`);
        await generateVoicevoxAudio(talk.text, SPEAKER_ID, filepath);

        // Get duration
        const { getAudioDurationInSeconds } = require('get-audio-duration');
        const durationSec = await getAudioDurationInSeconds(filepath);
        const audioDurationFrames = Math.ceil(durationSec * 30);

        audioInfo = { id, audioDurationFrames };
        audioCache[textHash] = audioInfo;
      } catch (e) {
        console.error(`Failed to generate audio for ${talk.text}`, e);
        continue;
      }
    }
  }

  // Save cache
  fs.writeFileSync(AUDIO_CACHE_PATH, JSON.stringify(audioCache, null, 2));

  // Generate VideoConfig
  // BG_IMAGES配列を削除し、動的にスライド画像を読み込むように変更
  // const BG_IMAGES = [
  //   '/image/remotion-logo.png',
  //   '/image/react-logo.png',
  //   '/image/html_css_javascript.jpeg',
  //   '/image/react-face-sample.png',
  //   '/image/jimakuimage.png',
  //   '/image/gunyogunyoanimation.png',
  //   '/image/setting-file.png',
  // ];

  const voiceConfigs: any[] = [];
  const fromFramesMap: { [key: number]: number } = {};
  let currentFrame = 30;

  for (let index = 0; index < talks.length; index++) {
    const talk = talks[index];
    const textHash = getTextHash(talk.text);
    const audioInfo = audioCache[textHash];

    if (!audioInfo) continue;

    fromFramesMap[index] = currentFrame;

    const voiceConfig: any = {
      text: talk.text,
      id: audioInfo.id,
      audioDurationFrames: audioInfo.audioDurationFrames,
      seSounds: talk.seSounds,
    };

    if (talk.videoIndex !== undefined) {
      const slideImagePath = `/slides/slide_${talk.videoIndex}.png`; // 動的にスライド画像を読み込む
      voiceConfig.image = { src: slideImagePath };
    }

    voiceConfigs.push(voiceConfig);

    const delayFrames = Math.floor(talk.delayForNextTalkInSeconds * 30);
    currentFrame += audioInfo.audioDurationFrames + delayFrames;
  }

  const playgroundConfig = {
    sections: [
      {
        title: settings.title,
        bgmSrc: settings.bgmSrc,
        bgmVolume: settings.bgmVolume,
        fromFramesMap,
        talks: voiceConfigs,
        totalFrames: currentFrame + 60,
        kuchipakuMap: { frames: [], amplitude: [] },
        reimuKuchipakuMap: { frames: [], amplitude: [] },
        marisaKuchipakuMap: { frames: [], amplitude: [] },
        beforeMovieFrames: 0,
        afterMovieFrames: 0,
      },
    ],
  };

  // Read the current file
  const playgroundPath = './transcripts/playground.tsx';
  const currentContent = fs.readFileSync(playgroundPath, 'utf-8');

  // Find the GENERATED SECTION
  const startMarker = '// ==================== GENERATED SECTION START ====================';
  const endMarker = '// ==================== GENERATED SECTION END ====================';

  const startIndex = currentContent.indexOf(startMarker);
  const endIndex = currentContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find GENERATED SECTION markers in playground.tsx');
    process.exit(1);
  }

  // Replace the generated section
  const beforeSection = currentContent.substring(0, startIndex + startMarker.length);
  const afterSection = currentContent.substring(endIndex);

  const generatedSection = `
// この部分は自動生成されます。直接編集しないでください。
// 音声生成: npx ts-node scripts/generateYukkuriVoiceFiles.ts

export const PlaygroundConfig: VideoConfig = ${JSON.stringify(playgroundConfig, null, 2)};

`;

  const newContent = beforeSection + '\n' + generatedSection + afterSection;

  fs.writeFileSync(playgroundPath, newContent);

  console.log('✓ Audio generation complete');
  console.log('✓ Updated playground.tsx');
  console.log(`✓ Audio cache saved (${Object.keys(audioCache).length} entries)`);
  console.log('✓ Restart Remotion preview to see changes');
})();
