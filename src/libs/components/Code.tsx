import type { CSSProperties } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const regExpLanguage = /language-(\w+)/;

const customStyle: CSSProperties = { display: 'contents' };

export type CodeProps = {
  className?: string;
  children: string;
  [key: string]: unknown;
};

export default function Code({ className, children, ...rest }: CodeProps) {
  const match = className ? regExpLanguage.exec(className) : null;
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      customStyle={customStyle}
      style={oneDark}
      {...rest}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...rest}>
      {children}
    </code>
  );
}
