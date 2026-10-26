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
on rapor, yazılımcı için iki rapor demek olabilir. "Kodu teslim ederiz" sözü
de sizin için kaynak kod, onun için kurulu bir sistem anlamına gelebilir. Bu
yazıda, yazılım sözleşmesinde bu boşlukları hangi maddelerin kapattığını
anlatıyoruz.

Bir not: biz avukat değil, yazılımcıyız. Aşağıdakiler hukuki bir metin
değil; yıllardır masanın iki tarafında da gördüğümüz sorunlardan çıkan bir
kontrol listesi. Sözleşmeyi bir hukukçuya okutmak her zaman doğru karardır.
Bu liste, ona "şunlar var mı?" diye sorabilmeniz için.

## Yazılım sözleşmesinde olması gereken 8 madde

### 1. Kapsam belgesi: ne yapılacak, ne yapılmayacak

Sözleşmenin en önemli eki kapsam belgesidir. İyi bir kapsam belgesi
yapılacakları madde madde sayar, her maddenin süresini ve fiyatını yazar.
Daha da iyisi, **yapılmayacakları** da yazar: "mobil uygulama bu kapsamda
değildir", "muhasebe entegrasyonu ikinci aşamadadır". Neyin kapsam dışında
olduğunu yazmak, "biz bunun dahil olduğunu sanmıştık" tartışmasını baştan
önler.

### 2. Teslimler ve kabul kriteri

Her aşamanın çıktısı ve o çıktının "tamam" sayılma koşulu yazılı olmalı.
"Sipariş modülü teslim edilir" demek yetmez. Şöyle bir tanım gerekir:
"sipariş oluşturulur, düzenlenir, iptal edilir ve listede filtrelenir; şu üç
senaryo test edilir." Kabul kriteri olmayan bir teslimde "biraz daha"
istekleri bitmek bilmez.

### 3. Süre ve ödeme planı, aşamalara bağlı

Ödemenin takvime değil teslime bağlanması iki tarafı da korur. Peşinat,
ara teslimlerde parça ödemeler ve kabulde kalan tutar makul bir yapıdır.
Bedelin tamamını baştan istemek de, tamamını en sona bırakmak da riski tek
tarafa yükler. [Sürenin neye bağlı olduğunu](/blog/ozel-yazilim-ne-kadar-surer/)
bilirseniz bu planı da gerçekçi kurarsınız.

### 4. Değişiklik talepleri nasıl işler?

Proje sırasında fikirlerin değişmesi normal. Sorun, değişikliğin nasıl
fiyatlanacağının ve takvime nasıl ekleneceğinin yazılı olmaması. Sözleşme
şunu söylemeli: kapsam dışı bir istek geldiğinde yazılımcı süre ve fiyat
etkisini yazılı bildirir, siz onaylarsınız, kapsam belgesi güncellenir.
Böylece ne "sınırsız revizyon" beklentisi doğar ne de her küçük istek
pazarlığa döner.

### 5. Kodun, hesapların ve alan adının sahipliği

Eksikliği en çok sonradan fark edilen madde bu. Kaynak kodun size ait
olduğu, teslimde kodun ve dokümantasyonun verileceği açıkça yazılmalı. Aynı
şey hesaplar için de geçerli: alan adı, barındırma, Apple ve Google
geliştirici hesapları, SMS ve e-posta servisleri sizin adınıza açılmalı.
Yazılımcının adına açılan hesap, yollar ayrıldığında sizin olmayan bir
sistem demektir. Biz de böyle çalışıyoruz:
[mağaza hesaplarını sizin adınıza açıyoruz](/hizmetler/mobil-uygulama-gelistirme/),
[alan adı ve barındırma da sizin üzerinize oluyor](/hizmetler/web-uygulama-gelistirme/).

### 6. Verinin sahibi ve yeri

Müşteri listeniz, siparişleriniz, bağış kayıtlarınız size aittir ve
sözleşmede bu açıkça yazmalıdır. Ayrıca verinin nerede tutulduğu (hangi
ülke, hangi sağlayıcı) ve istediğinizde dışa aktarılabileceği de yazılmalı.
Kişisel veri içeriyorsa KVKK yükümlülüklerinin kimde olduğu da netleşmeli.
[Sunucu seçimi yazısında](/blog/kucuk-isletme-icin-sunucu-secimi/) bu
soruyu ayrıntılı ele aldık.

### 7. Yayın sonrası bakım ve destek

Yazılım teslimle bitmez. Hata çıkarsa kim, ne sürede düzeltir? İşletim
sistemi güncellemesi uygulamayı bozarsa bu kimin işi? Yeni özellik nasıl
fiyatlanır? Bunlar ya sözleşmenin içinde ya da ayrı bir bakım anlaşmasında
yazılı olmalı. "Sorun olursa ararsınız" demek bir sözleşme maddesinin yerini
tutmaz.

### 8. Ayrılık ve devir koşulları

Her iş ilişkisi bitebilir. Sözleşme, bittiğinde ne olacağını söylemeli: kod,
dokümantasyon ve erişim bilgileri hangi biçimde, ne sürede teslim edilir;
başka bir ekip devraldığında ne gerekir? Kolayca devredilebilen bir sistem
genellikle iyi kurulmuş bir sistemdir. Karşı tarafın bu maddeye direnmesi
de başlı başına bir uyarı işaretidir.

## Yazılım sözleşmesinde olmaması gerekenler

Bazı ifadeler ilk bakışta lehinize görünür ama sonradan sorun çıkarır:

- **"Sınırsız revizyon."** Kulağa güzel gelir, ama uygulamada iki taraf için
  de belirsizlik yaratır. Revizyonun sınırını kapsam belgesi çizer.
- **"vb.", "ve benzeri", "gerekli tüm özellikler."** Kapsam belgesinde bu
  kelimeler varsa aslında ortada bir kapsam yok demektir.
- **Sadece toplam fiyat.** Maddelere ayrılmamış tek bir rakam, hangi
  kısmın ne kadar tuttuğunu ve neyin çıkarılabileceğini göstermez.
- **Yazılımcının adına açılan hesaplar.** Yukarıda da anlattık: ilk anda
  kolaylık gibi görünür, uzun vadede sizi yazılımcıya bağımlı bırakır.

## Sözleşme öncesinde sorulacak üç soru

1. "Kapsam belgesini görebilir miyim?" Belge yoksa ya da tek sayfadan
   ibaretse önce onu isteyin.
   [Özel yazılım mı hazır paket mi](/blog/ozel-yazilim-mi-hazir-paket-mi/)
   kararı bile bu belge olmadan sağlıklı verilemez.
2. "Ayrıldığımızda elimde ne kalıyor?" Cevap "her şey" değilse nedenini
   sorun.
3. "İlk çalışan sürümü ne zaman görürüm?" Cevap "sonunda" ise riski siz
   taşıyorsunuz demektir.

Bu üç sorunun cevabı, sözleşmenin geri kalanı hakkında çok şey söyler.
Elinizdeki teklifi ya da sözleşmeyi birlikte gözden geçirmek isterseniz
[bize ulaşın](/iletisim/);
[yazılım danışmanlığı](/hizmetler/yazilim-danismanligi/) hizmetimiz tam
olarak bunun için var.
