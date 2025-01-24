import { defineConfig } from '@rsbuild/core';
import { pluginMdx } from '@rsbuild/plugin-mdx';
import { pluginReact } from '@rsbuild/plugin-react';
import { description } from './package.json';

export default defineConfig({
  plugins: [pluginReact(), pluginMdx()],
  html: {
    template: './public/index.html',
    title: 'React Client Side Async',
    meta: { description },
  },
  output: { assetPrefix: './' },
});
