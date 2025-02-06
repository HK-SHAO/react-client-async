import { chromeDark } from 'react-inspector';

const inspectorTheme: typeof chromeDark = {
  ...chromeDark,
  ...{
    BASE_BACKGROUND_COLOR: 'transparent',
    BASE_FONT_SIZE: 'var(--text-sm)',
    ARROW_FONT_SIZE: 'var(--text-sm)' as unknown as number,
    TREENODE_FONT_SIZE: 'var(--text-sm)',
  },
};

export default inspectorTheme as unknown as 'chromeDark';
