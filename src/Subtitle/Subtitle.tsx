import React from 'react';
import {zIndex} from '../constants';
import {fontFamily} from '@remotion/google-fonts/NotoSansJP';

const baseSubtitleStyle: React.CSSProperties = {
  fontFamily,
  fontSize: 60,
  fontWeight: 'bold',
  lineHeight: 2.28,
  letterSpacing: '0.05em',
  textRendering: 'optimizeLegibility',
  textAlign: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: zIndex.anyValue,
};

const strokeSubtitleStyle: React.CSSProperties = {
  ...baseSubtitleStyle,
  color: '#fff',
  WebkitTextStroke: '4px #C90003',
};

const fillSubtitleStyle: React.CSSProperties = {
  ...baseSubtitleStyle,
  color: '#fff',
};

type Props = {
  children: React.ReactNode;
};

export const Subtitle: React.FC<Props> = ({children}) => {
  return (
    <div style={{position: 'relative', width: '100%', height: '100%'}}>
      <p style={strokeSubtitleStyle}>{children}</p>
      <p style={fillSubtitleStyle}>{children}</p>
    </div>
  );
};
