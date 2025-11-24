
export const script = [
  {
    type: "talks",
    title: "イントロ",
    id: "intro",
    talks: [
      {
        type: "no-voice",
        videoIndex: 0
      },
      {
        text: "こんかいは「えーあいのしくみ」をてーまに、とくににゅーらるねっとわーくのきほんについてわかりやすくかいせつしていきます。",
        displayText: "今回は「AIの仕組み」をテーマに、特にニューラルネットワークの基本についてわかりやすく解説していきます。",
        delayForNextTalkInSeconds: 0.3
      },
      {
        type: "no-voice",
        videoIndex: 1
      },
      {
        text: "「えーあいってどうがくしゅうしてるの？」「にゅーらるねっとっけっきょくなに？」ときになっているひとにむけて、しくみをざっくりつかめるないようにまとめました。",
        displayText: "「AIってどう学習してるの？」「ニューラルネットって結局何？」と気になっている人に向けて、仕組みをざっくりつかめる内容にまとめました。",
        delayForNextTalkInSeconds: 0.1
      },
      {
        text: "それではほんだいにはいっていきましょう。",
        displayText: "それでは本題に入っていきましょう。",
        delayForNextTalkInSeconds: 0.5
      }
    ]
  },
  {
    type: "talks",
    title: "ニューラルネットワークとは",
    id: "what-is-nn",
    talks: [
      {
        type: "no-voice",
        videoIndex: 2
      },
      {
        text: "しゃしんのように、にゅーらるねっとわーくは、にんげんののうのしんけいさいぼうをひんとにつくられたえーあいのしくみで、たくさんの「のーど」がたがいにつながってじょうほうをしょりするこうぞうになっています。",
        displayText: "写真のように、ニューラルネットワークは、人間の脳の神経細胞をヒントに作られたAIの仕組みで、たくさんのノードが互いにつながって情報を処理する構造になっています。",
        delayForNextTalkInSeconds: 0.3
      },
      {
        type: "no-voice",
        videoIndex: 3
      },
      {
        text: "にんげんのちのうと、えーあいのちのうのちがいはこのにまいのがぞうのようになっています。",
        displayText: "人間の知能と、AIの知能の違いはこの２枚の画像のようになっています。",
        delayForNextTalkInSeconds: 0.5
      }
    ]
  },
  {
    type: "talks",
    title: "入力層・隠れ層・出力層の役割",
    id: "structure",
    talks: [
      {
        type: "no-voice",
        videoIndex: 4
      },
      {
        text: "このすくりーんしょっとをみてください。",
        displayText: "このスクリーンショットをみてください。",
        delayForNextTalkInSeconds: 0.3
      },
      {
        type: "no-voice",
        videoIndex: 5
      },
      {
        text: "にゅうりょく、かくれそう、しゅつりょくそうのふろーずはこういうかんじです。",
        displayText: "入力、隠れ層、出力層のフロー図はこういう感じです。",
        delayForNextTalkInSeconds: 0.3
      },
      {
        type: "no-voice",
        videoIndex: 5
      },
      {
        text: "にゅーらるねっとわーくはおおきく「にゅうりょくそう」「かくれそう」「しゅつりょくそう」のみっつでこうせいされます。",
        displayText: "ニューラルネットワークは大きく「入力層」「隠れ層」「出力層」の3つで構成されます。",
        delayForNextTalkInSeconds: 0.3
      },
      {
        type: "no-voice",
        videoIndex: 6
      },
      {
        text: "にゅうりょくそうはでーたをうけとるいりぐちで、がぞうならぴくせる、おんせいならはけいでーたなどがここにはいります。",
        displayText: "入力層はデータを受け取る入り口で、画像ならピクセル、音声なら波形データなどがここに入ります。",
        delayForNextTalkInSeconds: 0.1
      },
      {
        text: "かくれそうは、うけとったじょうほうをかこう・へんかんするばしょで、ここがふくざつになればなるほどこうどなしょりがかのうになります。",
        displayText: "隠れ層は、受け取った情報を加工・変換する場所で、ここが複雑になればなるほど高度な処理が可能になります。",
        delayForNextTalkInSeconds: 0.1
      },
      {
        text: "さいごのしゅつりょくそうで、さいしゅうてきなよそくけっかをだします。",
        displayText: "最後の出力層で、最終的な予測結果を出します。",
        delayForNextTalkInSeconds: 0.5
      }
    ]
  }
];