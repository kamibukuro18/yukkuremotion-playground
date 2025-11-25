export const insertLineBreaks = (text: string, maxLength: number): string => {
  let result = '';
  let currentLineLength = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // HTMLの<br />タグは文字数としてカウントしない
    if (char === '<' && text.substring(i, i + 5) === '<br />') {
      result += '<br />';
      currentLineLength = 0;
      i += 4; // <br />の5文字分進める
      continue;
    }

    // 日本語の文字を考慮して文字幅を調整（簡易的な処理）
    const charCode = char.charCodeAt(0);
    const isFullWidth = (charCode >= 0x4E00 && charCode <= 0x9FFF) || // CJK統合漢字
                        (charCode >= 0x3040 && charCode <= 0x309F) || // ひらがな
                        (charCode >= 0x30A0 && charCode <= 0x30FF) || // カタカナ
                        (charCode >= 0xFF00 && charCode <= 0xFFEF); // 全角英数字
    const charWidth = isFullWidth ? 2 : 1; // 全角文字は2、半角文字は1とする

    if (currentLineLength + charWidth > maxLength) {
      result += '<br />';
      currentLineLength = 0;
    }
    result += char;
    currentLineLength += charWidth;
  }
  return result;
};
