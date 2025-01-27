/**
 * Hash a number to a float between 0 and 1
 * @param num The number to hash
 * @returns The hashed float
 */
export function hashTo01Float(num: number): number {
  const hash = (num * 2654435761) % 2 ** 32;
  return hash / 2 ** 32;
}
