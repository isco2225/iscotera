import type { CollectionEntry } from 'astro:content';

type ProjectData = CollectionEntry<'projects'>['data'];

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

// Aynı ürün iki dilde ve birden çok sayfada render edildiği için uyarı
// yineleniyor; bir kez basılsın diye görülenler burada tutuluyor.
const warnedPending = new Set<string>();

/**
 * stores.pending dolu kaldığı sürece sayfada tıklanamaz bir rozet duruyor.
 * Bu, bağlantı gelene kadar düzeni görmek için konan geçici bir yer tutucu —
 * yayına sessizce çıkmasın diye her derlemede uyarı basılıyor.
 */
export function warnPendingStores(title: string, data: ProjectData): void {
  if (data.stores.pending.length === 0) return;
  const key = `${title}:${data.stores.pending.join(',')}`;
  if (warnedPending.has(key)) return;
  warnedPending.add(key);
  console.warn(
    `[ürünler] "${title}": ${data.stores.pending.join(', ')} bağlantısı eksik. ` +
      'Rozet tıklanamaz yer tutucu olarak basılıyor; yayına çıkmadan önce ' +
      'stores alanına adresi ekleyip pending listesinden çıkarın.'
  );
}
