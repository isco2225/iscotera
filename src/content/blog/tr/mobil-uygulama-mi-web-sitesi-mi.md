---
title: "Mobil Uygulama mı, Mobil Uyumlu Web Sitesi mi?"
description: "Mağazada bir uygulamanız olsun mu, yoksa telefonda iyi çalışan bir web sitesi yeter mi? İki kendi projemizde verdiğimiz kararlar üzerinden, hangisinin ne zaman doğru olduğunu anlatıyoruz."
pubDate: 2026-09-01
tags: ["mobil", "web", "karar rehberi"]
---

İlk görüşmelerde en sık duyduğumuz cümlelerden biri: "Bir de uygulamamız
olsun." Sonra soruyoruz: neden? Cevap çoğu zaman "herkesin var" ya da
"müşteriler telefondan giriyor" oluyor. İkisi de gerçek gözlem; ikisi de tek
başına uygulama yaptırmak için yeterli sebep değil. Çünkü "müşteriler
telefondan giriyor" sorununu, telefonda düzgün çalışan bir web sitesi çoğu
zaman çözüyor ve bunun maliyeti, mağazaya çıkan bir uygulamanın epey
altında.

Bu yazı o soruya cevap vermek için. Genel kurallar yerine, kendi
projelerimizde bu kararı nasıl verdiğimizi anlatacağız; çünkü aynı soruya
iki projede iki farklı cevap verdik.

## Önce kavramları netleştirelim

Üç şey var ve sık karışıyor:

- **Mobil uyumlu web sitesi.** Tarayıcıda açılır, ekrana göre kendini
  düzenler. Kurulum yok, mağaza yok; bir bağlantı yeter.
- **Web uygulaması.** Yine tarayıcıda çalışır ama site değil araçtır: giriş
  yaparsınız, veri girersiniz, rapor alırsınız. Dernek Asistan'ın ofisteki
  hâli budur.
- **Mobil uygulama.** App Store ve Google Play'den indirilir, telefonun
  içinde yaşar. Bildirim gönderir, konumu kullanır, internet yokken de
  çalışabilir. İbadet Rehberim budur.

Karar bu üçü arasında. Ve ilk ikisi, sanıldığından çok daha fazla işi
görüyor.

## İbadet Rehberim'i neden uygulama yaptık?

İbadet Rehberim namaz vakitlerini gösterir, zikir sayar, dinî soruları
cevaplayan bir asistanı vardır. Bunların hepsi bir web sitesinde de yapılır.
Peki neden mağazaya çıktık?

Üç sebep, üçü de teknik:

1. **Bildirim.** Uygulamanın varlık sebebi "vakit girdiğinde haber ver".
   Telefon cebinizdeyken, ekran kapalıyken, siz başka bir şeyle
   uğraşırken. Web'de bildirim var ama güvenilirliği platforma ve
   tarayıcıya göre değişiyor; "bazen gelir" bir ezan bildirimi için kabul
   edilebilir değil.
2. **Konum ve çevrimdışı çalışma.** Vakitler bulunduğunuz yere göre
   hesaplanıyor ve internet olmasa da çalışması gerekiyor. Uygulama,
   hesabı telefonun içinde yapıyor.
3. **Tekrar kullanım alışkanlığı.** Günde beş kez açılan bir şeyin ana
   ekranda bir simgesi olmalı. "Tarayıcıyı aç, adresi yaz" beş kere
   yapılmaz.

Dikkat ederseniz sebeplerin hiçbiri "herkesin var" değil. Hepsi telefonun
sitenin yapamadığı bir şeyini kullanıyor. Kendinize sorun: sizin
fikriniz telefonun hangi özelliğine ihtiyaç duyuyor? Bildirim, kamera,
konum, çevrimdışı çalışma, sensörler... Listede bir şey yoksa, uygulama
büyük ihtimalle gerekmiyor.

## Dernek Asistan'ı neden önce web yaptık?

Dernek Asistan, bir yardım derneğinin bağış kayıtlarını tuttuğu bir sistem.
Kullanıcılar dernek personeli; herkese açık bir ürün değil. Burada karar
farklıydı.

Ofisteki çalışan bilgisayar başında, gün boyu kayıt giriyor, rapor alıyor.
Bu iş için tarayıcı en iyi ortam: büyük ekran, klavye, açık duran sekmeler.
Uygulama yapsaydık aynı şeyi daha dar bir yerde yapmış olurduk. Ayrıca
personel değiştikçe herkese "mağazadan indir, şu hesapla gir" demek yerine
bir bağlantı paylaşmak yetiyor.

Ama sahada çalışan da var: bağışı yerinde alan, telefonundan girmek
isteyen. O yüzden sistem mobilde de çalışıyor. Dikkat: "mobil uygulama"
değil, "mobilde de çalışan aynı sistem". Sahadaki ihtiyaç, ofistekinin
küçültülmüş hâli; telefonun özel bir yeteneğine gerek yok. Yarın bildirim
gerekirse (mesela "bu bağışın ödemesi gecikti") o zaman düşünürüz, bugün
değil.

Bu kararın parasal karşılığı şu: tek sistem, tek bakım, mağaza süreci yok.
Aynı işi mağazaya çıkan bir uygulamayla yapsaydık dernek daha fazla ödeyecek
ve karşılığında fazladan bir şey almayacaktı.

## Mobil uygulamanın görünmeyen maliyetleri

Uygulama kararı verirken çoğu kişi geliştirme bedeline bakıyor. Asıl fark
sonrasında:

- **Mağaza süreci.** Apple ve Google inceler, bazen reddeder, siz düzeltir
  tekrar gönderirsiniz. Her güncelleme aynı yoldan geçer. Web'de
  güncelleme "yayınla" demektir, beş dakika sürer.
- **İşletim sistemi güncellemeleri.** Her yıl iOS ve Android değişir;
  uygulamanın buna ayak uydurması gerekir. Dokunmadığınız bir uygulama bir
  iki yıl içinde mağazadan düşebilir.
- **İndirme engeli.** Kullanıcı önce bulacak, sonra indirecek, sonra
  açacak. Her adımda bir kısmı düşer. Bağlantıya tıklamak tek adımdır.
- **İki platform.** Biz tek kod tabanından geliştirdiğimiz için bu maliyet
  ikiye katlanmıyor; ama sıfır da değil. Test iki yerde yapılır, mağaza
  hesapları iki yerde açılır.

Bunlar uygulamayı kötü yapmaz. Bildirimi olan, çevrimdışı çalışan, günde
beş kez açılan bir ürün için hepsi ödenmeye değer. Ayda bir bakılan bir
şey için değmez.

## Kısa bir karar rehberi

Kendi kararımızı verirken sırayla şunlara bakıyoruz:

1. **Telefonun özel bir yeteneği gerekiyor mu?** Bildirim, kamera, konum,
   çevrimdışı. Hayırsa, web.
2. **Ne sıklıkla kullanılacak?** Günde birkaç kez açılan şey ana ekranda
   durmalı. Haftada bir açılan şey bağlantı olmalı.
3. **Kullanıcı kim?** Kendi personelinizse, bağlantı paylaşmak mağaza
   yönetmekten kolay. Herkese açık bir üründe mağazada olmak güven de
   verir; ama ancak birinci sorunun cevabı evetse.
4. **Bütçe kısıtlıysa hangisiyle başlanır?** Neredeyse her zaman web.
   Çalışan bir sistem üstüne uygulama eklemek, uygulamayı baştan yazmaktan
   ucuzdur. Dernek Asistan'da bu yüzden web ile başladık; uygulama
   gerekirse üstüne gelir.

"Herkesin var" cevabı listede yok. Bilerek.

Kendi fikriniz için bu sorulara cevap veremiyorsanız, normal; çoğu kişi
veremiyor, çünkü cevap işin ayrıntısında saklı. [Bize anlatın](/iletisim/),
birlikte bakalım. Bazen "size uygulama gerekmiyor, şu siteyi düzeltmek
yeter" deriz; bu da bir cevaptır ve bizim için de en ucuzu.
