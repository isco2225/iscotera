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
| `ozel-yazilim-ne-kadar-surer` | https://www.pexels.com/photo/11363590/ |
| `yazilim-sozlesmesinde-ne-olmali` | https://www.pexels.com/photo/7054502/ |
| `web-sitesi-yaptirma-maliyeti` | https://www.pexels.com/photo/196645/ |
| `mobil-uygulama-yaptirmak-istiyorum` | https://www.pexels.com/photo/6373088/ |
| `web-sitesi-yaptirmak-istiyorum` | https://www.pexels.com/photo/8092461/ |
| `yazilim-yaptirmak-istiyorum` | https://www.pexels.com/photo/8133809/ |
| `mobil-uygulama-yaptirma-maliyeti` | https://www.pexels.com/photo/8250947/ |
| `yazilim-yaptirma-maliyeti` | https://www.pexels.com/photo/6963847/ |
| `e-ticaret-sitesi-kurmak-istiyorum` | https://www.pexels.com/photo/7857523/ |
| `e-ticaret-sitesi-maliyeti` | https://www.pexels.com/photo/9594423/ |
| `en-iyi-yazilim-firmalari` | https://www.pexels.com/photo/8850713/ |

Seçim kuralı `src/assets/services/README.md` ile aynı: markası okunan
ekran/cihaz içeren kareler kullanılmaz (Windows tuşlu klavye, logolu telefon
ve yazılı beyaz tahta içeren adaylar bu yüzden elendi).

`mobil-uygulama-yaptirma-maliyeti` kapağı kaynağın alt 1600×900 bölümüdür:
hesap makinesinin üst kenarındaki model etiketi kadrajın dışında kalsın diye
üstten kırpıldı. Vurgulayıcı kalemin etiketi okunan 6368847 bu yüzden elendi.
