# Ürün görselleri

Her ürünün görselleri `<urun-adi>/` altında durur ve frontmatter'dan
`../_images/<urun-adi>/dosya` ile bağlanır; Astro `image()` ile optimize eder.
Dikey ekranlar 640, yatay görseller 1984 piksel genişlikte üretilir
(`src/utils/product.ts`): yatay ekran görüntüleri DPR 2 ile çekilmelidir,
aksi hâlde Retina'da bulanık kalır.

| Klasör | Dosya | Kaynak |
| --- | --- | --- |
| `ibadet-rehberim/` | `logo.png`, `screen-*.png` | Kendi ürünümüz; uygulamanın kendi ikonu ve ekranları |
| `dernek-asistan/` | `cover.png` | Kullanıcının verdiği tanıtım kompozisyonu (örnek veri) |
| `qr-menu/` | `logo.svg` | webmenu.info'daki 97 px `web_site_logo.png` dosyasından piksel piksel ölçülerek vektöre çizildi (aynı mor, `#6e64c5`); büyük boy kaynak yoktu |
| `qr-menu/` | `cover.jpg` | https://www.pexels.com/photo/10032377/ (Pexels, ücretsiz ticari lisans, atıf gerekmez). Dikey kaynak 2000 px genişlikte indirildi, 3:2 kırpıldı ve yatay aynalandı: QR kartı sol kenara gelsin diye — panel, yatay kapağın sağ ~%25'ini keser |

Seçim kuralı `src/assets/services/README.md` ile aynı: markası ya da
işletme adı okunan kareler kullanılmaz. Bu yüzden elenen adaylar oldu: bir
İstanbul kafe masasında işletme adı yazan QR kartı, POS markası görünen
ödeme kareleri ve stickerlı kahve değirmenleri.
