import type {
  FC,
  FunctionComponent,
  MemoExoticComponent,
  ReactNode,
} from 'react';

export type propsAreEqual<P = unknown> = (prev: P, next: P) => boolean;
export type propsCompareObject<P = unknown> = { compare: propsAreEqual<P> };
export type MemoComponent<P = unknown> = MemoExoticComponent<FC<P>> &
  Partial<propsCompareObject<P>>;

export interface InnerFC<P> extends FunctionComponent<P> {
  (props: P): ReactNode | Promise<ReactNode>;
}
