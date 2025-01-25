import type { MDXComponents } from 'mdx/types';
import Code from '#components/Code';
import DemoPage from '#components/DemoPage.mdx';

import '#styles/prose.css';

const components: MDXComponents = { code: Code };

export default function Main() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="p-4 prose">
          <DemoPage components={components} />
        </div>
      </div>
    </>
  );
}
