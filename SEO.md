# SEO ve Performans Denetimi

Tarih: 2026-09-20, `main` dalının 715621f commit'i üzerinde. Üretim çıktısı
(`npm run build`, 31 sayfa) ve yerel önizleme üzerinde Lighthouse (mobil)
ile yapıldı. Site henüz yayında olmadığı için saha verisi yok; aşağıdakiler
laboratuvar ölçümü ve kaynak incelemesidir.

## Özet

Teknik taraf tavanda: temsili sayfalarda Lighthouse dört kategoride de
99–100. Harici JavaScript yok, sistem fontları kullanılıyor, tek CSS dosyası
sıkıştırılmış hâlde ~8 KB. Asıl açık teknik değil; içerik, otorite ve yayın
sonrası kayıtlar tarafında.

| Sayfa | Perf | SEO | Erişilebilirlik | En iyi uygulama | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 100 | 100 | 100 | 100 | 1,2 s | 0 ms | 0 |
| `/hizmetler/web-uygulama-gelistirme/` | 100 | 100 | 100 | 100 | 0,9 s | 0 ms | 0 |
| `/urunler/dernek-asistan/` | 99 | 100 | 100 | 100 | 2,0 s | 0 ms | 0 |
| `/blog/` | 100 | 100 | 100 | 100 | 1,1 s | 0 ms | 0 |
| `/blog/clean-architecture-ne-zaman-deger/` | 100 | 100 | 100 | 100 | 0,9 s | 0 ms | 0 |

## Doğru kurulmuş olanlar (bozmayın)

- Her sayfada canonical, sayfa düzeyinde hreflang (`tr`, `en`, `x-default`).
- `sitemap-index.xml` üretiliyor, `robots.txt` ona işaret ediyor.
- Her sayfada tek H1, düzgün H2/H3 hiyerarşisi.
- Başlıklar 70 karakteri geçmiyor, `| İscotera` eki tutarlı.
- Sondaki eğik çizgi bütün iç bağlantılarda tutarlı (yönlendirme yok).
- Dış bağlantılarda `rel="noopener"`.
- Yapılandırılmış veri: her sayfada `Organization` + `BreadcrumbList`
  (`@graph`), ana sayfalarda `WebSite`, hizmet sayfalarında `FAQPage`, blog
  yazılarında kapak görselli `BlogPosting`.
- Görsellerde `width`/`height` var (CLS 0), ilk ekran dışındakiler
  `loading="lazy"`, hero görselleri `fetchpriority="high"`.
- Blog kapakları `srcset` ile responsive üretiliyor.
- Dernek Asistan ekran görüntüleri DPR 2 ile çekilmiş (2940×1604 vb.).
- Sekiz yayınlanmış Türkçe blog yazısı, hepsi kapaklı ve tarihli.
- Yanlışlıkla konmuş `noindex` yok.

## Performans: kalan işler

1. **Ürün ve ana sayfa görsellerinde responsive varyant yok.** Blog kapakları
   `srcset` alıyor ama ürün ekran görüntüleri (1984 px), ekip fotoğrafı
   (975 px) ve toplantı odası hero'su (856 px) mobilde 380–660 px'lik
   alana tam boy iniyor. Lighthouse'un tek sayfa başına hesapladığı
   tasarruf 60–80 KB; ürün sayfasındaki 2,0 s LCP'nin ana nedeni bu. Astro
   `<Image>`'ın `widths` ve `sizes` seçenekleriyle çözülür. Bu,
   `productImageOptions` ile ilgili "tek seçenek seti" kuralını bozmaz
   (aynı çağrıdan çıkar), ama JSON-LD'deki `screenshot` adresinin görünen
   görselle aynı kalması gerekir.
2. **Tanıtım videosu 9,7 MB** (`public/media/ibadet-rehberim/tanitim.mp4`).
   README'deki hedef 2 ile 6 MB arası. Sayfa taslak; yayına almadan önce
   sıkıştırılmalı (~540p).
3. **`dist/_astro/` içinde referanssız PNG'ler var.** Taslak İbadet Rehberim
   ekranları ve logo, sekiz dosya, yaklaşık 1,8 MB. Ziyaretçiye maliyeti yok,
   yalnızca dağıtım boyutu.
4. **CSS render'ı engelliyor** (~110 ms). 8 KB olduğu için dokunmaya değmez.
5. **Hosting.** Brotli, HTTP/2 ve `_astro/` için uzun `Cache-Control`
   Cloudflare Pages veya Vercel'de kendiliğinden gelir. Yayından sonra
   PageSpeed Insights'ta saha verisi (CrUX) doğrulanmalı.

## Teknik SEO: açıklar (önem sırasıyla)

1. **`og:image` yok.** Sosyal paylaşımlarda tıklanma oranını en çok etkileyen
   eksik. Twitter kartı da `summary` yerine `summary_large_image` olmalı.
   Blog yazılarının kapağı hazır: yazı sayfalarında kapak, diğer sayfalarda
   site geneli bir varsayılan görsel kullanılabilir. (README'de TODO,
   `BaseLayout.astro`'da yeri işaretli.)
2. **Kapak görsellerinin alt metni boş.** Koleksiyon şemasında ürün `cover`
   alanı için alt yok; Dernek Asistan'ın hero görseli ve ana sayfadaki ürün
   şeridi `alt=""` ile çıkıyor. Blog listesindeki sekiz kapak da boş alt
   taşıyor (başlıkla aynı bağlantıda oldukları için kabul edilebilir, ama
   görsel aramada kaybettiriyor). `content.config.ts`'e `coverAlt` eklenip
   `ProductPage`, `ProductStrip` ve blog listesi onu kullanmalı.
3. **RSS beslemesi yok.** Sekiz yazı var; `@astrojs/rss` ile kısa bir iş,
   `<link rel="alternate" type="application/rss+xml">` ile birlikte.
4. **Organization şeması zayıf.** Adres, `areaServed`, `description` ve
   kurucu yok; `sameAs` yalnızca Instagram. E-posta bir Gmail adresi;
   kurumsal güven için `info@iscotera.com` gibi alan adı e-postası gerekli
   (`src/data/contact.ts` tek kaynak, footer ve şema oradan besleniyor).
5. **Hakkımızda 39 kelimelik yer tutucu** ve dizine açık. 31 sayfalık sitede
   ince içerikli sayfa kalite algısını düşürür: ya yazılmalı ya da içerik
   gelene kadar `noindex` + sitemap dışı. Boş `/en/blog/` için aynı durum.
6. **Meta açıklama uzunlukları.** Hedef 120–160 karakter.

   | Sayfa | Uzunluk | Sorun |
   | --- | --- | --- |
   | `/hakkimizda/` / `/en/about/` | 52 / 44 | çok kısa |
   | `/urunler/` / `/en/products/` | 54 / 50 | çok kısa |
   | `/en/products/dernek-asistan/` | 199 | kesilir |
   | `/urunler/dernek-asistan/` | 172 | kesilir |
   | `/blog/mobil-uygulama-mi-web-sitesi-mi/` | 187 | kesilir |
   | `/blog/kucuk-isletme-icin-sunucu-secimi/` | 186 | kesilir |
   | Diğer dört blog yazısı | 162–166 | sınırda |

7. **Sitemap'te `lastmod` yok**, hreflang yalnızca yolu aynı olan sayfalarda
   (ana sayfa, blog dizini). Slug'ı farklı çiftler (`hakkimizda` ↔ `about`,
   `iletisim` ↔ `contact`, `hizmetler` ↔ `services`, `urunler` ↔ `products`)
   sitemap'te eşleşmiyor. Sayfa etiketleri bunu karşıladığı için zararı yok;
   `@astrojs/sitemap`'in `serialize` kancasıyla tutarlı hâle getirilebilir.
8. **Ana sayfa başlığı marka odaklı:** "İscotera — Yazılım Çözümleri".
   Markanın arama hacmi olmadığı için anahtar kelime öne alınabilir, örn.
   "Web, Mobil ve Özel Yazılım Geliştirme | İscotera". Hedef bir şehir varsa
   başlığa ve içeriğe girmeli.
9. **Küçükler.** 404 sayfası `/404/` canonical taşıyor, `noindex` olmalı.
   Favicon yalnızca SVG; `brand/` klasöründeki PNG'lerden `apple-touch-icon`
   ve 48 px PNG yedeği eklenebilir.

## Üst sıralara çıkmak için gerekenler

Teknik puan tavanda; bundan sonrasını sıralamada şunlar belirler:

- **Yayın ve kayıt.** DNS, Google Search Console ve Bing Webmaster kaydı,
  sitemap gönderimi. Bunlar olmadan hiçbir şey dizine girmez.
- **Google İşletme Profili.** Fiziksel adres ya da hizmet bölgesi varsa
  "yazılım firması <şehir>" aramalarında yerel sonuç kutusuna girmenin tek
  yolu. Ad, adres, telefon her yerde birebir aynı yazılmalı.
- **İçerik kadansı.** Sekiz yazı iyi bir başlangıç; düzenli devam etmeli.
  "web uygulama geliştirme" gibi genel terimler çok rekabetli; uzun kuyruk
  daha erişilebilir. Mevcut yazılar ("web sitesi yaptırma maliyeti", "özel
  yazılım ne kadar sürer") tam bu tür sorguları hedefliyor, doğru yön.
  "dernek bağış yönetim programı", "dernek yazılımı" gibi sorgular için
  Dernek Asistan vaka çalışması ve ona bağlı yazılar niş trafik getirir.
  Her yazı ilgili hizmet sayfasına iç bağlantı vermeli.
- **Uzmanlık sinyalleri (E-E-A-T).** Gerçek bir Hakkımızda sayfası, kurucu
  ve ekip tanıtımı, blogda "İscotera Ekibi" yerine isimli yazar satırı
  (BlogPosting `author` da o zaman `Person` olur), alan adı e-postası.
- **Geri bağlantılar.** Vefa Yolu Derneği'nin sitesinden, ibadetrehberim.com'dan
  ve mağaza geliştirici sayfasından iscotera.com'a bağlantı. LinkedIn şirket
  sayfası ve GitHub profili hem bağlantı hem `sameAs` girdisi olur.
- **İngilizce taraf.** Yurt dışı müşteri hedefi yoksa yatırım yapmaya değmez.
  Varsa İngilizce blog ve vaka çalışması şart; boş İngilizce blog dizini
  şu an sinyal üretmiyor.
- **Ölçüm.** Analitik (Plausible / Umami) eklendiğinde çerez ve onay konusu
  yeniden açılmalı (bkz. README). Yayından birkaç hafta sonra Search
  Console'da kapsama, Core Web Vitals saha verisi ve gösterim getiren
  sorgular izlenmeli.

## Kod tarafına düşen iş listesi

- [x] BreadcrumbList, WebSite ve BlogPosting JSON-LD
- [x] Dernek Asistan ekran görüntülerini DPR 2 ile yeniden çek
- [x] Blog kapakları ve responsive `srcset`
- [ ] `og:image` altyapısı (`BaseLayout` + varsayılan görsel + blog kapağı
      ile geçersiz kılma) ve `twitter:card` = `summary_large_image`
- [ ] `coverAlt` alanı ve kullanımı (ürün + blog listesi)
- [ ] RSS beslemesi + `<link rel="alternate">`
- [ ] Organization şemasını zenginleştir (adres, `sameAs`, açıklama)
- [ ] Meta açıklamaları düzelt (yukarıdaki tablo)
- [ ] 404: `noindex`, canonical yok
- [ ] Favicon PNG yedekleri ve `apple-touch-icon`
- [ ] Sitemap: `lastmod` ve farklı slug'lı çiftler için hreflang
- [ ] Ürün, ekip ve hero görsellerine `widths`/`sizes`
- [ ] Hakkımızda sayfasını yaz (o zamana kadar `noindex`)
- [ ] Tanıtım videosunu 2–6 MB'a sıkıştır (İbadet Rehberim yayına çıkmadan)
