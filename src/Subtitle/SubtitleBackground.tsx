import React from 'react';
import { VIDEO_SETTINGS, zIndex } from '../constants';
import {Subtitle} from './Subtitle';

export const SubtitleWithBackground = (props: {
  subtitle: string;
}) => (
  <div style={jimakuBackground}>
    <Subtitle>{props.subtitle}</Subtitle>
  </div>
);

const jimakuBackground: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: `${VIDEO_SETTINGS.subtitleHeightPx}px`,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  zIndex: zIndex.subtitle,
};
