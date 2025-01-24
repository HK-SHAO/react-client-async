import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import type { Config } from 'postcss-load-config';

export default {
  // @ts-expect-error
  plugins: [tailwindcss, autoprefixer],
} satisfies Config;
