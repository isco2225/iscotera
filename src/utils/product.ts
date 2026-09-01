import type { ImageMetadata } from 'astro';
import type { CollectionEntry } from 'astro:content';

type ProjectData = CollectionEntry<'projects'>['data'];

/**
 * Ürün sayfasındaki bütün ürün görselleri (kapak, özellik blokları, ekran
 * görüntüleri gridi) bu genişlikte üretilir.
 *
 * Tek değer olması şart: aynı kaynak görsel iki farklı genişlikte istendiğinde
 * Astro iki ayrı dosya üretiyor ve tarayıcı ikisini de indiriyor. Özellik
 * blokları ile alttaki grid aynı ekranları gösterdiği için bu, sayfa
 * ağırlığının yaklaşık üçte biri kadar boşuna trafik demekti.
 *
 * Değer, görselin ekranda kapladığı EN GENİŞ yerin iki katı olmalı: yüksek
 * yoğunluklu (2x) ekranlar bir CSS pikseli için iki aygıt pikseli istiyor,
 * altında kalınca tarayıcı görseli büyütüyor ve ekran görüntüsündeki küçük
 * arayüz yazıları bulanıklaşıyor.
 *
 * En geniş kullanım, ekran görüntüleri gridinin masaüstündeki sütunu: 1024px
 * kapsayıcıda üç sütun ve iki boşluk kalınca sütun başına ~315px düşüyor,
 * yani 630 aygıt pikseli gerekiyor. 640 hepsini karşılıyor:
 *
 *   hero kapağı      300px ekranda -> 1,07x
 *   özellik bloğu    320px ekranda -> 1,00x
 *   grid (masaüstü)  315px ekranda -> 1,02x
 *   grid (mobil)     ~213px ekranda -> 1,50x
 */
export const PRODUCT_IMAGE_WIDTH = 640;

/**
 * Yatay ekran görüntüleri (masaüstü/web uygulaması, ör. Dernek Asistan) için
 * genişlik. Dikey telefon ekranı en fazla ~320px yer kaplarken yatay görsel
 * ürün sayfasında kapsayıcının tamamına (1024 − 2×16 = 992px) yayılıyor;
 * 2x ekran için 1984 gerekiyor. Kaynak bundan küçükse Astro büyütmez, kaynak
 * genişliğinde üretir — yani 1x çekilmiş bir görüntü 2x ekranda yine bulanık
 * kalır; ekran görüntüleri 2x (DPR 2) alınmalı.
 *
 * Aynı kaynak yine tek genişlikte üretiliyor, kural bozulmuyor: seçim
 * görselin kendisine göre yapılıyor ve her bileşen productImageOptions'ı
 * kullanıyor, sayfadaki adres ile şemadaki adres böylece aynı kalıyor.
 */
export const PRODUCT_WIDE_IMAGE_WIDTH = 1984;

export function isLandscape(image: ImageMetadata): boolean {
  return image.width > image.height;
}

/**
 * <Image> ve getImage için ortak seçenekler. Yatay arayüz görüntülerinde
 * sıkıştırma en yükseğe çekilir: varsayılan WebP kalitesi fotoğrafta fark
 * edilmezken ince arayüz yazılarını yayıyor. Sayfadaki <img> ile şemadaki
 * screenshot adresi aynı dosyayı göstersin diye her çağrı bunu kullanır;
 * seçenekler ayrışırsa Astro ikinci bir dosya üretir.
 */
export function productImageOptions(image: ImageMetadata): {
  width: number;
  quality?: 'max';
} {
  return isLandscape(image)
    ? { width: PRODUCT_WIDE_IMAGE_WIDTH, quality: 'max' }
    : { width: PRODUCT_IMAGE_WIDTH };
}

const OS_LABELS: Record<string, string> = {
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
};

/**
 * Künye rozetindeki platform adları.
 *
 * Kaynak olarak önce app.operatingSystem kullanılıyor — yani sayfada görünen
 * platform listesi ile SoftwareApplication şemasına yazılan değer aynı yerden
 * geliyor. İkisinin ayrışması, sayfada bulunmayan bir bilgiyi yapılandırılmış
 * veride bildirmek anlamına gelirdi.
 *
 * app bloğu yoksa mağaza bağlantılarına düşülüyor: "iOS" yazabilmek için
 * App Store'da gerçekten bir sayfa olması gerekiyor.
 *
 * Adlar işletim sistemi adı olduğu için iki dilde de aynı; ui.ts'e çeviri
 * girmiyor.
 */
export function platformLabels(data: ProjectData): string[] {
  if (data.app?.operatingSystem) {
    return data.app.operatingSystem
      .split(',')
      .map((os) => os.trim())
      .filter(Boolean)
      .map((os) => OS_LABELS[os.toLowerCase()] ?? os);
  }

  const platforms: string[] = [];
  if (data.stores.appStore) platforms.push('iOS');
  if (data.stores.googlePlay) platforms.push('Android');
  if (data.stores.web) platforms.push('Web');
  return platforms;
}

/**
 * İlgili alan yalnızca düzeni görmek için doldurulmuş örnek veri mi?
 * Öyleyse sayfada görünür ama yapılandırılmış veriye girmez.
 */
export function isPlaceholder(
  data: ProjectData,
  field: 'rating' | 'testimonials'
): boolean {
  return data.placeholderData.includes(field);
}

// Aynı ürün iki dilde ve birden çok sayfada render edildiği için uyarı
// yineleniyor; bir kez basılsın diye görülenler burada tutuluyor.
const warned = new Set<string>();

function warnOnce(key: string, message: string): void {
  if (warned.has(key)) return;
  warned.add(key);
  console.warn(message);
}

/**
 * Sayfada duran ama gerçek olmayan her şeyi derlemede yüzümüze söyler:
 * bağlantısı gelmemiş mağaza rozetleri ve düzeni görmek için doldurulmuş
 * örnek veriler. İkisi de yayına sessizce çıkmamalı.
 */
export function warnUnfinishedData(title: string, data: ProjectData): void {
  const { pending } = data.stores;
  if (pending.length > 0) {
    warnOnce(
      `stores:${title}:${pending.join(',')}`,
      `[ürünler] "${title}": ${pending.join(', ')} bağlantısı eksik. ` +
        'Rozet tıklanamaz yer tutucu olarak basılıyor; yayına çıkmadan önce ' +
        'stores alanına adresi ekleyip pending listesinden çıkarın.'
    );
  }

  const placeholders = data.placeholderData;
  if (placeholders.length > 0) {
    warnOnce(
      `placeholder:${title}:${placeholders.join(',')}`,
      `[ürünler] "${title}": ${placeholders.join(', ')} alanı ÖRNEK VERİ. ` +
        'Sayfada görünüyor ama yapılandırılmış veriye dahil edilmedi. ' +
        'Yayına çıkmadan önce gerçeğiyle değiştirip placeholderData ' +
        'listesinden çıkarın.'
    );
  }
}
