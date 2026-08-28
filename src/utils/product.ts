import type { CollectionEntry } from 'astro:content';

type Stores = CollectionEntry<'projects'>['data']['stores'];

/**
 * Künye rozetindeki platform adları. Kaynak olarak mağaza bağlantıları
 * kullanılıyor: "iOS" yazabilmek için App Store'da gerçekten bir sayfanın
 * olması gerekiyor, aksi halde kanıtlayamadığımız bir şey iddia etmiş oluruz.
 *
 * Adlar işletim sistemi/platform adı olduğu için iki dilde de aynı; ui.ts'e
 * çeviri girmiyor.
 */
export function platformsFromStores(stores: Stores): string[] {
  const platforms: string[] = [];
  if (stores.appStore) platforms.push('iOS');
  if (stores.googlePlay) platforms.push('Android');
  if (stores.web) platforms.push('Web');
  return platforms;
}
