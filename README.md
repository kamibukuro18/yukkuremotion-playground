/// <summary>
/// Remotionで作成するゆっくり実況動画プロジェクト
/// </summary>

このプロジェクトは、RemotionフレームワークとVoicevoxを使用して、テキストデータからゆっくり実況動画を生成することを目的としています。ユーザーはスクリプトを記述し、キャラクターアニメーション（まばたき、口パク）、BGM、効果音、スライド画像を組み合わせて、リッチな動画コンテンツを簡単に作成できます。

## 目的

*   プログラミングによる動画制作の効率化。
*   テキストベースの入力から高品質なゆっくり実況動画を自動生成。
*   カスタマイズ可能なキャラクターアニメーションとUI要素の提供。
*   Remotion v4への対応と、モダンな開発環境の維持。

## 用途

*   YouTubeなどの動画プラットフォーム向けに、技術解説、ゲーム実況、ニュース解説などのゆっくり実況動画を制作。
*   プレゼンテーション資料を動画形式で表現。
*   物語やシナリオをキャラクターと音声で表現するコンテンツ作成。

## 使い方

### 1. 依存関係のインストール

初めてプロジェクトを開始する際や、新しい依存関係が追加された場合は、以下のコマンドを実行して必要なパッケージをインストールしてください。

```console
npm i
```

### 2. Voicevoxエンジンの起動

ゆっくり音声を生成するためには、Voicevoxエンジンをローカルで起動しておく必要があります。Voicevoxアプリケーションを起動し、音声合成サーバーを有効にしてください。

### 3. ゆっくり音声ファイルの生成

`transcripts/playground.tsx` ファイルに記述されたテキストデータに基づいて、ゆっくり音声ファイルを生成します。

```console
npm run gen-voice
```

開発中に `transcripts/playground.tsx` の変更を監視し、ファイルが保存されるたびに自動で音声生成を行うには、以下のウォッチモードコマンドを使用します。

```console
npm run gen-voice:watch
```

### 4. プレビューの開始

Remotionのプレビューサーバーを起動し、ブラウザで動画をリアルタイムで確認します。

```console
npm start
```

### 5. 動画のレンダリング

最終的な動画ファイルを生成するには、以下のコマンドを実行します。

```console
npm run build
```

## 設定値のリファクタリングガイド

このセクションでは、Remotion動画の設定値がどのファイルに記述されており、何を調整すれば動画のどの部分に影響するかを説明します。

---

### 1. プロジェクト共通設定 (`src/constants.ts`)

このファイルは、動画全体の挙動や表示に関する基本的な定数を定義しています。

*   **`fps` (Number)**
    *   **説明**: 1秒あたりのフレーム数。動画の滑らかさに影響します。
    *   **影響**:
        *   動画全体の再生速度。
        *   アニメーションの速度（例: まばたき、口パク）。
    *   **調整箇所**: `src/constants.ts`

*   **`talkGapFrames` (Number)**
    *   **説明**: 各セリフ間のデフォルトの間隔（フレーム数）。
    *   **影響**:
        *   セリフとセリフの間の空白時間。
    *   **調整箇所**: `src/constants.ts`

*   **`subtitleHeightPx` (Number)**
    *   **説明**: 字幕エリアの高さ（ピクセル）。
    *   **影響**:
        *   字幕背景の高さ。
        *   字幕テキストが配置される領域の高さ。
    *   **調整箇所**: `src/constants.ts`

*   **`subtitleFontSize` (Number)**
    *   **説明**: 字幕のフォントサイズ（ピクセル）。
    *   **影響**:
        *   字幕テキストの大きさ。
    *   **調整箇所**: `src/constants.ts`

*   **`subtitleLineHeight` (Number)**
    *   **説明**: 字幕の行の高さ（line-height）。
    *   **影響**:
        *   改行された字幕テキストの行間の広さ。
    *   **調整箇所**: `src/constants.ts`

*   **`subtitleMaxLength` (Number)**
    *   **説明**: 字幕の自動改行文字数。全角文字は2文字としてカウントされます。
    *   **影響**:
        *   字幕の1行に表示される文字数。
    *   **調整箇所**: `src/constants.ts`

*   **`defaultSectionInitialDelayFrames` (Number)**
    *   **説明**: 各セクション開始時のデフォルト遅延（フレーム数）。
    *   **影響**:
        *   各セクションの開始前の空白時間。
    *   **調整箇所**: `src/constants.ts`

*   **`defaultSectionEndFrames` (Number)**
    *   **説明**: 各セクション終了時のデフォルト遅延（フレーム数）。
    *   **影響**:\
        *   各セクションの終了後の空白時間。
    *   **調整箇所**: `src/constants.ts`

*   **`characterWidthPercentage` (Number)**
    *   **説明**: キャラクターの画面占有幅の割合（例: 0.15は15%）。
    *   **影響**:
        *   キャラクターの横幅。
    *   **調整箇所**: `src/constants.ts`, `src/yukkuri/Talk/index.tsx` (画像の位置計算に使用)

*   **`mouthCycleLength` (Number)**
    *   **説明**: 口パクの1周期の長さ（フレーム数）。例: 6フレームなら3フレーム開いて3フレーム閉じる。
    *   **影響**:
        *   口が開閉する速度。
    *   **調整箇所**: `src/constants.ts`

*   **`mabatakiIntervalSeconds` (Number)**
    *   **説明**: まばたきの間隔（秒）。
    *   **影響**:
        *   キャラクターのまばたきの頻度。
    *   **調整箇所**: `src/constants.ts`

*   **`mabatakiAnimationDurationFrames` (Number)**
    *   **説明**: まばたきアニメーションの総フレーム数。
    *   **影響**:
        *   まばたきアニメーションの長さと滑らかさ。
    *   **調整箇所**: `src/constants.ts`

*   **`zIndex` (Object)**
    *   **説明**: 各要素の重なり順序。数値が大きいほど手前に表示されます。
    *   **影響**:
        *   字幕、キャラクター、トランジションムービーなどの表示順序。
    *   **調整箇所**: `src/constants.ts`, `src/YukkuriVideo.tsx`, `src/Subtitle/SubtitleBackground.tsx`, `src/yukkuri/Face/YukkuriFace.tsx`, `src/yukkuri/YukkuriSequence.tsx`

---

### 2. メイン動画コンポーネント (`src/YukkuriVideo.tsx`)

動画の全体的なレイアウトと、字幕背景の位置・サイズを制御します。

*   **`jimakuBackground` (CSSProperties)**
    *   **説明**: 字幕背景のスタイル。
    *   **影響**:
        *   字幕背景の幅 (`width`)、高さ (`height`)、画面下部からの位置 (`bottom`)、画面左部からの位置 (`left`)。
        *   背景画像 (`backgroundImage`)、その配置 (`backgroundPosition`)。
    *   **調整箇所**: `src/YukkuriVideo.tsx` 内の `jimakuBackground` 定数。

---

### 3. 字幕背景コンポーネント (`src/Subtitle/SubtitleBackground.tsx`)

字幕背景エリアの内部で、字幕テキストがどのように配置されるかを制御します。

*   **`jimakuBackground` (CSSProperties)**
    *   **説明**: `YukkuriVideo.tsx` で定義された字幕背景エリアの内側で、字幕テキストを配置するためのコンテナのスタイル。
    *   **影響**:
        *   テキストの垂直方向の配置 (`alignItems`: `center`, `flex-start`など)。
        *   テキストの水平方向の配置 (`justifyContent`: `center`, `flex-start`など)。
    *   **調整箇所**: `src/Subtitle/SubtitleBackground.tsx` 内の `jimakuBackground` 定数。

---

### 4. 字幕テキストコンポーネント (`src/Subtitle/Subtitle.tsx`)

実際の字幕テキストの見た目と、そのコンテナ内での微調整を行います。

*   **`baseSubtitleStyle` (CSSProperties)**
    *   **説明**: 字幕テキストの基本的なスタイル。
    *   **影響**:
        *   フォントサイズ (`fontSize`)、太さ (`fontWeight`)、行の高さ (`lineHeight`)、文字間隔 (`letterSpacing`)。
        *   テキストコンテナ内での位置 (`top`, `left`)、パディング (`paddingTop`, `paddingLeft`)。
        *   テキストのアウトライン (`WebkitTextStroke` は `strokeSubtitleStyle` で定義)。
    *   **調整箇所**: `src/Subtitle/Subtitle.tsx` 内の `baseSubtitleStyle` 定数。

*   **`strokeSubtitleStyle`, `fillSubtitleStyle` (CSSProperties)**
    *   **説明**: 字幕のアウトラインと塗りつぶし部分のスタイル。
    *   **影響**:\
        *   アウトラインの色と太さ (`WebkitTextStroke`)。
    *   **調整箇所**: `src/Subtitle/Subtitle.tsx` 内の `strokeSubtitleStyle`, `fillSubtitleStyle` 定数。

---

### 5. Yukkuriシーケンスコンポーネント (`src/yukkuri/YukkuriSequence.tsx`)

キャラクター全体の表示位置とサイズを制御します。

*   **`characterStyle` (CSSProperties)**
    *   **説明**: キャラクター画像全体を配置する `div` のスタイル。
    *   **影響**: 
        *   キャラクターの画面右端からの位置 (`right`)、画面下部からの位置 (`bottom`)。
        *   キャラクターの幅 (`width`)、高さ (`height`)。
    *   **調整箇所**: `src/yukkuri/YukkuriSequence.tsx` 内の `characterStyle` 定数。

---

### 6. プレイグラウンド設定 (`transcripts/playground.tsx`)

動画のコンテンツ（テキスト、BGM、画像など）を定義します。

*   **`PLAYGROUND_SETTINGS` (Object)**
    *   **説明**: 動画全体のタイトル、BGMのソース、BGMのボリュームなどの設定。
    *   **影響**:
        *   動画のタイトル。
        *   動画のBGMのファイルパスと音量。
    *   **調整箇所**: `transcripts/playground.tsx` 内の `PLAYGROUND_SETTINGS` 定数。

*   **`PLAYGROUND_TALKS` (Array of SimpleTalk)**
    *   **説明**: 各セリフのテキスト、次のセリフまでの遅延時間、表示する画像（`videoIndex`経由）、効果音などを定義します。
    *   **影響**:
        *   動画のストーリーとセリフの内容。
        *   セリフ間の間隔。
        *   セリフに合わせて表示される画像（スライド）。
        *   再生される効果音。
    *   **調整箇所**: `transcripts/playground.tsx` 内の `PLAYGROUND_TALKS` 定数。
