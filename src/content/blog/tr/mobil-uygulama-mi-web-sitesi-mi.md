---
title: "Mobil Uygulama mı, Mobil Uyumlu Web Sitesi mi?"
description: "Mağazada bir uygulamanız olsun mu, yoksa telefonda iyi çalışan bir web sitesi yeter mi? İki kendi projemizde verdiğimiz kararlar üzerinden, hangisinin ne zaman doğru olduğunu anlatıyoruz."
pubDate: 2026-09-01
tags: ["mobil", "web", "karar rehberi"]
cover: "../_images/mobil-uygulama-mi-web-sitesi-mi/cover.jpg"
coverAlt: "Pencere önündeki masada açık bir dizüstü bilgisayar ve yanında bir akıllı telefon"
---

İlk görüşmelerde en sık duyduğumuz cümlelerden biri: "Bir de uygulamamız
olsun." Sonra soruyoruz: Neden? Cevap çoğu zaman "herkesin var" ya da
"müşteriler telefondan giriyor" oluyor. İkisi de gerçek bir gözlem, ama
ikisi de tek başına uygulama yaptırmak için yeterli sebep değil. Çünkü
"müşteriler telefondan giriyor" sorununu çoğu zaman telefonda düzgün
çalışan bir web sitesi çözüyor ve bunun maliyeti, mağazaya çıkan bir
uygulamanın epey altında kalıyor.

Bu yazı o soruyu cevaplamak için. Genel kurallar yerine kendi
projelerimizde bu kararı nasıl verdiğimizi anlatacağız, çünkü aynı soruya
iki projede iki farklı cevap verdik.

## Önce kavramları netleştirelim

Üç şey var ve sık karışıyor:

- **Mobil uyumlu web sitesi.** Tarayıcıda açılır, ekrana göre kendini
  düzenler. Kurulum yok, mağaza yok; bir bağlantı yeter.
- **Web uygulaması.** Bu da tarayıcıda çalışır, ama bir siteden çok bir
  araçtır: Giriş yaparsınız, veri girersiniz, rapor alırsınız. Dernek
  Asistan'ın ofisteki hâli böyle.
- **Mobil uygulama.** App Store ve Google Play'den indirilir, telefonun
  içinde yaşar. Bildirim gönderir, konumu kullanır, internet yokken de
  çalışabilir. İbadet Rehberim böyle bir uygulama.

Karar bu üçü arasında veriliyor ve ilk ikisi, sanıldığından çok daha fazla
iş görüyor.

## İbadet Rehberim'i neden uygulama yaptık?

İbadet Rehberim namaz vakitlerini gösteriyor, zikir sayıyor ve dinî
soruları cevaplayan bir asistanı var. Bunların hepsi bir web sitesinde de
yapılabilir. Peki neden mağazaya çıktık?

Üç sebep var ve üçü de teknik:

1. **Bildirim.** Uygulamanın varlık sebebi "vakit girdiğinde haber ver".
   Telefon cebinizdeyken, ekran kapalıyken, siz başka bir şeyle
   uğraşırken. Web'de de bildirim var, ama güvenilirliği platforma ve
   tarayıcıya göre değişiyor. "Bazen gelir" bir ezan bildirimi için kabul
   edilebilir değil.
2. **Konum ve çevrimdışı çalışma.** Vakitler bulunduğunuz yere göre
   hesaplanıyor ve internet olmasa da çalışması gerekiyor. Uygulama bu
   hesabı telefonun içinde yapıyor.
3. **Tekrar kullanım alışkanlığı.** Günde beş kez açılan bir şeyin ana
   ekranda bir simgesi olmalı. Kimse günde beş kez "tarayıcıyı aç, adresi
   yaz" yapmaz.

Dikkat ederseniz sebeplerin hiçbiri "herkesin var" değil. Hepsi telefonun,
bir sitenin yapamadığı bir özelliğini kullanıyor. Kendinize şunu sorun:
Fikriniz telefonun hangi özelliğine ihtiyaç duyuyor? Bildirim, kamera,
konum, çevrimdışı çalışma, sensörler... Bunlardan hiçbiri gerekmiyorsa
büyük ihtimalle uygulamaya da ihtiyacınız yok.

## Dernek Asistan'ı neden önce web yaptık?

Dernek Asistan, bir yardım derneğinin bağış kayıtlarını tuttuğu bir sistem.
Kullanıcıları dernek personeli; herkese açık bir ürün değil. Burada karar
farklı oldu.

Ofisteki çalışan bilgisayar başında, gün boyu kayıt giriyor, rapor alıyor.
Bu iş için en uygun ortam tarayıcı: büyük ekran, klavye, açık duran
sekmeler. Uygulama yapsaydık aynı işi daha küçük bir ekranda yaptırmış
olurduk. Ayrıca personel değiştikçe herkese "mağazadan indir, şu hesapla
gir" demek yerine bir bağlantı paylaşmak yetiyor.

Ama sahada çalışanlar da var: bağışı yerinde alan, kaydı telefonundan
girmek isteyenler. Bu yüzden sistem mobilde de çalışıyor. Burada bir ayrım
önemli: Bu bir mobil uygulama değil, mobilde de çalışan aynı sistem.
Sahadaki ihtiyaç ofistekinin küçültülmüş hâli ve telefonun özel bir
yeteneğine gerek duymuyor. İleride bildirim gerekirse (örneğin "bu bağışın
ödemesi gecikti"), bunu o zaman ele alırız.

Bu kararın parasal karşılığı şu: tek sistem, tek bakım, mağaza süreci yok.
Aynı işi mağazaya çıkan bir uygulamayla yapsaydık dernek daha fazla
ödeyecek ve karşılığında fazladan bir şey almayacaktı.

## Mobil uygulamanın görünmeyen maliyetleri

Uygulama kararı verirken çoğu kişi geliştirme bedeline bakıyor. Oysa asıl
fark sonradan ortaya çıkıyor:

- **Mağaza süreci.** Apple ve Google uygulamayı inceler, bazen reddeder;
  siz düzeltip tekrar gönderirsiniz. Her güncelleme aynı yoldan geçer.
  Web'de güncellemek ise "yayınla" demektir ve beş dakika sürer.
- **İşletim sistemi güncellemeleri.** iOS ve Android her yıl değişir,
  uygulamanın da buna ayak uydurması gerekir. Hiç dokunulmayan bir
  uygulama bir iki yıl içinde mağazadan düşebilir.
- **İndirme engeli.** Kullanıcı uygulamayı önce bulacak, sonra indirecek,
  sonra açacak. Her adımda kullanıcıların bir kısmı vazgeçer. Bir
  bağlantıya tıklamak ise tek adım.
- **İki platform.** Tek kod tabanıyla, yani aynı kodla geliştirdiğimiz için
  bu maliyet ikiye katlanmıyor, ama sıfır da değil. Test iki yerde
  yapılıyor, mağaza hesapları iki yerde açılıyor.

Bunlar uygulamayı kötü bir seçim yapmaz. Bildirim gönderen, çevrimdışı
çalışan, günde beş kez açılan bir ürün için hepsi ödenmeye değer. Ayda bir
bakılan bir şey için değmez.

## Kısa bir karar rehberi

Kendi kararımızı verirken sırayla şunlara bakıyoruz:

1. **Telefonun özel bir yeteneği gerekiyor mu?** Bildirim, kamera, konum,
   çevrimdışı çalışma. Cevap hayırsa web yeterli.
2. **Ne sıklıkla kullanılacak?** Günde birkaç kez açılan şey ana ekranda
   durmalı. Haftada bir açılan şey bir bağlantı olarak kalabilir.
3. **Kullanıcı kim?** Kendi personelinizse, bağlantı paylaşmak mağaza
   yönetmekten kolay. Herkese açık bir üründe mağazada olmak güven de
   verir, ama bu ancak birinci sorunun cevabı evetse anlamlı.
4. **Bütçe kısıtlıysa hangisiyle başlanır?** Neredeyse her zaman web.
   Çalışan bir sistemin üstüne uygulama eklemek, uygulamayı baştan yazmaktan
   ucuzdur. Dernek Asistan'da bu yüzden web ile başladık; uygulama gerekirse
   sonradan eklenir.

"Herkesin var" cevabını bu listeye bilerek almadık.

Kendi fikriniz için bu sorulara cevap veremiyorsanız bu çok normal. Çoğu
kişi veremiyor, çünkü cevap işin ayrıntısında saklı.
[Bize anlatın](/iletisim/), birlikte bakalım. Bazen cevabımız "size uygulama
gerekmiyor, şu siteyi düzeltmek yeter" oluyor. Bu da bir cevap ve çoğu
zaman en ucuzu.
