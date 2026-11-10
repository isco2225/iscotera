---
title: "Meydan Sport Club"
description: "Beykoz'daki Meydan Sport Club için tasarlayıp geliştirdiğimiz web sitesi. Ücretler, dersler ve kadınlar salonu tek yerde, salona tek dokunuşla ulaşılıyor."
type: case-study
tagline: "Beykoz'daki spor salonunu ücretlerinden ders programına kadar ayrıntısıyla tanıtan web sitesi."
status: live
category: "Kurumsal web sitesi"
client: "Meydan Sport Club"
sector: "Spor salonu"
year: 2026
tags: ["web", "kurumsal site", "yerel arama", "spor salonu"]
# Logo salonun kendi logosu (sitesindeki PNG, kare kırpıldı). Görseller
# canlı siteden alınan ekran görüntüleri (kaynaklar _images/README.md'de).
# Kapak yalnızca masaüstü ana sayfanın ekran görüntüsü (kullanıcının
# isteği, 2026-11-06: yatay olsun ve iyice görünsün). Salon sitesinin
# masaüstü düzenine geçtiği en dar genişlikte (1024 px) çekildi ki
# küçültülünce yazılar büyük kalsın. Özelliklerde telefonda dört bölüm var. Salonun ham fotoğrafları bilerek yok: hepsinde ekipman markası
# okunuyor (görsel seçim kuralı aynı README'de).
logo: "../_images/meydan-sport-club/logo.png"
cover: "../_images/meydan-sport-club/screen-home-desktop.png"
# Vitrin panelinin zemini (ProductPanel): salon sitesindeki sarı parıltının
# koyu tonu, yani marka sarısının (#f5d90a) %22'si sitenin siyah zemininde
# (#0b0b0b). Beyazla 11,8:1; diğer panellerle aynı koyulukta.
color: "#3e380b"
# Ekranlardaki ücretler ve bilgiler sitedeki gerçek veriler; örnek veri
# olmadığı için "veriler temsilidir" notu yok.
stores:
  web: "https://www.meydansportclub.com/"
# results bilerek boş: site yeni yayında, doğrulanmış ziyaret ya da arama
# verisi yok. "Görünürlüğü artırdı" gibi bir sonuç da bu yüzden yazılmıyor;
# özellikler sitenin ne için kurulduğunu anlatıyor. Rakam gelirse buraya
# en fazla üç madde olarak girer.
#
# app (SoftwareApplication) bloğu ve pricing yok: bu bir tanıtım sitesi,
# indirilen ya da satın alınan bir yazılım değil.
results: []
# Bu sayfayı salon sahibi gibi bir işletme sahibi okuyor. Her özelliğin
# başlığı bir fayda, metni en fazla iki cümle; teknik terim yazılmaz
# (vaka çalışmalarının ortak kuralı, docs/content-decisions.md).
features:
  - title: "Salonu olduğu gibi tanıtıyor"
    text: "Sitede salonun sarı-siyah kimliği, kendi fotoğrafları ve antrenör kadrosu öne çıkıyor. Salonu merak eden biri, gelmeden önce nasıl bir yere geleceğini görüyor."
    image: "../_images/meydan-sport-club/screen-trainers.png"
    alt: "Meydan Sport Club sitesinin telefondaki antrenörler bölümü: kadro başlığı ve salon sahibi Yunus Hoca'nın fotoğraflı kartı"
  - title: "Ücretler ve ders programı açıkça ortada"
    text: "Üyelik ücretleri, öğrenci fiyatları ve haftalık ders programı sitede açıkça yazıyor. Üye adayı fiyatı öğrenmek için aramak zorunda kalmıyor, kararını siteye bakarak verebiliyor."
    image: "../_images/meydan-sport-club/screen-membership-prices.png"
    alt: "Meydan Sport Club sitesinin telefondaki üyelik ücretleri bölümü: aylık ücret ve öğrenci fiyatı"
  - title: "Salona tek dokunuşla ulaşılıyor"
    text: "Telefondan girenler ekranın altındaki butonlarla salonu arıyor, WhatsApp'tan yazıyor ya da yol tarifini açıyor. Ücretsiz deneme antrenmanı için randevu da WhatsApp'tan, hazır bir mesajla isteniyor."
    image: "../_images/meydan-sport-club/screen-contact.png"
    alt: "Meydan Sport Club sitesinin telefondaki iletişim bölümü: adres, telefon, WhatsApp, çalışma saatleri ve ekranın altında Ara, WhatsApp ve Yol Tarifi butonları"
  - title: "Kadınlar salonunun kendi sayfası var"
    text: "Kadınlara özel salonun kadın antrenörleri, grup dersleri ve çalışma saatleri ayrı bir sayfada duruyor. Bu sayfayı, Beykoz'da kadınlara özel bir spor salonu arayanları düşünerek hazırladık."
    image: "../_images/meydan-sport-club/screen-womens-gym.png"
    alt: "Meydan Sport Club sitesinin telefondaki kadınlara özel spor salonu sayfası ve WhatsApp'tan bilgi alma butonu"
  - title: "Yerel aramalar için baştan hazır"
    text: "Beykoz'da ya da Ortaçeşme'de spor salonu arayanların karşısına doğru bilgi çıksın diye her sayfanın başlığını ve içeriğini buna göre kurduk. Adres ve telefon Google Haritalar'daki kayıtla birebir aynı, sayfalar telefonda da hızlı açılıyor."
order: 2
draft: false
---

**Meydan Sport Club**, Beykoz Ortaçeşme'de karma salonu ve kadınlara özel
ayrı salonu olan bir spor kulübü. Salonun web sitesini tasarladık, geliştirdik
ve yayına aldık.

## Salonun ihtiyacı

Spor salonu seçen biri önce salonun nerede olduğuna, ücretlere, çalışma
saatlerine ve derslere bakıyor. Kadınlar için ayrı bir salon olup olmadığını
da merak ediyor. Bu bilgileri internette bulamazsa ya telefon açıp soruyor ya
da bilgisini kolayca bulduğu başka bir salona bakıyor.

Meydan Sport Club'ın istediği de bu bilgilerin hepsini ayrıntısıyla anlatan
bir siteydi. Site aramalarda kolayca bulunmalı, salonu internette de derli
toplu ve kurumsal bir yüzle göstermeliydi.

## Bugün

Site [meydansportclub.com](https://www.meydansportclub.com/) adresinde
yayında. Salonu merak eden biri ücretleri, ders programını, antrenörleri ve
çalışma saatlerini tek yerde görüyor. Karar verdiğinde de salonu telefondan
tek dokunuşla arıyor ya da WhatsApp'tan yazıyor.

İşletmeniz için bir web sitesi düşünüyorsanız [bize yazın](/iletisim/). Bu
tür projelere nasıl yaklaştığımızı
[Web Uygulama Geliştirme](/hizmetler/web-uygulama-gelistirme/) sayfasında
anlatıyoruz.
