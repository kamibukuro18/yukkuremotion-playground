import { Audio, Img, OffthreadVideo, Sequence, staticFile } from 'remotion';
import { CustomObjects } from '../../../transcripts/CustomObjects';
import { CHARACTER_WIDTH_PERCENTAGE, SUBTITLE_HEIGHT_PX, TALK_GAP_FRAMES } from '../../constants';
import { SubtitleWithBackground } from '../../Subtitle/SubtitleBackground';
import { VoiceConfig } from '../yukkuriVideoConfig';
import { insertLineBreaks } from '../../utils/textUtils';

export type TalkProps = {
  voiceConfig: VoiceConfig;
  from?: number;
  meta: {
    talks: VoiceConfig[];
    index: number;
  };
};

const getDurationInFrames = (voiceConfig: VoiceConfig) =>
  voiceConfig.customDuration ||
  voiceConfig.audioDurationFrames + TALK_GAP_FRAMES;

const getBackgroundVideoDuration = (
  currentTalk: VoiceConfig,
  talks: VoiceConfig[],
  index: number
) => {
  const video = currentTalk.backgroundVideo;

  if (!video) {
    return 1; // Return 1 frame if no background video
  }

  let duration = getDurationInFrames(currentTalk);

  if (video.extendTalksCount) {
    for (let i = 1; i <= video.extendTalksCount; i++) {
      duration += getDurationInFrames(talks[index + i]);
    }
  }
  return duration;
};

export const Talk: React.FC<TalkProps> = ({ voiceConfig, from, meta }) => {
  const hasAudio = Boolean(voiceConfig.id) || Boolean(voiceConfig.ids);

  const CustomObject = voiceConfig.customObjectKey
    ? CustomObjects[voiceConfig.customObjectKey]
    : null;

  const durationInFrames = getDurationInFrames(voiceConfig);

  const subtitleText = insertLineBreaks(voiceConfig.textForDisplay || voiceConfig.text, 67); // ここで自動改行を適用

  return (
    <>
      <Sequence durationInFrames={Math.max(1, voiceConfig.audioDurationFrames)} from={from}>
        <SubtitleWithBackground
          subtitle={subtitleText}
        />
      </Sequence>

      {hasAudio &&
        (voiceConfig.ids && voiceConfig.ids.length > 0 ? (
          voiceConfig.ids.map((id) => {
            return (
              <Sequence key={id} durationInFrames={Math.max(1, voiceConfig.audioDurationFrames)} from={from}>
                {/* @ts-ignore */}
                <Audio src={staticFile(`audio/yukkuri/${id}.wav`)} />
              </Sequence>
            );
          })
        ) : (
          <Sequence durationInFrames={Math.max(1, voiceConfig.audioDurationFrames)} from={from}>
            {/* @ts-ignore */}
            <Audio src={staticFile(`audio/yukkuri/${voiceConfig.id}.wav`)} />
          </Sequence>
        ))}

      {voiceConfig.image && (
        <Sequence
          durationInFrames={Math.max(1, durationInFrames)}
          from={(from || 0) + (voiceConfig.image.from || 0)}
        >
          <div
            style={{
              ...imagePosition,
              backgroundColor: voiceConfig.image.backgroundColor,
            }}
          >
            <Img src={staticFile(voiceConfig.image.src)} style={imageStyle} />
          </div>
        </Sequence>
      )}

      {voiceConfig.audio && (
        <Sequence
          durationInFrames={Math.max(1, durationInFrames)}
          from={(from || 0) + (voiceConfig.audio.from || 0)}
        >
          {/* @ts-ignore */}
          <Audio
            src={staticFile(voiceConfig.audio.src)}
            // eslint-disable-next-line
            volume={voiceConfig.audio.volume || 1}
          />
        </Sequence>
      )}

      {voiceConfig.seSounds &&
        voiceConfig.seSounds.map((se, index) => (
          <Sequence key={index} durationInFrames={Math.max(1, durationInFrames)} from={from || 0}>
            {/* @ts-ignore */}
            <Audio src={staticFile(se.src)} />
          </Sequence>
        ))}

      {voiceConfig.backgroundVideo && (
        <Sequence
          durationInFrames={Math.max(1, getBackgroundVideoDuration(
            voiceConfig,
            meta.talks,
            meta.index
          ))}
          from={(from || 0) + (voiceConfig.backgroundVideo.from || 0)}
        >
          <div
            style={{
              ...imagePosition,
              backgroundColor: voiceConfig.backgroundVideo.backgroundColor,
            }}
          >
            <OffthreadVideo
              muted
              src={staticFile(voiceConfig.backgroundVideo.src)}
              style={{ maxHeight: '100%' }}
            />
          </div>
        </Sequence>
      )}

      {CustomObject && (
        <Sequence durationInFrames={Math.max(1, durationInFrames)} from={from || 0}>
          <CustomObject />
        </Sequence>
      )}
    </>
  );
};

const VERTICAL_PADDING_PX = 0;
const HORIZONTAL_PADDING_PX = 40;

const imagePosition: React.CSSProperties = {
  position: 'absolute',
  height: `calc(100% - ${SUBTITLE_HEIGHT_PX}px - ${VERTICAL_PADDING_PX * 2}px)`,
  top: VERTICAL_PADDING_PX,
  left: HORIZONTAL_PADDING_PX,
  width: `calc(${100 - CHARACTER_WIDTH_PERCENTAGE * 100}% - ${HORIZONTAL_PADDING_PX * 2}px)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const imageStyle: React.CSSProperties = {
  objectFit: 'contain',
  padding: '40px',
  width: '100%',
  height: '100%',
};
