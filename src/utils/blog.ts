// Blog kapak görsellerinin üretim ölçüleri. Her genişlik, o biçimin sayfada
// gösterildiği en geniş yerin 2 katıdır; 2x ekranlar büyütme yapmaz.

// Yazı sayfasındaki geniş kapak: max-w-3xl (768px) sütunun 2 katı, 16:9'a
// derleme sırasında kırpılır (sayfada da o oranda gösteriliyor; kırpılan
// pikselleri indirtmenin anlamı yok). Kalite, LCP öğesi olduğu için
// varsayılanın biraz altında tutuluyor; fotoğrafta fark edilmiyor.
export const BLOG_COVER_WIDTH = 1536;
export const blogCoverOptions = {
  width: BLOG_COVER_WIDTH,
  height: Math.round((BLOG_COVER_WIDTH * 9) / 16),
  fit: 'cover',
  quality: 70,
  // 1x ekran 768'i, 2x ekran 1536'yı indirir; `sizes` sütunun gerçek
  // genişliğini söyler (max-w-3xl, altında viewport eksi yan boşluk).
  widths: [BLOG_COVER_WIDTH / 2, BLOG_COVER_WIDTH],
  sizes: '(min-width: 800px) 768px, calc(100vw - 2rem)',
} as const;

// Liste ve ana sayfa kartlarındaki kapak: kartın üstünde tam genişlikte, 21:9
// (16:9 kartı fazla uzatıyordu; kullanıcının isteğiyle alçak bant, 2026-09-10).
// En geniş yeri liste kartı (max-w-3xl eksi iç boşluk ≈ 704px); ana sayfadaki
// iki sütunlu kart daha dar. Liste beş kapağı birden yüklediği için aynı
// kırpma ve kalite burada da uygulanır.
export const BLOG_THUMB_WIDTH = 1408;
export const blogThumbOptions = {
  width: BLOG_THUMB_WIDTH,
  height: Math.round((BLOG_THUMB_WIDTH * 9) / 21),
  fit: 'cover',
  quality: 70,
  // Kart genişliğinin 1x, 1.5x ve 2x karşılıkları; tarayıcı ekranına göre
  // seçer. Ana sayfadaki dar kart da bu listeden küçük olanı alır.
  widths: [BLOG_THUMB_WIDTH / 4, BLOG_THUMB_WIDTH / 2, (BLOG_THUMB_WIDTH * 3) / 4, BLOG_THUMB_WIDTH],
} as const;

// Kartın gerçek genişliği: listede max-w-3xl eksi kartın iç boşluğu, ana
// sayfada max-w-5xl'in yarısı eksi boşluklar; ikisinin altında viewport.
export const BLOG_LIST_SIZES = '(min-width: 800px) 704px, calc(100vw - 2rem - 2.5rem)';
export const BLOG_HOME_SIZES = '(min-width: 1056px) 436px, (min-width: 640px) calc(50vw - 4.5rem), calc(100vw - 2rem - 3rem)';
