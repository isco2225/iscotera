# Ürün görselleri

Her ürünün görselleri `<urun-adi>/` altında durur ve frontmatter'dan
`../_images/<urun-adi>/dosya` ile bağlanır; Astro `image()` ile optimize eder.
Dikey ekranlar 640, yatay görseller 1984 piksel genişlikte üretilir
(`src/utils/product.ts`): yatay ekran görüntüleri DPR 2 ile çekilmelidir,
aksi hâlde Retina'da bulanık kalır.

| Klasör | Dosya | Kaynak |
| --- | --- | --- |
| `ibadet-rehberim/` | `logo.png`, `screen-*.png` | Kendi ürünümüz; uygulamanın kendi ikonu ve ekranları |
| `qr-menu/` | `logo.svg` | webmenu.info'daki 97 px `web_site_logo.png` dosyasından piksel piksel ölçülerek vektöre çizildi (aynı mor, `#6e64c5`); büyük boy kaynak yoktu |
| `qr-menu/` | `cover.jpg` | https://www.pexels.com/photo/10032377/ (Pexels, ücretsiz ticari lisans, atıf gerekmez). Dikey kaynak 2000 px genişlikte indirildi, 3:2 kırpıldı ve yatay aynalandı: QR kartı sol kenara gelsin diye — panel, yatay kapağın sağ ~%25'ini keser |
| `meydan-sport-club/` | `logo.png` | Müşterinin logosu: salon sitesindeki `public/images/logo/meydansport_logo.png` (497×495), kare olsun diye 495×495 kırpıldı |
| `meydan-sport-club/` | `screen-*.png` | Bizim yaptığımız www.meydansportclub.com sitesinin telefon ekranları (2026-11-06, Playwright ile headless Chromium): 390×780 görünüm, DPR 2 (780×1560; panel ve İbadet Rehberim ekranlarıyla aynı 1:2 oran). Bölüm ekranlarında başlık, üstteki boşluk kadar (56 px) aşağıdan başlar |
| `meydan-sport-club/` | `screen-home-desktop.png` | Kapak: aynı sitenin masaüstü ana sayfası (2026-11-06), 1024×700 görünüm, DPR 2 (2048×1400). Genişlik, sitenin masaüstü düzenine geçtiği en dar değer: panelde 640 px'e küçültülünce yazılar büyük kalsın diye. Panel yatay kapağın sağ ~%25'ini kestiği için başlık solda, fotoğraf kartı sağda kısmen görünür |

Seçim kuralı `src/assets/services/README.md` ile aynı: markası ya da
işletme adı okunan kareler kullanılmaz. Bu yüzden elenen adaylar oldu: bir
İstanbul kafe masasında işletme adı yazan QR kartı, POS markası görünen
ödeme kareleri ve stickerlı kahve değirmenleri.

Meydan Sport Club'da müşterinin kendi adı ve logosu sayfanın konusu olduğu
için kuralın dışında. Salonun ham fotoğrafları ise aynı kural yüzünden
alınmadı: hepsinde ekipman markası (GYMHOLIX) büyük ve okunur durumda. Ekran
görüntülerinde bu fotoğraflar sitenin bir parçası olarak küçük görünüyor;
o hâliyle bırakıldı, çünkü görüntü müşterinin sitesini olduğu gibi gösteriyor.
Ekranlardaki ücretler 2026-11-06 tarihli; salon ücretleri değiştirirse
ekranlar aynı ölçülerle yeniden çekilir.
