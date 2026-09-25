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
    'footer.tagline': 'Web, mobil ve özel yazılım geliştiren bir yazılım firması.',
    'footer.pages': 'Sayfalar',
    'footer.social': 'Sosyal medya',
    'blog.readMore': 'Devamını oku',
    'blog.empty': 'Henüz yayınlanmış yazı yok.',
    'projects.empty': 'Ürün detayları yakında eklenecek.',
    'services.caseStudy': 'Bu hizmetle yaptığımız işe bakın',
    'services.detail': 'Detaylı incele',
    'services.ctaTitle': 'Hangisinin size uyduğundan emin değil misiniz?',
    'services.ctaText':
      'İhtiyacınızı iletin; size uygun hizmeti ve kapsamı birlikte değerlendirelim.',

    // Hizmet detay sayfasının bölüm başlıkları (ServicePage.astro)
    'service.scope': 'Neler yapıyoruz?',
    'service.approach': 'Yaklaşımımız',
    'service.faq': 'Sıkça sorulan sorular',
    'service.caseTitle': 'Bu hizmetle yaptığımız iş',
    'service.ctaTitle': 'Projenizi konuşalım',
    'service.ctaText':
      'İhtiyacınızı iletin; değerlendirmemizi öngörülen süre ve bütçeyle birlikte yazılı olarak paylaşalım.',
    'service.ctaButton': 'Bize ulaşın',
    'service.ctaSecondary': 'Ürünlerimize bakın',
    'meta.siteName': 'İscotera',

    // Ürün sayfası
    'product.status.live': 'Yayında',
    'product.status.beta': 'Beta',
    'product.status.development': 'Geliştiriliyor',
    'product.features': 'Öne çıkan özellikler',
    'product.client': 'Müşteri',
    'product.sector': 'Sektör',
    'product.services': 'Bu projede kullandığımız hizmetler',
    // Görsellerin altındaki not; screenshotsIllustrative açık olan üründe basılır.
    'product.illustrative': 'Görüntüdeki veriler temsilidir.',
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
      'Aklınızdaki fikri birlikte değerlendirelim; yol haritasını ve bütçeyi yazılı olarak paylaşalım.',
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
    'footer.tagline': 'A software company building web, mobile and custom software.',
    'footer.pages': 'Pages',
    'footer.social': 'Social media',
    'blog.readMore': 'Read more',
    'blog.empty': 'No posts published yet.',
    'projects.empty': 'Product details coming soon.',
    'services.caseStudy': 'See the work we built with it',
    'services.detail': 'See details',
    'services.ctaTitle': 'Not sure which one fits?',
    'services.ctaText':
      "Tell us what you need and we'll assess together which service and scope fit.",

    'service.scope': 'What we do',
    'service.approach': 'How we approach it',
    'service.faq': 'Frequently asked questions',
    'service.caseTitle': 'Work we built with this service',
    'service.ctaTitle': "Let's talk about your project",
    'service.ctaText':
      "Tell us what you need and we'll share our assessment in writing, with an estimated timeline and budget.",
    'service.ctaButton': 'Get in touch',
    'service.ctaSecondary': 'See our products',
    'meta.siteName': 'İscotera',

    // Product page
    'product.status.live': 'Live',
    'product.status.beta': 'Beta',
    'product.status.development': 'In development',
    'product.features': 'What it does',
    'product.client': 'Client',
    'product.sector': 'Sector',
    'product.services': 'Services we used on this project',
    'product.illustrative': 'Data shown in the screenshot is illustrative.',
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
      "Tell us what you have in mind; we'll assess it together and share the roadmap and budget in writing.",
    'product.ctaContactLink': 'Get in touch',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
