---
title: "Özel Yazılım Ne Kadar Sürer? Süreyi Belirleyen 5 Etken"
description: "Özel yazılım projesinin süresini kapsam, entegrasyonlar, karar hızı ve içerik belirler. Takvimi neyin uzattığını ve nasıl kısaltacağınızı anlatıyoruz."
pubDate: 2026-09-05
tags: ["özel yazılım", "işletme", "karar rehberi"]
cover: "../_images/ozel-yazilim-ne-kadar-surer/cover.jpg"
coverAlt: "Masa takviminin üstünde işaretlenmiş günler, bir kalem ve bir ataş"
---

İlk görüşmede sorulan ikinci soru hep aynı: "Peki bu ne kadar sürer?" İlk
soru fiyat, ikincisi süre. İkisine de "kapsama göre" demek doğru ama
yetersiz bir cevap. Bu yazıda özel yazılım süresini gerçekte neyin
belirlediğini, projelerin neden takvimi aştığını ve süreyi kısaltmanın
elinizdeki tek gerçek aracını anlatıyoruz.

## Özel yazılım süresi: önce büyüklük sırasını bilin

Kesin gün sayısı, kapsam maddelere ayrılmadan verilemez; veren varsa
temkinli olun. Ama büyüklük sırası baştan söylenebilir:

- **Tek bir işi çözen küçük bir iç araç** (örneğin saha ekibinin doldurduğu
  bir form ve ondan çıkan rapor) haftalarla ölçülür.
- **Birkaç modülü olan bir iş uygulaması** (kayıt, takip, raporlama, birkaç
  kullanıcı rolü) aylarla ölçülür.
- **Mevcut sistemlerle konuşan, mağazada yayınlanan ya da çok sayıda
  kullanıcıya açılan bir ürün** daha uzun sürer ve süresi çoğunlukla
  yazılımın kendisinden değil, aşağıdaki etkenlerden gelir.

Bu aralıkların geniş olmasının nedeni, sürenin kodla değil kararlarla
belirlenmesi. Şimdi o kararlara bakalım.

## Yazılım projesinin süresini belirleyen beş etken

**1. Kapsam: kaç ekran, kaç kural, kaç istisna.** Bir sipariş formu bir
günlük iş olabilir; "ama bayilere farklı fiyat, üç adet üstüne indirim, ay
sonunda muhasebeye aktarım" eklendiğinde aynı form haftalık işe dönüşür.
Süreyi uzatan ekran sayısı değil, her ekranın arkasındaki iş kuralları ve
istisnalardır. Bu yüzden keşif aşamasında en çok "peki şu durumda ne
oluyor?" sorusunu sorarız.

**2. Entegrasyonlar: başka sistemlerle konuşmak.** Muhasebe programına
aktarım, banka hareketlerini okuma, SMS gönderimi, e-fatura. Her biri,
karşı tarafın kurallarına bağlı bir iştir ve o kurallar bizim elimizde
değildir. Bir entegrasyon, bazen ana yazılımın kendisinden uzun sürer.
[Hazır programınızı bırakmanız gerekmez](/hizmetler/ozel-yazilim-cozumleri/),
ama ona bağlanmak takvime yazılmalıdır.

**3. Karar hızı: sizin tarafınızdaki süre.** Projelerde en çok görmezden
gelinen etken bu. Geliştirme boyunca ilerlemeyi sizinle paylaşır, sizden
onay ve geri bildirim bekleriz; "şurası böyle olsun" kararı bir gün
sürerse proje akar, üç hafta sürerse durur. Takvimde kendi kararlarınız
için de süre ayırın ve karar verecek kişiyi baştan belirleyin.

**4. Veri ve içerik: eski kayıtların taşınması.** Excel'de biriken yılların
verisi yeni sisteme "aktarılıverir" sanılır; oysa her tabloda kendine özgü
tutarsızlıklar vardır. Mükerrer müşteriler, boş bırakılmış zorunlu alanlar,
üç farklı tarih biçimi. Veri temizliği, planlamada ayrı bir madde olarak
durmalıdır. [Excel'den yazılıma geçişi](/blog/excelden-yazilima-ne-zaman-gecilir/)
ayrı bir yazıda anlattık.

**5. Yayın süreçleri: mağazalar ve onaylar.** Mobil uygulama yapıyorsanız
Apple ve Google'ın inceleme süreleri, geliştirici hesaplarının açılması ve
gerekirse reddedilen sürümün düzeltilmesi takvime eklenir. Bu süre bizim
kontrolümüzde değildir; [uygulama mı web mi](/blog/mobil-uygulama-mi-web-sitesi-mi/)
kararını verirken bunu da hesaba katmakta fayda var.

## Bir yazılım projesinin aşamaları

Süre sorusunu cevaplamanın en dürüst yolu, projeyi aşamalara bölmek ve her
aşamanın çıktısını söylemektir. Bizim çalışma biçimimiz dört adım:

1. **Keşif.** İhtiyaç, mevcut sistem ve bütçe birlikte gözden geçirilir.
   Çıktısı bir karardır: bu iş yazılım gerektiriyor mu, gerektiriyorsa
   nereden başlanmalı. Yazılım doğru cevap değilse bunu burada söyleriz.
2. **Planlama.** Kapsam maddelere ayrılır, her maddenin süresi ve fiyatı
   yazılı olur. Tek satır kod yazılmadan toplam süreyi bilirsiniz;
   onayladığınız belge projenin sonuna kadar ortak referanstır.
3. **Geliştirme.** İki haftalık döngülerle ilerler; her döngünün sonunda
   çalışan bir sürüm görürsünüz. Yön yanlışsa ikinci haftada düzeltilir,
   altıncı ayda değil.
4. **Yayın ve sonrası.** Sistem yayına alınır, ekibinize devredilir. Bakım ve
   yeni özellikler için yanınızda kalırız; kod ve veri sizde kalır.

Toplam süre, bu dört aşamanın toplamıdır ve en belirsiz olanı, ilk ikisi
bitmeden hesaplanamaz.

## Yazılım projeleri neden takvimi aşar?

Sektörde takvim aşımı istisna değil, kuraldır. Nedenleri de şaşırtıcı
değildir:

- **Kapsam yazılı değildir.** "Anlaşmıştık" cümlesinin iki tarafta iki farklı
  anlamı vardır. Yazılı olmayan kapsam, her toplantıda büyür.
- **Her şey tek seferde istenir.** Altı aylık büyük bir teslim, altı ay
  boyunca hiçbir şey görmemek demektir. Sürpriz, en sonda gelir.
- **Karar bekleyen işler birikir.** Bir onay için bekleyen üç madde,
  arkasındaki on maddeyi de bekletir.
- **Entegrasyon en sona bırakılır.** En belirsiz iş en sona kalınca, ortaya
  çıkan sorunun düzeltilecek zamanı kalmaz.

Dördü de yönetilebilir; hiçbiri kod yazma hızıyla ilgili değildir.

## Süreyi kısaltmanın en etkili yolu: küçük başlamak

Süreyi kısaltmanın yolu daha hızlı yazmak değil, daha az şey yazmaktır.
İlk sürüm, işin en çok kanayan kısmını çözsün; gerisi, o sürüm kullanılırken
öğrenilenlerle gelsin. Bu yaklaşımın iki kazancı var: ilk faydayı aylar
değil haftalar içinde görürsünüz ve ikinci sürümün kapsamı varsayıma değil
gerçek kullanıma dayanır.

[Dernek Asistan](/urunler/dernek-asistan/) tam böyle ilerledi: önce bağış
kaydı ve raporlama, geri kalanı sonraki sürümlerde. İlk sürümü bekleyen
kimse "her şey bitince" diye aylar geçirmedi.

## Kısa cevap

Özel yazılım ne kadar sürer? Küçük bir araç haftalar, çok modüllü bir sistem
aylar. Kesin rakam, kapsam maddelere ayrıldığında, tek satır kod yazılmadan
yazılı olarak verilir. Takvimi uzatan şey genellikle kod değil; yazılmamış
kapsam, bekleyen kararlar ve sona bırakılan entegrasyonlardır.

Elinizdeki işin ne kadar süreceğini konuşmak isterseniz
[bize yazın](/iletisim/); keşif görüşmesinin sonunda elinizde büyüklük
sırasını bilen bir cevap olur.
