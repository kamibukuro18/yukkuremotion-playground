Remotion で作るゆっくり実況

## Commands

**依存関係のインストール**

初めてプロジェクトを開始する際や、新しい依存関係が追加された場合は、以下のコマンドを実行して必要なパッケージをインストールしてください。

```console
npm i
```

**プレビューの開始**

Remotionのプレビューサーバーを起動し、ブラウザで動画をリアルタイムで確認します。

```console
npm start
```

**動画のレンダリング**

最終的な動画ファイルを生成するには、以下のコマンドを実行します。

```console
npm run build
```

**Remotionのアップグレード (Remotion v4への移行)**

Remotionをv3からv4へアップグレードする際は、以下の手順に従ってください。
**重要:** このアップグレードには破壊的変更が含まれる可能性があるため、必ず新しいGitブランチで作業を開始してください。

1.  新しいブランチを作成します:
    ```console
    git checkout -b feature/remotion-v4-upgrade
    ```
2.  既存の依存関係とキャッシュをクリーンアップします。これにより、以前のバージョンが残ることを防ぎます。
    ```console
    Remove-Item -Recurse -Force node_modules
    del package-lock.json
    ```
3.  `remotion.config.ts` ファイルを以下の通り修正します。Remotion v4では設定の記述方法が変更されています。
    *   `import {Config} from "remotion";` を `import {Config} from "@remotion/cli/config";` に変更。
    *   `Config.Rendering.setImageFormat('jpeg');` を `Config.setVideoImageFormat('jpeg');` に変更。
    *   `Config.Output.setOverwriteOutput(true);` を `Config.setOverwriteOutput(true);` に変更。
    *   `Config.Bundling.setEsbuildOverrideOptions(...)` の呼び出しを `Config.setEsbuildOverrideOptions(...)` に変更。
4.  `tsconfig.json` ファイルを修正します。`compilerOptions` セクションに `"moduleResolution": "node"` を追加（または既存の設定を `"bundler"` から変更）します。これは `ts-node` とRemotion CLIの両方でTypeScriptモジュールを正しく解決するために必要です。
5.  依存関係を再インストールします。クリーンアップ後に再度全てのパッケージをインストールします。
    ```console
    npm install
    ```
6.  Remotionをアップグレードします:
    ```console
    npm run upgrade
    ```
7.  Remotionプレビュー (`npm start`) と音声生成スクリプト (`npm run gen-voice`) が正常に動作することを確認します。問題が解決しない場合は、ブラウザのコンソールやターミナルのエラーメッセージを確認してください。

**ゆっくり音声ファイルの生成**

テキストデータからゆっくり音声ファイルを生成するには、以下のコマンドを実行します。

```console
npm run gen-voice
```

開発中に `transcripts/playground.tsx` の変更を監視し、ファイルが保存されるたびに自動で音声生成を行うには、以下のウォッチモードコマンドを使用します。

```console
npm run gen-voice:watch
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help [on our Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).

## 設定値のリファクタリングガイド

このセクションでは、Remotion動画の設定値がどのファイルに記述されており、何を調整すれば動画のどの部分に影響するかを説明します。

---

### 1. プロジェクト共通設定 (`src/constants.ts`)

このファイルは、動画全体の挙動や表示に関する基本的な定数を定義しています。

*   **`FPS` (Number)**
    *   **説明**: 1秒あたりのフレーム数。動画の滑らかさに影響します。
    *   **影響**:
        *   動画全体の再生速度。
        *   アニメーションの速度（例: まばたき、口パク）。
    *   **調整箇所**: `src/constants.ts`

*   **`TALK_GAP_FRAMES` (Number)**
    *   **説明**: 各セリフ間のデフォルトの間隔（フレーム数）。
    *   **影響**:
        *   セリフとセリフの間の空白時間。
    *   **調整箇所**: `src/constants.ts`

*   **`SUBTITLE_HEIGHT_PX` (Number)**
    *   **説明**: 字幕エリアの高さ（ピクセル）。
    *   **影響**:
        *   字幕背景の高さ。
        *   字幕テキストが配置される領域の高さ。
    *   **調整箇所**: `src/constants.ts`

*   **`DEFAULT_SECTION_INITIAL_DELAY_FRAMES` (Number)**
    *   **説明**: 各セクション開始時のデフォルト遅延（フレーム数）。
    *   **影響**:
        *   各セクションの開始前の空白時間。
    *   **調整箇所**: `src/constants.ts`

*   **`DEFAULT_SECTION_END_FRAMES` (Number)**
    *   **説明**: 各セクション終了時のデフォルト遅延（フレーム数）。
    *   **影響**:
        *   各セクションの終了後の空白時間。
    *   **調整箇所**: `src/constants.ts`

*   **`CHARACTER_WIDTH_PERCENTAGE` (Number)**
    *   **説明**: キャラクターの画面占有幅の割合（例: 0.15は15%）。
    *   **影響**:
        *   キャラクターの横幅。
    *   **調整箇所**: `src/constants.ts`, `src/yukkuri/Talk/index.tsx` (画像の位置計算に使用)

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
    *   **影響**:
        *   アウトラインの色と太さ (`WebkitTextStroke`)。
    *   **調整箇所**: `src/Subtitle/Subtitle.tsx` 内の `strokeSubtitleStyle`, `fillSubtitleStyle` 定数。

---

### 5. キャラクターフェイスコンポーネント (`src/yukkuri/Face/YukkuriFace.tsx`)

キャラクターの口の見た目とアニメーションを制御します。

*   **`mouthStyle` (CSSProperties)**
    *   **説明**: 口の画像 (`char/mouth/01.png`) のスタイル。
    *   **影響**:
        *   口の縦方向の位置 (`top`)、横方向の位置 (`left`)、幅 (`width`)。
        *   `transform` プロパティは、`top` と `left` が要素の中心を基準にするためのものです。
    *   **調整箇所**: `src/yukkuri/Face/YukkuriFace.tsx` 内の `mouthStyle` 定数。

*   **`MABATAKI_INTERVAL_SECONDS`, `MABATAKI_ANIMATION_DURATION_FRAMES`, `MABATAKI_ANIMATION_FRAMES` (Number/Array)**
    *   **説明**: まばたきアニメーションの間隔と速度。
    *   **影響**:
        *   キャラクターのまばたきの頻度とアニメーションの滑らかさ。
    *   **調整箇所**: `src/yukkuri/Face/YukkuriFace.tsx` 内のこれらの定数。

*   **`mouthCycleLength` (Number)**
    *   **説明**: 口パクアニメーションの1周期の長さ（フレーム数）。
    *   **影響**:
        *   口が開閉する速度。
    *   **調整箇所**: `src/yukkuri/Face/YukkuriFace.tsx` 内の `useEffect` フック内。

---

### 6. Yukkuriシーケンスコンポーネント (`src/yukkuri/YukkuriSequence.tsx`)

キャラクター全体の表示位置とサイズを制御します。

*   **`characterStyle` (CSSProperties)**
    *   **説明**: キャラクター画像全体を配置する `div` のスタイル。
    *   **影響**:
        *   キャラクターの画面右端からの位置 (`right`)、画面下部からの位置 (`bottom`)。
        *   キャラクターの幅 (`width`)、高さ (`height`)。
    *   **調整箇所**: `src/yukkuri/YukkuriSequence.tsx` 内の `characterStyle` 定数。

---

### 7. プレイグラウンド設定 (`transcripts/playground.tsx`)

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
