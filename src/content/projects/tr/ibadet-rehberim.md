---
title: "İbadet Rehberim"
description: "Namaz vakitlerini, zikirmatiği ve yapay zekâ destekli asistanı sade bir arayüzde bir araya getiren iOS ve Android uygulaması."
type: product
tagline: "Namaz vakti, zikir ve merak ettiğiniz dinî sorular için tek bir sade uygulama."
status: live
category: "Mobil uygulama"
client: "Kendi ürünümüz"
year: 2026
tags: ["mobil", "flutter", "firebase", "ios", "android"]
logo: "../_images/ibadet-rehberim/logo.png"
cover: "../_images/ibadet-rehberim/screen-discover-feed.png"
# Vitrin panelinin zemini (ProductPanel): tanıtım görsellerinin koyu yeşili.
color: "#253e22"
video:
  src: "/media/ibadet-rehberim/tanitim.mp4"
  uploadDate: 2026-08-29
stores:
  web: "https://ibadetrehberim.com/"
features:
  - title: "Namaz vakitleri, bulunduğunuz yere göre"
    text: "Uygulama vakitleri konumunuza göre, Diyanet'in hesaplama yöntemiyle hesaplıyor. Vakit girdiğinde telefon çevrimdışı olsa bile bildirim geliyor, saati sizin takip etmeniz gerekmiyor."
    image: "../_images/ibadet-rehberim/screen-prayer-times.png"
    alt: "İbadet Rehberim ezan vakitleri ekranı: şehre göre günlük namaz vakitleri ve vakit girdiğinde gelen bildirim"
  - title: "Dinî sorularınıza kaynaklı yanıt"
    text: "Aklınıza takılan dinî soruyu yazıyorsunuz, yapay zekâ destekli asistan yanıtlıyor. Yanıtla birlikte dayandığı kaynak da gösteriliyor, böylece okuduğunuzu kendiniz kontrol edebiliyorsunuz."
    image: "../_images/ibadet-rehberim/screen-assistant.png"
    alt: "İbadet Rehberim İslami asistan ekranı: kullanıcının sorduğu dinî soruya verilen kaynaklı yanıt"
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
draft: false
---

**İbadet Rehberim**, günlük ibadetleri takip etmeyi kolaylaştıran bir mobil
uygulama. Fikri, tasarımı ve yazılımı bize ait. Uygulamayı baştan sona
İscotera'da geliştirdik.

Uygulamanın bütün özelliklerini, ekran görüntülerini ve sık sorulan soruları
kendi sitesinde bulabilirsiniz: [ibadetrehberim.com](https://ibadetrehberim.com/).
Bu sayfada ise uygulamayı nasıl geliştirdiğimizi anlatıyoruz.

## Nasıl geliştirdik

### Öğrenmeye gerek kalmayan bir arayüz

Arayüzü en baştan her yaştan kullanıcıyı düşünerek tasarladık. Yazılar büyük
ve okunaklı, butonlar az ama net, gezinme de beş sabit sekmeden oluşuyor.
Kullanıcı hangi ekranda olduğunu her an biliyor, aradığını menülerin arasında
aramıyor. Telefonunda yazı boyutunu büyütmüş biri uygulamayı açtığında
metinler de ona göre büyüyor, aynı ayarı burada bir kez daha yapmak zorunda
kalmıyor.

### Tek kod tabanı, iki platform

Uygulamayı Flutter ile, tek bir kaynaktan hem iPhone hem Android için
geliştirdik. Sizin açınızdan bu şu anlama geliyor: iki ayrı uygulama
yaptırmanız gerekmiyor, yeni bir özellik iki platforma da aynı anda geliyor ve
bakım maliyeti ikiye katlanmıyor.

### Veri önce cihazda, bulut yedekte

Zikirleri, tercihleri ve indirilen namaz vakitlerini telefonun kendi
hafızasında tutuyoruz. Bulut yalnızca yedek almak ve telefon değiştiğinde
verileri yeni cihaza taşımak için devreye giriyor. Kullanıcı bunun farkını
günlük kullanımda görüyor: uygulama saniyeler içinde açılıyor, zikir sayacı ve
namaz vakitleri internet olmadan da çalışıyor. Hatırlatmalar sunucuya değil
telefonun kendi saatine bağlı olduğu için şebeke çekmediğinde bile zamanında
geliyor.

### Sunucu tarafında hazır bir bulut altyapısı

Kullanıcı girişi, içerik ve sunucu tarafındaki işlemler için Firebase'i
kullandık. Asistan da Google'ın Gemini modeliyle çalışıyor. Böylece küçük bir
ekibin bakımını yapabileceği, kullanıcı sayısı arttığında da sorun
çıkarmayacak bir sistem kurduk. Hesap silme gibi hassas işlemleri ise telefona
bırakmadık: kullanıcı hesabını sildiğinde ona ait bütün kayıtlar sunucuda tek
seferde siliniyor.

### Değişime hazır bir kod yapısı

Uygulamayı katmanlı bir mimariyle yazdık: arayüz, iş kuralları ve veri erişimi
birbirinden ayrı duruyor. Böylece bir ekranın verisini nereden aldığını tek
bir yerden değiştirebiliyoruz ve yeni bir özellik var olan ekranları bozma
riski taşımıyor. Projeye sonradan katılan bir geliştirici de nereye bakacağını
biliyor. Perde arkasındaki mimari kararları merak ediyorsanız, bu yaklaşımı
[Clean Architecture yazımızda](/blog/clean-architecture-ne-zaman-deger/)
ayrıntılı olarak anlattık.

## Bugün

Uygulama App Store'da ve Google Play'de yayında, ücretsiz olarak
indirilebiliyor. Namaz vakitleri, akıllı zikirmatik, dua, hadis ve ayet akışı
ile yapay zekâ destekli asistan bugün kullanıcıların elinde. Reklamsız
kullanmak isteyenler destek paketine geçebiliyor.

İki platformdaki sürümü, internet olmadan da çalışan yapıyı ve yapay zekâ
destekli asistanı tek bir ekiple geliştirdik. Aklınızda bir mobil
uygulama fikri varsa [bize yazın](/iletisim/), nasıl hayata
geçirebileceğimizi birlikte konuşalım.
