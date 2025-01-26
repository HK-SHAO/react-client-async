import '#styles/prose.css';

import { useEffect } from 'react';

import type { MDXComponents } from 'mdx/types';
import Code from '#components/Code';
import DemoPage from '#components/DemoPage.mdx';

const components: MDXComponents = { code: Code };

function scrollToHash() {
  if (typeof window === 'undefined') return;
  const hashTag = window.location.hash.substring(1);
  const element = document.getElementById(hashTag);
  element?.scrollIntoView({ behavior: 'smooth' });
}

export default function Main() {
  // Automatically scroll to the hash tag.
  useEffect(scrollToHash, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="p-4 dark:prose-invert prose">
          <DemoPage components={components} />
        </div>
      </div>
    </>
  );
}
