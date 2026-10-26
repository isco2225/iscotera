---
title: "Küçük İşletme İçin Sunucu Seçimi: Bulut mu, Kendi Sunucu mu?"
description: "Küçük işletme için sunucu seçerken bakılacak üç şey: aylık maliyet, bakım yükü ve verinin kime ait olduğu. Teknik bilgi gerektirmeyen bir karşılaştırma."
pubDate: 2026-08-25
tags: ["altyapı", "işletme", "karar rehberi"]
cover: "../_images/kucuk-isletme-icin-sunucu-secimi/cover.jpg"
coverAlt: "Bir veri merkezinde sıra sıra dizilmiş sunucu kabinleri"
---

Bir yazılım yaptırdığınızda, en sonda biri size şu soruyu soruyor: "Nerede
çalışsın?" Çoğu işletme sahibi bu noktada "siz bilirsiniz" diyor. Bu
anlaşılır bir tepki, çünkü soru teknik görünüyor. Ama cevabı belirleyen
şeyler teknik değil: her ay ne ödeyeceğiniz, bir şey bozulduğunda kimin
ilgileneceği ve verinizin kimin elinde duracağı. Bu üçü doğrudan sizi
ilgilendiriyor. Bu yazının amacı, o "siz bilirsiniz" cümlesini "şunu
istiyoruz" cümlesine çevirmenize yardım etmek.

## Üç seçenek, sade hâliyle

**Kendi sunucunuz.** Ofiste duran bir kasa ya da bir veri merkezinden
kiraladığınız ve kendiniz yönettiğiniz bir makine. İşletim sistemi,
güncellemeler, yedekler, güvenlik; hepsi sizin işiniz. Kontrol de
sorumluluk da tamamen sizde.

**Bulut.** Büyük sağlayıcılardan kiraladığınız ve kullandığınız kadar
ödediğiniz sanal makineler ve servisler. Ofiste bir kasa yok, ama makine
yine sizin sorumluluğunuzda: İşletim sistemi güncellemesi, yedek ayarı ve
güvenlik duvarı yine birinin işi. Bu "biri" genellikle bizim gibi bir ekip
oluyor.

**Hazır servis.** Veritabanı, kullanıcı girişi, dosya depolama gibi
parçaları hazır veren platformlar. Bu seçenekte bir sunucuyla hiç
uğraşmazsınız. Dernek Asistan'da veritabanı ve yetkilendirme (kimin neyi
görebileceği) için tam olarak bunu yaptık. [Supabase](https://supabase.com/)
üzerinde, küçük bir ekibin sürdürebileceği ve derneğin verisinin derneğe
ait kaldığı bir yapı kurduk. Bu sitenin kendisi de sunucusuz çalışıyor:
Sabit dosyalar olarak yayınlanıyor ve bakım isteyen bir makine yok.

Bir de dördüncü bir durum var, ama aslında seçenek sayılmaz: yazılımcının
kendi hesabında, kendi kartıyla açtığı bir yer. Ona aşağıda, verinin sahibi
bölümünde döneceğiz.

## Aylık maliyet: faturaya değil, toplama bakın

Kendi sunucu en ucuz seçenek gibi görünür, çünkü kasayı bir kez alırsınız
ve elektriği de az tutar. Hesaba katılmayan kalemler ise şunlar: kasanın
üç dört yılda bir yenilenmesi, kesintisiz güç, bozulduğunda yerine geçecek
bir makine ve en pahalısı, ona bakan kişinin zamanı. Küçük bir işletmede
böyle bir kişi çoğu zaman yoktur. İşi patron ya da en teknik çalışan
üstlenir ve harcanan saatler hiçbir faturada görünmez.

Bulut aylık faturayla gelir ve fatura büyüyebilir. Ama en az bir avantajı
var: Yanlış boyut seçtiyseniz tek tıkla küçültebilirsiniz. Kasada bu mümkün
değil. Küçük ölçekte bulut faturası çoğu zaman bir çalışanın birkaç
saatlik maaşından azdır. Karşılaştırmayı bu şekilde yapınca "pahalı"
kelimesinin anlamı değişiyor.

Hazır servisler çoğu zaman ücretsiz ya da düşük ücretli bir paketle
başlar, kullanım büyüdükçe fiyat da artar. Küçük işletmelerin yıllarca o
ilk paketlerde kalması sık görülür. Dikkat etmeniz gereken, hangi eşikten
sonra ne ödeyeceğinizi baştan bilmek.

## Bakım yükü: gece üçte kim uyanacak?

Bu sorunun cevabı seçiminizi belirler. Kendi sunucuda cevap "siz" ya da
"sizin adınıza biri". Güncellemeler, güvenlik yamaları, dolan diskler,
alınmayan yedekler; hepsi bir insanın takvimine bağlı. O kişinin takvimi
aksarsa sistem de aksar.

Bulutta makine yine sizindir, ama elektrik, ağ ve donanım arızası gibi
çevresindeki her şey sağlayıcının işidir. Size kalan iş azalır ama
sıfırlanmaz.

Hazır serviste bakımın büyük kısmı sağlayıcıya geçer. Size kalan,
uygulamanın kendisi. Küçük bir işletme için bu genellikle en doğru
dağılımdır: İşi bilen az sayıda kişi makineyle değil, işin kendisiyle
uğraşır.

Bir uyarı: Hiç bakım gerektirmeyen bir seçenek yok. Hazır serviste bile
uygulamanın kullandığı hazır yazılım parçaları (kütüphaneler) eskir, servis
kendi kurallarını değiştirir, bir gün "şu tarihten sonra bu sürüm
desteklenmeyecek" diye bir e-posta gelir. O e-postayı okuyup gereğini
yapacak birinin olması gerekir. Bakım anlaşması dediğimiz şey tam olarak
bu.

## Verinin sahibi: en önemli soru, en az sorulan

Bir yazılımın nerede çalıştığından daha önemli olan, verinin kimin
hesabında durduğu. Şu senaryoyu düşünün: Yazılımcınızla yollarınız ayrıldı.
Sistem çalışmaya devam ediyor mu? Veritabanına siz girebiliyor musunuz?
Alan adı kimin üzerine kayıtlı?

Bu soruların cevabı "evet, bizim" değilse, seçtiğiniz altyapının türünün
bir önemi kalmaz. Sunucu sizin olsa bile şifreleri başkası tutuyorsa sistem
sizin değildir.

Bizim kuralımız basit ve hizmet sayfalarımızda da yazıyor: Alan adı,
barındırma ve servis hesaplarını müşterinin adına açıyoruz. Fatura ona
gider, şifreler onda durur, biz yetkili kullanıcı olarak çalışırız. Bir gün
bizsiz devam etmek isterseniz yetkimizi kaldırırsınız ve sistem yerinde
durur. Bunu her yazılımcıdan isteyin; itiraz eden olursa nedenini sorun.

## Peki hangisi?

Kısa bir cevap istiyorsanız, küçük işletme için sıralama genellikle şöyle:

1. **Hazır servis**, uygulamanız standart parçalardan oluşuyorsa (veri,
   kullanıcı, dosya). Çoğu iş uygulaması böyledir.
2. **Bulut**, hazır servisin karşılamadığı özel bir ihtiyacınız varsa ya da
   veri kuralları verinin belli bir ülkede tutulmasını gerektiriyorsa.
3. **Kendi sunucu**, bunu yönetecek biri zaten ekibinizdeyse ve verinin
   fiziksel olarak sizde durması zorunluysa. Bu iki şart nadiren bir arada
   oluyor.

Bu sıralama kesin değil; işinizde bulut öne çıkabilir. Ama karar verirken
sorulacak üç soru hep aynı: Ayda toplam ne ödeyeceğim, bir şey bozulunca
kim ilgilenecek, hesaplar kimin üzerine olacak? Bu üçüne net cevap
alamadığınız bir teklifi bekletin.

Şu an çalışan bir sisteminiz varsa ve bu sorulardan birinin ya da ikisinin
cevabını bilmiyorsanız [bize yazın](/iletisim/), bugünkü durumu birlikte
çıkaralım. Çoğu zaman bir şeyi taşımak gerekmiyor, yalnızca hesapların
kimde olduğunu düzeltmek yetiyor.
