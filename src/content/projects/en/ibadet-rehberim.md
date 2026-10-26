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
# Vitrin panelinin zemini (ProductPanel): tanıtım görsellerinin koyu yeşili.
color: "#253e22"
video:
  src: "/media/ibadet-rehberim/tanitim.mp4"
  uploadDate: 2026-08-29
stores:
  web: "https://ibadetrehberim.com/"
features:
  - title: "Prayer times for where you are"
    text: "The app calculates prayer times for your location, using the method of Diyanet, Türkiye's Presidency of Religious Affairs. When a prayer time begins, a notification arrives even if the phone is offline, so you don't have to watch the clock."
    image: "../_images/ibadet-rehberim/screen-prayer-times.png"
    alt: "İbadet Rehberim prayer times screen: daily prayer times for the user's city and the notification sent when a prayer time begins"
  - title: "Answers to religious questions, with sources"
    text: "Type in a religious question and the AI-powered assistant answers it. Each answer shows the source it draws on, so you can check what you've read for yourself."
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
draft: false
---

**İbadet Rehberim** is a mobile app that makes it easier to keep up with daily
worship. The idea, the design and the software are all ours, and we built it
from start to finish at İscotera.

You'll find every feature, the screenshots and answers to common questions on
the app's own site, [ibadetrehberim.com](https://ibadetrehberim.com/). On this
page we explain how we built it.

## How we built it

### An interface you don't have to learn

We designed the interface with users of every age in mind from the start:
large, legible type, a few clear buttons and navigation built on five fixed
tabs. People always know which screen they're on and never have to hunt
through menus. If someone has made the text larger on their phone, the app's
text grows to match, so they don't have to change the setting again.

### One codebase, two platforms

We built the app with Flutter, from a single source, for both iPhone and
Android. Here's what that means for you: you don't need two separate apps
built, a new feature reaches both platforms at the same time, and maintenance
doesn't cost twice as much.

### Data on the device first, the cloud as backup

We keep dhikr counts, preferences and downloaded prayer times on the phone
itself. The cloud comes in only for backups and for moving data across when
someone changes phone. Users notice the difference in everyday use: the app
opens in seconds, and the dhikr counter and prayer times work without a
connection. Because reminders rely on the phone's own clock rather than a
server, they arrive on time even where there's no signal.

### Managed cloud on the server side

We used Firebase for sign-in, content and server-side operations, and the
assistant runs on Google's Gemini model. That gave us a system a small team
can maintain, and one that won't run into trouble as the number of users
grows. We didn't leave sensitive operations to the phone: when someone deletes
their account, all of their records are removed on the server in a single
step.

### A codebase ready to change

We wrote the app with a layered architecture: the interface, the business
rules and data access are kept separate. So we can change where a screen gets
its data in one place, and a new feature does not risk breaking existing
screens. A developer who joins later also knows where to look.

## Where it is today

The app is live on the App Store and Google Play, and it's free to download.
Prayer times, the smart dhikr counter, a feed of prayers, hadith and verses,
and the AI-powered assistant are in users' hands today. Anyone who'd rather
use it without ads can switch to the support plan.

We built both platform versions, the offline-ready design and the AI-powered
assistant with a single team. If you have a mobile app in mind,
[get in touch](/en/contact/) and let's talk about how to build it.
