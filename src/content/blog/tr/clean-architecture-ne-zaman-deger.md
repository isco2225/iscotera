---
title: "Clean Architecture: Ne Zaman Değer, Ne Zaman Yük?"
description: "Clean Architecture'ın gerçekte ne vaat ettiği, projelerde nerede işe yaradığı ve hangi durumlarda düpedüz aşırı mühendislik olduğu üzerine dürüst bir değerlendirme."
pubDate: 2026-07-28
tags: ["yazılım mimarisi", "clean architecture", "mühendislik"]
---

Bir projeyi devraldığınızı düşünün. Basit bir soru soruyorsunuz: "Bu sistemde
kargo ücreti nasıl hesaplanıyor?" Cevap bir dosyada değil; biraz controller'da,
biraz veritabanı sorgusunun içinde, biraz da üç yıl önce yazılmış bir
template'in ortasında. İş kuralı diye bir şey yok ortada; framework'ün
içine eriyip dağılmış bir şeyler var.

Clean Architecture tam olarak bu soruna verilmiş bir cevap. Ama son yıllarda
öyle bir noktaya geldi ki, kimi ekipler için din, kimileri için küfür. İki
taraf da haksız değil. Bu yazıda ikisini de anlatacağız.

## Fikrin özü: bağımlılıklar içeri doğru akar

Robert Martin'in 2012'de yazdığı [orijinal yazının](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
o meşhur iç içe halkalarını bir kenara bırakın; katman isimlerini
ezberlemenize de gerek yok. Fikrin tamamı tek cümle: **iş kurallarınız, dış
dünyadan habersiz olmalı.**

"Dış dünya" derken kastedilen şey: veritabanınız, web framework'ünüz,
kullandığınız üçüncü parti servisler. Kargo ücreti hesaplayan kod, PostgreSQL
diye bir şeyin varlığından haberdar olmamalı. Fatura kesen kod, HTTP'nin ne
olduğunu bilmemeli. Bağımlılık oku hep tek yöne bakar: dıştaki içtekini
bilir, içteki dıştakini bilmez.

Bu tek kuralın karşılığında üç somut şey alırsınız:

**Test edilebilirlik.** İş kurallarınız saf kod olduğu için, veritabanı
kurmadan, sunucu ayağa kaldırmadan, milisaniyeler içinde test edersiniz. Bu
madde kulağa akademik geliyorsa şunu sorun: bugün sisteminizdeki en kritik
hesabın doğruluğunu kanıtlayan bir test var mı, yoksa "canlıda çalışıyor
işte" mi?

**Erteleme gücü.** Veritabanı seçimini, hatta arayüz teknolojisini projenin
ilerleyen aşamalarına erteleyebilirsiniz; çünkü çekirdek onlara bağımlı
değil. Kulağa lüks gibi geliyor ama asıl kıymeti tersinde: beş yıl sonra o
framework'ün modası geçtiğinde, iş kurallarınızı yeniden yazmadan kabuğu
değiştirebilirsiniz. Framework'ler gelip geçer; kargo ücreti hesabınız kalır.

**Konuşulabilir kod.** İş kuralı tek yerde durunca, "bu nasıl çalışıyor?"
sorusunun cevabı da tek yerde durur. Yeni gelen geliştirici — ya da altı ay
sonraki siz — sistemin kalbini framework'ün klasör yapısında aramaz.

## Şimdi madalyonun öteki yüzü

Burada dürüst olmak zorundayız, çünkü Clean Architecture'ın kötü şöhreti de
hak edilmiş: [eleştirmenlerin işaret ettiği](https://algocademy.com/blog/why-your-clean-architecture-is-making-things-more-complicated/)
gibi, dogmatik uygulanan bir clean architecture'da basit bir "kullanıcı
kaydı" özelliği on bir dosyaya yayılabiliyor. Entity, use case, repository
arayüzü, repository implementasyonu, DTO, mapper, controller... Ekleyeceğiniz
alan tek bir e-posta sütunuyken beş dosyada değişiklik yapıyorsanız, mimari
size hizmet etmiyor; siz mimariye hizmet ediyorsunuz.

Bilişsel yük de gerçek bir maliyet. Kod okurken sürekli dosyalar arasında
zıplamak, özellikle deneyimi az bir ekipte, "temiz" mimarinin vaat ettiği
anlaşılırlığın tam tersini üretir. Üç kişilik bir ekipte, üç ay ömür biçilen
bir MVP'de bu bedeli ödemek — açık konuşalım — israftır.

Bizim gözlemimiz şu: kötü clean architecture deneyimlerinin çoğu, fikrin
kendisinden değil, fikrin **tarikat disipliniyle** uygulanmasından çıkıyor.
Halkaları şablon olarak ezberleyip her projeye aynı kalıbı basmak, mimariyi
anlamamanın en pahalı biçimi.

## Peki ne zaman değer?

Kendi projelerimizde şu üç soruya bakıyoruz:

1. **Gerçek iş kuralı var mı?** Sistemin özü "veritabanından oku, ekrana
   bas" ise (ki birçok iyi ürün tam olarak budur), katmanlara bölecek bir
   çekirdek zaten yok. CRUD'a clean architecture giydirmek, tişörtün üstüne
   frak giymek gibidir.
2. **Proje kaç yıl yaşayacak?** Mimari yatırımın geri dönüşü zamanla gelir.
   Üç aylık MVP'de maliyet peşin, fayda hiç; beş yıllık kurumsal sistemde
   maliyet peşin, fayda bileşik faizle.
3. **Dış bağımlılıklar değişken mi?** Ödeme sağlayıcınızın, kargo
   entegrasyonunuzun, hatta veritabanınızın değişme ihtimali somutsa,
   çekirdeği onlardan yalıtmak sigorta değil, zorunluluktur.

Üçüne de "evet" diyorsanız, dependency rule'u ciddiye alın. Ama o zaman bile
tavsiyemiz kademeli olması: önce sadece iş kurallarını dışarıdan yalıtın.
Tek bir "domain" klasörü bile devrim yaratır. On bir dosyalık tam seremoniye,
ancak sistem büyüyüp o dosyalar kendini haklı çıkardığında geçin.
[Pragmatik yaklaşımı savunanların](https://threedots.tech/episode/is-clean-architecture-overengineering/)
söylediği gibi: bu bir felsefe, boyama kitabı değil.

## Bizim çizgimiz

İscotera olarak müşteri projelerinde şu ilkeyle çalışıyoruz: **mimarinin
dozu, projenin ömrü ve iş kuralının yoğunluğu kadar.** Kısa ömürlü, ince iş
mantıklı projelerde framework'ün doğal yapısına saygı duyuyoruz; uzun ömürlü,
kural yoğun sistemlerde ise çekirdeği ilk günden yalıtıyoruz. İki durumda da
gerekçeyi yazılı bırakıyoruz, çünkü mimari kararın en kötüsü neden
verildiği unutulmuş olandır.

Elinizde büyüyen ve kuralları framework'e gömülmeye başlamış bir sistem
varsa, [bir kahve içimi konuşalım](/iletisim/). Kodu görmeden reçete
yazmayız, ama neye bakacağımızı biliyoruz.
