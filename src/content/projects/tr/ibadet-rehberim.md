---
title: "İbadet Rehberim"
description: "Namaz vakitleri, zikirmatik ve yapay zekâ destekli asistanı tek bir sade ekranda toplayan iOS ve Android uygulaması."
type: product
tagline: "Namaz vakti, zikir ve merak ettiğiniz dinî sorular için tek bir sade uygulama."
status: live
category: "Mobil uygulama"
client: "Kendi ürünümüz"
year: 2026
tags: ["mobil", "flutter", "firebase", "ios", "android"]
logo: "../_images/ibadet-rehberim/logo.png"
cover: "../_images/ibadet-rehberim/screen-discover-feed.png"
video:
  src: "/media/ibadet-rehberim/tanitim.mp4"
  uploadDate: 2026-08-29
stores:
  googlePlay: "https://play.google.com/store/apps/details?id=com.omran.huzur_islamda"
  web: "https://ibadetrehberim.com/"
  # App Store bağlantısı elimize geçince appStore alanı doldurulup bu iki
  # satır silinecek; rozet o an tıklanabilir hâle gelir.
  pending:
    - appStore
features:
  - title: "Namaz vakitleri, bulunduğunuz yere göre"
    text: "Vakitler Diyanet'in hesaplama yöntemiyle ve konumunuza göre hesaplanır. Vakit girdiğinde bildirim gelir, telefon çevrimdışıyken bile. Ne saate bakmanız gerekir ne de internete."
    image: "../_images/ibadet-rehberim/screen-prayer-times.png"
    alt: "İbadet Rehberim ezan vakitleri ekranı: şehre göre günlük namaz vakitleri ve vakit girdiğinde gelen bildirim"
  - title: "Sorabileceğiniz bir İslami asistan"
    text: "Aklınıza takılan dinî soruyu yazın, yapay zekâ destekli asistan yanıtlasın. Yanıtın hangi kaynağa dayandığı da yazılı, yani okuduğunuzu doğrulayabilirsiniz."
    image: "../_images/ibadet-rehberim/screen-assistant.png"
    alt: "İbadet Rehberim islami asistan ekranı: kullanıcının sorduğu dinî soruya verilen kaynaklı yanıt"
# Mağaza puanı bilerek yok: uydurma bir puan yerine ölçülebilir tek gerçek
# veri (indirme sayısı) duruyor. Google Play'deki gerçek puan elimize
# geçtiğinde rating: { value, count } olarak buraya eklenebilir.
results:
  - value: "1.000+"
    label: "indirme"
pricing:
  label: "Ücretsiz"
social:
  - platform: instagram
    href: "https://www.instagram.com/ibadetrehberim.app/"
  - platform: tiktok
    href: "https://www.tiktok.com/@ibadetrehberim"
  - platform: youtube
    href: "https://www.youtube.com/@ibadetrehberim"
app:
  schemaType: MobileApplication
  applicationCategory: LifestyleApplication
  operatingSystem: "ANDROID, IOS"
  price: "0"
  priceCurrency: "TRY"
order: 1
draft: true
---

**İbadet Rehberim**, günlük ibadetleri takip etmeyi kolaylaştıran bir mobil
uygulama. Fikri, tasarımı ve yazılımı bize ait; baştan sona İscotera'da
geliştirdik.

Uygulamanın bütün özellikleri, ekran görüntüleri ve sık sorulan sorular kendi
sitesinde duruyor: [ibadetrehberim.com](https://ibadetrehberim.com/). Bu sayfa
ürünü tanıtmak için değil, nasıl geliştirdiğimizi anlatmak için var.

## Nasıl geliştirdik

### Arayüz: öğrenmek gerektirmeyen bir yapı

Arayüzü baştan her yaştan kullanıcıyı düşünerek tasarladık: büyük ve okunaklı
yazılar, az sayıda ama net buton, beş sabit sekmeden oluşan bir gezinme.
Kullanıcı hangi ekranda olduğunu her an biliyor, aradığı şeyi menülerin
arasında aramıyor. Telefonunun yazı boyutunu büyütmüş biri uygulamayı
açtığında metinler de ona göre ölçekleniyor; ayarı bir kez yapmış olan kişi
burada yeniden uğraşmıyor.

### Tek kod tabanı, iki platform

Uygulamayı Flutter ile, tek bir kaynaktan hem iPhone hem Android için
geliştirdik. Müşterilerimiz açısından bu şu anlama geliyor: iki ayrı uygulama
yaptırmanız gerekmiyor, yeni bir özellik iki platforma da aynı anda geliyor ve
bakım maliyeti ikiye katlanmıyor.

### Veri önce cihazda, bulut yedekte

Zikirler, tercihler ve indirilen namaz vakitleri telefonun kendi veritabanında
tutuluyor; bulut yalnızca yedekleme ve cihaz değiştirildiğinde eşitleme için
devreye giriyor. Kullanıcı bunu şurada hissediyor: uygulama saniyeler içinde
açılıyor, zikir sayacı ve namaz vakitleri bağlantı olmadan da çalışıyor,
hatırlatmalar sunucuya değil cihazın kendi saatine bağlı olduğu için şebeke
çekmediğinde bile zamanında geliyor.

### Sunucu tarafı: hazır bulut altyapısı

Giriş, içerik ve sunucu tarafı işlemler için Firebase'i kullandık; asistan
Google'ın Gemini modeliyle çalışıyor. Böylece küçük bir ekiple sürdürülebilir,
kullanıcı sayısı arttığında da sorun çıkarmayacak bir sistem kurmuş olduk.
Hesap silme gibi hassas işlemleri telefona bırakmadık: kullanıcı hesabını
sildiğinde ilgili bütün kayıtlar sunucu tarafında tek bir işlemle temizleniyor.

### Kod tarafı: değişime hazır bir yapı

Uygulamayı katmanlı bir mimariyle yazdık; arayüz, iş kuralları ve veri erişimi
birbirinden ayrı duruyor. Bunun pratik karşılığı şu: bir ekranın verisini
nereden aldığı tek bir yerden değişiyor, yeni bir özellik mevcut ekranları
bozma riski taşımıyor ve projeye sonradan katılan bir geliştirici nereye
bakacağını biliyor. Perde arkasındaki mimari kararları merak ediyorsanız,
[Clean Architecture yazımızda](/blog/clean-architecture-ne-zaman-deger/)
bu yaklaşımı ayrıntılı anlatmıştık.

## Bugün

Uygulama Google Play'de yayında ve ücretsiz indiriliyor; App Store sürümü
yolda. Namaz vakitleri, akıllı zikirmatik, dua–hadis–ayet akışı ve yapay zekâ
destekli asistan bugün kullanıcıların elinde; isteyen destek paketiyle
reklamsız kullanabiliyor.

İlk satırı Kasım 2025'te yazdık; proje o günden bu yana düzenli olarak
geliştiriliyor.

Aklınızda bir mobil uygulama fikri varsa [bize ulaşın](/iletisim/). İki
platform, çevrimdışı çalışan bir veri katmanı ve yapay zekâ destekli bir
asistan — hepsini tek bir ekiple hayata geçirdik. Sizinkini nasıl hayata
geçireceğimizi birlikte konuşalım.
