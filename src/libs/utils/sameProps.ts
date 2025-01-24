import type { propsAreEqual } from '../types/react';

export const sameProps: propsAreEqual = (prevProps, nextProps) => {
  if (prevProps === nextProps) return true;

  if (
    typeof prevProps !== 'object' ||
    typeof nextProps !== 'object' ||
    prevProps === null ||
    nextProps === null
  ) {
    return false;
  }

  const prevKeys = Object.keys(prevProps);
  const nextKeys = Object.keys(nextProps);

  if (prevKeys.length !== nextKeys.length) {
    return false;
  }

  for (const key of prevKeys) {
    // @ts-expect-error
    if (prevProps[key] !== nextProps[key]) {
      return false;
    }
  }

  return true;
};

export default sameProps;
