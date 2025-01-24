import type { FC, MemoExoticComponent } from 'react';

export type propsAreEqual<P = unknown> = (prev: P, next: P) => boolean;
export type propsCompareObject<P = unknown> = { compare: propsAreEqual<P> };
export type MemoComponent<P = unknown> = MemoExoticComponent<FC<P>> &
  Partial<propsCompareObject<P>>;
