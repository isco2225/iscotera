---
title: "İbadet Rehberim"
description: "An iOS and Android app that brings prayer times, a dhikr counter and an AI assistant together in one calm interface."
type: product
tagline: "Prayer times, dhikr and the questions on your mind, in one calm app."
status: live
category: "Mobile app"
client: "Our own product"
year: 2026
tags: ["mobile", "flutter", "firebase", "ios", "android"]
logo: "../_images/ibadet-rehberim/logo.png"
cover: "../_images/ibadet-rehberim/screen-discover-feed.png"
stores:
  googlePlay: "https://play.google.com/store/apps/details?id=com.omran.huzur_islamda"
  web: "https://ibadetrehberim.com/"
  # App Store bağlantısı elimize geçince appStore alanı doldurulup bu iki
  # satır silinecek; rozet o an tıklanabilir hâle gelir.
  pending:
    - appStore
features:
  - title: "Prayer times for where you are"
    text: "Times are calculated for your location using the method of the Turkish Directorate of Religious Affairs. A notification arrives the moment a prayer time begins, even when the phone is offline. You need neither a clock nor a connection."
    image: "../_images/ibadet-rehberim/screen-prayer-times.png"
    alt: "İbadet Rehberim prayer times screen: daily prayer times for the user's city and the notification sent when a prayer time begins"
  - title: "An Islamic assistant you can ask"
    text: "Type the religious question on your mind and the AI-powered assistant answers it. Each answer states the source it rests on, so you can check what you just read."
    image: "../_images/ibadet-rehberim/screen-assistant.png"
    alt: "İbadet Rehberim assistant screen: an answer to a religious question with its source cited"
# Mağaza puanı bilerek yok: uydurma bir puan yerine ölçülebilir tek gerçek
# veri (indirme sayısı) duruyor. Google Play'deki gerçek puan elimize
# geçtiğinde rating: { value, count } olarak buraya eklenebilir.
results:
  - value: "1,000+"
    label: "downloads"
pricing:
  label: "Free"
social:
  - platform: instagram
    href: "https://www.instagram.com/ibadetrehberim.app/"
  - platform: tiktok
    href: "https://www.tiktok.com/@ibadetrehberim"
  - platform: youtube
    href: "https://www.youtube.com/@ibadetrehberim"
app:
  schemaType: MobileApplication
  applicationCategory: LifestyleApplication
  operatingSystem: "ANDROID, IOS"
  price: "0"
  priceCurrency: "TRY"
order: 1
draft: true
---

**İbadet Rehberim** is a mobile app that makes it easier to keep up with daily
worship. The idea, the design and the software are all ours; we built it
end to end at İscotera.

Every feature, screen and common question about the app lives on its own site:
[ibadetrehberim.com](https://ibadetrehberim.com/). This page is not there to
sell the app; it is there to explain how we built it.

## How we built it

We designed the interface for every age from the start: large, legible type,
few but unambiguous buttons, and navigation that needs no learning. If someone
has increased the text size on their phone, the app follows that setting.
A person who set it once does not have to set it again here.

We built the app for both iPhone and Android from a single source. For our
clients that means something concrete: you do not commission two separate
apps, a new feature reaches both phones at the same time, and maintenance
does not cost twice as much.

We set the data up to live on the phone first and go to the cloud only as a
backup. The result: the app works fully without an internet connection, it
opens fast, and nobody is forced to create an account.

On the server side we used managed cloud infrastructure. That gave us a system
a small team can sustain and that will not buckle as the user count grows.

## Where it is today

The app is live and updated regularly. It has been in continuous development
since November 2025, with new features in every release.

If you have a mobile app in mind, [get in touch](/en/contact/). Let's talk
about how to make it real.
