// Favicon ve sosyal medya profil görsellerini tek kaynaktan, brand/logo.svg'den
// üretir. Logo değişirse `npm run icons` hepsini birlikte yeniler.
//
// Üretilenler:
//   public/favicon.ico            16 + 32 + 48 px (Google Arama SVG okumaz, ICO/PNG ister)
//   public/favicon-96x96.png      Google'ın önerdiği 48'in katı boyut
//   public/apple-touch-icon.png   180 px, kenara kadar dolu (iOS köşeleri kendisi yuvarlar)
//   brand/social/*                profil fotoğrafı varyantları (README orada)
//
// `sharp` doğrudan bağımlılık değil; Astro'nun görsel işleyicisi olarak zaten
// node_modules'ta bulunur. Script yalnızca o kopyayı kullanır.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = await readFile(join(root, 'brand/logo.svg'), 'utf8');

// Kaynaktaki üç öğe: kutu, nokta, gövde. Logo geometrisi değişirse burası
// sessizce yanlış çizmesin diye her biri doğrulanır.
const TILE = '<rect width="64" height="64" rx="14" fill="#171717"/>';
const DOT = '<rect x="28" y="8" width="8" height="8" rx="4" fill="#E50914"/>';
const BODY_FILL = 'fill="#FFFFFF"/>';
for (const marker of [TILE, DOT, BODY_FILL]) {
  if (!source.includes(marker)) throw new Error(`brand/logo.svg beklenen parçayı içermiyor: ${marker}`);
}

// Varyantlar: kaynağın metin dönüşümleri.
const tile = source; // yuvarlatılmış kutu, köşeler saydam
const square = source.replace(TILE, TILE.replace('rx="14"', 'rx="0"')); // kenara kadar siyah
const tileOnWhite = source.replace(TILE, '<rect width="64" height="64" fill="#FFFFFF"/>' + TILE);
// Önce gövde, sonra kutu: kutu beyaza döndükten sonra `fill="#FFFFFF"/>`
// araması gövdeyi değil kutuyu bulurdu (ilk sürümde tam bu oldu).
const lightSquare = source
  .replace(BODY_FILL, 'fill="#171717"/>')
  .replace(TILE, '<rect width="64" height="64" rx="0" fill="#FFFFFF"/>');

// SVG'yi hedef boyutta vektörden çizdirir (önce küçük çizip büyütmez).
const sized = (svg, px) => svg.replace('<svg ', `<svg width="${px}" height="${px}" `);
const png = (svg, px) => sharp(Buffer.from(sized(svg, px))).png({ compressionLevel: 9 }).toBuffer();
const rgba = (svg, px) => sharp(Buffer.from(sized(svg, px))).ensureAlpha().raw().toBuffer();

// ICO: her boyut 32 bit BGRA bitmap + 1 bit AND maskesi (en geniş uyumluluk;
// PNG gömülü ICO'yu bazı eski okuyucular açamıyor).
function ico(entries) {
  const images = entries.map(({ px, pixels }) => {
    const rowBytes = px * 4;
    const maskRowBytes = Math.ceil(px / 32) * 4;
    const header = Buffer.alloc(40);
    header.writeUInt32LE(40, 0);
    header.writeInt32LE(px, 4);
    header.writeInt32LE(px * 2, 8); // XOR + AND yüksekliği
    header.writeUInt16LE(1, 12);
    header.writeUInt16LE(32, 14);
    header.writeUInt32LE(rowBytes * px + maskRowBytes * px, 20);
    const xor = Buffer.alloc(rowBytes * px);
    const and = Buffer.alloc(maskRowBytes * px);
    for (let y = 0; y < px; y++) {
      const srcRow = px - 1 - y; // bitmap satırları alttan üste
      for (let x = 0; x < px; x++) {
        const s = (srcRow * px + x) * 4;
        const d = (y * px + x) * 4;
        xor[d] = pixels[s + 2];
        xor[d + 1] = pixels[s + 1];
        xor[d + 2] = pixels[s];
        xor[d + 3] = pixels[s + 3];
        if (pixels[s + 3] === 0) and[y * maskRowBytes + (x >> 3)] |= 0x80 >> (x & 7);
      }
    }
    return Buffer.concat([header, xor, and]);
  });
  const dir = Buffer.alloc(6 + 16 * entries.length);
  dir.writeUInt16LE(1, 2);
  dir.writeUInt16LE(entries.length, 4);
  let offset = dir.length;
  entries.forEach(({ px }, i) => {
    const o = 6 + i * 16;
    dir.writeUInt8(px, o);
    dir.writeUInt8(px, o + 1);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(images[i].length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += images[i].length;
  });
  return Buffer.concat([dir, ...images]);
}

// --- public/: tarayıcı ve arama motoru simgeleri ---
const pub = join(root, 'public');
const icoSizes = [16, 32, 48];
await writeFile(
  join(pub, 'favicon.ico'),
  ico(await Promise.all(icoSizes.map(async (px) => ({ px, pixels: await rgba(tile, px) })))),
);
await writeFile(join(pub, 'favicon-96x96.png'), await png(tile, 96));
await writeFile(join(pub, 'apple-touch-icon.png'), await png(square, 180));

// --- brand/social/: profil fotoğrafları ---
const social = join(root, 'brand/social');
await mkdir(social, { recursive: true });
const variants = {
  'dark-square': square,
  'dark-tile': tile,
  'dark-tile-on-white': tileOnWhite,
  'light-square': lightSquare,
};
for (const [name, svg] of Object.entries(variants)) {
  for (const px of [1024, 400]) await writeFile(join(social, `${name}-${px}.png`), await png(svg, px));
  await writeFile(join(social, `${name}.svg`), sized(svg, 1024));
}
await writeFile(
  join(social, 'dark-square-1024.jpg'),
  await sharp(Buffer.from(sized(square, 1024))).jpeg({ quality: 95, chromaSubsampling: '4:4:4' }).toBuffer(),
);

console.log('public/favicon.ico, favicon-96x96.png, apple-touch-icon.png ve brand/social/* yenilendi.');
