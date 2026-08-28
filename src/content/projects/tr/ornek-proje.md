---
# Ürün sayfası şablonu. Yayında görünmez, silinmez: yeni ürün eklerken
# hangi alanın ne işe yaradığını buradan okuyun.
#
# Sayfadaki bölüm sırası: hero → kanıt şeridi → özellikler → anlatı (bu
# dosyanın gövdesi) → yorumlar → SSS → kapanış çağrısı. Boş bıraktığınız
# alanın bölümü hiç render edilmez; yani doldurmadığınız hiçbir yer
# sayfada boşluk olarak görünmez.
#
# Ekran görüntüleri her özellik bloğunun kendi görseli olarak giriyor;
# ayrıca bir galeri bölümü yok. Fiyatın da ayrı bölümü yok, aşağıdaki
# pricing.label hero'daki künye rozetinde görünüyor.

title: "Örnek Proje"
description: "Ürün sayfası şablonu — hangi alanın nereye düştüğünü gösterir. Yayında görünmez."

# 'product' ürün tanıtımı, 'case-study' müşteri işi anlatısı.
type: product
# Hero'daki tek cümlelik vaat. Boş bırakılırsa description kullanılır.
tagline: "Ürünün ne yaptığını tek cümlede söyleyen satır."
# live | beta | development
status: live
category: "Mobil uygulama"
client: "Örnek Müşteri"
year: 2026
tags: ["web"]

# Görseller src/content/projects/_images/<proje-slug>/ altında durur,
# yollar bu markdown dosyasına göre görecelidir.
# logo: "../_images/ornek-proje/logo.png"
# cover: "../_images/ornek-proje/screen-home.png"

# Mağaza bağlantıları. İndirme rozetleri bu alandan basılır; App Store
# rozeti daima ilk sırada gelir.
#
# Ürün mağazada yayında ama bağlantı henüz elinizde değilse mağazayı
# 'pending' listesine yazın: rozet, düzeni bozmadan tıklanamaz bir yer
# tutucu olarak çıkar. Bu bir "yakında" ilanı değildir, yalnızca eksik
# bağlantıdır — dolu kaldığı her derlemede uyarı basılır, yayına
# çıkmadan önce boşalmalıdır.
stores:
  web: "https://example.com/"
  # appStore: "https://apps.apple.com/..."
  # googlePlay: "https://play.google.com/store/apps/details?id=..."
  # pending:
  #   - appStore

# Mağaza puanı. YALNIZCA mağazadan bakıp doğruladığınız gerçek değeri
# yazın; puan hem sayfada hem yapılandırılmış veride görünür ve uydurma
# bir değer Google tarafında manuel işleme yol açar.
#
# Yalnızca düzeni görmek için geçici bir değer koymanız gerekiyorsa alan
# adını aşağıdaki placeholderData listesine ekleyin: değer sayfada
# görünmeye devam eder ama yapılandırılmış veriye girmez ve her derlemede
# uyarı basılır.
# rating:
#   value: 4.8
#   count: 126

# Kanıt şeridindeki sayılar, en fazla 3. Sadece ölçülebilir şeyler
# yazılır — "iOS + Android" bir sonuç değil, özelliktir ve yanındaki
# gerçek sayıları da şüpheli gösterir.
results:
  - value: "10.000+"
    label: "indirme"

# Her özellik kendi ekranıyla eşleşir; bloklar dönüşümlü olarak solda ve
# sağda görünür. Madde listesi yazmayın, özelliğin kullanıcıya ne
# kazandırdığını yazın.
features:
  - title: "Özelliğin adı"
    text: "Özelliğin kullanıcı için ne anlama geldiğini anlatan iki cümle."
    # image: "../_images/ornek-proje/screen-feature.png"
    # alt: "Ekranın ne gösterdiğini tarif eden cümle"

# Gerçek, izin alınmış yorumlar. Geçici örnek yorum koyacaksanız
# placeholderData listesine 'testimonials' ekleyin.
testimonials: []
  # - quote: "..."
  #   author: "Ad Soyad"
  #   role: "Şirket, görev"

# Hero'daki künye rozetinde görünen fiyat etiketi.
pricing:
  label: "Ücretsiz"

# Gerçekten sorulan sorular. Buradaki metin FAQPage yapılandırılmış
# verisine de girer, o yüzden sayfadaki yanıtla birebir aynıdır.
faq:
  - q: "Sık sorulan bir soru"
    a: "Doğrudan ve dürüst yanıt."

social: []
  # - platform: instagram   # instagram | facebook | tiktok | youtube
  #   href: "https://instagram.com/..."

# Mağaza dışı bağlantılar (basın, kaynak kod vb.).
links: []

# SoftwareApplication yapılandırılmış verisi. Alanı silerseniz sayfa bu
# şemayı hiç basmaz. operatingSystem aynı zamanda künyedeki platform
# rozetlerini besler, yani şemadaki değer sayfada da görünür.
app:
  schemaType: MobileApplication # MobileApplication | WebApplication | SoftwareApplication
  applicationCategory: LifestyleApplication
  operatingSystem: "ANDROID, IOS"
  price: "0"
  priceCurrency: "TRY"

# Düzeni görmek için geçici doldurulmuş alanlar. Buradaki alanlar sayfada
# görünür ama yapılandırılmış veriye girmez; dolu kaldığı her derlemede
# uyarı basılır. Yayına çıkmadan önce boşalması gerekir.
placeholderData: []
  # - rating
  # - testimonials

order: 1
draft: true
---

Gövde yalnızca **anlatı** içindir: özellik listesi buraya değil yukarıdaki
`features` alanına yazılır. Burada ürünü neden yaptığınızı, hangi kararları
neden aldığınızı ve bugün nerede olduğunu anlatın.

## Neden yaptık

Hangi ihtiyaç vardı? Hangi problemi çözüyor?

## Nasıl geliştirdik

Hangi teknolojileri neden seçtiniz? Hangi kararlar kullanıcı açısından ne
anlama geliyor?

## Bugün

Ürün nerede? Nasıl gelişmeye devam ediyor?
