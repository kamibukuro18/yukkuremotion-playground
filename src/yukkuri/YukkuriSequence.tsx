import {Sequence} from 'remotion';
import {zIndex} from '../constants';
import {YukkuriFace} from './Face/YukkuriFace';
import {VoiceConfig} from './yukkuriVideoConfig';

export type Props = {
  talks: VoiceConfig[];
  fromFramesMap: {[key in number]: number};
};

export const YukkuriSequence: React.FC<Props> = () => {
  return (
    <Sequence>
      <div style={characterStyle}>
        <YukkuriFace isReimu />
      </div>
    </Sequence>
  );
};

const characterStyle: React.CSSProperties = {
  position: 'absolute',
  right: '10px',
  bottom: '10px',
  height: '90%',
  width: 'auto',
  zIndex: zIndex.yukkuri,
};
