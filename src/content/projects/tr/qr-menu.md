---
title: "QR Menü"
description: "Restoran ve kafeler için işletmeye özel tasarlanan QR menü sistemi. Müşteri masadaki kodu okutup menüye ulaşır; fiyat ve ürün değişiklikleri kontrol panelinden anında yansır."
type: product
tagline: "Restoranınız ve kafeniz için, markanıza göre tasarlanmış dijital menü."
status: live
category: "Web uygulaması"
client: "Kendi ürünümüz"
sector: "Restoran ve kafe"
tags: ["web", "qr menü", "restoran", "kafe"]
# Vitrin panelinin zemini (ProductPanel): webmenu.info'nun mor kimliğinin
# koyu tonu; İbadet Rehberim'in yeşili ve Dernek Asistan'ın petrol
# mavisiyle karışmasın diye.
color: "#581c87"
# Logo, webmenu.info'daki 97 px PNG'den vektöre çizildi; kapak Pexels'ten
# bir kafe masası fotoğrafı (kaynaklar _images/README.md'de). Ürün ekranı
# yok: yayındaki bir menünün telefon görüntüleri gelirse features[].image
# olarak eklenir.
logo: "../_images/qr-menu/logo.svg"
cover: "../_images/qr-menu/cover.jpg"
stores:
  web: "https://webmenu.info/"
# Fiyat sayfada yayımlanmıyor; paketlerin ayrıntısı webmenu.info'da. Ücret
# bilinmediği için app (SoftwareApplication) bloğu da yok: şemaya
# bilmediğimiz bir fiyat yazılmaz.
pricing:
  label: "Silver · Gold · Premium"
# results boş: doğrulanmış işletme sayısı ya da kullanım verisi yok.
# webmenu.info'daki müşteri yorumları da bilerek alınmadı; doğrulanmış
# yorum gelirse testimonials alanına girer.
results: []
# Sayfa kısa bir özet: ayrıntı webmenu.info'da (kullanıcının kararı,
# 2026-09-28). Üç özellik, her biri en fazla iki cümle; paket tablosu ve
# kurulum adımları yazılmaz.
features:
  - title: "İşletmenize özel tasarım"
    text: "Menü, işletmenizin konseptine ve marka kimliğine göre tasarlanır. Müşteriniz herkesin kullandığı bir arayüzü değil, sizin menünüzü görür."
  - title: "Değişiklikler anında menüde"
    text: "Fiyat, ürün ve açıklamalar kontrol panelinden güncellenir ve o anda yayınlanır. Yeniden baskı yok."
  - title: "Uygulama indirmeden, temassız"
    text: "Müşteri masadaki QR kodu telefonunun kamerasıyla okutur, menü tarayıcıda açılır. Kurulum ya da kayıt gerekmez."
order: 3
draft: false
---

**QR Menü**, restoran ve kafelerin menüsünü masadaki bir QR kodla
müşteriye sunan dijital menü sistemi. Fikri, tasarımı ve yazılımı bize ait;
her işletme için ayrıca kurulur ve istenirse işletmenin kimliğine göre
tasarlanır.

Müşteri kodu telefonuyla okutur, menü tarayıcıda açılır; fiyat ve ürün
değişiklikleri kontrol panelinden anında yansır. Panel eğitimi ve
sonrasındaki destek kuruluma dahildir.

Özellikler, paketler ve teklif için: [webmenu.info](https://webmenu.info/).
