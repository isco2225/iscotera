---
title: "Clean Architecture: Ne Zaman Değer, Ne Zaman Yük?"
description: "Clean Architecture gerçekte ne vaat ediyor, hangi projelerde işe yarıyor, hangi durumlarda düpedüz aşırı mühendisliğe dönüşüyor? Örneklerle bir değerlendirme."
pubDate: 2026-07-28
tags: ["yazılım mimarisi", "clean architecture", "mühendislik"]
cover: "../_images/clean-architecture-ne-zaman-deger/cover.jpg"
coverAlt: "Masanın üstünde ölçüleri işlenmiş bir mimari kat planı"
---

Bir projeyi devraldığınızı düşünün. Basit bir soru soruyorsunuz: "Bu sistemde
kargo ücreti nasıl hesaplanıyor?" Cevap tek bir dosyada değil: biraz
controller'da (gelen isteği karşılayan sınıfta), biraz bir veritabanı
sorgusunun içinde, biraz da üç yıl önce yazılmış bir template'in (sayfa
şablonunun) ortasında. Ortada ayrı duran bir iş kuralı yok; kullanılan
framework'ün (Laravel, Django ya da Spring gibi bir uygulama çatısının)
içine dağılmış kod parçaları var.

Clean Architecture tam olarak bu soruna verilmiş bir cevap. Ama son yıllarda
tartışması öyle büyüdü ki kimi ekipler onu tartışılmaz bir kural sayıyor,
kimileri adını duymak bile istemiyor. İki tarafın da haklı olduğu yerler
var. Bu yazıda ikisini de anlatıyoruz.

## Fikrin özü: bağımlılıklar içeri doğru akar

Robert Martin'in 2012'de yazdığı [orijinal yazının](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
o meşhur iç içe halkalarını bir kenara bırakın; katman isimlerini
ezberlemenize de gerek yok. Fikrin tamamı tek cümleye sığıyor: **iş
kurallarınız, dış dünyadan habersiz olmalı.** İş kuralı derken kargo
ücretinin nasıl hesaplanacağı ya da hangi siparişe indirim uygulanacağı
gibi, işin kendisine ait mantığı kastediyoruz.

"Dış dünya" ise veritabanınız, web framework'ünüz ve kullandığınız üçüncü
parti servisler. Kargo ücreti hesaplayan kod, PostgreSQL diye bir
veritabanının varlığından haberdar olmamalı. Fatura kesen kod da HTTP'nin
(tarayıcıyla sunucunun konuştuğu protokolün) ne olduğunu bilmemeli.
Bağımlılık oku hep tek yöne bakar: dıştaki içtekini bilir, içteki dıştakini
bilmez.

Bu tek kuralın karşılığında üç somut şey kazanırsınız:

**Test edilebilirlik.** İş kurallarınız hiçbir dış sisteme bağlı olmayan
düz kod olduğu için onları veritabanı kurmadan, sunucu ayağa kaldırmadan,
milisaniyeler içinde test edersiniz. Bu madde kulağa akademik geliyorsa
şunu sorun: bugün sisteminizdeki en kritik hesabın doğruluğunu kanıtlayan
bir test var mı, yoksa "canlıda çalışıyor işte" mi diyorsunuz?

**Erteleme gücü.** Veritabanı seçimini, hatta arayüz teknolojisini projenin
ilerleyen aşamalarına bırakabilirsiniz, çünkü çekirdek (iş kurallarının
durduğu iç halka) onlara bağımlı değil. Bu kulağa lüks gibi gelebilir, ama
asıl faydası ileride ortaya çıkar: beş yıl sonra o framework'ün modası
geçtiğinde iş kurallarınızı yeniden yazmadan dış kabuğu
değiştirebilirsiniz. Framework'ler değişir, kargo ücreti hesabınız aynı
kalır.

**Anlaşılır kod.** İş kuralı tek yerde durunca, "bu nasıl çalışıyor?"
sorusunun cevabı da tek yerde durur. Yeni gelen bir geliştirici, ya da altı
ay sonraki siz, sistemin kalbini framework'ün klasör yapısında aramak
zorunda kalmaz.

## Şimdi madalyonun öteki yüzü

Burada şunu açıkça söylemek gerekiyor: Clean Architecture'ın kötü şöhreti de
boşuna değil. [Eleştirmenlerin işaret ettiği](https://algocademy.com/blog/why-your-clean-architecture-is-making-things-more-complicated/)
gibi, kurallara körü körüne uyularak kurulmuş bir Clean Architecture'da
basit bir "kullanıcı kaydı" özelliği on bir dosyaya yayılabiliyor: entity,
use case, repository arayüzü, repository implementasyonu, DTO, mapper,
controller... Her birinin ayrı bir görevi var. Entity iş nesnesini, use
case tek bir iş adımını tanımlar. Repository arayüzü verinin nereden
okunacağını söyler, implementasyonu bunu gerçekten yapar. DTO katmanlar
arasında veri taşır, mapper da bu nesneleri birbirine çevirir. Eklediğiniz
tek bir e-posta sütunu için beş dosyada değişiklik yapıyorsanız, mimari
işinizi kolaylaştırmak yerine size iş çıkarıyor demektir.

Bilişsel yük de gerçek bir maliyet: kodu anlamak için aklınızda aynı anda
tutmanız gereken parça sayısı arttıkça okumak zorlaşır. Sürekli dosyalar
arasında gidip gelmek, özellikle deneyimi az bir ekipte, "temiz" mimarinin
vaat ettiği anlaşılırlığın tam tersini doğurur. Üç kişilik bir ekipte, üç
ay ömür biçilen bir MVP'de (bir fikri sınamaya yetecek en küçük ilk sürümde)
bu bedeli ödemek açıkçası israftır.

Bizim gözlemimiz şu: kötü Clean Architecture deneyimlerinin çoğu fikrin
kendisinden değil, fikrin **hiç sorgulanmadan** uygulanmasından çıkıyor.
Halkaları şablon gibi ezberleyip her projeye aynı kalıbı uygulamak,
mimariyi anlamamanın en pahalı biçimi.

## Peki ne zaman değer?

Kendi projelerimizde şu üç soruya bakıyoruz:

1. **Gerçek iş kuralı var mı?** Sistemin özü "veritabanından oku, ekrana
   bas" ise (ki pek çok iyi ürün tam olarak budur), katmanlara bölünecek
   bir çekirdek zaten yok. Yalnızca kayıt ekleyip okuyan, güncelleyen ve
   silen bir CRUD uygulamasına Clean Architecture giydirmek, işi gereğinden
   çok büyütür.
2. **Proje kaç yıl yaşayacak?** Mimari yatırımın geri dönüşü zamanla gelir.
   Üç aylık bir MVP'de maliyeti peşin ödersiniz, faydasını hiç görmezsiniz.
   Beş yıl yaşayacak kurumsal bir sistemde de maliyet peşindir, ama fayda
   yıllar içinde katlanarak büyür.
3. **Dış bağımlılıklar değişken mi?** Ödeme sağlayıcınızın, kargo
   entegrasyonunuzun, hatta veritabanınızın değişme ihtimali somutsa,
   çekirdeği onlardan yalıtmak bir tercih olmaktan çıkar, zorunlu hâle
   gelir.

Üçüne de "evet" diyorsanız dependency rule'u, yani yukarıda anlattığımız
bağımlılıkların yalnızca içe doğru akması kuralını ciddiye alın. Ama o
zaman bile kademeli ilerlemenizi öneririz: önce yalnızca iş kurallarını
dışarıdan yalıtın. İş kurallarını topladığınız tek bir "domain" klasörü
bile kodu belirgin biçimde toparlar. On bir dosyalık tam yapıya ise ancak
sistem büyüyüp o dosyalar gerçekten işe yaramaya başladığında geçin.
[Pragmatik yaklaşımı savunanların](https://threedots.tech/episode/is-clean-architecture-overengineering/)
söylediği gibi, bu bir felsefe; adım adım doldurulacak bir boyama kitabı
değil.

## Bizim çizgimiz

İscotera'da müşteri projelerinde şu ilkeyle çalışıyoruz: **mimarinin dozunu
projenin ömrü ve iş kurallarının yoğunluğu belirler.** Kısa ömürlü ve iş
mantığı az olan projelerde framework'ün kendi yapısını olduğu gibi
kullanıyoruz. Uzun ömürlü ve kuralı bol sistemlerde ise çekirdeği ilk
günden yalıtıyoruz. İki durumda da kararın gerekçesini yazıya döküyoruz,
çünkü neden verildiği unutulmuş bir mimari kararı sonradan ne savunmak ne
de değiştirmek kolaydır.

Elinizde büyüyen ve kuralları framework'e gömülmeye başlamış bir sistem
varsa [birlikte bakalım](/iletisim/); önerimizi kodu gördükten sonra
yaparız.
