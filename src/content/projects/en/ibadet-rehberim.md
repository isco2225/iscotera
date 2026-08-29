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
video:
  src: "/media/ibadet-rehberim/tanitim.mp4"
  uploadDate: 2026-08-29
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

### An interface that needs no learning

We designed the interface for every age from the start: large, legible type,
few but unambiguous buttons, and navigation built on five fixed tabs. People
always know which screen they are on and never hunt for things through menus.
If someone has increased the text size on their phone, the app scales its text
to match; a person who set it once does not have to set it again here.

### One codebase, two platforms

We built the app with Flutter, from a single source, for both iPhone and
Android. For our clients that means something concrete: you do not commission
two separate apps, a new feature reaches both platforms at the same time, and
maintenance does not cost twice as much.

### Data on the device first, the cloud as backup

Dhikr records, preferences and downloaded prayer times live in the phone's own
database; the cloud steps in only for backup and for syncing when someone
changes device. Users feel that in three places: the app opens in seconds, the
dhikr counter and prayer times work with no connection, and because reminders
depend on the device clock rather than a server, they arrive on time even
where there is no signal.

### Managed cloud on the server side

We used Firebase for sign-in, content and server-side operations, and the
assistant runs on Google's Gemini model. That gave us a system a small team
can sustain and that will not buckle as the user count grows. We did not leave
sensitive operations to the phone: when someone deletes their account, every
related record is cleared server-side in a single operation.

### A codebase ready to change

We wrote the app with a layered architecture: the interface, the business
rules and data access stay separate from one another. In practice that means
where a screen gets its data is changed in one place, a new feature carries no
risk of breaking existing screens, and a developer joining later knows where
to look.

## Where it is today

The app is live on Google Play and free to download; the App Store version is
on its way. Prayer times, the dhikr counter, the prayer–hadith–verse feed and
the AI-powered assistant are in users' hands today, and anyone who wants it
ad-free can move to the support plan.

We wrote the first line in November 2025, and the project has been developed
steadily ever since.

If you have a mobile app in mind, [get in touch](/en/contact/). Two platforms,
a data layer that works offline and an AI-powered assistant — we delivered all
of it with a single team. Let's talk about how to make yours real.
