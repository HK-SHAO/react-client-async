import type { MDXComponents } from 'mdx/types';
import Code from './Code';
import DemoPage from './DemoPage.mdx';

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
