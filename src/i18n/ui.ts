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
    projects: '/urunler/',
    blog: '/blog/',
    contact: '/iletisim/',
  },
  en: {
    home: '/en/',
    about: '/en/about/',
    services: '/en/services/',
    projects: '/en/products/',
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
    'services.caseStudy': 'Bu hizmetle yaptığımız işe bakın',
    'services.detail': 'Detaylı incele',
    'services.ctaTitle': 'Hangisinin size uyduğundan emin değil misiniz?',
    'services.ctaText':
      'İhtiyacınızı anlatın; size dürüst bir değerlendirme çıkaralım.',

    // Hizmet detay sayfasının bölüm başlıkları (ServicePage.astro)
    'service.scope': 'Neler yapıyoruz?',
    'service.approach': 'Yaklaşımımız',
    'service.faq': 'Sıkça sorulan sorular',
    'service.caseTitle': 'Bu hizmetle yaptığımız iş',
    'service.ctaTitle': 'Projenizi konuşalım',
    'service.ctaText':
      'İhtiyacınızı anlatın; size dürüst bir değerlendirme, net bir süre ve bütçe çıkaralım.',
    'service.ctaButton': 'Bize ulaşın',
    'service.ctaSecondary': 'Ürünlerimize bakın',
    'meta.siteName': 'İscotera',

    // Ürün sayfası
    'product.status.live': 'Yayında',
    'product.status.beta': 'Beta',
    'product.status.development': 'Geliştiriliyor',
    'product.features': 'Öne çıkan özellikler',
    'product.testimonials': 'Kullanıcılar ne diyor?',
    'product.faq': 'Sıkça sorulan sorular',
    // {value} ve {count} bileşende gerçek değerlerle değiştirilir.
    'product.ratingAria': '5 üzerinden {value} puan, {count} değerlendirmeye göre.',
    'product.ratingUnit': 'değerlendirme',
    'product.ratingUnitPlural': 'değerlendirme',
    // "App Store" ve "Google Play" marka adı; çevrilmez.
    'product.appStore': "App Store",
    'product.googlePlay': "Google Play",
    'product.website': 'Web sitesini incele',
    'product.ctaStoreTitle': 'Uygulamayı deneyin',
    'product.ctaStoreText': 'Ücretsiz indirin, kendiniz görün.',
    'product.ctaContactTitle': 'Benzer bir ürün mü düşünüyorsunuz?',
    'product.ctaContactText':
      'Aklınızdaki fikri birlikte konuşalım; size dürüst bir yol haritası ve net bir bütçe çıkaralım.',
    'product.ctaContactLink': 'Bize ulaşın',
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
    'services.caseStudy': 'See the work we built with it',
    'services.detail': 'See details',
    'services.ctaTitle': 'Not sure which one fits?',
    'services.ctaText':
      "Tell us what you need and we'll give you an honest assessment.",

    'service.scope': 'What we do',
    'service.approach': 'How we approach it',
    'service.faq': 'Frequently asked questions',
    'service.caseTitle': 'Work we built with this service',
    'service.ctaTitle': "Let's talk about your project",
    'service.ctaText':
      "Tell us what you need and we'll give you an honest assessment with a clear timeline and budget.",
    'service.ctaButton': 'Get in touch',
    'service.ctaSecondary': 'See our products',
    'meta.siteName': 'İscotera',

    // Product page
    'product.status.live': 'Live',
    'product.status.beta': 'Beta',
    'product.status.development': 'In development',
    'product.features': 'What it does',
    'product.testimonials': 'What people say',
    'product.faq': 'Frequently asked questions',
    'product.ratingAria': 'Rated {value} out of 5, based on {count} ratings.',
    'product.ratingUnit': 'rating',
    'product.ratingUnitPlural': 'ratings',
    'product.appStore': 'Download on the App Store',
    'product.googlePlay': 'Get it on Google Play',
    'product.website': 'Visit the website',
    'product.ctaStoreTitle': 'Try the app',
    'product.ctaStoreText': 'Download it for free and see for yourself.',
    'product.ctaContactTitle': 'Thinking about a product like this?',
    'product.ctaContactText':
      "Tell us what you have in mind and we'll map out an honest plan and a clear budget.",
    'product.ctaContactLink': 'Get in touch',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
