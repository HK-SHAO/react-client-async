import { AsyncFunction } from '#constants/basic';

/**
 * Check if the function is an async function.
 * @param fn The function to check
 * @returns The boolean result
 */
export default function isAsyncFunction(fn: unknown): boolean {
  return fn instanceof AsyncFunction;
}
