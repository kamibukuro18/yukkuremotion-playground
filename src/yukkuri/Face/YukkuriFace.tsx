import React, {useEffect, useState} from 'react';
import {
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {FPS, zIndex} from '../../constants';

export type CharacterProps = {
  isTalking?: boolean; // isTalkingプロパティを追加
};

// const DEFAULT_CHARACTER_SIZE_PX = 320; // YukkuriSequenceで制御するため削除

// ふわふわアニメーション関連の定数を削除
// const FuyoFuyoInterval = 40;
// const FuyoFuyoRange = 2;

// ふわふわアニメーション関連の関数を削除
// function addFuyoFuyoRange(intervals: number[]) {
//   if (intervals.length === 0) {
//     intervals.push(FuyoFuyoRange);
//     return;
//   }

//   if (intervals[intervals.length - 1] === FuyoFuyoRange) {
//     intervals.push(-FuyoFuyoRange);
//   } else {
//     intervals.push(FuyoFuyoRange);
//   }
// }

// function getFuyoFuyoFrames(videoFrames: number) {
//   const frames: number[] = [0]; // isReimu の考慮を削除
//   const intervals: number[] = [FuyoFuyoRange];

//   let left = videoFrames;
//   while (left > FuyoFuyoInterval) {
//     frames.push(frames[frames.length - 1] + FuyoFuyoInterval);
//     left -= FuyoFuyoInterval;

//     addFuyoFuyoRange(intervals);
//   }

//   if (left > 0) {
//     frames.push(frames[frames.length - 1] + left);
//     addFuyoFuyoRange(intervals);
//   }

//   return [frames, intervals];
// }

export const YukkuriFace: React.FC<CharacterProps> = ({
  isTalking,
}) => {
  const frame = useCurrentFrame();
  const video = useVideoConfig();

  // ふわふわアニメーション関連のuseMemoとinterpolateを削除
  // const [frames, intervals] = useMemo(
  //   () => getFuyoFuyoFrames(video.durationInFrames),
  //   [video]
  // );

  // const translateY = interpolate(frame, frames, intervals, {
  //   easing: Easing.bezier(0.51, 0, 0.49, 1),
  // });

  const [eyeState, setEyeState] = useState<string>('00'); // 通常の目から開始
  const [isMouthOpen, setIsMouthOpen] = useState<boolean>(false); // 口パクの状態を追加

  useEffect(() => {
    const blinkIntervalFrames = MABATAKI_INTERVAL_SECONDS * FPS;
    const animationFrames = MABATAKI_ANIMATION_FRAMES;

    const frameInInterval = frame % blinkIntervalFrames;

    if (frameInInterval < animationFrames[0]) {
      setEyeState('00'); // 通常
    } else if (frameInInterval >= animationFrames[0] && frameInInterval < animationFrames[1]) {
      setEyeState('01'); // 少し閉じる
    } else if (frameInInterval >= animationFrames[1] && frameInInterval < animationFrames[2]) {
      setEyeState('02'); // 完全に閉じる
    } else if (frameInInterval >= animationFrames[2] && frameInInterval < animationFrames[3]) {
      setEyeState('01'); // 少し閉じるに戻る
    } else {
      setEyeState('00'); // 通常に戻る
    }

    // 口パクのロジックを追加
    if (isTalking) {
      const mouthCycleLength = 6; // 口パクの1周期の長さ (フレーム数)
      setIsMouthOpen(frame % mouthCycleLength < mouthCycleLength / 2); // 周期の半分で口を開く
    } else {
      setIsMouthOpen(false); // しゃべっていないときは口を閉じる
    }
  }, [frame, isTalking]);

  // const charSizePx = sizePx ? sizePx : DEFAULT_CHARACTER_SIZE_PX; // YukkuriSequenceで制御するため削除

  return (
    <div /* style={{transform: `translateY(${translateY}%)`}} */ > {/* transformスタイルを削除 */}
      <Img
        src={staticFile(`char/${eyeState}.png`)}
        style={{width: '100%', height: '100%', objectFit: 'contain'}} // 幅と高さを100%に設定
      />
      {isTalking && isMouthOpen && ( // isMouthOpenも条件に追加
        <Img
          src={staticFile('char/mouth/01.png')}
          style={mouthStyle}
        />
      )}
    </div>
  );
};

const MABATAKI_INTERVAL_SECONDS = 5; // まばたきの間隔 (秒)
const MABATAKI_ANIMATION_DURATION_FRAMES = 15; // まばたきアニメーションの総フレーム数

// 各状態に切り替わるフレームの閾値
const MABATAKI_ANIMATION_FRAMES = [
  0.2 * MABATAKI_ANIMATION_DURATION_FRAMES, // 01.png に切り替わるタイミング
  0.4 * MABATAKI_ANIMATION_DURATION_FRAMES, // 02.png に切り替わるタイミング
  0.6 * MABATAKI_ANIMATION_DURATION_FRAMES, // 01.png に戻るタイミング
  0.8 * MABATAKI_ANIMATION_DURATION_FRAMES, // 00.png に戻るタイミング
];

const mouthStyle: React.CSSProperties = {
  position: 'absolute',
  top: '49.6%', // 調整が必要な場合は変更してください
  left: '50%', // 調整が必要な場合は変更してください
  width: '100%', // 調整が必要な場合は変更してください
  height: 'auto',
  transform: 'translate(-50%, -50%)',
  zIndex: zIndex.yukkuri + 1, // キャラクター本体より前面に表示
};
