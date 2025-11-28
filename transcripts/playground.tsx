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
  bgmVolume: 0.05, // BGMの音量を調整 (例: 0.3)
};

export const PLAYGROUND_TALKS: SimpleTalk[] = [
  {
    text: "みなさんこんにちは。今回は「ニューラルネットワークの仕組み」をわかりやすく解説します。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 0
  },
  {
    text: "これまでAIに触れてきた人も、ここで一度基礎から整理しておくと理解が一気に深まります。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 0
  },
  {
    text: "まずは全体像から確認していきましょう。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 1
  },
  {
    text: "今日のポイントは次の3つです。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 2
  },
  {
    text: "第一に、ニューラルネットワークとは何かを理解すること。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 2
  },
  {
    text: "第二に、構造とプロセスを図で把握すること。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 2
  },
  {
    text: "第三に、実際のアプリ画面のスクリーンショットで具体例を見ることです。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 2
  },
  {
    text: "では最初のパートに進みましょう。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 3
  },
  {
    text: "ニューラルネットワークとは、データの特徴を学習して結果を予測するための仕組みです。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 4
  },
  {
    text: "人間の脳の構造をヒントにして作られているという点が特徴です。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 4
  },
  {
    text: "この図を見てください。もっともシンプルなニューラルネットワークの構造を表したイラストです。（1画像のみ）",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 5,
    seSounds: [
      { src: "se/和太鼓でドドン.mp3" }
    ]
  },
  {
    text: "図の形だけを確認することで全体像がとても理解しやすくなります。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 5
  },
  {
    text: "次に、入力層・隠れ層・出力層の3層構造について説明します。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 6
  },
  {
    text: "この図では各層がどのような役割を持つのかを示しています。（1画像 + 説明つき）",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 6
  },
  {
    text: "データがどのように流れ、重みが調整されるかを見ることで学習のイメージがつかめます。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 7
  },
  {
    text: "ニューラルネットワークで重要な役割を持つのが「活性化関数」です。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 8
  },
  {
    text: "この図が代表的な例です。「ReLU」と「Sigmoid」を並べて視覚的に比較してみましょう。（2画像のみ）",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 8
  },
  {
    text: "この2つを比較するだけでも、どのように値が変化するのか一目でわかります。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 9
  },
  {
    text: "次に、学習プロセスを図で理解しましょう。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 10
  },
  {
    text: "まず「順伝播」の図を見てください。データが層を通って出力に向かう流れを示しています。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 10
  },
  {
    text: "続いて「逆伝播」の図です。誤差に応じて重みが調整される様子を図解しています。（2画像＋説明文付き）",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 10
  },
  {
    text: "この2つのプロセスが交互に行われることで、ネットワークが賢くなっていきます。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 11
  },
  {
    text: "次に、こちらが実際のAI画像生成アプリの画面です。（スクリーンショット単体）",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 12
  },
  {
    text: "どのようにプロンプトを入力するのかが簡単にわかります。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 12
  },
  {
    text: "さらに詳しく見ていきましょう。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 13
  },
  {
    text: "こちらは同じアプリの設定画面です。（スクリーンショット＋説明付き）",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 14
  },
  {
    text: "画像サイズやスタイルを変更できる UI があり、これらの設定は最終的な結果に大きく影響します。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 14
  },
  {
    text: "実際の操作画面を見ることで、理論と実践がつながって理解が深まります。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 15
  },
  {
    text: "ここで、ニューラルネットワーク内での計算式の流れを簡単な図（SVG図）で確認してみましょう。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 16
  },
  {
    text: "数式をいきなり読むより、シンプルな図を使うと全体像がつかみやすくなります。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 16
  },
  {
    text: "入力、重み、バイアス、活性化関数の関係をひとまとめにした視覚的なイメージです。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 17
  },
  {
    text: "今日は、ニューラルネットワークの基礎から構造、プロセス、そして実際のアプリ例まで幅広く解説しました。",
    delayForNextTalkInSeconds: 0.3,
    videoIndex: 18
  },
  {
    text: "それぞれの図やスクリーンショットを使うことで、抽象的な概念が具体的に理解できたはずです。",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 18
  },
  {
    text: "今後は応用編として、CNNやRNN、トランスフォーマーなどのモデルの違いにも触れていきますのでお楽しみに！",
    delayForNextTalkInSeconds: 0.5,
    videoIndex: 19,
    seSounds: [
      { src: "se/和太鼓でドドン.mp3" }
    ]
  }
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
      "bgmVolume": 0.05,
      "fromFramesMap": {
        "0": 30,
        "1": 257,
        "2": 486,
        "3": 600,
        "4": 684,
        "5": 833,
        "6": 960,
        "7": 1149,
        "8": 1241,
        "9": 1446,
        "10": 1617,
        "11": 1875,
        "12": 2053,
        "13": 2271,
        "14": 2526,
        "15": 2744,
        "16": 2935,
        "17": 3241,
        "18": 3433,
        "19": 3554,
        "20": 3801,
        "21": 4115,
        "22": 4322,
        "23": 4543,
        "24": 4690,
        "25": 4773,
        "26": 4952,
        "27": 5256,
        "28": 5456,
        "29": 5726,
        "30": 5932,
        "31": 6184,
        "32": 6457,
        "33": 6695
      },
      "talks": [
        {
          "text": "みなさんこんにちは。今回は「ニューラルネットワークの仕組み」をわかりやすく解説します。",
          "id": "2d2605002bb54f45ae61674141f1d045",
          "audioDurationFrames": 218,
          "image": {
            "src": "/slides/0.png"
          }
        },
        {
          "text": "これまでAIに触れてきた人も、ここで一度基礎から整理しておくと理解が一気に深まります。",
          "id": "b2d20f71352440b3836e3a4011b57b43",
          "audioDurationFrames": 214,
          "image": {
            "src": "/slides/0.png"
          }
        },
        {
          "text": "まずは全体像から確認していきましょう。",
          "id": "07ffff8ec9f645a581a69e925a6cc7f4",
          "audioDurationFrames": 99,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "今日のポイントは次の3つです。",
          "id": "b6a2fa64ebf24ed3870fc9d7f7cba0ba",
          "audioDurationFrames": 75,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "第一に、ニューラルネットワークとは何かを理解すること。",
          "id": "147871d15a4047018f3a7078fbf4cd43",
          "audioDurationFrames": 140,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "第二に、構造とプロセスを図で把握すること。",
          "id": "c8ee04e509f840be9bc2585b0a1dbb28",
          "audioDurationFrames": 118,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "第三に、実際のアプリ画面のスクリーンショットで具体例を見ることです。",
          "id": "a13125918c5341568e8eda67bc69e12a",
          "audioDurationFrames": 174,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "では最初のパートに進みましょう。",
          "id": "34037b73df3f4787bcc36142f03a59f1",
          "audioDurationFrames": 77,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "ニューラルネットワークとは、データの特徴を学習して結果を予測するための仕組みです。",
          "id": "8aaef88eb115400684c3a4995c3bc62d",
          "audioDurationFrames": 196,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "人間の脳の構造をヒントにして作られているという点が特徴です。",
          "id": "513e9ab306164544a4b1c4e1a1e4bff0",
          "audioDurationFrames": 156,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "この図を見てください。もっともシンプルなニューラルネットワークの構造を表したイラストです。（1画像のみ）",
          "id": "52efb644bf184219aaa06b51244c86b6",
          "audioDurationFrames": 249,
          "seSounds": [
            {
              "src": "/se/和太鼓でドドン.mp3"
            }
          ],
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "図の形だけを確認することで全体像がとても理解しやすくなります。",
          "id": "d4750259cc1a47cebcb07baf7bb18689",
          "audioDurationFrames": 163,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "次に、入力層・隠れ層・出力層の3層構造について説明します。",
          "id": "b79bb2241c0f47e8a07f0f6418a56686",
          "audioDurationFrames": 209,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "この図では各層がどのような役割を持つのかを示しています。（1画像 + 説明つき）",
          "id": "8c2f13c5b73248cdaff0317f1516ed57",
          "audioDurationFrames": 240,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "データがどのように流れ、重みが調整されるかを見ることで学習のイメージがつかめます。",
          "id": "7186539c8e804049823e5ff68646dfac",
          "audioDurationFrames": 203,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "ニューラルネットワークで重要な役割を持つのが「活性化関数」です。",
          "id": "c472d05bf4974542955672576fda02bc",
          "audioDurationFrames": 182,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "この図が代表的な例です。「ReLU」と「Sigmoid」を並べて視覚的に比較してみましょう。（2画像のみ）",
          "id": "d222c5b368e340abba72e0f2a61d71a1",
          "audioDurationFrames": 291,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "この2つを比較するだけでも、どのように値が変化するのか一目でわかります。",
          "id": "4b0337938b8b4d798674d65445b315fa",
          "audioDurationFrames": 177,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "次に、学習プロセスを図で理解しましょう。",
          "id": "8ae1579ec4604ae8b9605f0e6a366950",
          "audioDurationFrames": 112,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "まず「順伝播」の図を見てください。データが層を通って出力に向かう流れを示しています。",
          "id": "65772edd3e65421db9369b860b1efc2c",
          "audioDurationFrames": 238,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "続いて「逆伝播」の図です。誤差に応じて重みが調整される様子を図解しています。（2画像＋説明文付き）",
          "id": "e74e6f8316bb45a08e7a887ea147799e",
          "audioDurationFrames": 299,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "この2つのプロセスが交互に行われることで、ネットワークが賢くなっていきます。",
          "id": "8318a1cd5a144c5791b671acd1d4ee10",
          "audioDurationFrames": 192,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "次に、こちらが実際のAI画像生成アプリの画面です。（スクリーンショット単体）",
          "id": "12ad65afd09a48e48094ebf08f037042",
          "audioDurationFrames": 212,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "どのようにプロンプトを入力するのかが簡単にわかります。",
          "id": "f9fb1e7c1456460b995db0c72e84792a",
          "audioDurationFrames": 132,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "さらに詳しく見ていきましょう。",
          "id": "be34968ce14b4f1b9b74fb5419aee4eb",
          "audioDurationFrames": 68,
          "image": {
            "src": "/slides/13.png"
          }
        },
        {
          "text": "こちらは同じアプリの設定画面です。（スクリーンショット＋説明付き）",
          "id": "ee452beea76c43888f0af7a6e2b3a49a",
          "audioDurationFrames": 170,
          "image": {
            "src": "/slides/14.png"
          }
        },
        {
          "text": "画像サイズやスタイルを変更できる UI があり、これらの設定は最終的な結果に大きく影響します。",
          "id": "218a5f79a1c94d1f9cbbe2432b938f7f",
          "audioDurationFrames": 289,
          "image": {
            "src": "/slides/14.png"
          }
        },
        {
          "text": "実際の操作画面を見ることで、理論と実践がつながって理解が深まります。",
          "id": "6ac0fcdbcba945f69f8eea4f1c9fb10d",
          "audioDurationFrames": 185,
          "image": {
            "src": "/slides/15.png"
          }
        },
        {
          "text": "ここで、ニューラルネットワーク内での計算式の流れを簡単な図（SVG図）で確認してみましょう。",
          "id": "09941567ef7e4dab89118af65b904070",
          "audioDurationFrames": 261,
          "image": {
            "src": "/slides/16.png"
          }
        },
        {
          "text": "数式をいきなり読むより、シンプルな図を使うと全体像がつかみやすくなります。",
          "id": "e0bf5d134aa549e585b5fffd5f39cfd8",
          "audioDurationFrames": 191,
          "image": {
            "src": "/slides/16.png"
          }
        },
        {
          "text": "入力、重み、バイアス、活性化関数の関係をひとまとめにした視覚的なイメージです。",
          "id": "6c1155eae9444f19aa26ec3b75406045",
          "audioDurationFrames": 237,
          "image": {
            "src": "/slides/17.png"
          }
        },
        {
          "text": "今日は、ニューラルネットワークの基礎から構造、プロセス、そして実際のアプリ例まで幅広く解説しました。",
          "id": "540ccc6b57c74c02908cbae3e012a3ed",
          "audioDurationFrames": 264,
          "image": {
            "src": "/slides/18.png"
          }
        },
        {
          "text": "それぞれの図やスクリーンショットを使うことで、抽象的な概念が具体的に理解できたはずです。",
          "id": "b93a6065cac246a4bf670572a31c66e4",
          "audioDurationFrames": 223,
          "image": {
            "src": "/slides/18.png"
          }
        },
        {
          "text": "今後は応用編として、CNNやRNN、トランスフォーマーなどのモデルの違いにも触れていきますのでお楽しみに！",
          "id": "072988bda224450c8c5e50bd497949b3",
          "audioDurationFrames": 286,
          "seSounds": [
            {
              "src": "/se/和太鼓でドドン.mp3"
            }
          ],
          "image": {
            "src": "/slides/19.png"
          }
        }
      ],
      "totalFrames": 7056,
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
