import { VideoConfig, VoiceConfig, SPEAKER } from '../yukkuri/yukkuriVideoConfig';
import { config } from '../../transcripts/playground';
import crypto from 'crypto';
import * as fs from 'fs';

// 画像リスト（videoIndexに対応）
const BG_IMAGES = [
  '/image/remotion-logo.png',
  '/image/react-logo.png',
  '/image/html_css_javascript.jpeg',
  '/image/react-face-sample.png',
  '/image/jimakuimage.png',
  '/image/gunyogunyoanimation.png',
  '/image/setting-file.png',
];

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

export function loadPlaygroundConfig(): VideoConfig {
  // Load existing cache
  let audioCache: AudioCache = {};
  if (fs.existsSync(AUDIO_CACHE_PATH)) {
    audioCache = JSON.parse(fs.readFileSync(AUDIO_CACHE_PATH, 'utf-8'));
  }

  const voiceConfigs: VoiceConfig[] = [];
  const fromFramesMap: { [key: number]: number } = {};
  let currentFrame = 30; // Initial delay

  for (let index = 0; index < config.talks.length; index++) {
    const talk = config.talks[index];
    const textHash = getTextHash(talk.text);
    const audioInfo = audioCache[textHash];

    if (!audioInfo) {
      console.warn(`Audio not found for: ${talk.text.substring(0, 30)}...`);
      console.warn('Run: npx ts-node scripts/generateYukkuriVoiceFiles.ts');
      continue;
    }

    fromFramesMap[index] = currentFrame;

    const voiceConfig: VoiceConfig = {
      text: talk.text,
      speaker: SPEAKER.marisa,
      id: audioInfo.id,
      audioDurationFrames: audioInfo.audioDurationFrames,
      seSounds: talk.seSounds,
    };

    // Set image based on videoIndex
    if (talk.videoIndex !== undefined) {
      const imageIndex = talk.videoIndex % BG_IMAGES.length;
      voiceConfig.image = { src: BG_IMAGES[imageIndex] };
    }

    voiceConfigs.push(voiceConfig);

    // Calculate next frame
    const delayFrames = Math.floor(talk.delayForNextTalkInSeconds * 30);
    currentFrame += audioInfo.audioDurationFrames + delayFrames;
  }

  return {
    sections: [
      {
        title: config.title,
        bgmSrc: config.bgmSrc,
        bgmVolume: config.bgmVolume,
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
}
