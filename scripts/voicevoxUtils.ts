import http from 'http';
import fs from 'fs';
import path from 'path';

const VOICEVOX_URL = 'http://127.0.0.1:50021';

export async function generateVoicevoxAudio(
  text: string,
  speakerId: number,
  filepath: string
): Promise<void> {
  try {
    // 1. Audio Query
    const query = await new Promise<any>((resolve, reject) => {
      const req = http.request(
        `${VOICEVOX_URL}/audio_query?speaker=${speakerId}&text=${encodeURIComponent(
          text
        )}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        },
        (res) => {
          if (res.statusCode !== 200) {
            reject(new Error(`Audio Query failed with status code: ${res.statusCode}`));
            return;
          }
          let data = '';
          res.on('data', (chunk) => (data += chunk));
          res.on('end', () => resolve(JSON.parse(data)));
        }
      );
      req.on('error', reject);
      req.end();
    });

    // 2. Synthesis
    await new Promise<void>((resolve, reject) => {
      const req = http.request(
        `${VOICEVOX_URL}/synthesis?speaker=${speakerId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
        (res) => {
          if (res.statusCode !== 200) {
            reject(new Error(`Synthesis failed with status code: ${res.statusCode}`));
            return;
          }
          const fileStream = fs.createWriteStream(filepath);
          res.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            resolve();
          });
        }
      );
      req.on('error', reject);
      req.write(JSON.stringify(query));
      req.end();
    });
  } catch (error) {
    console.error('Voicevox generation error:', error);
    throw error;
  }
}
