import { chromeDark } from 'react-inspector';

import monoFontFamily from './monoFontFamily';

const inspectorTheme: typeof chromeDark = {
  ...chromeDark,
  ...{
    BASE_BACKGROUND_COLOR: 'transparent',
    BASE_FONT_SIZE: 'var(--text-sm)',
    ARROW_FONT_SIZE: 'var(--text-sm)' as unknown as number,
    TREENODE_FONT_SIZE: 'var(--text-sm)',
    BASE_FONT_FAMILY: monoFontFamily,
    TREENODE_FONT_FAMILY: monoFontFamily,
  },
};

export default inspectorTheme as unknown as 'chromeDark';
