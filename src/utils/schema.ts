import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

/**
 * Sayfalar arasında paylaşılan yapılandırılmış veri kimlikleri.
 *
 * Organization ve WebSite düğümlerini her sayfada BaseLayout basıyor. Sayfaya
 * özel düğümler (ör. blog yazısının BlogPosting'i) firmayı yeniden yazmak
 * yerine `@id` ile gösteriyor; Google ikisini tek varlık olarak birleştiriyor.
 * Böylece aynı bilgi iki yerde durmuyor ve zamanla ayrışamıyor.
 */
export function organizationId(site: URL | undefined): string {
  return new URL('#organization', site).toString();
}

export function websiteId(site: URL | undefined): string {
  return new URL('#website', site).toString();
}

// Şemadaki dil etiketi; sayfadaki <html lang> ile aynı bilgiyi taşır ama
// şema tarafında ülke kodlu biçim bekleniyor.
const LOCALES: Record<Lang, string> = { tr: 'tr-TR', en: 'en-US' };

export function localeTag(lang: Lang): string {
  return LOCALES[lang];
}

/**
 * Blog yazısının BlogPosting şeması.
 *
 * İki dilin yazı sayfası ayrı dosyalar; şema tek yerden üretiliyor ki
 * alanlar diller arasında ayrışmasın.
 *
 * `author` da `publisher` da firmayı gösteriyor: yazılar tek tek imzalı
 * değil, sayfada "İscotera Ekibi" yazıyor. Sayfada görünmeyen bir yazar adı
 * uydurmak yerine görünen neyse o bildiriliyor.
 *
 * `image`, yazının kapak fotoğrafı varsa sayfada basılan görselin mutlak
 * adresidir; kapağı olmayan yazıda alan hiç yazılmaz. Olmayan bir adresi
 * bildirmek hata verir, o yüzden değer sayfadaki <img> ile aynı üretimden
 * gelir.
 */
export function blogPostingSchema({
  post,
  canonical,
  site,
  lang,
  image,
}: {
  post: CollectionEntry<'blog'>;
  canonical: URL;
  site: URL | undefined;
  lang: Lang;
  image?: string;
}): Record<string, unknown> {
  const { title, description, pubDate, updatedDate, tags } = post.data;
  const org = { '@id': organizationId(site) };

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: pubDate.toISOString(),
    // Güncellenmediyse de bildiriliyor: Google iki alanın da bulunmasını
    // bekliyor, yayın tarihine eşitlemek doğru bilgi.
    dateModified: (updatedDate ?? pubDate).toISOString(),
    inLanguage: localeTag(lang),
    author: org,
    publisher: org,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical.toString() },
    ...(image ? { image } : {}),
    ...(tags.length > 0 ? { keywords: tags.join(', ') } : {}),
  };
}
