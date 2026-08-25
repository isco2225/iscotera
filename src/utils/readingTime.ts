// Ortalama okuma hızı ~200 kelime/dk kabulüyle yazının okuma süresini döndürür.
export function readingTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
