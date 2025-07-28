export function capitalizeFirstLetter(word: string): string {
  if (!word) return ""; // Handle empty or null strings
  return word.charAt(0).toUpperCase() + word.slice(1);
}
