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
│   └── projects/tr|en/ # Vaka çalışmaları (Markdown)
└── pages/             # TR sayfalar kökte, EN sayfalar en/ altında
```

## İçerik ekleme

**Blog yazısı:** `src/content/blog/tr/yazi-adi.md` oluştur, frontmatter'ı doldur
(`title`, `description`, `pubDate`), yayınlamak için `draft` satırını kaldır.
Örnek: `src/content/blog/tr/ornek-yazi.md`

**Proje / vaka çalışması:** `src/content/projects/tr/proje-adi.md` — aynı akış.
Örnek şablon: `src/content/projects/tr/ornek-proje.md`

**Hizmet:** `src/data/services.ts` dosyasına yeni kayıt ekle; TR ve EN sayfaları
otomatik oluşur.

`draft: true` olan içerikler sadece `npm run dev`'de görünür, yayına çıkmaz.

## Bilinçli kararlar

- **Blog menüde:** yazı yayınlanana kadar listede "Henüz yayınlanmış yazı yok"
  mesajı görünür — ilk yazılar öncelikli iş.
- **hreflang:** Her sayfa `BaseLayout`'a `alternate` prop'u ile diğer dildeki
  karşılığını bildirir; blog yazılarının birebir çevirisi olmadığı için yazı
  sayfalarında alternate verilmez.

## Yayına almadan önce (TODO)

- [x] Logo + favicon (İ monogramı: siyah zemin, beyaz gövde, kırmızı nokta)
- [ ] `og:image` sosyal paylaşım görseli
- [ ] İletişim sayfası: gerçek e-posta + form servisi bağlantısı
- [ ] Cloudflare Pages / Vercel'e bağla, `iscotera.com` DNS ayarları
- [ ] Google Search Console kaydı + sitemap gönderimi
- [ ] Analitik (Plausible / Umami)
