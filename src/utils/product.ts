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
 * 520px, görsellerin ekranda kapladığı en geniş yerin (~300px) iki katına
 * yakın; yüksek yoğunluklu ekranlarda da net duruyor.
 */
export const PRODUCT_IMAGE_WIDTH = 520;

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
