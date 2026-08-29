// Hizmet sayfalarının tek kaynağı. Yeni hizmet eklemek için buraya bir kayıt
// eklemek yeterli; TR ve EN sayfaları otomatik oluşur.
//
// Metinlerdeki taahhütler (yazılı fiyat, hesapların müşteri adına açılması,
// bakım desteği) gerçekten tutulabilecek sözler olmalı — ana sayfadaki süreç
// adımlarıyla aynı kural.

export interface ServiceItem {
  title: string;
  text: string;
}

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  title: string;
  summary: string;
  /** Liste sayfasındaki fotoğrafın alt metni. Fotoğrafın kendisi id ile
      eşleşir: src/assets/services/<id>.jpg (bkz. ServiceStrip.astro). */
  imageAlt: string;
  /** Hero paragrafları: özetten uzun, hizmetin derdini anlatan giriş. */
  intro: string[];
  /** "Neler yapıyoruz?" kartları. */
  scope: ServiceItem[];
  /** "Yaklaşımımız" maddeleri: tez + açıklama. */
  approach: ServiceItem[];
  /** Sıkça sorulan sorular. Gerçek içerik olduğu için FAQPage şemasına da girer. */
  faq: ServiceFaqItem[];
}

export interface Service {
  id: string;
  /** Bu hizmetle yapılmış işin projects koleksiyonundaki slug'ı (dil öneksiz).
      Ürün yayında değilse sayfadaki bölüm kendiliğinden gizlenir. */
  caseStudy?: string;
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
      imageAlt: 'Kod editörü açık bir dizüstü bilgisayarla çalışma masası',
      intro: [
        'Kurumsal tanıtım sitelerinden yönetim panellerine kadar, tarayıcıda çalışan her ölçekte yazılım geliştiriyoruz. Bu site dahil: burada gördüğünüz hız ve yapı, müşterilerimize kurduğumuz altyapının aynısı.',
        'Bir web sitesi bizim için tasarımdan ibaret değil. Arama motorunda bulunmak, saniyeler içinde açılmak ve içeriğini sizin ekibinizin güncelleyebilmesi, işin tanımına baştan dahil.',
      ],
      scope: [
        {
          title: 'Kurumsal web siteleri',
          text: 'Firmanızı anlatan, arama motorlarında görünen ve hızlı açılan tanıtım siteleri. İçerik altyapısını da kurarız; yeni sayfa eklemek için bize muhtaç kalmazsınız.',
        },
        {
          title: 'Web uygulamaları',
          text: 'Müşteri panelleri, yönetim panoları, rezervasyon ve takip ekranları. Tarayıcıdan çalışır, kurulum gerektirmez, her cihazda aynı hesaba açılır.',
        },
        {
          title: 'Mevcut sitenin iyileştirilmesi',
          text: 'Yavaş açılan ya da aramada görünmeyen siteniz için önce ölçer, sonra düzeltiriz. Sıfırdan yazmak çoğu zaman gerekmez; gerekiyorsa nedenini yazılı gösteririz.',
        },
      ],
      approach: [
        {
          title: 'Hız sonradan eklenmez',
          text: "Sayfalarınız statik üretilir: sunucu beklemez, ziyaretçi beklemez. Google hızı sıralama kriteri olarak kullandığı için bu doğrudan görünürlük demektir.",
        },
        {
          title: 'SEO kurulumla gelir',
          text: "Başlık, açıklama, canonical, site haritası ve yapılandırılmış veri her sayfada standart olarak kurulur — sonradan ayrı bir 'SEO çalışması' satın almazsınız.",
        },
        {
          title: 'İçerik sizde kalır',
          text: 'Metinleri ve görselleri ekibiniz günceller; alan adı ve barındırma hesapları sizin adınıza açılır. Bize bağımlı kalmazsınız.',
        },
      ],
      faq: [
        {
          q: 'Kurumsal bir site ne kadar sürede yayına alınır?',
          a: 'İçerik hazırsa birkaç hafta içinde. Süreyi uzatan genellikle kod değil, metin ve görsellerin toplanmasıdır; planlama aşamasında bunun için birlikte takvim çıkarırız.',
        },
        {
          q: 'Mevcut sitemizi sıfırdan mı yazmak gerekir?',
          a: 'Çoğu zaman hayır. Önce mevcut durumu ölçer, neyin tutulup neyin değişmesi gerektiğini yazılı raporlarız. Sıfırdan yazmayı ancak gerekçesini gösterebildiğimizde öneririz.',
        },
        {
          q: 'İçerikleri kendimiz güncelleyebilir miyiz?',
          a: 'Evet. İçerik yönetim altyapısını kurup ekibinize teslim ederiz; kısa bir eğitimle yazı, görsel ve sayfa eklemeyi kendiniz yaparsınız.',
        },
        {
          q: 'Alan adı ve barındırma kimin üzerine olur?',
          a: 'Sizin. Hesapları sizin adınıza açar, kurulumu yapar, erişim bilgilerini teslim ederiz. Bizimle yollarınız ayrılsa bile siteniz size ait kalır.',
        },
      ],
    },
    en: {
      slug: 'web-application-development',
      title: 'Web Application Development',
      summary:
        'Corporate sites and web applications. We build systems that load fast, show up in search results and let your own team handle the content.',
      imageAlt: 'A desk with a laptop showing a code editor',
      intro: [
        'From corporate sites to admin panels, we build software that runs in the browser — including this site: the speed and structure you see here are the same foundation we set up for clients.',
        'For us a website is more than its design. Showing up in search results, opening in seconds and letting your own team update the content are part of the job description from day one.',
      ],
      scope: [
        {
          title: 'Corporate websites',
          text: "Sites that tell your story, show up in search and open fast. We also set up the content infrastructure, so adding a new page doesn't require calling us.",
        },
        {
          title: 'Web applications',
          text: 'Customer portals, dashboards, booking and tracking screens. They run in the browser, need no installation and open to the same account on every device.',
        },
        {
          title: 'Improving an existing site',
          text: 'If your site is slow or invisible in search, we measure first, then fix. A full rewrite is rarely necessary — and when it is, we show the reasoning in writing.',
        },
      ],
      approach: [
        {
          title: 'Speed is not an add-on',
          text: 'Your pages are statically generated: no server round-trip, no waiting. Google uses speed as a ranking signal, so this is visibility, not vanity.',
        },
        {
          title: 'SEO ships with the site',
          text: "Titles, descriptions, canonical URLs, the sitemap and structured data are wired into every page from the start — not sold to you later as a separate 'SEO project'.",
        },
        {
          title: 'The content stays yours',
          text: 'Your team updates text and images; domain and hosting accounts are opened in your name. You are never locked in to us.',
        },
      ],
      faq: [
        {
          q: 'How long does a corporate site take?',
          a: 'A few weeks once the content is ready. What stretches the timeline is usually not code but collecting text and images — we plan a schedule for that together at the start.',
        },
        {
          q: 'Do we have to rewrite our current site from scratch?',
          a: 'Usually not. We first assess what you have and report in writing what should stay and what should change. We only recommend a rewrite when we can show the reasoning.',
        },
        {
          q: 'Can we update the content ourselves?',
          a: 'Yes. We set up the content management system and hand it over to your team; after a short training you add posts, images and pages yourself.',
        },
        {
          q: 'Who owns the domain and hosting?',
          a: 'You do. We open the accounts in your name, do the setup and hand over the credentials. Even if we part ways, the site remains yours.',
        },
      ],
    },
  },
  {
    id: 'mobile',
    caseStudy: 'ibadet-rehberim',
    tr: {
      slug: 'mobil-uygulama-gelistirme',
      title: 'Mobil Uygulama Geliştirme',
      summary:
        'iOS ve Android uygulamaları. Tek kaynaktan geliştirdiğimiz için yeni özellik iki platforma aynı anda gelir, bakım maliyeti ikiye katlanmaz.',
      imageAlt: 'Elindeki akıllı telefonu kullanan bir kişi',
      intro: [
        'iOS ve Android için tek kod tabanından uygulama geliştiriyoruz: bir özellik iki platforma aynı anda gelir, bakım maliyeti ikiye katlanmaz.',
        'Kendi uygulamamızı geliştirip mağazalarda yayınladığımız için başvuru, inceleme ve yayın sonrası sürecin tamamını kendi tecrübemizden biliyoruz.',
      ],
      scope: [
        {
          title: 'iOS ve Android uygulamaları',
          text: "Tek kod tabanından iki mağazaya. Tasarım her platformun kendi alışkanlıklarına uyar; kullanıcı 'çeviri uygulama' hissi almaz.",
        },
        {
          title: 'Mağaza süreci bizde',
          text: 'App Store ve Google Play başvurularını, inceleme yazışmalarını ve sürüm yönetimini biz yürütürüz. Hesaplar sizin adınıza açılır.',
        },
        {
          title: 'Bildirim ve entegrasyonlar',
          text: 'Anlık bildirim, ödeme, harita, kamera ve mevcut sistemlerinizle bağlantı — uygulamanın işinize dokunan her ucunu birlikte planlarız.',
        },
      ],
      approach: [
        {
          title: 'Önce çekirdek işlev',
          text: 'İlk sürüm, uygulamanın varlık sebebini eksiksiz yapar; listeyi kabartan özellikler sonraki sürümlere yazılır. Mağazaya erken çıkar, gerçek kullanıcı geri bildirimiyle ilerlersiniz.',
        },
        {
          title: 'Yayın günü iş bitmez',
          text: 'Çökme raporlarını ve performansı yayından sonra da izleriz; işletim sistemi güncellemeleri uygulamanızı kırmadan yetişir.',
        },
        {
          title: 'Gerektiğinde platforma özel kod',
          text: 'Tek kaynak çoğu ihtiyacı karşılar; karşılamadığı yerde o bölümü platformun kendi diliyle yazarız. Araç seçimini dogma yapmayız.',
        },
      ],
      faq: [
        {
          q: 'Tek kod tabanı uygulamayı yavaşlatmaz mı?',
          a: 'İş uygulamalarının büyük bölümünde fark ölçülemeyecek kadar küçüktür. Yoğun grafik ya da cihaza özel işlem gereken bölümler olursa, o bölümleri platforma özel yazarız.',
        },
        {
          q: 'Mağaza hesapları kimin üzerine açılır?',
          a: 'Sizin adınıza. Apple ve Google geliştirici hesaplarını birlikte açar, uygulamayı sizin hesabınızdan yayınlarız; uygulamanın sahibi her aşamada sizsiniz.',
        },
        {
          q: 'Uygulamam ne kadara mal olur?',
          a: 'Kapsama göre değişir; bu yüzden önce kapsamı maddelere ayırır, her maddenin süresini ve fiyatını yazılı veririz. Tek satır kod yazılmadan toplam maliyeti bilirsiniz.',
        },
        {
          q: 'Yayından sonra güncellemeleri kim yapar?',
          a: 'Tercih sizin: bakım anlaşmasıyla hata düzeltmeleri, işletim sistemi uyumu ve yeni özellikler bizden — ya da kodu ve dokümantasyonu ekibinize devrederiz.',
        },
      ],
    },
    en: {
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      summary:
        'iOS and Android apps. We build from a single source, so a new feature reaches both platforms at once and maintenance does not cost twice as much.',
      imageAlt: 'A person using the smartphone in their hands',
      intro: [
        "We build iOS and Android apps from a single codebase: a new feature reaches both platforms at once, and maintenance doesn't cost twice.",
        'We have built and shipped our own app to both stores, so we know the submission, review and post-launch process from first-hand experience.',
      ],
      scope: [
        {
          title: 'iOS and Android apps',
          text: "One codebase, two stores. The design follows each platform's own conventions, so the app never feels like a rough port.",
        },
        {
          title: 'Store submission handled',
          text: 'We run the App Store and Google Play submissions, the review correspondence and version management. The accounts are opened in your name.',
        },
        {
          title: 'Notifications and integrations',
          text: 'Push notifications, payments, maps, camera and connections to your existing systems — we plan every edge where the app touches your business.',
        },
      ],
      approach: [
        {
          title: 'Core function first',
          text: "The first release does the app's reason for existing, completely; nice-to-haves go to later versions. You reach the store early and iterate on real user feedback.",
        },
        {
          title: 'Launch day is not the finish line',
          text: 'We keep watching crash reports and performance after release, and OS updates are handled before they break your app.',
        },
        {
          title: 'Platform-specific code when it earns it',
          text: "A single codebase covers most needs; where it doesn't, we write that part in the platform's own language. We don't treat tool choices as dogma.",
        },
      ],
      faq: [
        {
          q: "Doesn't a single codebase make the app slower?",
          a: 'For most business apps the difference is too small to measure. If a section needs heavy graphics or device-specific work, we write that section natively.',
        },
        {
          q: 'Whose name are the store accounts under?',
          a: 'Yours. We open the Apple and Google developer accounts together and publish from your account; you own the app at every stage.',
        },
        {
          q: 'How much will my app cost?',
          a: 'It depends on scope — which is why we break the scope into items and put a duration and price on each, in writing. You know the total before a line of code is written.',
        },
        {
          q: 'Who handles updates after launch?',
          a: 'Your choice: with a maintenance agreement we cover fixes, OS compatibility and new features — or we hand the code and documentation over to your team.',
        },
      ],
    },
  },
  {
    id: 'custom-software',
    tr: {
      slug: 'ozel-yazilim-cozumleri',
      title: 'Özel Yazılım Çözümleri',
      summary:
        'İşinizin kendi akışına göre otomasyon ve entegrasyon. Hazır bir paket ihtiyacınızı karşılıyorsa, yazılım geliştirmeden önce bunu söyleriz.',
      imageAlt: 'Depoda elindeki tabletle stok kontrolü yapan çalışan',
      intro: [
        'Elle yürüttüğünüz, tablolar arasında kopyaladığınız ya da iki programın birbirini anlamamasından doğan işleri yazılıma devrediyoruz.',
        'Önce hazır bir çözüm var mı diye bakarız; varsa onu söyleriz. Özel yazılım, ihtiyacınızı hiçbir paketin karşılamadığı yerde başlar — ve tam da işinizin şekline göre yazılır.',
      ],
      scope: [
        {
          title: 'Sistem entegrasyonları',
          text: 'Muhasebe, e-ticaret, kargo, ödeme — birbirinden habersiz çalışan programlarınızı konuşturur, aynı veriyi iki kez girmeyi ortadan kaldırırız.',
        },
        {
          title: 'Süreç otomasyonu',
          text: 'Her gün elle tekrarlanan işler — rapor çıkarma, veri aktarma, sipariş takibi — kurallara bağlanır ve kendi kendine yürür; ekibiniz yalnızca istisnalarla ilgilenir.',
        },
        {
          title: 'İşe özel iç araçlar',
          text: "Excel'den taşan süreçler için ekibinizin kullanacağı panel ve ekranlar: stok, saha, üretim takibi — işin gerektirdiği kadar, fazlası değil.",
        },
      ],
      approach: [
        {
          title: 'Önce hazır çözüm ararız',
          text: 'Piyasada işinizi gören bir paket varsa onu öneririz. Özel yazılımı ancak gerçekten gerektiğinde yazarız; bu dürüstlük iki tarafın da zamanını korur.',
        },
        {
          title: 'En ağrılı süreçten başlarız',
          text: 'Her şeyi kapsayan dev bir proje yerine, en çok vakit yakan işi önce otomatikleştiririz. Kazancı ilk aydan görürsünüz; sonraki adıma birlikte karar veririz.',
        },
        {
          title: 'Veriniz rehin kalmaz',
          text: 'Sistemdeki her veri dışa aktarılabilir olur ve dokümantasyonuyla teslim edilir. Yarın başka bir ekiple çalışmak isterseniz önünüzde engel olmayız.',
        },
      ],
      faq: [
        {
          q: 'Kullandığımız hazır programı bırakmamız mı gerekir?',
          a: 'Hayır — çoğu projede tam tersi: hazır programınız kalır, biz eksik parçayı yazar ve ona bağlarız. Entegrasyon, işimizin en büyük kısmıdır.',
        },
        {
          q: "Süreçlerimizi Excel'le yönetiyoruz, sorun mu?",
          a: "Sorun değil, iyi bir başlangıç: Excel'iniz ihtiyacın ne olduğunu zaten belgelemiş demektir. Taşmaya başladığı noktada onu adım adım yazılıma taşırız.",
        },
        {
          q: 'Fiyat neye göre belirlenir?',
          a: 'Kapsama göre. İhtiyacı maddelere ayırır, her maddenin süresini ve fiyatını yazılı veririz; onayladığınız belge projenin sonuna kadar ortak referansımızdır.',
        },
        {
          q: 'Sistem kurulduktan sonra bakımını kim yapar?',
          a: 'Tercih sizin: bakım anlaşmasıyla biz üstleniriz ya da dokümantasyon ve eğitimiyle ekibinize devrederiz. İki durumda da kod ve veri sizde kalır.',
        },
      ],
    },
    en: {
      slug: 'custom-software-solutions',
      title: 'Custom Software Solutions',
      summary:
        'Automation and integration shaped around how your business already works. If an off-the-shelf product covers your need, we say so before building anything.',
      imageAlt: 'A warehouse worker checking stock on a tablet',
      intro: [
        "We take the work you run by hand — copied between spreadsheets, or stuck between two programs that won't talk to each other — and hand it over to software.",
        'We look for an off-the-shelf solution first, and say so if one exists. Custom software starts where no package fits your need — and is then shaped exactly to how your business works.',
      ],
      scope: [
        {
          title: 'System integrations',
          text: 'Accounting, e-commerce, shipping, payments — we make programs that ignore each other talk, and eliminate entering the same data twice.',
        },
        {
          title: 'Process automation',
          text: 'Daily manual work — reports, data transfers, order tracking — is turned into rules that run on their own; your team only handles the exceptions.',
        },
        {
          title: 'Internal tools',
          text: 'Panels and screens for processes that have outgrown Excel: stock, field work, production tracking — as much as the job needs, and no more.',
        },
      ],
      approach: [
        {
          title: 'We look for an existing product first',
          text: "If a package on the market does the job, we recommend it. We only build custom software when it's genuinely needed — that honesty saves everyone's time.",
        },
        {
          title: 'We start with the biggest pain',
          text: 'Instead of one giant project, we automate the task that wastes the most time first. You see the gain in the first month, and we decide the next step together.',
        },
        {
          title: 'Your data is never hostage',
          text: 'Everything in the system stays exportable and is delivered with documentation. If you want to work with another team tomorrow, nothing stands in your way.',
        },
      ],
      faq: [
        {
          q: 'Do we have to abandon the software we already use?',
          a: 'No — in most projects the opposite: your existing software stays, and we build the missing piece and connect it. Integration is the biggest part of what we do.',
        },
        {
          q: 'We run everything on Excel — is that a problem?',
          a: "It's a good start: your spreadsheets have already documented what the need is. When they start to overflow, we move them into software step by step.",
        },
        {
          q: 'How is the price determined?',
          a: 'By scope. We break the need into items and put a duration and price on each in writing; the document you approve is our shared reference to the end.',
        },
        {
          q: "Who maintains the system once it's built?",
          a: 'Your choice: we take it on with a maintenance agreement, or hand it to your team with documentation and training. Either way, the code and the data stay with you.',
        },
      ],
    },
  },
  {
    id: 'consulting',
    tr: {
      slug: 'yazilim-danismanligi',
      title: 'Yazılım Danışmanlığı',
      summary:
        'Mimari kararlar, teknoloji seçimi ve ekibinize teknik destek. Devraldığımız bir sistem varsa, önce nerede durduğunu yazılı olarak çıkarırız.',
      imageAlt: 'Dizüstü bilgisayar ekranındaki kodu birlikte inceleyen iki kişi',
      intro: [
        'Yazılım kararlarının en pahalısı, yanlış verilenidir. Mimari seçimlerde, teknoloji tercihlerinde ve devraldığınız sistemlerde, karar vermeden önce yanınızda oluruz.',
        'Çalışmamızın ilk çıktısı her zaman yazılı bir değerlendirmedir: neredesiniz, riskler neler, seçenekler ne. Karar sizindir; bizim işimiz seçenekleri netleştirmektir.',
      ],
      scope: [
        {
          title: 'Mevcut sistem denetimi',
          text: 'Elinizdeki yazılımın durumunu inceler; teknik borcu, riskleri ve aciliyet sırasını yazılı raporlarız. Rapor, teknik olmayan yöneticinin okuyabileceği bir özetle başlar.',
        },
        {
          title: 'Mimari ve teknoloji seçimi',
          text: 'Yeni bir yatırımdan önce seçenekleri maliyet, ekip ve ölçek açısından karşılaştırır, gerekçeli bir öneri sunarız. Moda olan değil, işinize uyan kazanır.',
        },
        {
          title: 'Ekibinize teknik destek',
          text: 'Kod inceleme, mimari eskiz, işe alımda teknik değerlendirme — kendi yazılım ekibi olan firmalara dışarıdan deneyimli bir göz.',
        },
      ],
      approach: [
        {
          title: 'Her tespit yazılı olur',
          text: 'Toplantıda söylenen kaybolur. Denetim de öneri de belge olarak teslim edilir; altı ay sonra da açıp bakabilir, bir sonraki ekiple paylaşabilirsiniz.',
        },
        {
          title: 'Öneri, satıştan bağımsızdır',
          text: 'Danışmanlığın sonunda geliştirmeyi bize vermek zorunda değilsiniz. Rapor başka bir ekiple de uygulanabilir — bu yüzden önerimiz satmak istediğimiz şey değil, ihtiyacınız olan şeydir.',
        },
        {
          title: 'Üretimden konuşuruz',
          text: 'Tavsiyelerimiz, kendi geliştirdiğimiz ve yayında tuttuğumuz ürünlerin tecrübesine dayanır; sunumdan değil, yazılımı işletmekten geliriz.',
        },
      ],
      faq: [
        {
          q: 'Ekibimizde yazılımcı yok; rapordan bir şey anlar mıyız?',
          a: 'Evet. Her rapor, teknik olmayan bir okuyucu için yazılmış özetle başlar: durum ne, risk ne, önerimiz ne. Teknik ayrıntı, ekibiniz ya da gelecekteki geliştiriciler için ayrıca yazılır.',
        },
        {
          q: 'Başka bir firmanın yazdığı projeyi devralıyor musunuz?',
          a: "Evet, ama önce denetimle: mevcut kodun durumunu çıkarır, devralmanın maliyetini yazılı gösteririz. 'Önce bakalım, sonra söz verelim' sırası iki tarafı da korur.",
        },
        {
          q: 'Danışmanlık tek seferlik mi, sürekli mi?',
          a: 'İkisi de mümkün. Tek seferlik denetim ya da karar desteğiyle başlayabilir, isterseniz aylık düzenli destekle devam edebilirsiniz; kapsam baştan yazılıdır.',
        },
        {
          q: 'Sonunda geliştirmeyi size vermek zorunda mıyız?',
          a: 'Hayır. Rapor ve yol haritası kendi başına ayakta durur; uygulamayı kendi ekibinizle ya da başka bir firmayla da yapabilirsiniz.',
        },
      ],
    },
    en: {
      slug: 'software-consulting',
      title: 'Software Consulting',
      summary:
        'Architecture decisions, technology choices and support for your team. If we are taking over an existing system, we first put its current state in writing.',
      imageAlt: 'Two people reviewing code together on a laptop screen',
      intro: [
        'The most expensive software decision is the wrong one. We stand beside you before you decide — on architecture, on technology choices, and on systems you are taking over.',
        'The first deliverable is always a written assessment: where you stand, what the risks are, what the options cost. The decision is yours; our job is making the options clear.',
      ],
      scope: [
        {
          title: 'Audit of an existing system',
          text: 'We examine the software you have and report its technical debt, risks and priorities in writing. Every report starts with a summary a non-technical manager can read.',
        },
        {
          title: 'Architecture and technology selection',
          text: "Before a new investment we compare the options by cost, team and scale, and give a reasoned recommendation. What fits your business wins — not what's fashionable.",
        },
        {
          title: 'Support for your team',
          text: 'Code review, architecture sketches, technical evaluation in hiring — an experienced outside eye for companies with their own developers.',
        },
      ],
      approach: [
        {
          title: 'Every finding is in writing',
          text: "What's said in a meeting evaporates. Audits and recommendations are delivered as documents you can reopen six months later or hand to the next team.",
        },
        {
          title: 'Advice is independent of sales',
          text: "You're not obliged to give us the development work afterwards. The report stands on its own with any team — so our recommendation is what you need, not what we'd like to sell.",
        },
        {
          title: 'We speak from production',
          text: 'Our advice draws on products we have built and keep running ourselves. We come from operating software, not from slide decks.',
        },
      ],
      faq: [
        {
          q: 'We have no developers — will we understand the report?',
          a: 'Yes. Every report opens with a summary written for a non-technical reader: the situation, the risk, our recommendation. The technical detail is written separately for your team or future developers.',
        },
        {
          q: 'Do you take over projects written by another company?',
          a: "Yes, but audit first: we map the state of the existing code and put the cost of taking it over in writing. 'Look first, promise after' protects both sides.",
        },
        {
          q: 'Is consulting one-off or ongoing?',
          a: 'Either. You can start with a one-off audit or decision support and continue with monthly advisory if you want; the scope is written down up front.',
        },
        {
          q: 'Are we obliged to hire you for the development?',
          a: 'No. The report and roadmap stand on their own; you can implement them with your own team or another company.',
        },
      ],
    },
  },
];
