import React from 'react';
import {zIndex} from '../constants';
import {fontFamily} from '@remotion/google-fonts/NotoSansJP';

const baseSubtitleStyle: React.CSSProperties = {
  fontFamily,
  fontSize: 40,
  fontWeight: 'bold',
  lineHeight: 1.5,
  letterSpacing: '0.05em',
  textRendering: 'optimizeLegibility',
  textAlign: 'left',
  position: 'absolute',
  top: -113,
  left: 20,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingTop: '8px',
  paddingLeft: '45px',
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
  children: string;
};

export const Subtitle: React.FC<Props> = ({children}) => {
  return (
    <div style={{position: 'relative', width: '100%', height: '100%'}}>
      <p style={strokeSubtitleStyle} dangerouslySetInnerHTML={{ __html: children }}></p>
      <p style={fillSubtitleStyle} dangerouslySetInnerHTML={{ __html: children }}></p>
    </div>
  );
};
