---
title: "Yazılım Yaptırma Maliyeti: Fiyat Nasıl Hesaplanır?"
description: "Özel yazılım maliyeti nasıl hesaplanır? Fiyatı belirleyen kalemler, sabit fiyat ve adam/gün modelleri, yayın sonrası giderler ve bütçeyi denetim altında tutmanın yolları."
pubDate: 2026-06-23
tags: ["özel yazılım", "işletme", "maliyet"]
cover: "../_images/yazilim-yaptirma-maliyeti/cover.jpg"
coverAlt: "Ahşap masada dizüstü bilgisayarın yanında hesap makinesi kullanan ve deftere not alan bir kişi"
---

Yazılım yaptırma maliyeti, işletmelerin en çok sorduğu ve en az net cevap
aldığı sorudur. Bu yazıda bir yazılımın fiyatının nasıl hesaplandığını,
maliyeti hangi kalemlerin artırdığını, fiyatlandırma modellerini ve bütçeyi
denetim altında tutmanın yollarını anlatıyoruz. Rakam vermiyoruz; nedenini
sonda açıklıyoruz.

## Yazılımın fiyatı neyin fiyatıdır?

Yazılımda malzeme maliyeti yoktur; fiyatın neredeyse tamamı emektir. Bir
teklif temelde şu hesaba dayanır: **işin gerektirdiği süre × o sürede
çalışacak kişilerin maliyeti.** Analiz, tasarım, geliştirme, test ve proje
yönetimi bu sürenin parçalarıdır.

Bu nedenle "yazılım ne kadar tutar?" sorusu, "iş ne kadar sürer?" sorusuyla
aynı yere çıkar. Süreyi belirleyen etkenleri
[özel yazılım ne kadar sürer](/blog/ozel-yazilim-ne-kadar-surer/) yazısında
ele aldık; aşağıdaki kalemler aynı etkenlerin maliyet yüzüdür.

## Maliyeti belirleyen altı kalem

**1. Kapsam.** Yazılımın kaç ekranı, kaç farklı iş akışı olacak? Maliyetin
ana belirleyicisi budur. Kapsam maddeler hâlinde yazılmadıkça verilen her
rakam tahmindir.

**2. Kullanıcı rolleri ve yetkiler.** Herkesin her şeyi gördüğü bir sistem
basittir. Yönetici, şube sorumlusu ve personelin farklı ekranlar gördüğü,
farklı işlemler yapabildiği bir sistemde her rol ayrı tasarım ve test
gerektirir.

**3. Entegrasyonlar.** Muhasebe programı, e-fatura, ödeme sistemi, kargo ya
da mevcut bir yazılımla veri alışverişi. Her bağlantı karşı sistemin
kurallarına ve belgelerinin niteliğine bağlıdır; öngörülmesi en güç kalem
budur.

**4. Eski verinin aktarılması.** Yıllardır tablolarda ya da eski bir
programda tutulan kayıtların yeni sisteme taşınması ayrı bir iştir. Veri ne
kadar düzensizse aktarım o kadar emek ister.

**5. Raporlama.** Hazır birkaç rapor ile kullanıcının kendi ölçütlerine göre
süzebildiği, dışa aktarabildiği raporlar arasında belirgin bir fark vardır.

**6. Güvenlik ve yük beklentisi.** Kişisel veri, ödeme bilgisi ya da çok
sayıda eşzamanlı kullanıcı söz konusuysa altyapı ve test için ayrılan emek
artar.

## Fiyatlandırma modelleri

**Sabit fiyat.** Kapsam baştan yazılır, toplam bedel belirlenir. Bütçe
öngörülebilirdir. Karşılığında kapsamın gerçekten net olması gerekir;
sonradan gelen her yeni istek ayrıca fiyatlandırılır.

**Süreye dayalı (adam/gün).** Harcanan emek kadar ödenir. Kapsamın baştan
bilinemediği, yolda şekillenecek işler için uygundur. Bütçe denetimi için
düzenli raporlama ve bir üst sınır belirlenmesi gerekir.

**Aşamalı.** Proje aşamalara bölünür, her aşama kendi kapsamı ve bedeliyle
ayrı ayrı onaylanır. Büyük projelerde riski her iki taraf için de azaltır.

Kapsamı yazılabilen işlerde sabit fiyat, belirsizliği yüksek işlerde aşamalı
ilerlemek genellikle en sağlıklı yoldur.

## Geliştirme bittikten sonraki giderler

- **Barındırma.** Yazılımın çalıştığı sunucunun aylık gideri. Seçenekleri
  [sunucu seçimi](/blog/kucuk-isletme-icin-sunucu-secimi/) yazısında
  karşılaştırdık.
- **Bakım.** Güvenlik güncellemeleri, hata düzeltmeleri ve bağlı sistemlerde
  yapılan değişikliklere uyum.
- **Yeni istekler.** Kullanılan her yazılım yeni ihtiyaç doğurur. Bu,
  yazılımın işe yaradığının göstergesidir ve bütçede yeri olmalıdır.
- **Üçüncü taraf lisans ve servisler.** SMS, e-posta gönderimi, harita gibi
  kullanıma göre ücretlendirilen servisler.

## Bütçeyi denetim altında tutmanın yolları

- **İlk sürümü dar tutun.** En çok zaman kaybettiren tek işi çözen bir
  sürümle başlayın; devamını gerçek kullanıma göre planlayın.
- **Öncelik sıralaması yapın.** Her maddeyi "şart", "olsa iyi olur" ve
  "sonra" olarak işaretleyin. Bütçe daraldığında neyin çıkarılacağı baştan
  bellidir.
- **Hazır çözümleri kullanın.** Ödeme, e-fatura ya da kullanıcı girişi gibi
  standart parçalar için olgun servisler vardır.
  [Hazır paketin yeterli olduğu yerde](/blog/ozel-yazilim-mi-hazir-paket-mi/)
  özel yazılım yaptırmayın.
- **Kararları geciktirmeyin.** Onay bekleyen her gün takvimi, dolayısıyla
  maliyeti uzatır.

## Çok düşük teklifin riski

Diğerlerinden belirgin biçimde düşük bir teklif çoğunlukla kapsamın bir
bölümünü içermez: test, veri aktarımı, yönetim ekranları ya da yayın sonrası
destek. Eksik, proje ilerledikçe ek ücret olarak ya da teslim edilen işin
niteliğinde ortaya çıkar. Teklifin maddelere ayrılmasını isteyin ve kaynak
kodun kime ait olacağını
[sözleşmeye](/blog/yazilim-sozlesmesinde-ne-olmali/) yazdırın.

## Neden rakam vermiyoruz?

Kapsam bilinmeden verilen rakam bir anlam taşımaz ve yanıltır. Yöntemimiz,
ihtiyacı maddelere ayırmak ve her maddenin süresi ile maliyetini yazılı
olarak belirlemektir. Onaylanan belge, projenin sonuna kadar iki tarafın
ortak referansı olur.

Web sitesi ve mobil uygulama için maliyet kalemlerini ayrı yazılarda ele
aldık: [web sitesi yaptırma maliyeti](/blog/web-sitesi-yaptirma-maliyeti/)
ve
[mobil uygulama yaptırma maliyeti](/blog/mobil-uygulama-yaptirma-maliyeti/).
Sürecin tamamı için
[yazılım yaptırmak istiyorum](/blog/yazilim-yaptirmak-istiyorum/) yazısına
bakabilirsiniz.

İhtiyacınız için maddelere ayrılmış bir teklif almak isterseniz
[iletişime geçebilirsiniz](/iletisim/).
