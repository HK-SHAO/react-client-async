import { AsyncFunction } from '../constants/basic';

export default function isAsyncFunction(fn: unknown): boolean {
  return fn instanceof AsyncFunction;
}
