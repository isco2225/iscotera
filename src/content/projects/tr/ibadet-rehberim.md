---
title: "İbadet Rehberim"
description: "Namaz vakitleri, zikirmatik ve yapay zekâ destekli asistanı tek bir sade ekranda toplayan iOS ve Android uygulaması."
client: "Kendi ürünümüz"
year: 2026
tags: ["mobil", "flutter", "firebase", "ios", "android"]
logo: "../_images/ibadet-rehberim/logo.png"
cover: "../_images/ibadet-rehberim/screen-discover-feed.png"
screenshots:
  - src: "../_images/ibadet-rehberim/screen-prayer-times.png"
    alt: "İbadet Rehberim ezan vakitleri ekranı: şehre göre günlük namaz vakitleri ve vakit girdiğinde gelen bildirim"
  - src: "../_images/ibadet-rehberim/screen-dhikr-tracking.png"
    alt: "İbadet Rehberim zikir ekranı: günlük zikir hedefleri ve tamamlanma oranları"
  - src: "../_images/ibadet-rehberim/screen-assistant.png"
    alt: "İbadet Rehberim islami asistan ekranı: kullanıcının sorduğu dinî soruya verilen kaynaklı yanıt"
results:
  - value: "1.000+"
    label: "Google Play'den indirme"
  - value: "5,0"
    label: "kullanıcı puanı"
  - value: "iOS + Android"
    label: "tek uygulama, iki platform"
social:
  - platform: instagram
    href: "https://www.instagram.com/ibadetrehberim.app/"
  - platform: tiktok
    href: "https://www.tiktok.com/@ibadetrehberim"
  - platform: youtube
    href: "https://www.youtube.com/@ibadetrehberim"
links:
  - label: "ibadetrehberim.com"
    href: "https://ibadetrehberim.com/"
  - label: "Google Play'de indir"
    href: "https://play.google.com/store/apps/details?id=com.omran.huzur_islamda"
order: 1
draft: true
---

**İbadet Rehberim**, günlük ibadetleri takip etmeyi kolaylaştıran bir mobil
uygulama. Fikri, tasarımı ve yazılımı bize ait — baştan sona İscotera'da
geliştirdik.

## Uygulamada neler var

Günlük ibadet için gereken her şeyi tek bir sade arayüzde topladık:

- **Namaz vakitleri** — bulunduğunuz konuma göre, Diyanet'in hesaplama
  yöntemiyle.
- **Vakit bildirimleri** — tam vaktinde. Telefon çevrimdışıyken de çalışır.
- **Akıllı Zikirmatik** — hazır zikir setleri ya da kendi oluşturduğunuz tesbihatlar,
  günlük hedef takibiyle.
- **İslami asistan** — merak ettiğiniz dinî soruları sorabileceğiniz, yapay
  zekâ destekli bir sohbet ekranı.
- **Günün duası, hadisi ve ayeti** — her gün yenilenen kısa bir akış.
  Gönderilerin içinde bilginin hangi kaynaktan alındığı yazıyor; okuduğunuz
  şeyin nereye dayandığını görebiliyorsunuz.
- **Telefon değişse de kaybolmayan kayıtlar** — hesabınızla giriş yaptığınızda
  zikir ilerlemeniz yedeklenir, yeni cihazınızda kaldığınız yerden devam
  edersiniz.

Uygulama ücretsiz. Reklam görmek istemeyenler için haftalık ya da yıllık
premium seçeneği var.

## Nasıl geliştirdik

Arayüzü baştan her yaştan kullanıcıyı düşünerek tasarladık: büyük ve okunaklı
yazılar, az sayıda ama net buton, öğrenmek gerektirmeyen bir gezinme. Kullanıcı
telefonunun yazı boyutunu büyütmüşse uygulama da ona uyum sağlıyor — ayarı bir
kez yapmış olan kişi burada yeniden uğraşmıyor.

Uygulamayı tek bir kaynaktan hem iPhone hem Android için geliştirdik. Bu,
müşterilerimiz açısından şu anlama geliyor: iki ayrı uygulama yaptırmanız
gerekmiyor, yeni bir özellik iki telefona da aynı anda geliyor ve bakım
maliyeti ikiye katlanmıyor.

Verileri önce telefonda saklayacak, buluta ise yalnızca yedek olarak
gönderecek şekilde kurguladık. Bunun sonucu: uygulama internet olmadan da
eksiksiz çalışıyor, açılışı hızlı ve kullanıcı hesap açmaya zorlanmıyor.

Sunucu tarafında hazır bulut altyapısı kullandık. Böylece küçük bir ekiple
sürdürülebilir, kullanıcı sayısı arttığında da sorun çıkarmayacak bir sistem
kurmuş olduk.

Perde arkasındaki mimari kararları merak ediyorsanız,
[Clean Architecture yazımızda](/blog/clean-architecture-ne-zaman-deger/)
bu yaklaşımı ayrıntılı anlatmıştık.

## Bugün

Uygulama yayında ve düzenli güncelleniyor. Kasım 2025'ten bu yana kesintisiz
geliştiriliyor; her sürümde yeni özellikler ekleniyor.

Aklınızda bir mobil uygulama fikri varsa [bize ulaşın](/iletisim/) —
nasıl hayata geçireceğimizi birlikte konuşalım.
