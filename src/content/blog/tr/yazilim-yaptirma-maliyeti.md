---
title: "Yazılım Yaptırma Maliyeti: Fiyat Nasıl Hesaplanır?"
description: "Özel yazılım maliyeti nasıl hesaplanır? Fiyatı belirleyen kalemler, sabit fiyat ve adam/gün modelleri, yayın sonrası giderler ve bütçeyi denetimde tutmanın yolları."
pubDate: 2026-06-23
tags: ["özel yazılım", "işletme", "maliyet"]
cover: "../_images/yazilim-yaptirma-maliyeti/cover.jpg"
coverAlt: "Ahşap masada dizüstü bilgisayarın yanında hesap makinesi kullanan ve deftere not alan bir kişi"
---

Yazılım yaptırma maliyeti, işletmelerin en çok sorduğu ama en az net cevap
aldığı soru. Bu yazıda bir yazılımın fiyatının nasıl hesaplandığını,
maliyeti hangi kalemlerin artırdığını, fiyatlandırma modellerini ve bütçeyi
denetim altında tutmanın yollarını anlatıyoruz. Rakam vermiyoruz, nedenini
de yazının sonunda açıklıyoruz.

## Yazılımın fiyatı neyin fiyatıdır?

Yazılımda malzeme maliyeti yok, fiyatın neredeyse tamamı emek. Bir teklif
temelde şu hesaba dayanır: **işin gerektirdiği süre × o sürede çalışacak
kişilerin maliyeti.** Analiz, tasarım, geliştirme, test ve proje yönetimi
bu sürenin parçalarıdır.

Bu yüzden "yazılım ne kadar tutar?" sorusu, sonunda "iş ne kadar sürer?"
sorusuna varır. Süreyi belirleyen etkenleri
[özel yazılım ne kadar sürer](/blog/ozel-yazilim-ne-kadar-surer/) yazısında
anlattık. Aşağıdaki kalemler, aynı etkenlere maliyet tarafından bakıyor.

## Maliyeti belirleyen altı kalem

**1. Kapsam.** Yazılımın kaç ekranı, kaç farklı iş akışı olacak? Maliyeti
en çok belirleyen kalem bu. Kapsam madde madde yazılmadıkça verilen her
rakam bir tahminden ibarettir.

**2. Kullanıcı rolleri ve yetkiler.** Herkesin her şeyi gördüğü bir sistem
basittir. Yönetici, şube sorumlusu ve personel farklı ekranlar görüp farklı
işlemler yapacaksa her rol için ayrı tasarım ve test gerekir.

**3. Entegrasyonlar.** Muhasebe programı, e-fatura, ödeme sistemi, kargo ya
da elinizdeki başka bir yazılımla veri alışverişi. Her bağlantı, karşı
sistemin kurallarına ve belgelerinin ne kadar iyi olduğuna bağlı. Bu yüzden
önceden kestirmesi en zor kalem bu.

**4. Eski verinin aktarılması.** Yıllardır tablolarda ya da eski bir
programda tutulan kayıtları yeni sisteme taşımak başlı başına bir iş. Veri
ne kadar düzensizse aktarım o kadar emek ister.

**5. Raporlama.** Birkaç hazır rapor ile kullanıcının kendi ölçütlerine
göre süzüp dışa aktarabildiği raporlar arasında belirgin bir fark var.

**6. Güvenlik ve yük beklentisi.** Kişisel veri, ödeme bilgisi ya da aynı
anda çok sayıda kullanıcı varsa altyapı ve test için ayrılan emek artar.

## Fiyatlandırma modelleri

**Sabit fiyat.** Kapsam baştan yazılır, toplam bedel belirlenir. Bütçeyi
önceden bilirsiniz. Bunun için kapsamın gerçekten net olması gerekir;
sonradan gelen her yeni istek ayrıca fiyatlandırılır.

**Süreye dayalı (adam/gün).** Harcanan emek kadar ödersiniz. Kapsamı
baştan bilinemeyen, yolda şekillenecek işler için uygundur. Bütçeyi
denetimde tutmak için düzenli raporlama ve bir üst sınır belirlemek
gerekir.

**Aşamalı.** Proje aşamalara bölünür, her aşama kendi kapsamı ve bedeliyle
ayrı ayrı onaylanır. Büyük projelerde bu, riski iki taraf için de azaltır.

Kapsamı yazılabilen işlerde sabit fiyat, belirsizliği yüksek işlerde aşamalı
ilerlemek genellikle en sağlıklı yoldur.

## Geliştirme bittikten sonraki giderler

- **Barındırma.** Yazılımın çalıştığı sunucunun aylık gideri. Seçenekleri
  [sunucu seçimi](/blog/kucuk-isletme-icin-sunucu-secimi/) yazısında
  karşılaştırdık.
- **Bakım.** Güvenlik güncellemeleri, hata düzeltmeleri ve bağlı sistemlerde
  yapılan değişikliklere uyum.
- **Yeni istekler.** Kullanılan her yazılım zamanla yeni ihtiyaçlar doğurur.
  Bu, yazılımın işe yaradığını gösterir; bütçede buna da yer ayırın.
- **Üçüncü taraf lisans ve servisler.** SMS, e-posta gönderimi, harita gibi
  kullanıma göre ücretlendirilen servisler.

## Bütçeyi denetim altında tutmanın yolları

- **İlk sürümü dar tutun.** En çok zaman kaybettiren tek işi çözen bir
  sürümle başlayın, devamını gerçek kullanıma göre planlayın.
- **Öncelik sıralaması yapın.** Her maddeyi "şart", "olsa iyi olur" ve
  "sonra" olarak işaretleyin. Böylece bütçe daraldığında neyi
  çıkaracağınızı baştan bilirsiniz.
- **Hazır çözümleri kullanın.** Ödeme, e-fatura ya da kullanıcı girişi gibi
  standart parçalar için olgun servisler var.
  [Hazır paketin yeterli olduğu yerde](/blog/ozel-yazilim-mi-hazir-paket-mi/)
  özel yazılım yaptırmayın.
- **Kararları geciktirmeyin.** Onay bekleyen her gün takvimi uzatır, takvim
  uzadıkça maliyet de artar.

## Çok düşük teklifin riski

Diğerlerinden belirgin biçimde düşük bir teklifte çoğu zaman kapsamın bir
bölümü eksiktir: test, veri aktarımı, yönetim ekranları ya da yayın sonrası
destek. Bu eksik, proje ilerledikçe ya ek ücret olarak ya da teslim edilen
işin kalitesinde ortaya çıkar. Teklifin maddelere ayrılmasını isteyin ve
kaynak kodun kime ait olacağını
[sözleşmeye](/blog/yazilim-sozlesmesinde-ne-olmali/) yazdırın.

## Neden rakam vermiyoruz?

Kapsam bilinmeden verilen bir rakamın anlamı yok, üstelik yanıltır. Biz
bunun yerine ihtiyacı maddelere ayırıyor, her maddenin süresini ve
maliyetini yazılı olarak belirliyoruz. Onayladığınız belge, proje bitene
kadar iki tarafın da ortak referansı olur.

Web sitesi ve mobil uygulama için maliyet kalemlerini ayrı yazılarda ele
aldık: [web sitesi yaptırma maliyeti](/blog/web-sitesi-yaptirma-maliyeti/)
ve
[mobil uygulama yaptırma maliyeti](/blog/mobil-uygulama-yaptirma-maliyeti/).
Sürecin tamamını da
[yazılım yaptırmak istiyorum](/blog/yazilim-yaptirmak-istiyorum/) yazısında
anlattık.

İhtiyacınız için maddelere ayrılmış bir teklif almak isterseniz
[bize yazın](/iletisim/).
