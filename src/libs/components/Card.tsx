import type { ReactNode } from 'react';

export default function Card({
  className,
  children,
}: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`bg-gray-100 dark:bg-gray-100/10 rounded-lg [&>h2]:mt-0 p-8 ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
