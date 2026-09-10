---
title: "Yazılım Yaptırırken Sözleşmede Ne Olmalı? 8 Madde"
description: "Yazılım sözleşmesinde kapsam, teslimler, kod ve hesap sahipliği, değişiklik talepleri, bakım ve ayrılık koşulları nasıl yazılmalı? Sipariş öncesi kontrol listesi."
pubDate: 2026-09-08
tags: ["özel yazılım", "işletme", "sözleşme"]
cover: "../_images/yazilim-sozlesmesinde-ne-olmali/cover.jpg"
coverAlt: "Güneş alan bir masada, elinde mavi kalemle bir belgeyi imzalayan kişi"
---

Yazılım projelerinde anlaşmazlıkların çoğu kötü niyetten değil, iki tarafın
aynı cümleden farklı şey anlamasından çıkar. "Raporlama modülü" sizin için
on rapor, yazılımcı için iki rapordur; "kodu teslim ederiz" sizin için
kaynak kod, onun için kurulu bir sistemdir. Bu yazı, yazılım sözleşmesinde
hangi maddelerin bu boşlukları kapattığını anlatıyor.

Bir not: biz avukat değil yazılımcıyız. Aşağıdakiler hukuki metin değil,
yıllardır masanın iki tarafında da gördüğümüz sorunlardan çıkan bir kontrol
listesi. Sözleşmeyi bir hukukçuya okutmak her zaman doğru karardır; bu
liste, ona "şunlar var mı" diye sormanız için.

## Yazılım sözleşmesinde olması gereken 8 madde

### 1. Kapsam belgesi: ne yapılacak, ne yapılmayacak

Sözleşmenin en önemli eki, kapsam belgesidir. İyi bir kapsam belgesi,
yapılacakları maddeler hâlinde sayar ve her maddenin süresini, fiyatını
yazar. Daha da iyisi, **yapılmayacakları** da yazar: "mobil uygulama bu
kapsamda değildir", "muhasebe entegrasyonu ikinci aşamadadır". Kapsam
dışını yazmak, "biz bunun dahil olduğunu sanmıştık" tartışmasını baştan
bitirir.

### 2. Teslimler ve kabul kriteri

Her aşamanın çıktısı ve o çıktının "tamam" sayılma koşulu yazılı olmalı.
"Sipariş modülü teslim edilir" yetmez; "sipariş oluşturulur, düzenlenir,
iptal edilir ve listede filtrelenir; şu üç senaryo test edilir" gerekir.
Kabul kriteri olmayan teslim, sonsuza kadar "biraz daha" ister.

### 3. Süre ve ödeme planı, aşamalara bağlı

Ödemenin takvime değil teslime bağlanması iki tarafı da korur. Peşinat,
ara teslimlerde parça ödemeler ve kabulde kalan tutar makul bir yapıdır.
Tamamının baştan istenmesi de, tamamının en sona bırakılması da riski tek
tarafa yükler. [Sürenin neye bağlı olduğunu](/blog/ozel-yazilim-ne-kadar-surer/)
bilmek, bu planı gerçekçi kurmanızı sağlar.

### 4. Değişiklik talepleri nasıl işler?

Proje sırasında fikir değişir; bu normaldir. Anormal olan, değişikliğin
nasıl fiyatlanıp takvime nasıl ekleneceğinin yazılı olmamasıdır. Sözleşme
şunu söylemeli: kapsam dışı bir istek geldiğinde yazılımcı süre ve fiyat
etkisini yazılı bildirir, siz onaylarsınız, kapsam belgesi güncellenir.
Böylece ne "sınırsız revizyon" hayali kalır, ne de her küçük istek için
pazarlık.

### 5. Kodun, hesapların ve alan adının sahipliği

En çok sonradan fark edilen madde. Kaynak kodun size ait olduğu, teslimde
kodun ve dokümantasyonun verileceği açıkça yazılmalı. Aynı şey hesaplar
için geçerli: alan adı, barındırma, Apple ve Google geliştirici hesapları,
SMS ve e-posta servisleri sizin adınıza açılmalı. Yazılımcının adına açılan
hesap, yollar ayrıldığında sizin olmayan bir sistem demektir. Bizim
uygulamamız da bu: [mağaza hesapları sizin adınıza açılır](/hizmetler/mobil-uygulama-gelistirme/),
[alan adı ve barındırma sizin üzerinize olur](/hizmetler/web-uygulama-gelistirme/).

### 6. Verinin sahibi ve yeri

Müşteri listeniz, siparişleriniz, bağış kayıtlarınız: bu veri sizindir ve
sözleşme bunu söylemelidir. Ayrıca verinin nerede tutulduğu (hangi ülke,
hangi sağlayıcı) ve istediğinizde dışa aktarılabileceği yazılmalı. Kişisel
veri içeriyorsa KVKK yükümlülüklerinin kimde olduğu da netleşmeli.
[Sunucu seçimi yazısında](/blog/kucuk-isletme-icin-sunucu-secimi/) bu
soruyu ayrıntılı ele aldık.

### 7. Yayın sonrası bakım ve destek

Yazılım teslimle bitmez. Hata çıkarsa kim, ne sürede düzeltir? İşletim
sistemi güncellemesi uygulamayı bozarsa kimin işi? Yeni özellik nasıl
fiyatlanır? Bunlar ya sözleşmenin içinde ya da ayrı bir bakım anlaşmasında
yazılı olmalı. "Sorun olursa ararsınız" bir madde değildir.

### 8. Ayrılık ve devir koşulları

Her iş ilişkisi bitebilir. Sözleşme, bittiğinde ne olacağını söylemeli:
kod, dokümantasyon ve erişim bilgileri hangi biçimde, ne sürede teslim
edilir; başka bir ekip devraldığında ne gerekir. Devri kolay olan sistem,
zaten iyi yapılmış sistemdir; bu maddeye direnç, başlı başına bir işarettir.

## Yazılım sözleşmesinde olmaması gerekenler

Bazı ifadeler ilk bakışta lehinize görünür ama sonradan sorun çıkarır:

- **"Sınırsız revizyon."** Kulağa güzel gelir, uygulamada iki taraf için de
  belirsizliktir. Revizyonun sınırı kapsam belgesidir.
- **"vb.", "ve benzeri", "gerekli tüm özellikler."** Kapsam belgesinde bu
  kelimeler varsa kapsam yoktur.
- **Sadece toplam fiyat.** Maddelere ayrılmamış tek bir rakam, hangi
  kısmın ne kadar tuttuğunu ve neyin çıkarılabileceğini gizler.
- **Yazılımcının adına açılan hesaplar.** Yukarıda anlattık; kısa yol gibi
  görünür, uzun vadede bağımlılıktır.

## Sözleşme öncesinde sorulacak üç soru

1. "Kapsam belgesini görebilir miyim?" Yoksa ya da tek sayfaysa, önce onu
   isteyin. [Özel yazılım mı hazır paket mi](/blog/ozel-yazilim-mi-hazir-paket-mi/)
   kararı bile bu belge olmadan sağlıklı verilemez.
2. "Ayrıldığımızda elimde ne kalıyor?" Cevap "her şey" değilse nedenini
   sorun.
3. "İlk çalışan sürümü ne zaman görürüm?" Cevap "sonunda" ise riski siz
   taşıyorsunuz demektir.

Bu üç sorunun cevabı, sözleşmenin geri kalanı hakkında çok şey söyler.
Elinizdeki teklifi ya da sözleşmeyi birlikte gözden geçirmek isterseniz
[yazılım danışmanlığı](/hizmetler/yazilim-danismanligi/) tam olarak bunun
için var; [bize ulaşın](/iletisim/).
