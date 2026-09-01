---
title: "Dernek Asistan"
description: "Vefa Yolu Derneği için geliştirdiğimiz bağış yönetim sistemi. Bağış kayıtları, hisseli projeler, fiyat listesi ve personel raporları web ve mobilde tek bir uygulamada."
type: case-study
tagline: "Bir yardım derneğinin bütün bağış işleri, ofiste ve sahada aynı ekranda."
status: live
category: "Web ve mobil uygulama"
client: "Vefa Yolu Derneği"
year: 2026
tags: ["web", "mobil", "özel yazılım", "supabase"]
cover: "../_images/dernek-asistan/screen-performance-report.png"
# Ekranlar örnek kayıtlarla çekildi (gerçek bağışçı verisi gösterilmiyor);
# görsellerin altında "veriler temsilidir" notu çıkar.
screenshotsIllustrative: true
# Mağaza bağlantısı yok: uygulama derneğin kendi personeline açık, herkese
# sunulan bir ürün değil. Aynı sebeple app (SoftwareApplication) şeması da
# bilerek yok; indirilemeyen bir uygulama için fiyat ve kurulum adresi
# bildirmek doğru olmazdı.
#
# results bilerek boş: elimizde doğrulanmış kullanım verisi yok. Rakam
# (aylık kayıt sayısı vb.) gelirse buraya en fazla üç madde olarak girer.
results: []
features:
  - title: "Bağış kaydı saniyeler içinde"
    text: "Çalışan bağışçının adını, kimin adına bağış yapıldığını, ülkeyi ve bağışın hangi kanaldan geldiğini girer; fiyatı sistem ülkeye ve türe göre kendisi bulur, tutarı hesaplar, derneğin asgari adet kuralını uygular. Aynı bağışçı birden fazla kişi adına bağış yapıyorsa hepsi tek formdan girilir ve her isim için ayrı kayıt açılır. Her kayıt, kendi bağış türü içinde kalıcı bir sıra numarası alır: makbuz ve takip için tek referans."
    image: "../_images/dernek-asistan/screen-donation-form.png"
    alt: "Dernek Asistan kurban bağışı ekleme formu: birim fiyat otomatik gelmiş; bağışçı adı, kimin adına, hayvan türü, niyet ve bağış kaynağı alanları"
  - title: "Her yardım türü kendi kurallarıyla"
    text: "Yemek dağıtımı, ekmek dağıtımı, kurban, Kuran-ı Kerim bağışı, su kuyusu ve Gazze su tankeri projelerinin her biri ayrı bir bölümde, kendi kurallarıyla çalışır. Kurban bağışında hayvan cinsi ve niyet (vacip, adak, şükür, sadaka, ruhuna kurban, şifa) seçilir; su kuyusunda hisse takibi yapılır."
  - title: "Hisseli projelerde anlık doluluk"
    text: "Su kuyusu ve su tankeri projeleri hisse mantığıyla yürür. Her projenin kaç hissesinin dolduğu, kaçının kaldığı görsel olarak görünür; proje dolduğunda kendiliğinden tamamlanan projeler listesine geçer. Hangi kuyuya kimlerin katıldığı ve her hissenin ödeme durumu tek bakışta okunur."
  - title: "Fiyat listesi sistemin içinde"
    text: "Ülkeye ve türe göre birim fiyatlar, asgari adetler ve hisse sayıları ayrı bir tabloda değil, uygulamanın içinde durur. Fiyatı yalnızca üst düzey yetkililer değiştirebilir ve her değişiklik kimin, ne zaman yaptığıyla birlikte saklanır."
  - title: "Personel performansı ve raporlama"
    text: "Her kayıt onu giren çalışana bağlıdır; yöneticiler her çalışanın toplam ve aylık kayıt sayısını, getirdiği bağış tutarını ve hangi türlerde çalıştığını görür. Tarih aralığı, bağış türü ve ülke seçilerek dönemsel özet çıkarılır, sonuç grafiklerle sunulur ve tek tıkla PDF olarak indirilir. Yönetim kurulu toplantısının rakamları dakikalar içinde hazırdır."
    image: "../_images/dernek-asistan/report-pdf.png"
    alt: "Dernek Asistan'ın ürettiği PDF performans raporu: dönem, özet rakamlar, bağış türüne ve kaynağa göre tablolar"
  - title: "Yetki ve güvenlik"
    text: "Uygulamaya yalnızca derneğin tanımladığı personel girebilir. Standart yetkililer bağış girer ve düzenler; üst düzey yetkililer ek olarak kayıt siler, fiyat düzenler, personel ve performans ekranlarına erişir. Bu kurallar yalnızca ekranda değil veritabanı seviyesinde uygulanır; yetkisiz bir silme işlemi teknik olarak mümkün değildir."
order: 2
draft: false
---

**Dernek Asistan**, Vefa Yolu Derneği'nin günlük bağış işlerini tek bir yerden
yönetmesi için geliştirdiğimiz bir sistem. Bağış kayıtları, hisseli projeler,
fiyat listesi, personel performansı ve raporlama aynı uygulamanın içinde;
dernek çalışanı ister ofisteki bilgisayardan ister sahada telefondan aynı
verilere ulaşıyor, yöneticiler derneğin genel durumunu anlık görüyor.

Bu sayfa yukarıdaki özellikleri saymak için değil, hangi ihtiyaçtan yola
çıktığımızı ve hangi kararları neden verdiğimizi anlatmak için var.

## Neden yaptık

Yardım dernekleri, özellikle kurban ve Ramazan gibi yoğun dönemlerde kısa
sürede yüzlerce bağış kaydı alır. Bu kayıtlar çoğunlukla elektronik
tablolarda, mesajlaşma uygulamalarında ve kişisel notlarda dağınık durur.
Sonuç şu:

- Bir bağışın hangi çalışan tarafından, ne zaman, hangi ülke için alındığı
  sonradan zor bulunur.
- Su kuyusu gibi hisseli projelerde kaç hissenin dolduğu, kaçının boşta
  olduğu elle sayılır.
- Fiyatlar ayrı bir listede durur; tutarlar elle hesaplanır ve hata payı
  yüksektir.
- Ay sonunda "kaç bağış aldık, hangi kanaldan geldi, kim ne kadar kayıt
  girdi" sorularının cevabı saatler süren bir toplama işi ister.
- Yanlışlıkla silinen ya da değiştirilen bir kaydın izini sürmek mümkün
  olmaz.

Dernek Asistan'ı bu dağınıklığı ortadan kaldırmak için tasarladık.

## Nasıl geliştirdik

### Kurallar tabloda değil, sistemin içinde

İlk kararımız derneğin fiyat tablosunu uygulamaya taşımak oldu. Ülkeye ve
türe göre birim fiyat, asgari adet ve hisse sayısı artık veri olarak sistemde
duruyor; çalışan fiyatı aramıyor, tutar hesaplamıyor, asgari adeti hatırlamak
zorunda kalmıyor. Kural bir kez tanımlanıyor ve her kayıtta kendiliğinden
uygulanıyor. Elle hesap hatasını kapatmanın en kısa yolu bu.

### Her bağış türü ayrı bir iş akışı

Kurban bağışı ile su kuyusu bağışı aynı form değil. Birinde hayvan cinsi ve
niyet seçiliyor, diğerinde hisse takibi yapılıyor. Bu farkları tek bir "genel
bağış" formuna sığdırmak yerine her yardım türünü kendi kurallarıyla ayrı bir
bölüm olarak kurduk; ortak olan kısımlar (bağışçı, ülke, kanal, sıra
numarası) tek bir omurgada duruyor. Yeni bir yardım türü eklemek, mevcutları
bozmadan yeni bir bölüm açmak demek.

### Sıra numarası kalıcı, kayıt çoklu

Her kayıt, bağış türü içinde kendine ait kalıcı bir sıra numarası alıyor.
Makbuz keserken, bağışçı aradığında ya da ay sonu kontrolünde tek bir
referans var. Aynı bağışçı birden fazla kişi adına bağış yaptığında çalışan
formu bir kez dolduruyor, sistem her isim için ayrı kaydı kendisi açıyor;
yoğun dönemde en çok zaman kazandıran şey bu oldu.

### Yetki veritabanında uygulanıyor

İki yetki seviyesi var ve bunu yalnızca arayüzde düğme gizleyerek yapmadık:
kimin neyi silebileceği, kimin fiyat değiştirebileceği veritabanı
seviyesinde tanımlı. Arayüz atlansa bile yetkisiz bir silme işlemi teknik
olarak gerçekleşmiyor. Her fiyat değişikliği de kimin, ne zaman yaptığıyla
birlikte kaydediliyor. Sunucu tarafında Supabase'i kullandık: küçük bir
ekiple sürdürülebilir, derneğin verisinin derneğe ait kaldığı bir altyapı.

### Ofiste ve sahada aynı uygulama

Uygulama hem web tarayıcısında hem mobil cihazlarda çalışıyor. Saha ekibi
telefondan kayıt girerken ofis ekibi aynı veriyi masaüstünde görüyor; iki
ayrı yazılım, iki ayrı bakım maliyeti yok.

## Bugün

Dernek Asistan, Vefa Yolu Derneği'nde kullanımda. Fiyat bulma, tutar
hesaplama, sıra numarası verme ve çoklu kayıt açma işleri otomatikleşti;
yoğun dönemde bağış kaydı, eskiden dakikalar alan bir işten saniyeler süren
bir forma indi. "Bu ay kaç bağış aldık?", "Hangi kanal daha çok bağış
getiriyor?", "Bangladeş kuyusunda kaç hisse kaldı?" sorularının cevabı arama
yapmadan ekranda hazır. Yetki ayrımı ve değişiklik kayıtları sayesinde
dernek, bağışçılarına ve denetim makamlarına karşı hesap verebilir bir yapıya
kavuştu.

Dağınık ve kişiye bağlı bir kayıt düzeni, tüm ekibin ortak kullandığı,
kuralları kendi içinde uygulayan ve her an rapor üretebilen bir sisteme
dönüştü. Dernek artık zamanını tabloları birleştirmeye değil, yardımın
kendisine ayırıyor.

İşinizin de tablolar arasında yürüyen bir tarafı varsa
[özel yazılım çözümlerimize](/hizmetler/ozel-yazilim-cozumleri/) bakın ya da
doğrudan [bize ulaşın](/iletisim/); önce hazır bir çözümün yetip
yetmeyeceğini birlikte konuşalım.
