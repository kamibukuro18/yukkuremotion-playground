import React from 'react';
import { Composition } from 'remotion';
import { YukkuriVideo } from './YukkuriVideo';
import { getTotalVideoFrames } from './utils/getTotalVideoFrames';
import { PlaygroundConfig } from '../transcripts/playground';
import { VIDEO_SETTINGS } from './constants';

export const Root: React.FC = () => {
  return (
    <>
      
      <Composition
        id="Playground"
        component={YukkuriVideo}
        durationInFrames={getTotalVideoFrames(PlaygroundConfig)}
        fps={VIDEO_SETTINGS.fps}
        width={1920}
        height={1080}
        defaultProps={{ videoConfig: PlaygroundConfig }}
      />
    </>
  );
};
