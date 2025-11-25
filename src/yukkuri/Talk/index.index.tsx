import { Audio, Img, OffthreadVideo, Sequence, staticFile } from 'remotion';
import { CustomObjects } from '../../../transcripts/CustomObjects';
import { SUBTITLE_HEIGHT_PX, TALK_GAP_FRAMES } from '../../constants';
import { SubtitleWithBackground } from '../../Subtitle/SubtitleBackground';
import { VoiceConfig } from '../yukkuriVideoConfig';
import { insertLineBreaks } from '../../utils/textUtils';

export const Talk: React.FC<TalkProps> = ({ voiceConfig, from, meta }) => {
  const hasAudio = Boolean(voiceConfig.id) || Boolean(voiceConfig.ids);

  const CustomObject = voiceConfig.customObjectKey
    ? CustomObjects[voiceConfig.customObjectKey]
    : null;

  const durationInFrames = getDurationInFrames(voiceConfig);

  const subtitleText = insertLineBreaks(voiceConfig.textForDisplay || voiceConfig.text, 25); // ここで自動改行を適用

  return (
    <>
      <Sequence durationInFrames={Math.max(1, voiceConfig.audioDurationFrames)} from={from}>
        <SubtitleWithBackground
          subtitle={subtitleText}
        />
      </Sequence>
