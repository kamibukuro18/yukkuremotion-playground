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
      "bgmVolume": 0.1,
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
          "id": "4e8e7b53c61f49d984bba096d651d629",
          "audioDurationFrames": 218,
          "image": {
            "src": "/slides/0.png"
          }
        },
        {
          "text": "これまでAIに触れてきた人も、ここで一度基礎から整理しておくと理解が一気に深まります。",
          "id": "8da10a798b2e46ec87c62156d428f61c",
          "audioDurationFrames": 214,
          "image": {
            "src": "/slides/0.png"
          }
        },
        {
          "text": "まずは全体像から確認していきましょう。",
          "id": "2707b183c4f54c31a043a7380e7baa15",
          "audioDurationFrames": 99,
          "image": {
            "src": "/slides/1.png"
          }
        },
        {
          "text": "今日のポイントは次の3つです。",
          "id": "306109474fde40aeb599ce1bff442581",
          "audioDurationFrames": 75,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "第一に、ニューラルネットワークとは何かを理解すること。",
          "id": "8af0bb45e88448c494e616d1e8d7f69e",
          "audioDurationFrames": 140,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "第二に、構造とプロセスを図で把握すること。",
          "id": "8b403a591ae041c3b64900685ec01714",
          "audioDurationFrames": 118,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "第三に、実際のアプリ画面のスクリーンショットで具体例を見ることです。",
          "id": "0787448adcd741ceb62a7e7a2b605328",
          "audioDurationFrames": 174,
          "image": {
            "src": "/slides/2.png"
          }
        },
        {
          "text": "では最初のパートに進みましょう。",
          "id": "5bf83a0ff1e34177a0410193137b444a",
          "audioDurationFrames": 77,
          "image": {
            "src": "/slides/3.png"
          }
        },
        {
          "text": "ニューラルネットワークとは、データの特徴を学習して結果を予測するための仕組みです。",
          "id": "5f3709d825d34d379be4ea824e76b1b3",
          "audioDurationFrames": 196,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "人間の脳の構造をヒントにして作られているという点が特徴です。",
          "id": "e3c7a80568bb4eeeace2fda6b9d28778",
          "audioDurationFrames": 156,
          "image": {
            "src": "/slides/4.png"
          }
        },
        {
          "text": "この図を見てください。もっともシンプルなニューラルネットワークの構造を表したイラストです。（1画像のみ）",
          "id": "79a1b6b6724c4c458352a7a62e7c6d86",
          "audioDurationFrames": 249,
          "seSounds": [
            {
              "src": "se/和太鼓でドドン.mp3"
            }
          ],
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "図の形だけを確認することで全体像がとても理解しやすくなります。",
          "id": "282cae0daa8e40a1baf37e3e48f2d35d",
          "audioDurationFrames": 163,
          "image": {
            "src": "/slides/5.png"
          }
        },
        {
          "text": "次に、入力層・隠れ層・出力層の3層構造について説明します。",
          "id": "e9cac4bde97f406fb3773a59aee0a42f",
          "audioDurationFrames": 209,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "この図では各層がどのような役割を持つのかを示しています。（1画像 + 説明つき）",
          "id": "91cd50b5ed00431aa5c08d8bd971ecbb",
          "audioDurationFrames": 240,
          "image": {
            "src": "/slides/6.png"
          }
        },
        {
          "text": "データがどのように流れ、重みが調整されるかを見ることで学習のイメージがつかめます。",
          "id": "604e94b9f8bb4cc2acb93d29e23c3d35",
          "audioDurationFrames": 203,
          "image": {
            "src": "/slides/7.png"
          }
        },
        {
          "text": "ニューラルネットワークで重要な役割を持つのが「活性化関数」です。",
          "id": "09d496a6b6a7439099d6076ebe5f1dbf",
          "audioDurationFrames": 182,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "この図が代表的な例です。「ReLU」と「Sigmoid」を並べて視覚的に比較してみましょう。（2画像のみ）",
          "id": "2084b819922a4b50b6995de46b0ea0e3",
          "audioDurationFrames": 291,
          "image": {
            "src": "/slides/8.png"
          }
        },
        {
          "text": "この2つを比較するだけでも、どのように値が変化するのか一目でわかります。",
          "id": "fcc77744babe40f09c9ae1e5ec1e1d10",
          "audioDurationFrames": 177,
          "image": {
            "src": "/slides/9.png"
          }
        },
        {
          "text": "次に、学習プロセスを図で理解しましょう。",
          "id": "a7d73cb03801473da99f062730189d72",
          "audioDurationFrames": 112,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "まず「順伝播」の図を見てください。データが層を通って出力に向かう流れを示しています。",
          "id": "4200a92d465d4cb3b68e8cb933f9593b",
          "audioDurationFrames": 238,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "続いて「逆伝播」の図です。誤差に応じて重みが調整される様子を図解しています。（2画像＋説明文付き）",
          "id": "fbe8c59bdc1c43f1b274ff02c86d90bd",
          "audioDurationFrames": 299,
          "image": {
            "src": "/slides/10.png"
          }
        },
        {
          "text": "この2つのプロセスが交互に行われることで、ネットワークが賢くなっていきます。",
          "id": "bce6e42225ee427b967e27cc189b06ab",
          "audioDurationFrames": 192,
          "image": {
            "src": "/slides/11.png"
          }
        },
        {
          "text": "次に、こちらが実際のAI画像生成アプリの画面です。（スクリーンショット単体）",
          "id": "2193ff3fe90e40a8bd26acbcf6cf0acc",
          "audioDurationFrames": 212,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "どのようにプロンプトを入力するのかが簡単にわかります。",
          "id": "91a5af0d332348d9b5026f7073d06d34",
          "audioDurationFrames": 132,
          "image": {
            "src": "/slides/12.png"
          }
        },
        {
          "text": "さらに詳しく見ていきましょう。",
          "id": "aa31e7b4ceca4d4a9aedc4c388210ca0",
          "audioDurationFrames": 68,
          "image": {
            "src": "/slides/13.png"
          }
        },
        {
          "text": "こちらは同じアプリの設定画面です。（スクリーンショット＋説明付き）",
          "id": "59802fd6412144068d1640345a36c0c8",
          "audioDurationFrames": 170,
          "image": {
            "src": "/slides/14.png"
          }
        },
        {
          "text": "画像サイズやスタイルを変更できる UI があり、これらの設定は最終的な結果に大きく影響します。",
          "id": "c953da8fe89143f1a58aa02f4488e90d",
          "audioDurationFrames": 289,
          "image": {
            "src": "/slides/14.png"
          }
        },
        {
          "text": "実際の操作画面を見ることで、理論と実践がつながって理解が深まります。",
          "id": "1cc51a63de9f4343842d47fe4191dc28",
          "audioDurationFrames": 185,
          "image": {
            "src": "/slides/15.png"
          }
        },
        {
          "text": "ここで、ニューラルネットワーク内での計算式の流れを簡単な図（SVG図）で確認してみましょう。",
          "id": "538bc7730c4a4456b17f3e4f5357987c",
          "audioDurationFrames": 261,
          "image": {
            "src": "/slides/16.png"
          }
        },
        {
          "text": "数式をいきなり読むより、シンプルな図を使うと全体像がつかみやすくなります。",
          "id": "98e6633e93ad4690a86aa7c7ccc63f66",
          "audioDurationFrames": 191,
          "image": {
            "src": "/slides/16.png"
          }
        },
        {
          "text": "入力、重み、バイアス、活性化関数の関係をひとまとめにした視覚的なイメージです。",
          "id": "2ada2148e7c24c7bac98b64c6ce10dde",
          "audioDurationFrames": 237,
          "image": {
            "src": "/slides/17.png"
          }
        },
        {
          "text": "今日は、ニューラルネットワークの基礎から構造、プロセス、そして実際のアプリ例まで幅広く解説しました。",
          "id": "4593db3d848444afbd3129e2046cc6f2",
          "audioDurationFrames": 264,
          "image": {
            "src": "/slides/18.png"
          }
        },
        {
          "text": "それぞれの図やスクリーンショットを使うことで、抽象的な概念が具体的に理解できたはずです。",
          "id": "ed3c1de8f8e24eecbfaa069ef0553cc2",
          "audioDurationFrames": 223,
          "image": {
            "src": "/slides/18.png"
          }
        },
        {
          "text": "今後は応用編として、CNNやRNN、トランスフォーマーなどのモデルの違いにも触れていきますのでお楽しみに！",
          "id": "28f7532c4ea247c3bb104ea7b386704c",
          "audioDurationFrames": 286,
          "seSounds": [
            {
              "src": "se/和太鼓でドドン.mp3"
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
