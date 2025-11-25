import { VideoConfig } from '../src/yukkuri/yukkuriVideoConfig';

// ==================== EDITABLE SECTION START ====================
// この部分を編集してください。音声生成スクリプトを実行すると、
// 下の GENERATED SECTION が自動的に更新されます。

export type SimpleTalk = {
  text: string;
  delayForNextTalkInSeconds: number;
  videoIndex?: number;
  seSounds?: { src: string }[];
};

export const PLAYGROUND_SETTINGS = {
  title: 'Playground',
  bgmSrc: '/audio/bgm/2_23_AM_2.mp3',
  bgmVolume: 1,
};

export const PLAYGROUND_TALKS: SimpleTalk[] = [
  {
    text: 'これは新しい構成のテストになるようなことをテストしてみただぜになるようなことをテストしてみただぜ',
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 0,
  },
  {
    text: 'スライド番号を指定して画像を切り替えられるんだ',
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 1,
  },
  {
    text: 'SEも再生できるぞ',
    delayForNextTalkInSeconds: 1.0,
    videoIndex: 2,
  },
];

// ==================== EDITABLE SECTION END ====================

// ==================== GENERATED SECTION START ====================

// この部分は自動生成されます。直接編集しないでください。
// 音声生成: npx ts-node scripts/generateYukkuriVoiceFiles.ts

export const PlaygroundConfig: VideoConfig = {
  "sections": [
    {
      "title": "Playground",
      "bgmSrc": "/audio/bgm/2_23_AM_2.mp3",
      "bgmVolume": 1,
      "fromFramesMap": {
        "0": 30,
        "1": 262,
        "2": 392
      },
      "talks": [
        {
          "text": "これは新しい構成のテストになるようなことをテストしてみただぜになるようなことをテストしてみただぜ",
          "id": "98106ebbce384d60bb62ed3878f09d7a",
          "audioDurationFrames": 217,
          "image": {
            "src": "/slides/slide_0.png"
          }
        },
        {
          "text": "スライド番号を指定して画像を切り替えられるんだ",
          "id": "f75c788f79cb4ff19221c8d1ffc4059a",
          "audioDurationFrames": 115,
          "image": {
            "src": "/slides/slide_1.png"
          }
        },
        {
          "text": "SEも再生できるぞ",
          "id": "d60c886c57c14154ad0f2023cc2504e4",
          "audioDurationFrames": 65,
          "image": {
            "src": "/slides/slide_2.png"
          }
        }
      ],
      "totalFrames": 547,
      "kuchipakuMap": {
        "frames": [],
        "amplitude": []
      },
      "reimuKuchipakuMap": {
        "frames": [],
        "amplitude": []
      },
      "marisaKuchipakuMap": {
        "frames": [],
        "amplitude": []
      },
      "beforeMovieFrames": 0,
      "afterMovieFrames": 0
    }
  ]
};

// ==================== GENERATED SECTION END ====================
