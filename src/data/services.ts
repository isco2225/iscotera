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
        'Kurumsal siteler ve web uygulamaları. Hızlı açılan, arama motorlarında görünen ve içeriğini kendi ekibinizin girebildiği sistemler kuruyoruz.',
    },
    en: {
      slug: 'web-application-development',
      title: 'Web Application Development',
      summary:
        'Corporate sites and web applications. We build systems that load fast, show up in search results and let your own team handle the content.',
    },
  },
  {
    id: 'mobile',
    tr: {
      slug: 'mobil-uygulama-gelistirme',
      title: 'Mobil Uygulama Geliştirme',
      summary:
        'iOS ve Android uygulamaları. Tek kaynaktan geliştirdiğimiz için yeni özellik iki platforma aynı anda gelir, bakım maliyeti ikiye katlanmaz.',
    },
    en: {
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      summary:
        'iOS and Android apps. We build from a single source, so a new feature reaches both platforms at once and maintenance does not cost twice as much.',
    },
  },
  {
    id: 'custom-software',
    tr: {
      slug: 'ozel-yazilim-cozumleri',
      title: 'Özel Yazılım Çözümleri',
      summary:
        'İşinizin kendi akışına göre otomasyon ve entegrasyon. Hazır bir paket ihtiyacınızı karşılıyorsa, yazılım geliştirmeden önce bunu söyleriz.',
    },
    en: {
      slug: 'custom-software-solutions',
      title: 'Custom Software Solutions',
      summary:
        'Automation and integration shaped around how your business already works. If an off-the-shelf product covers your need, we say so before building anything.',
    },
  },
  {
    id: 'consulting',
    tr: {
      slug: 'yazilim-danismanligi',
      title: 'Yazılım Danışmanlığı',
      summary:
        'Mimari kararlar, teknoloji seçimi ve ekibinize teknik destek. Devraldığımız bir sistem varsa, önce nerede durduğunu yazılı olarak çıkarırız.',
    },
    en: {
      slug: 'software-consulting',
      title: 'Software Consulting',
      summary:
        'Architecture decisions, technology choices and support for your team. If we are taking over an existing system, we first put its current state in writing.',
    },
  },
];
