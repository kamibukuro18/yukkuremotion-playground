import React from 'react';
import {VIDEO_SETTINGS, zIndex} from '../constants'; // VIDEO_SETTINGSをインポート
import {fontFamily} from '@remotion/google-fonts/NotoSansJP';

const baseSubtitleStyle: React.CSSProperties = {
  fontFamily,
  fontSize: 38, // VIDEO_SETTINGS.subtitleFontSizePx を参照
  fontWeight: 'bold',
  lineHeight: VIDEO_SETTINGS.subtitleLineHeight, // VIDEO_SETTINGS.subtitleLineHeight を参照
  letterSpacing: '0.05em',
  textRendering: 'optimizeLegibility',
  textAlign: 'left',
  position: 'absolute',
  top: -70, // 位置を調整
  left: 40, // 位置を調整
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingTop: '20px', // 位置を調整
  paddingLeft: '20px', // 位置を調整
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
