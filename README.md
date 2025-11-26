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
