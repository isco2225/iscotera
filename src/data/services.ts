// Hizmet sayfalarının tek kaynağı. Yeni hizmet eklemek için buraya bir kayıt
// eklemek yeterli; TR ve EN sayfaları otomatik oluşur.

export interface ServiceContent {
  slug: string;
  title: string;
  summary: string;
}

export interface Service {
  id: string;
  tr: ServiceContent;
  en: ServiceContent;
}

export const services: Service[] = [
  {
    id: 'web',
    tr: {
      slug: 'web-uygulama-gelistirme',
      title: 'Web Uygulama Geliştirme',
      summary:
        'Kurumsal web siteleri ve modern web tabanlı uygulamalar geliştiriyoruz.',
    },
    en: {
      slug: 'web-application-development',
      title: 'Web Application Development',
      summary:
        'We build corporate websites and modern web-based applications.',
    },
  },
  {
    id: 'mobile',
    tr: {
      slug: 'mobil-uygulama-gelistirme',
      title: 'Mobil Uygulama Geliştirme',
      summary: 'iOS ve Android için performanslı mobil uygulamalar geliştiriyoruz.',
    },
    en: {
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      summary: 'We develop high-performance mobile apps for iOS and Android.',
    },
  },
  {
    id: 'custom-software',
    tr: {
      slug: 'ozel-yazilim-cozumleri',
      title: 'Özel Yazılım Çözümleri',
      summary:
        'İşletmenize özel otomasyon, entegrasyon ve kurumsal yazılım çözümleri üretiyoruz.',
    },
    en: {
      slug: 'custom-software-solutions',
      title: 'Custom Software Solutions',
      summary:
        'We deliver tailor-made automation, integration and enterprise software solutions.',
    },
  },
  {
    id: 'consulting',
    tr: {
      slug: 'yazilim-danismanligi',
      title: 'Yazılım Danışmanlığı',
      summary:
        'Teknik danışmanlık, mimari tasarım ve ekip desteği sağlıyoruz.',
    },
    en: {
      slug: 'software-consulting',
      title: 'Software Consulting',
      summary:
        'We provide technical consulting, architecture design and team support.',
    },
  },
];
