export default function delayWithSignal(
  ms: number,
  signal: AbortSignal,
): Promise<void> {
  const { promise, resolve, reject } = Promise.withResolvers<void>();
  const timer = setTimeout(resolve, ms);
  signal.addEventListener('abort', () => {
    clearTimeout(timer);
    reject(signal.reason);
  });
  return promise;
}
