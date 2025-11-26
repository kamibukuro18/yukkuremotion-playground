import React from 'react';
import { Composition } from 'remotion';
import { YukkuriVideo } from './YukkuriVideo';
import { getTotalVideoFrames } from './utils/getTotalVideoFrames';
import { FirstVideoConfig } from '../transcripts/firstvideo';
import { FPS } from './constants';
import { TransitionSpace } from './sozai/TransitionSpace';
import { PlaygroundConfig } from '../transcripts/playground';

export const Root: React.FC = () => {
  return (
    <>
      
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
