import { VideoConfig, VoiceConfig, SPEAKER } from '../yukkuri/yukkuriVideoConfig';

export type PlaygroundItem = {
  text: string;
  delayForNextTalkInSeconds: number;
  videoIndex: number;
  seSounds?: { src: string }[];
  // Generated fields
  id?: string;
  audioDurationFrames?: number;
};

// 仮の背景画像リスト（必要に応じて追加・変更してください）
const BG_IMAGES = [
  '/image/remotion-logo.png',
  '/image/react-logo.png',
  '/image/html_css_javascript.jpeg',
  '/image/react-face-sample.png',
  '/image/jimakuimage.png',
  '/image/gunyogunyoanimation.png',
  '/image/setting-file.png',
];

export const convertToVideoConfig = (script: PlaygroundItem[]): VideoConfig => {
  const talks: VoiceConfig[] = [];
  const fromFramesMap: { [key: number]: number } = {};
  let currentFrame = 30; // Initial delay

  script.forEach((item, index) => {
    const audioDuration = item.audioDurationFrames || (item.text.length * 15 + 30);
    const bgImage = BG_IMAGES[item.videoIndex % BG_IMAGES.length] || BG_IMAGES[0];

    fromFramesMap[index] = currentFrame;

    talks.push({
      text: item.text,
      speaker: SPEAKER.marisa, // 固定
      id: item.id || '',
      audioDurationFrames: audioDuration,
      image: { src: bgImage },
      seSounds: item.seSounds,
    });

    // Calculate next frame start
    // delayForNextTalkInSeconds * 30fps
    const delayFrames = Math.floor(item.delayForNextTalkInSeconds * 30);
    currentFrame += audioDuration + delayFrames;
  });

  return {
    sections: [
      {
        title: 'Playground',
        bgmSrc: '/audio/bgm/2_23_AM_2.mp3',
        fromFramesMap,
        talks,
        totalFrames: currentFrame + 60, // Add some buffer at the end
        kuchipakuMap: { frames: [], amplitude: [] },
        reimuKuchipakuMap: { frames: [], amplitude: [] },
        marisaKuchipakuMap: { frames: [], amplitude: [] },
        beforeMovieFrames: 0,
        afterMovieFrames: 0,
      },
    ],
  };
};
