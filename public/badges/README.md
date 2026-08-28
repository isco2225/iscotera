# Mağaza rozetleri

`StoreBadges.astro` bu klasörde şu dosyaları arar:

| Dosya | Nereden |
| --- | --- |
| `app-store-tr.svg` | https://developer.apple.com/app-store/marketing/guidelines/ |
| `app-store-en.svg` | https://developer.apple.com/app-store/marketing/guidelines/ |
| `google-play-tr.png` | https://play.google.com/intl/en_us/badges/ |
| `google-play-en.png` | https://play.google.com/intl/en_us/badges/ |

Dosya yoksa bileşen kendi metin butonuna düşer, site bozulmaz; dosya
konduğunda bir sonraki derlemede otomatik olarak resmî rozete geçer.

## Kurallar (görselleri değiştirmeden kullanın)

- **App Store rozeti daima ilk sırada** gelir (Apple Identity Guidelines).
- **Google Play rozeti başka mağaza rozetinden küçük olamaz** — ikisi de 48px
  yükseklikte basılıyor.
- Rozetin **rengi, oranı ve iç boşluğu değiştirilmez**, üzerine filtre
  uygulanmaz. Siyah rozetin çevresindeki gri çerçeve görselin parçasıdır,
  kırpılmaz.
- **"App Store" ve "Google Play" ibareleri çevrilmez.** Dil başına ayrı dosya
  tutulmasının sebebi rozetteki *diğer* kelimelerin ("İndir" / "Download on
  the") yerelleştirilmiş olması.
- Türkçe rozetleri indirirken Apple sayfasında dil olarak "Turkish (Türkçe)",
  Google sayfasında "Türkçe" seçin.
