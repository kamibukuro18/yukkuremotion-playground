import { loadFont } from './load-fonts';
import React from 'react';
import { Composition } from 'remotion';
import { YukkuriVideo } from './YukkuriVideo';
import { getTotalVideoFrames } from './utils/getTotalVideoFrames';
import { FirstVideoConfig } from '../transcripts/firstvideo';
import { FPS } from './constants';
import { TransitionSpace } from './sozai/TransitionSpace';
import { PlaygroundConfig } from '../transcripts/playground';

export const Root: React.FC = () => {
  loadFont();

  return (
    <>
      <Composition
        id="FirstVideo"
        component={YukkuriVideo}
        durationInFrames={getTotalVideoFrames(FirstVideoConfig)}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ videoConfig: FirstVideoConfig }}
      />
      <Composition
        id="TestEncoding"
        component={YukkuriVideo}
        durationInFrames={FirstVideoConfig.sections[0].totalFrames}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{
          videoConfig: {
            ...FirstVideoConfig,
            sections: [FirstVideoConfig.sections[0]],
          },
        }}
      />
      <Composition
        id="TransitionSpace"
        component={TransitionSpace}
        durationInFrames={180}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="Playground"
        component={YukkuriVideo}
        durationInFrames={getTotalVideoFrames(PlaygroundConfig)}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ videoConfig: PlaygroundConfig }}
      />
    </>
  );
};
