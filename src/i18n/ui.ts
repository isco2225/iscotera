export const languages = {
  tr: 'Türkçe',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'tr';

// Statik sayfaların iki dildeki karşılıkları (hreflang ve dil değiştirici için)
export const routes = {
  tr: {
    home: '/',
    about: '/hakkimizda/',
    services: '/hizmetler/',
    projects: '/projeler/',
    blog: '/blog/',
    contact: '/iletisim/',
  },
  en: {
    home: '/en/',
    about: '/en/about/',
    services: '/en/services/',
    projects: '/en/projects/',
    blog: '/en/blog/',
    contact: '/en/contact/',
  },
} as const;

export const ui = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.projects': 'Ürünler',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'footer.rights': 'Tüm hakları saklıdır.',
    'blog.readMore': 'Devamını oku',
    'blog.empty': 'Henüz yayınlanmış yazı yok.',
    'projects.empty': 'Ürün detayları yakında eklenecek.',
    'meta.siteName': 'İscotera',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Products',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'blog.readMore': 'Read more',
    'blog.empty': 'No posts published yet.',
    'projects.empty': 'Product details coming soon.',
    'meta.siteName': 'İscotera',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
