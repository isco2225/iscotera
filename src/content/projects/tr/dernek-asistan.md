---
title: "Dernek Asistan"
description: "Vefa Yolu Derneği için geliştirdiğimiz bağış takip sistemi. Bağış kaydı saniyeler sürüyor, hisseli projelerde kalan hisse anlık görünüyor, ay sonu raporu tek tıkla çıkıyor."
type: case-study
tagline: "Bir yardım derneğinin bütün bağış işleri, ofiste ve sahada aynı ekranda."
status: live
category: "Web ve mobil uygulama"
client: "Vefa Yolu Derneği"
year: 2026
tags: ["web", "mobil", "özel yazılım", "dernek"]
cover: "../_images/dernek-asistan/screen-performance-report.png"
# Ekranlar örnek kayıtlarla çekildi (gerçek bağışçı verisi gösterilmiyor);
# görsellerin altında "veriler temsilidir" notu çıkar.
screenshotsIllustrative: true
# Mağaza bağlantısı yok: uygulama derneğin kendi personeline açık, herkese
# sunulan bir ürün değil. Aynı sebeple app (SoftwareApplication) şeması da
# bilerek yok; indirilemeyen bir uygulama için fiyat ve kurulum adresi
# bildirmek doğru olmazdı.
#
# results bilerek boş: elimizde doğrulanmış kullanım verisi yok. Rakam
# (aylık kayıt sayısı vb.) gelirse buraya en fazla üç madde olarak girer.
results: []
# Metinler bilerek kısa ve teknik terimsiz: bu sayfayı okuyan dernek
# yöneticisi, yazılımın nasıl kurulduğunu değil işini nasıl kolaylaştırdığını
# öğrenmek istiyor.
features:
  - title: "Bağış kaydı saniyeler sürüyor"
    text: "Çalışan bağışçının adını ve bağış türünü giriyor; fiyatı, tutarı ve sıra numarasını sistem kendisi veriyor. Aynı bağışçı birden fazla kişi adına bağış yapıyorsa form bir kez dolduruluyor, her isim için ayrı kayıt açılıyor."
    image: "../_images/dernek-asistan/screen-donation-form.png"
    alt: "Dernek Asistan kurban bağışı ekleme formu: üstte tek kayıt ve toplu kayıt sekmeleri, birim fiyat otomatik gelmiş; bağışçı adı, kimin adına, hayvan türü, niyet, telefon ve bağış kaynağı alanları"
  - title: "Her yardım türü kendi ekranında"
    text: "Yemek dağıtımı, ekmek dağıtımı, kurban, Kuran, su kuyusu ve Gazze su tankeri ayrı bölümlerde duruyor. Her biri kendi kurallarıyla çalıştığı için çalışan hangi alanı dolduracağını düşünmüyor."
    image: "../_images/dernek-asistan/screen-donation-types.png"
    alt: "Dernek Asistan bağış türü seçme ekranı: yemek dağıtımı, ekmek dağıtımı, kurban, Kuran, su kuyusu ve Gazze su tankeri kartları, her kartta hizmet verilen ülkeler"
  - title: "Hisseli projelerde kaç hisse kaldı, tek bakışta"
    text: "Su kuyusu ve su tankeri projelerinde dolan ve kalan hisseler ekranda görünüyor. Proje tamamlandığında kendiliğinden tamamlananlar listesine geçiyor."
  - title: "Fiyatlar sistemin içinde"
    text: "Ülkeye ve türe göre fiyatlar uygulamanın içinde duruyor, ayrı bir tabloda değil. Fiyatı yalnızca yetkili kişiler değiştirebiliyor ve her değişiklik kayda geçiyor."
  - title: "Ay sonu raporu tek tıkla"
    text: "Tarih aralığını seçiyorsunuz; kaç bağış alındığı, hangi kanaldan geldiği ve hangi çalışanın ne kadar kayıt girdiği grafiklerle çıkıyor. PDF olarak indirip yönetim kuruluna götürebiliyorsunuz."
    image: "../_images/dernek-asistan/report-pdf.png"
    alt: "Dernek Asistan'ın ürettiği PDF performans raporu: dönem, özet rakamlar, bağış türüne ve kaynağa göre tablolar"
  - title: "Her bağışın izi kayıtlı"
    text: "Hangi kaydı kimin, ne zaman girdiği saklanıyor. Kimin kayıt silebileceği ve fiyat değiştirebileceği baştan tanımlı; dernek bağışçısına ve denetime karşı hesap verebilir durumda."
order: 2
draft: false
---

**Dernek Asistan**, Vefa Yolu Derneği'nin bütün bağış işlerini tek bir yerden
yönetmesi için geliştirdiğimiz bir uygulama. Çalışan ister ofisten ister
sahada telefonundan aynı sisteme giriyor.

## Derneklerin yaşadığı sorun

Yardım dernekleri, özellikle kurban ve Ramazan dönemlerinde kısa sürede
yüzlerce bağış alıyor. Kayıtlar tablolara, mesajlaşma gruplarına ve kişisel
notlara dağıldığında hep aynı sıkıntılar çıkıyor:

- Bir bağışın ne zaman, kim tarafından, hangi ülke için alındığı sonradan
  bulunamıyor.
- Fiyatlar ayrı bir listede durduğu için tutarlar elle hesaplanıyor.
- Hisseli projelerde kaç hissenin dolduğu elle sayılıyor.
- "Bu ay kaç bağış aldık?" sorusunun cevabı saatler süren bir toplama işi.

## Ne değişti

Eskiden bir bağış kaydı almak fiyat listesine bakmayı, tutarı hesaplamayı ve
tabloya elle yazmayı gerektiriyordu. Şimdi çalışan bağışçının adını ve bağış
türünü giriyor, gerisini sistem yapıyor. Her kayıt kendi numarasını alıyor;
makbuz keserken de bağışçı sonradan arayıp sorduğunda da aranan referans o.

Asıl fark yönetim tarafında. "Hangi kanal daha çok bağış getiriyor?",
"Bangladeş kuyusunda kaç hisse kaldı?", "Hangi çalışan ne kadar kayıt girdi?"
— cevap için artık kimse tablo birleştirmiyor; tarih aralığı seçiliyor, rapor
PDF olarak iniyor. Yönetim kurulu toplantısının rakamları dakikalar içinde
hazır.

Bağışçıya ve denetime karşı da durum değişti: her bağışın ne zaman, kim
tarafından alındığı kayıtlı. Dernek Asistan bugün Vefa Yolu Derneği'nde
kullanımda; dernek zamanını tabloları birleştirmeye değil, yardımın kendisine
ayırıyor.

## Derneğiniz için de yapabilir miyiz

Her derneğin yardım türleri, fiyatları ve çalışma düzeni farklı; bu yüzden
Dernek Asistan'ı olduğu gibi kopyalamıyoruz, derneğin kendi işleyişine göre
kuruyoruz. Nasıl çalıştığınızı anlatın; önce hazır bir çözümün işinizi görüp
görmeyeceğini birlikte konuşalım.

[Bize ulaşın](/iletisim/) ya da
[özel yazılım çözümlerimize](/hizmetler/ozel-yazilim-cozumleri/) bakın.
