import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import {
  SPEAKER,
  SPEAKER_TYPE,
  VideoConfig,
} from '../src/yukkuri/yukkuriVideoConfig';
import { generateVoicevoxAudio } from './voicevoxUtils';

// Voicevox Speaker IDs
// Defaults: 2 (Metan - Normal), 3 (Zundamon - Normal)
// You can change these IDs based on your Voicevox setup
const SPEAKER_MAP: Record<string, number> = {
  [SPEAKER.reimu]: 2, // Shikoku Metan
  [SPEAKER.marisa]: 3, // Zundamon
};

async function processTalk(talk: any, forceGenerate: boolean) {
  if ((forceGenerate || !talk.id) && talk.text.length > 0) {
    const speakerId = SPEAKER_MAP[talk.speaker] || 1; // Default to 1 if not found
    const id = uuidv4().replaceAll('-', '');
    const filename = `${id}.wav`;
    const filepath = `./public/audio/yukkuri/${filename}`;

    // Ensure directory exists
    if (!fs.existsSync('./public/audio/yukkuri')) {
      fs.mkdirSync('./public/audio/yukkuri', { recursive: true });
    }

    console.log(`Generating audio for ${talk.speaker}: ${talk.text.substring(0, 10)}...`);
    try {
      await generateVoicevoxAudio(talk.text, speakerId, filepath);
      talk.id = id;
    } catch (e) {
      console.error(`Failed to generate audio for ${talk.text}`, e);
    }
  }
}

export async function generateVoicevoxAudios(
  videoConfig: VideoConfig,
  forceGenerate: boolean
) {
  for (const section of videoConfig.sections) {
    for (const talk of section.talks) {
      if (talk.speaker === SPEAKER.reimuAndMarisa) {
        // Handle dual speaker if needed, for now just skip or pick one
        // Implementing simplified version
        const id = uuidv4().replaceAll('-', '');
        // This part is tricky without dual generation support in this simple script
        // For now, let's just generate one voice or handle it later
      } else {
        await processTalk(talk, forceGenerate);
      }
    }
  }
}
