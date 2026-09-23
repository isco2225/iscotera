// Renk yardımcıları. İçerik şeması (content.config.ts) da kullandığı için bu
// dosya hiçbir şey import etmez.

/** Kabul edilen renk biçimi: #rrggbb. */
export const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

/** #rrggbb renginin WCAG göreli parlaklığı (0 = siyah, 1 = beyaz). */
function relativeLuminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const channel = parseInt(hex.slice(i, i + 2), 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Beyaz yazının bu zemin üzerindeki WCAG kontrast oranı (1 ile 21 arası).
 * Geçersiz bir renkte 0 döner, böylece şema onu da reddeder.
 */
export function contrastWithWhite(hex: string): number {
  if (!HEX_COLOR.test(hex)) return 0;
  return 1.05 / (relativeLuminance(hex) + 0.05);
}
