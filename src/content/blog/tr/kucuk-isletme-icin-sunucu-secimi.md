---
title: "Küçük İşletme İçin Sunucu Seçimi: Kendi Sunucu mu, Bulut mu, Hazır Servis mi?"
description: "Yazılımınızın nerede çalışacağına karar verirken bakılacak üç şey: aylık maliyet, bakım yükü ve verinin kime ait olduğu. Teknik bilgi gerekmeden, seçeneklerin dürüst bir karşılaştırması."
pubDate: 2026-08-25
tags: ["altyapı", "işletme", "karar rehberi"]
---

Bir yazılım yaptırdığınızda, en sonda biri size şu soruyu soruyor: "Nerede
çalışsın?" Çoğu işletme sahibi bu noktada "siz bilirsiniz" diyor. Anlaşılır;
soru teknik görünüyor. Ama cevabı belirleyen şeyler teknik değil: her ay ne
ödeyeceğiniz, bir şey bozulduğunda kimin uğraşacağı ve verinizin kimin
elinde duracağı. Bu üçü sizin konunuz. Bu yazı, o "siz bilirsiniz" cümlesini
"şunu istiyoruz" cümlesine çevirmek için.

## Üç seçenek, sade hâliyle

**Kendi sunucunuz.** Ofiste bir kasa, ya da bir veri merkezinden kiralanan
sizin yönettiğiniz bir makine. Her şey sizin: işletim sistemi, güncellemeler,
yedekler, güvenlik. Kontrol tam, sorumluluk da tam.

**Bulut.** Büyük sağlayıcılardan kullandığınız kadar ödediğiniz sanal
makineler ve servisler. Kasanız yok ama makine yine sizin sorumluluğunuzda:
işletim sistemi güncellemesi, yedek ayarı, güvenlik duvarı yine birinin
işi. Bu "biri" genellikle bizim gibi bir ekip oluyor.

**Hazır servis.** Veritabanı, kullanıcı girişi, dosya depolama gibi
parçaları hazır sunan platformlar; sunucu diye bir şey görmezsiniz. Dernek
Asistan'da veritabanı ve yetki katmanı için tam olarak bunu yaptık:
[Supabase](https://supabase.com/) üstünde, küçük bir ekibin sürdürebileceği
ve derneğin verisinin derneğe ait kaldığı bir yapı. Bu sitenin kendisi de
sunucusuz: statik dosyalar olarak yayınlanıyor, bakılacak bir makine yok.

Bir de dördüncü var ki aslında seçenek değil: yazılımcının kendi
hesabında, kendi kartıyla açtığı bir yer. Bunu son bölüme sakladık.

## Aylık maliyet: faturaya değil, toplama bakın

Kendi sunucu en ucuz görünür: kasa bir kez alınır, elektrik az tutar. Eksik
olan kalemler şunlar: kasanın üç dört yılda bir yenilenmesi, kesintisiz güç,
bozulduğunda yerine geçecek makine, ve en pahalısı, ona bakan kişinin
zamanı. Küçük bir işletmede o kişi çoğu zaman yoktur; işi patron ya da en
teknik çalışan üstlenir ve bu saatler hiçbir faturada görünmez.

Bulut, aylık faturayla gelir ve fatura büyüyebilir; ama en az bir avantajı
var: yanlış boyut aldıysanız bir tıkla küçültürsünüz. Kasada bu mümkün
değil. Küçük ölçekte bulut faturası çoğu zaman bir çalışanın birkaç
saatlik maaşından azdır. Karşılaştırma bu şekilde yapılınca "pahalı"
kelimesi değişiyor.

Hazır servis çoğu zaman ücretsiz ya da düşük bir paketle başlar, kullanım
büyüdükçe fiyatı büyür. Küçük işletmenin yıllarca o ilk paketlerde
kalması sık görülür. Dikkat edilecek nokta, hangi eşikten sonra fiyatın
ne olduğunu baştan bilmek.

## Bakım yükü: gece üçte kim uyanacak?

Bu sorunun cevabı seçiminizi belirler. Kendi sunucuda cevap "siz" ya da
"sizin adınıza biri". Güncellemeler, güvenlik yamaları, dolan diskler,
alınmayan yedekler; hepsi bir insanın takvimine bağlı. Takvim aksarsa
sistem aksar.

Bulutta makine yine sizindir ama etrafındaki her şey sağlayıcının:
elektrik, ağ, donanım arızası. Kalan iş azalır ama sıfırlanmaz.

Hazır serviste bakım büyük ölçüde sağlayıcıya geçer. Sizin tarafta kalan,
uygulamanın kendisi. Küçük işletme için bu genellikle en doğru dağılım:
işi bilen az sayıda insan, işe bakar; makineye değil.

Bir uyarı: "bakım yok" diye bir şey yoktur. Hazır serviste bile uygulamanın
kullandığı kütüphaneler eskir, servis kendi kurallarını değiştirir, bir
gün bir e-posta gelir "şu tarihten sonra bu sürüm desteklenmeyecek" der.
O e-postayı okuyup gereğini yapacak biri olmalı. Bakım anlaşması dediğimiz
şey tam olarak bu.

## Verinin sahibi: en önemli soru, en az sorulan

Bir yazılımın nerede çalıştığından daha önemli olan, verinin kimin
hesabında durduğu. Şu senaryoyu düşünün: yazılımcınızla yollar ayrıldı.
Sistem çalışmaya devam ediyor mu? Veritabanına siz girebiliyor musunuz?
Alan adı kimin üstüne?

Bunun cevabı "evet, bizim" değilse, seçtiğiniz altyapının türü hiç önemli
değil. Kendi sunucunuz da olsa, şifreleri başkası tutuyorsa sizin değil.

Bizim kuralımız basit ve hizmet sayfalarımızda da yazıyor: alan adı,
barındırma ve servis hesapları müşterinin adına açılır. Fatura ona gider,
şifreler onda durur, biz yetkili kullanıcı olarak çalışırız. Bir gün bizsiz
devam etmek isterseniz yetkimizi kaldırırsınız; sistem yerinde durur. Bunu
her yazılımcıdan isteyin; itiraz eden varsa nedenini sorun.

## Peki hangisi?

Kestirme bir cevap istiyorsanız, küçük işletme için sıralama genellikle
şöyle:

1. **Hazır servis**, uygulamanız standart parçalardan oluşuyorsa (veri,
   kullanıcı, dosya). Çoğu iş uygulaması böyledir.
2. **Bulut**, hazır servisin karşılamadığı özel bir ihtiyacınız varsa; ya
   da veri kuralları belli bir ülkede tutulmasını gerektiriyorsa.
3. **Kendi sunucu**, bunu yönetecek insanınız zaten varsa ve verinin
   fiziksel olarak sizde durması bir zorunluluksa. Bu iki şart aynı anda
   nadiren sağlanıyor.

Sıralama kesin değil; sizin işinizde bulut önde çıkabilir. Ama karar
verirken sorulacak üç soru hep aynı: ayda toplam ne ödeyeceğim, bozulunca
kim uğraşacak, hesaplar kimin üstüne. Bu üçüne net cevap alamadığınız bir
teklifi bekletin.

Elinizde şu an çalışan bir sistem varsa ve bu sorulardan bir ikisinin
cevabını bilmiyorsanız, [yazın](/iletisim/); mevcut durumu birlikte
çıkaralım. Çoğu zaman bir şeyi taşımak gerekmiyor, sadece hesapların kimde
olduğunu düzeltmek yetiyor.
