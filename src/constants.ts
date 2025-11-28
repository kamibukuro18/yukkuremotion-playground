export const VIDEO_SETTINGS = {
  // フレームレート (1秒あたりのフレーム数)
  fps: 30,
  // セリフ間の間隔 (フレーム数)
  talkGapFrames: 25,
  // 字幕エリアの高さ (ピクセル)
  subtitleHeightPx: 80,
  // 各セクションの開始時のデフォルト遅延 (フレーム数)
  defaultSectionInitialDelayFrames: 30,
  // 各セクションの終了時のデフォルト遅延 (フレーム数)
  defaultSectionEndFrames: 30,
  // キャラクターの幅の割合 (画面全体に対する比率)
  characterWidthPercentage: 0.15,
  // 字幕の自動改行文字数 (全角文字は2文字としてカウント)
  subtitleMaxLength: 62,
  subtitleHeightPx: 130,
  subtitleLineHeight: 1.4,
  // 口パクの1周期の長さ (フレーム数)。例: 6フレームなら3フレーム開いて3フレーム閉じる
  mouthCycleLength: 6,
  // まばたきの間隔 (秒)
  mabatakiIntervalSeconds: 5,
  // まばたきアニメーションの総フレーム数
  mabatakiAnimationDurationFrames: 15,
} as const;

export const zIndex = {
  anyValue: 1,
  subtitle: 10,
  yukkuri: 10,
  transitionMovie: 10000,
} as const;
