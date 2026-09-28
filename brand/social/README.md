# Sosyal medya profil fotoğrafları

Hepsi `brand/logo.svg` geometrisinden üretildi (`sharp` ile, vektörden; yeniden
üretmek için logo değişirse aynı geometriyle tekrar çizin). Çözünürlük 1024 px
ana dosya, 400 px hızlı kullanım kopyası; her varyantın vektör kaynağı `.svg`.

| Dosya | Zemin | Ne zaman |
| --- | --- | --- |
| `dark-square-*.png` / `.jpg` | Kenara kadar siyah kare | **Varsayılan.** Daire (Instagram, X, Facebook, YouTube, TikTok) ve yuvarlatılmış kare (LinkedIn) kırpmalarda aynı görünür. JPEG kopyası saydamlık kabul etmeyen yüklemeler için. |
| `dark-tile-*.png` | Yuvarlatılmış kutu, köşeler saydam | Sitedeki logonun aynısı. Kare gösteren yerlerde köşelerde sayfa zemini görünür. |
| `dark-tile-on-white-*.png` | Yuvarlatılmış kutu, beyaz zemin | Saydamlık kabul etmeyen ve kare gösteren yerler. Daire kırpmada beyaz halka kalır; koyu temada belirgin. |
| `light-square-*.png` | Beyaz kare, siyah gövde | Negatif. Markanın asıl hâli değil; koyu temalı akışta beyaz disk isteniyorsa. |

## Platform boyutları

Ana dosya (1024 px) hepsine yüklenebilir; platform kendi küçültür.

| Platform | Yükleme | Gösterim |
| --- | --- | --- |
| Instagram | 320 px ve üstü, kare | Daire · 150 px web, 110 px telefon |
| LinkedIn (şirket) | 300 px ve üstü, kare | Yuvarlatılmış kare · 100–160 px |
| X | 400 px, kare | Daire |
| Facebook (sayfa) | 320 px ve üstü, kare | Daire · 170 px |
| YouTube | 800 px, kare | Daire · 80 px başlıkta |
| TikTok | 200 px ve üstü, kare | Daire |

Kanvas: https://claude.ai/artifact/EzWYf1crBSVeozewvv9Xan (kırpma önizlemeleri).
