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
  /** "Yaptığımız işler" kartları. */
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
    caseStudy: 'qr-menu',
    tr: {
      slug: 'web-uygulama-gelistirme',
      title: 'Web Uygulama Geliştirme',
      summary:
        'Kurumsal siteler ve web uygulamaları geliştiriyoruz. Kurduğumuz siteler hızlı açılır, arama motorlarında görünür, içeriğini de kendi ekibiniz günceller.',
      imageAlt: 'Kod editörü açık bir dizüstü bilgisayarla çalışma masası',
      intro: [
        'Kurumsal tanıtım sitelerinden yönetim panellerine kadar, tarayıcıda çalışan her ölçekte yazılım geliştiriyoruz. Şu an gezdiğiniz site de bunlardan biri. Burada gördüğünüz hız ve yapı, müşterilerimiz için kurduğumuz altyapının aynısı.',
        'Bir web sitesinde tasarım, işin yalnızca bir parçası. Sitenin arama motorlarında bulunması, saniyeler içinde açılması ve içeriğini ekibinizin güncelleyebilmesi de baştan işin içinde.',
      ],
      scope: [
        {
          title: 'Kurumsal web siteleri',
          text: 'Firmanızı anlatan, hızlı açılan ve arama motorlarında görünen tanıtım siteleri. İçerik yönetimini de biz kuruyoruz, böylece yeni bir sayfayı bizi beklemeden kendiniz ekleyebilirsiniz.',
        },
        {
          title: 'Web uygulamaları',
          text: 'Müşteri panelleri, yönetim ekranları, rezervasyon ve takip sistemleri. Tarayıcıda çalışır, kurulum istemez. Hangi cihazdan girerseniz girin, karşınıza aynı hesap çıkar.',
        },
        {
          title: 'Elinizdeki sitenin iyileştirilmesi',
          text: 'Siteniz yavaş açılıyor ya da aramalarda görünmüyorsa önce sorunu ölçer, sonra düzeltiriz. Çoğu zaman sıfırdan yazmak gerekmez. Gerekiyorsa da nedenini yazılı olarak gösteririz.',
        },
      ],
      approach: [
        {
          title: 'Hızı baştan planlıyoruz',
          text: 'Tanıtım sitelerinde sayfaları önceden hazırlıyoruz, bu yüzden sunucuyu beklemeden açılıyorlar. Web uygulamalarında da sayfa hızını tasarım aşamasından başlayarak gözetiyoruz. Google hızı sıralamada dikkate aldığı için bu, sitenizin aramalardaki görünürlüğüne doğrudan yansır.',
        },
        {
          title: 'SEO ayarlarını baştan kuruyoruz',
          text: "Arama motorlarının sayfalarınızı doğru okuması için gereken ayarları her sayfada baştan kuruyoruz. Sonradan ayrı bir 'SEO çalışması' satın almanız gerekmez.",
        },
        {
          title: 'İçerik sizde kalır',
          text: 'Metinleri ve görselleri ekibiniz günceller. Alan adı ve barındırma hesaplarını da sizin adınıza açıyoruz. Böylece bize bağımlı kalmazsınız.',
        },
      ],
      faq: [
        {
          q: 'Kurumsal bir site ne kadar sürede yayına alınır?',
          a: 'İçerik hazırsa birkaç hafta içinde. Süreyi uzatan çoğu zaman kod değil, metinlerin ve görsellerin toplanması oluyor. Bu yüzden planlama aşamasında bunun için de birlikte bir takvim çıkarırız.',
        },
        {
          q: 'Elimizdeki siteyi sıfırdan mı yazmak gerekir?',
          a: 'Çoğu zaman hayır. Önce sitenin bugünkü durumunu ölçer, neyin kalıp neyin değişmesi gerektiğini yazılı bir raporla paylaşırız. Sıfırdan yazmayı ancak gerekçesini gösterebildiğimizde öneririz.',
        },
        {
          q: 'İçerikleri kendimiz güncelleyebilir miyiz?',
          a: 'Evet. İçerik yönetim sistemini kurup ekibinize teslim ederiz. Kısa bir eğitimin ardından yazı, görsel ve sayfa eklemeyi kendiniz yaparsınız.',
        },
        {
          q: 'Alan adı ve barındırma kimin üzerine olur?',
          a: 'Sizin. Hesapları sizin adınıza açar, kurulumu yapar, erişim bilgilerini size teslim ederiz. Bizimle yollarınız ayrılsa bile siteniz size ait kalır.',
        },
      ],
    },
    en: {
      slug: 'web-application-development',
      title: 'Web Application Development',
      summary:
        'We build company websites and web applications that load fast, show up in search results and let your own team update the content.',
      imageAlt: 'A desk with a laptop showing a code editor',
      intro: [
        "From company websites to admin panels, we build software of every size that runs in the browser. This site is one of them: the speed and structure you see here are the same foundation we set up for our clients.",
        'Design is only part of a website. Being found in search, opening in seconds and letting your own team update the content are part of the job from the start.',
      ],
      scope: [
        {
          title: 'Company websites',
          text: 'Sites that tell your story, open fast and show up in search. We also set up content management, so you can add a new page yourself without waiting for us.',
        },
        {
          title: 'Web applications',
          text: 'Customer portals, dashboards, booking and tracking systems. They run in the browser with nothing to install, and you see the same account on any device.',
        },
        {
          title: 'Improving an existing site',
          text: "If your site is slow or doesn't show up in search, we measure first, then fix it. A full rewrite is rarely necessary, and when it is, we explain why in writing.",
        },
      ],
      approach: [
        {
          title: 'We plan for speed from the start',
          text: 'We generate company sites ahead of time, so their pages open without waiting on a server. In web applications, we keep page speed in mind from the design stage onwards. Google uses speed as a ranking signal, so it feeds directly into how visible you are.',
        },
        {
          title: 'We set up SEO from day one',
          text: "We set up everything search engines need to read your pages correctly, on every page, from the start. You won't be sold a separate 'SEO project' later.",
        },
        {
          title: 'The content stays yours',
          text: "Your team updates the text and images, and we open the domain and hosting accounts in your name. You're not locked in to us.",
        },
      ],
      faq: [
        {
          q: 'How long does a corporate site take?',
          a: "A few weeks once the content is ready. What usually stretches the timeline isn't the code but gathering the text and images, so we plan a schedule for that together at the start.",
        },
        {
          q: 'Do we have to rewrite our current site from scratch?',
          a: 'Usually not. We first assess what you have and tell you in writing what should stay and what should change. We only recommend a rewrite when we can show why.',
        },
        {
          q: 'Can we update the content ourselves?',
          a: 'Yes. We set up the content management system and hand it over to your team. After a short training session, you add posts, images and pages yourself.',
        },
        {
          q: 'Who owns the domain and hosting?',
          a: 'You do. We open the accounts in your name, do the setup and hand over the login details. Even if we part ways, the site stays yours.',
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
        'iOS ve Android uygulamaları geliştiriyoruz. İki platform için aynı kodu yazdığımızdan yeni bir özellik ikisine aynı anda gelir, bakım maliyeti de ikiye katlanmaz.',
      imageAlt: 'Elindeki akıllı telefonu kullanan bir kişi',
      intro: [
        'iOS ve Android uygulamalarını tek bir kod tabanından geliştiriyoruz, yani iki platform için aynı kodu yazıyoruz. Böylece yeni bir özellik iki platforma aynı anda gelir, bakım maliyeti de ikiye katlanmaz.',
        "Kendi uygulamamızı geliştirip App Store'da ve Google Play'de yayınladık. Mağaza başvurusunu, inceleme sürecini ve yayından sonrasını bu deneyime dayanarak yürütüyoruz.",
      ],
      scope: [
        {
          title: 'iOS ve Android uygulamaları',
          text: 'Tek kod tabanından iki mağazaya. Tasarımı her platformun kendi alışkanlıklarına uyduruyoruz, böylece uygulama kullanıcıya başka bir platformdan aktarılmış gibi gelmez.',
        },
        {
          title: 'Mağaza süreci bizde',
          text: 'App Store ve Google Play başvurularını, inceleme sırasındaki yazışmaları ve yeni sürümlerin yayınını biz yürütürüz. Hesapları da sizin adınıza açıyoruz.',
        },
        {
          title: 'Bildirim ve entegrasyonlar',
          text: 'Anlık bildirim, ödeme, harita, kamera ve kullandığınız diğer sistemlerle bağlantı. Uygulamanın işinize dokunduğu her noktayı birlikte planlarız.',
        },
      ],
      approach: [
        {
          title: 'Önce temel işlev',
          text: 'İlk sürüm, uygulamanın asıl işini eksiksiz yapar. Listeyi kabartan özellikleri sonraki sürümlere bırakırız. Böylece mağazaya erken çıkar, gerçek kullanıcıların geri bildirimiyle ilerlersiniz.',
        },
        {
          title: 'Yayından sonra da izliyoruz',
          text: 'Çökme raporlarını ve performansı yayından sonra da izleriz. Yeni işletim sistemi sürümlerine de uygulamanızı sorun çıkmadan uyarlarız.',
        },
        {
          title: 'Gerektiğinde platforma özel kod',
          text: 'Tek kod tabanı çoğu ihtiyacı karşılar. Karşılamadığı yerde o bölümü platformun kendi diliyle yazarız. Hangi aracı kullanacağımıza her projede ayrıca karar veriyoruz.',
        },
      ],
      faq: [
        {
          q: 'Tek kod tabanı uygulamayı yavaşlatmaz mı?',
          a: 'İş uygulamalarının çoğunda aradaki fark ölçülemeyecek kadar küçük. Yoğun grafik ya da cihaza özel işlem gereken bölümler varsa, o bölümleri her platform için ayrı yazarız.',
        },
        {
          q: 'Mağaza hesapları kimin üzerine açılır?',
          a: 'Sizin adınıza. Apple ve Google geliştirici hesaplarını birlikte açar, uygulamayı sizin hesabınızdan yayınlarız. Böylece uygulamanın sahibi her aşamada siz olursunuz.',
        },
        {
          q: 'Uygulamam ne kadara mal olur?',
          a: 'Kapsama göre değişir. Bu yüzden önce kapsamı maddelere ayırır, her maddenin süresini ve bedelini yazılı olarak belirleriz. Toplam maliyeti geliştirmeye başlamadan bilirsiniz.',
        },
        {
          q: 'Yayından sonra güncellemeleri kim yapar?',
          a: 'Bu sizin tercihiniz. Bakım anlaşması yaparsak hata düzeltmelerini, işletim sistemi uyumunu ve yeni özellikleri biz üstleniriz. İsterseniz kodu ve dokümantasyonu ekibinize devrederiz.',
        },
      ],
    },
    en: {
      slug: 'mobile-app-development',
      title: 'Mobile App Development',
      summary:
        "We build iOS and Android apps from a single codebase, so a new feature reaches both platforms at once and maintenance doesn't cost twice as much.",
      imageAlt: 'A person using the smartphone in their hands',
      intro: [
        "We write one codebase that runs on both iOS and Android. In practice, a new feature reaches both platforms at once, and maintenance doesn't cost twice as much.",
        "We've built our own app and published it on the App Store and Google Play, so we handle store submission, review and everything after launch from first-hand experience.",
      ],
      scope: [
        {
          title: 'iOS and Android apps',
          text: "One codebase, two stores. The design follows each platform's own conventions, so the app doesn't feel like a port from somewhere else.",
        },
        {
          title: 'We handle the stores',
          text: 'We run the App Store and Google Play submissions, the correspondence during review and new releases. We open the accounts in your name.',
        },
        {
          title: 'Notifications and integrations',
          text: 'Push notifications, payments, maps, camera and connections to the systems you already use. We plan every point where the app meets your business together with you.',
        },
      ],
      approach: [
        {
          title: 'Core features first',
          text: "The first release does the app's main job, and does it fully. Nice-to-haves go into later versions, so you reach the store early and build on feedback from real users.",
        },
        {
          title: 'We keep watching after launch',
          text: 'We keep an eye on crash reports and performance after release, and adapt your app to new OS versions before they cause problems.',
        },
        {
          title: 'Platform-specific code where it is needed',
          text: "A single codebase covers most needs. Where it doesn't, we write that part in the platform's own language. We choose the tools afresh for each project.",
        },
      ],
      faq: [
        {
          q: "Doesn't a single codebase make the app slower?",
          a: 'For most business apps the difference is too small to measure. If a section needs heavy graphics or device-specific work, we write that section separately for each platform.',
        },
        {
          q: 'Whose name are the store accounts under?',
          a: 'Yours. We open the Apple and Google developer accounts together and publish from your account, so you own the app at every stage.',
        },
        {
          q: 'How much will my app cost?',
          a: "It depends on scope. That's why we break the scope into items and put a timeline and price on each, in writing. You know the total cost before development begins.",
        },
        {
          q: 'Who handles updates after launch?',
          a: "That's up to you. With a maintenance agreement, we take care of fixes, OS compatibility and new features. Or we hand the code and documentation over to your team.",
        },
      ],
    },
  },
  {
    id: 'custom-software',
    caseStudy: 'dernek-asistan',
    tr: {
      slug: 'ozel-yazilim-cozumleri',
      title: 'Özel Yazılım Çözümleri',
      summary:
        'İşinizin kendi akışına göre otomasyon ve entegrasyon kuruyoruz. Hazır bir paket ihtiyacınızı karşılıyorsa, yazılım geliştirmeden önce bunu söyleriz.',
      imageAlt: 'Depoda elindeki tabletle stok kontrolü yapan çalışan',
      intro: [
        'Elle yürüttüğünüz işleri, tablolar arasında kopyaladığınız verileri ve iki program birbirini anlamadığı için çıkan ek işleri yazılıma devrediyoruz.',
        'Önce hazır bir program var mı diye bakarız, varsa bunu size söyleriz. Hiçbir paket ihtiyacınızı karşılamıyorsa özel yazılıma geçer, onu da tam olarak işinizin işleyişine göre yazarız.',
      ],
      scope: [
        {
          title: 'Sistem entegrasyonları',
          text: 'Muhasebe, e-ticaret, kargo ve ödeme programlarınız birbirinden habersiz çalışıyorsa onları birbirine bağlarız. Böylece aynı veriyi iki kez girmek zorunda kalmazsınız.',
        },
        {
          title: 'Süreç otomasyonu',
          text: 'Rapor çıkarma, veri aktarma, sipariş takibi gibi her gün elle tekrarlanan işleri kurallara bağlarız, bu işler de kendi kendine yürür. Ekibiniz yalnızca istisnalarla ilgilenir.',
        },
        {
          title: 'İşe özel iç araçlar',
          text: "Stok, saha ve üretim takibi gibi Excel'e sığmayan süreçler için ekibinizin kullanacağı paneller ve ekranlar geliştiriyoruz. Yalnızca işin gerektirdiği kadarını yaparız.",
        },
      ],
      approach: [
        {
          title: 'Önce hazır bir program ararız',
          text: 'Piyasada işinizi gören bir paket varsa onu öneririz. Özel yazılımı yalnızca gerçekten ihtiyaç olduğunda geliştiririz. Böylece iki tarafın da zamanı ve bütçesi boşa gitmez.',
        },
        {
          title: 'En çok zaman alan işten başlarız',
          text: 'Her şeyi kapsayan büyük bir proje yerine, size en çok zaman kaybettiren işi önce otomatikleştiririz. İlk adımın sonuçlarına baktıktan sonra bir sonraki adıma birlikte karar veririz.',
        },
        {
          title: 'Verileriniz sizde kalır',
          text: 'Sistemdeki bütün veriler dışa aktarılabilir, sistemi de dokümantasyonuyla birlikte teslim ederiz. İleride başka bir ekiple çalışmak isterseniz buna engel olmayız.',
        },
      ],
      faq: [
        {
          q: 'Kullandığımız hazır programı bırakmamız mı gerekir?',
          a: 'Hayır. Çoğu projede kullandığınız program yerinde kalır. Biz eksik parçayı yazar, onu programınıza bağlarız.',
        },
        {
          q: "Süreçlerimizi Excel'le yönetiyoruz, sorun mu?",
          a: "Sorun değil, hatta iyi bir başlangıç. Excel dosyalarınız ihtiyacınızı zaten yazıya dökmüş demektir. Dosyalar işi kaldırmamaya başladığında süreci adım adım yazılıma taşırız.",
        },
        {
          q: 'Fiyat neye göre belirlenir?',
          a: 'Kapsama göre. İhtiyacı maddelere ayırır, her maddenin süresini ve bedelini yazılı olarak belirleriz. Onayladığınız bu belge, proje bitene kadar ikimizin de başvurduğu ortak metin olur.',
        },
        {
          q: 'Sistem kurulduktan sonra bakımını kim yapar?',
          a: 'Bu sizin tercihiniz. Bakım anlaşmasıyla bu işi biz üstleniriz ya da sistemi dokümantasyonu ve eğitimiyle birlikte ekibinize devrederiz. İki durumda da kod ve veriler sizde kalır.',
        },
      ],
    },
    en: {
      slug: 'custom-software-solutions',
      title: 'Custom Software Solutions',
      summary:
        'Automation and integration shaped around how your business already works. If an off-the-shelf product covers your need, we tell you before building anything.',
      imageAlt: 'A warehouse worker checking stock on a tablet',
      intro: [
        "We take the work you do by hand, the data you copy between spreadsheets and the extra work caused by two programs that won't talk to each other, and hand it over to software.",
        'We look for an off-the-shelf product first, and tell you if one exists. When no package fits your need, we build custom software around how your business actually works.',
      ],
      scope: [
        {
          title: 'System integrations',
          text: "If your accounting, e-commerce, shipping and payment programs don't know about each other, we connect them, so nobody has to enter the same data twice.",
        },
        {
          title: 'Process automation',
          text: 'Reports, data transfers, order tracking: we turn the work your team repeats by hand every day into rules that run on their own. Your team only deals with the exceptions.',
        },
        {
          title: 'Internal tools',
          text: 'Panels and screens for processes that have outgrown Excel, such as stock, field work and production tracking. We build as much as the job needs, and no more.',
        },
      ],
      approach: [
        {
          title: 'We look for an existing product first',
          text: 'If a package on the market does the job, we recommend it. We only build custom software when there is a real need, so neither side wastes time or budget.',
        },
        {
          title: 'We start with what takes up the most time',
          text: "Instead of one giant project, we first automate the task that costs you the most time. Once we've looked at the results of that first step, we decide on the next one together.",
        },
        {
          title: 'Your data stays yours',
          text: "Everything in the system can be exported, and we hand it over with documentation. If you want to work with another team later, we won't stand in your way.",
        },
      ],
      faq: [
        {
          q: 'Do we have to abandon the software we already use?',
          a: 'No. In most projects your existing software stays, and we build the missing piece and connect it.',
        },
        {
          q: 'We run everything on Excel. Is that a problem?',
          a: "No, it's actually a good start: your spreadsheets have already written down what you need. When they can't keep up any more, we move the process into software step by step.",
        },
        {
          q: 'How is the price determined?',
          a: 'By scope. We break the need into items and put a timeline and price on each, in writing. The document you approve stays our shared reference until the end of the project.',
        },
        {
          q: "Who maintains the system once it's built?",
          a: "That's up to you. We can take it on under a maintenance agreement, or hand it to your team with documentation and training. Either way, the code and the data stay with you.",
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
        'Mimari kararlar, teknoloji seçimi ve ekibinize teknik destek. Devraldığımız bir sistem varsa önce bugünkü durumunu yazılı olarak ortaya koyarız.',
      imageAlt: 'Dizüstü bilgisayar ekranındaki kodu birlikte inceleyen iki kişi',
      intro: [
        'Yazılımda en büyük maliyet çoğu zaman yanlış verilmiş bir karardan çıkıyor. Bu yüzden mimariyi ya da teknolojiyi seçerken ve bir sistemi devralırken, kararı vermeden önce yanınızda oluyoruz.',
        'İlk teslim ettiğimiz şey her zaman yazılı bir değerlendirme olur: bugün neredesiniz, riskler neler, hangi seçenekleriniz var. Kararı siz verirsiniz, bizim işimiz seçenekleri netleştirmek.',
      ],
      scope: [
        {
          title: 'Elinizdeki sistemin denetimi',
          text: 'Elinizdeki yazılımı inceler; riskleri, ileride masraf çıkaracak eksikleri (teknik borcu) ve neyin önce ele alınması gerektiğini yazılı olarak raporlarız. Rapor, teknik olmayan bir yöneticinin de okuyabileceği bir özetle başlar.',
        },
        {
          title: 'Mimari ve teknoloji seçimi',
          text: 'Yeni bir yatırımdan önce seçenekleri maliyet, ekip ve ölçek açısından karşılaştırırız. Sonra işinize uyan seçeneği gerekçesiyle birlikte öneririz.',
        },
        {
          title: 'Ekibinize teknik destek',
          text: 'Kendi yazılım ekibi olan firmalara dışarıdan destek veriyoruz: kod incelemesi, mimari taslaklar ve işe alımda teknik değerlendirme.',
        },
      ],
      approach: [
        {
          title: 'Her tespiti yazıya dökeriz',
          text: 'Toplantıda konuşulanlar zamanla unutulabiliyor. Bu yüzden denetimi de öneriyi de yazılı belge olarak teslim ediyoruz. Altı ay sonra açıp yeniden bakabilir, bir sonraki ekiple paylaşabilirsiniz.',
        },
        {
          title: 'Önerimiz satışa bağlı değil',
          text: 'Danışmanlığın sonunda geliştirme işini bize vermek zorunda değilsiniz. Raporu başka bir ekiple de uygulayabilirsiniz. Bu yüzden size satmak istediğimiz şeyi değil, ihtiyacınız olanı öneririz.',
        },
        {
          title: 'Önerilerimiz kendi deneyimimize dayanır',
          text: 'Önerilerimiz, kendi geliştirdiğimiz ve yayında tuttuğumuz ürünlerden edindiğimiz deneyime dayanır. Size önerdiklerimizi kendi ürünlerimizde de uyguluyoruz.',
        },
      ],
      faq: [
        {
          q: 'Ekibimizde yazılımcı yok. Raporu anlayabilir miyiz?',
          a: 'Evet. Her rapor, teknik olmayan bir okur için yazdığımız bir özetle başlar: durum ne, risk ne, önerimiz ne. Teknik ayrıntıları ise ekibiniz ya da ileride çalışacağınız geliştiriciler için ayrıca yazarız.',
        },
        {
          q: 'Başka bir firmanın yazdığı projeyi devralıyor musunuz?',
          a: 'Evet, ama önce bir denetim yaparız. Kodun bugünkü durumunu çıkarır, devralmanın maliyetini yazılı olarak gösteririz. Önce bakıp sonra söz vermek iki tarafı da korur.',
        },
        {
          q: 'Danışmanlık tek seferlik mi, sürekli mi?',
          a: 'İkisi de mümkün. Tek seferlik bir denetimle ya da karar desteğiyle başlayıp isterseniz aylık düzenli destekle devam edebilirsiniz. Kapsamı baştan yazılı olarak belirleriz.',
        },
        {
          q: 'Sonunda geliştirmeyi size vermek zorunda mıyız?',
          a: 'Hayır. Rapor ve yol haritası kendi başına ayakta durur. Uygulamayı kendi ekibinizle ya da başka bir firmayla da yapabilirsiniz.',
        },
      ],
    },
    en: {
      slug: 'software-consulting',
      title: 'Software Consulting',
      summary:
        "Architecture decisions, technology choices and technical support for your team. If we're taking over an existing system, we first put its current state in writing.",
      imageAlt: 'Two people reviewing code together on a laptop screen',
      intro: [
        "In software, the biggest costs often come from a decision made the wrong way. That's why we work alongside you before you decide: on architecture, on technology and on systems you're taking over.",
        'The first thing we hand over is always a written assessment: where you stand, what the risks are and what your options are. The decision is yours; our job is to make the options clear.',
      ],
      scope: [
        {
          title: 'Auditing your current system',
          text: 'We review the software you have and report in writing on its risks, its technical debt (shortcuts that will cost money later) and what to tackle first. Every report opens with a summary a non-technical manager can read.',
        },
        {
          title: 'Architecture and technology choices',
          text: 'Before a new investment, we compare the options on cost, team and scale. Then we recommend the one that fits your business and explain why.',
        },
        {
          title: 'Support for your team',
          text: 'Code reviews, architecture sketches and technical assessments for hiring: outside support for companies that have their own developers.',
        },
      ],
      approach: [
        {
          title: 'We put every finding in writing',
          text: "What's said in a meeting tends to get forgotten. That's why we deliver audits and recommendations as documents you can reopen six months later or share with the next team.",
        },
        {
          title: "Our advice isn't tied to a sale",
          text: "You don't have to give us the development work afterwards. Any team can put the report into practice, so we recommend what you need, not what we'd like to sell.",
        },
        {
          title: 'Our advice comes from our own products',
          text: 'Our advice draws on products we have built and keep running ourselves. What we recommend to you, we also do in our own products.',
        },
      ],
      faq: [
        {
          q: 'We have no developers. Will we understand the report?',
          a: 'Yes. Every report opens with a summary written for a non-technical reader: the situation, the risks and our recommendation. We write the technical detail separately, for your team or future developers.',
        },
        {
          q: 'Do you take over projects written by another company?',
          a: 'Yes, but we start with an audit. We map the state of the existing code and put the cost of taking it over in writing. Looking first and promising afterwards protects both sides.',
        },
        {
          q: 'Is consulting one-off or ongoing?',
          a: 'Either. You can start with a one-off audit or decision support and, if you like, continue with regular monthly support. We agree the scope in writing up front.',
        },
        {
          q: 'Are we obliged to hire you for the development?',
          a: 'No. The report and roadmap stand on their own. You can put them into practice with your own team or with another company.',
        },
      ],
    },
  },
];
