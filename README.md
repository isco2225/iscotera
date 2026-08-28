# İscotera Web

[iscotera.com](https://iscotera.com) — İscotera yazılım firmasının kurumsal tanıtım sitesi.

**Teknoloji:** Astro 7 + Tailwind CSS 4, tamamen statik çıktı. Türkçe (varsayılan) + İngilizce (`/en/`).

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusu (`localhost:4321`) — taslak içerikler burada görünür |
| `npm run build` | Üretim çıktısı (`dist/`) — taslaklar hariç tutulur |
| `npm run preview` | Üretim çıktısını yerelde önizle |

## Yapı

```
src/
├── components/        # Header, Footer, PagePlaceholder
├── layouts/
│   └── BaseLayout.astro   # SEO (meta, canonical, hreflang, OG, JSON-LD) + iskelet
├── i18n/
│   └── ui.ts          # Dil sözlüğü + sayfa rotalarının TR↔EN eşlemesi
├── data/
│   └── services.ts    # Hizmetlerin tek kaynağı (TR+EN sayfalar buradan üretilir)
├── content/
│   ├── blog/tr|en/    # Blog yazıları (Markdown)
│   └── projects/tr|en/ # Ürünler ve vaka çalışmaları (Markdown)
└── pages/             # TR sayfalar kökte, EN sayfalar en/ altında
```

Ürün sayfasının bölümlerinin tamamı `src/components/ProductPage.astro` içinde;
`/urunler/[slug]` ve `/en/products/[slug]` rotaları bu tek bileşeni çağırır, iki
dil yapı olarak ayrışmasın diye.

## İçerik ekleme

**Blog yazısı:** `src/content/blog/tr/yazi-adi.md` oluştur, frontmatter'ı doldur
(`title`, `description`, `pubDate`), yayınlamak için `draft` satırını kaldır.
Örnek: `src/content/blog/tr/ornek-yazi.md`

**Ürün / vaka çalışması:** `src/content/projects/tr/urun-adi.md` — aynı akış,
ama frontmatter çok daha dolu. Ürün sayfası şu sırayla render edilir:

> hero → kanıt şeridi → özellikler → ekran görüntüleri → anlatı (gövde) →
> yorumlar → fiyat → SSS → kapanış çağrısı

Her bölüm kendi alanından beslenir ve **boş bıraktığınız alanın bölümü hiç
görünmez**. Alanların tek tek ne yaptığı `src/content/projects/tr/ornek-proje.md`
içinde yazılı; şablonu kopyalayıp doldurmak en hızlısı.

Üç kural içeriği yazarken önemli:

- **`rating` uydurulmaz.** Puan ve değerlendirme sayısı mağazadan bakılıp
  doğrulanmadan yazılmaz. Bu değerler sayfada göründüğü gibi yapılandırılmış
  veriye de girer; gösterilmeyen ya da gerçek olmayan bir puanı bildirmek
  Google tarafında manuel işleme yol açar. Emin değilseniz alanı hiç eklemeyin.
- **`results` ölçülebilir şeyler içindir**, en fazla 3 madde. "iOS + Android"
  bir sonuç değil özelliktir ve yanındaki gerçek sayıları da şüpheli gösterir.
- **Özellikler gövdeye madde madde yazılmaz**, `features` alanına girer. Gövdede
  yalnızca anlatı kalır: neden yaptık, nasıl geliştirdik, bugün neredeyiz.

**Mağaza rozetleri:** App Store ve Google Play rozetlerinin resmî görselleri
`public/badges/` altına konur (adresler ve marka kuralları oradaki
`README.md` dosyasında). Dosyalar yokken site bozulmaz, bileşen kendi metin
butonuna düşer; dosyalar konduğunda bir sonraki derlemede rozete geçer.

**Hizmet:** `src/data/services.ts` dosyasına yeni kayıt ekle; TR ve EN sayfaları
otomatik oluşur.

`draft: true` olan içerikler sadece `npm run dev`'de görünür, yayına çıkmaz.

## Bilinçli kararlar

- **Karanlık mod:** iki durumlu düğme (üstte, dil değiştiricinin yanında). İlk
  ziyarette işletim sistemi tercihine uyar, kullanıcı düğmeye bastığı anda
  seçim tarayıcıya kaydedilir. Renkler `src/styles/global.css` içindeki anlamsal
  token'lardan gelir — sayfalarda artık `bg-white` / `text-neutral-900` gibi
  sabit renk sınıfı **yazılmaz**, `bg-surface` / `text-ink-strong` yazılır.
  Böylece yeni sayfa iki modda da kendiliğinden doğru görünür.
- **Blog menüde:** yazı yayınlanana kadar listede "Henüz yayınlanmış yazı yok"
  mesajı görünür — ilk yazılar öncelikli iş.
- **hreflang:** Her sayfa `BaseLayout`'a `alternate` prop'u ile diğer dildeki
  karşılığını bildirir; blog yazılarının birebir çevirisi olmadığı için yazı
  sayfalarında alternate verilmez.

## Yayına almadan önce (TODO)

- [x] Logo + favicon (İ monogramı: siyah zemin, beyaz gövde, kırmızı nokta)
- [ ] `og:image` sosyal paylaşım görseli
- [x] İletişim sayfası: e-posta, telefon, WhatsApp ve Instagram bilgileri
- [ ] İletişim formu: statik form servisi bağlantısı (ör. Formspree / Cloudflare Worker)
- [ ] Cloudflare Pages / Vercel'e bağla, `iscotera.com` DNS ayarları
- [ ] Google Search Console kaydı + sitemap gönderimi
- [ ] Analitik (Plausible / Umami)
