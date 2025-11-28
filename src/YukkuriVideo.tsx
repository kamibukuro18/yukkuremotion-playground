import {Audio, Img, OffthreadVideo, Sequence, staticFile} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {TalkSequence} from './yukkuri/Talk/TalkSequence';
import {YukkuriSequence} from './yukkuri/YukkuriSequence';
import React from 'react';
import {VIDEO_SETTINGS, zIndex} from './constants';
import {VideoConfig} from './yukkuri/yukkuriVideoConfig';
import {getTotalFramesBeforeSection} from './utils/getTotalFramesBeforeSection';
import {LoopedOffthreadVideo} from './components/LoopedOffthreadVideo';

export const YukkuriVideo: React.FC<{
  videoConfig: VideoConfig;
}> = ({videoConfig}) => {
  return (
    <AbsoluteFill style={{
      backgroundColor: '#000',
      backgroundImage: `url(${staticFile('image/background.png')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {videoConfig.sections.map((section, index) => {
        const cumulateFrames = getTotalFramesBeforeSection(videoConfig, index);

        const fromFrameMap = {...section.fromFramesMap};
        Object.keys(fromFrameMap).forEach((key) => {
          fromFrameMap[Number(key)] += cumulateFrames;
        });

        return (
          <React.Fragment key={index}>
            <Sequence
              from={cumulateFrames}
              durationInFrames={Math.max(
                1,
                section.totalFrames - (section.afterMovieFrames || 0)
              )}
            >
              {section.bgmSrc && (
                // @ts-ignore
                <Audio
                  loop
                  src={staticFile(section.bgmSrc)}
                  volume={Number(section.bgmVolume || 1)}
                />
              )}
              {section.backgroundVideo && (
                <>
                  <LoopedOffthreadVideo
                    isMuted
                    src={staticFile(section.backgroundVideo)}
                  />
                  {section.showBgVideoOverlay && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(4px)',
                        zIndex: '0',
                      }}
                    />
                  )}
                </>
              )}
            </Sequence>

            <TalkSequence
              {...section}
              fromFramesMap={fromFrameMap}
              totalFrames={cumulateFrames + section.totalFrames}
            />

            <YukkuriSequence {...section} fromFramesMap={fromFrameMap} videoConfig={videoConfig} />

            {section.beforeMovie && (
              <Sequence
                from={cumulateFrames}
                durationInFrames={fromFrameMap[0]}
              >
                <OffthreadVideo
                  style={{zIndex: zIndex.transitionMovie}}
                  src={staticFile(section.beforeMovie)}
                />
              </Sequence>
            )}
            {section.afterMovie && section.afterMovieFrames && (
              <Sequence
                from={
                  cumulateFrames +
                  section.totalFrames -
                  section.afterMovieFrames +
                  (section.afteMovieDelay || 0)
                }
                durationInFrames={section.afterMovieFrames}
              >
                <OffthreadVideo
                  style={{zIndex: zIndex.transitionMovie}}
                  src={staticFile(section.afterMovie)}
                  volume={section.afterMovieVolume}
                />
              </Sequence>
            )}
          </React.Fragment>
        );
      })}

      {/* <div style={logoStyle}>
        <Img src={staticFile('image/yukkurilogo.png')} />
      </div> */}

      <div style={jimakuBackground} />
    </AbsoluteFill>
  );
};

const jimakuBackground: React.CSSProperties = {
  position: 'absolute',
  width: 'calc(75%)',
  height: `${VIDEO_SETTINGS.subtitleHeightPx}px`,
  bottom: 20,
  left: 40,
  backgroundImage: `url(${staticFile('image/Cyber_telop2_black.png')})`,
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: zIndex.anyValue,
};

const logoStyle: React.CSSProperties = {
  position: 'absolute',
  top: '40px',
  left: '40px',
  opacity: 0.8,
  zIndex: zIndex.anyValue,
};
