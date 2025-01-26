/**
 * Capitalize the first letter of a string
 * @param text The string to capitalize
 * @returns The capitalized string
 */
export default function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
