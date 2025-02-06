import type { propsAreEqual } from '#types/react';

/**
 * Check if the props are the same.
 * @param prev The previous props
 * @param next The next props
 * @returns The boolean result
 */
export const sameProps: propsAreEqual = (prev, next) => {
  if (prev === next) return true;

  if (
    typeof prev !== 'object' ||
    typeof next !== 'object' ||
    prev === null ||
    next === null
  ) {
    return false;
  }

  const prevKeys = Object.keys(prev);
  const nextKeys = Object.keys(next);

  if (prevKeys.length !== nextKeys.length) {
    return false;
  }

  for (const key of prevKeys) {
    // @ts-expect-error
    if (prev[key] !== next[key]) {
      return false;
    }
  }

  return true;
};

export default sameProps;
