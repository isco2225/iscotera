# Blog kapak fotoğrafları

Her yazının kapağı `<yazi-adi>/cover.jpg` olarak burada durur ve yazının
frontmatter'ından `cover: "../_images/<yazi-adi>/cover.jpg"` ile bağlanır;
`coverAlt` fotoğrafta ne göründüğünü söyler (yazının başlığını tekrar etmez).
Kapak liste kartında küçük, yazı sayfasında başlığın altında geniş görünür ve
BlogPosting şemasına `image` olarak girer. Kaynak dosyalar 1600px genişliğinde
indirildi; Astro sayfadaki genişliğe göre küçültür (`src/utils/blog.ts`).

Kaynaklar — hepsi Pexels, ücretsiz ticari lisans, atıf gerekmez
(https://www.pexels.com/license/):

| Yazı | Kaynak |
| --- | --- |
| `ozel-yazilim-mi-hazir-paket-mi` | https://www.pexels.com/photo/6285122/ |
| `clean-architecture-ne-zaman-deger` | https://www.pexels.com/photo/4458205/ |
| `excelden-yazilima-ne-zaman-gecilir` | https://www.pexels.com/photo/7735769/ |
| `kucuk-isletme-icin-sunucu-secimi` | https://www.pexels.com/photo/4508751/ |
| `mobil-uygulama-mi-web-sitesi-mi` | https://www.pexels.com/photo/7054521/ |

Seçim kuralı `src/assets/services/README.md` ile aynı: markası okunan
ekran/cihaz içeren kareler kullanılmaz (Windows tuşlu klavye, logolu telefon
ve yazılı beyaz tahta içeren adaylar bu yüzden elendi).
