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
  - title: "A dhikr counter that remembers where you stopped"
    text: "Pick one of the ready-made dhikr sets or build your own. Set a daily goal and let the app do the counting and the remembering."
    image: "../_images/ibadet-rehberim/screen-dhikr-tracking.png"
    alt: "İbadet Rehberim dhikr screen: daily dhikr goals and their completion progress"
  - title: "An Islamic assistant you can ask"
    text: "Type the religious question on your mind and the AI-powered assistant answers it. Each answer states the source it rests on, so you can check what you just read."
    image: "../_images/ibadet-rehberim/screen-assistant.png"
    alt: "İbadet Rehberim assistant screen: an answer to a religious question with its source cited"
  - title: "A short feed that refreshes every day"
    text: "The prayer, hadith and verse of the day on one screen. Every post names the source its text comes from, so you can see what you are reading is based on."
    image: "../_images/ibadet-rehberim/screen-discover-feed.png"
    alt: "İbadet Rehberim discover feed: the prayer, hadith and verse of the day, each with its source"
screenshots:
  - src: "../_images/ibadet-rehberim/screen-prayer-times.png"
    alt: "İbadet Rehberim prayer times screen: daily prayer times for the user's city and the notification sent when a prayer time begins"
    caption: "Prayer times"
  - src: "../_images/ibadet-rehberim/screen-dhikr-tracking.png"
    alt: "İbadet Rehberim dhikr screen: daily dhikr goals and their completion progress"
    caption: "Dhikr counter"
  - src: "../_images/ibadet-rehberim/screen-assistant.png"
    alt: "İbadet Rehberim assistant screen: an answer to a religious question with its source cited"
    caption: "Islamic assistant"
# NOTE: the rating field is deliberately empty. The real Google Play score and
# review count go in only once they are verified; showing an invented score on
# the page, or reporting one in structured data, breaks the rules either way.
results:
  - value: "1,000+"
    label: "Google Play downloads"
  - value: "5.0"
    label: "user rating"
pricing:
  label: "Free"
  note: "The app is free to download and every core feature is free. There is a weekly or yearly premium option for people who would rather not see ads."
faq:
  - q: "Does the app cost anything?"
    a: "No. The app is free to download and every core feature is free. There is only a weekly or yearly premium subscription for people who want to remove the ads."
  - q: "Does it work without an internet connection?"
    a: "Yes. Because data lives on the phone first, prayer times, the dhikr counter and your records all work offline, and prayer time notifications arrive even when the phone has no connection. Only the Islamic assistant and the daily feed need to be online."
  - q: "Do I lose my records if I change phones?"
    a: "Not if you have signed in. Your dhikr progress is backed up, so signing in on the new device picks up where you left off. An account is not required to use the app, but it is what makes the backup possible."
  - q: "How are the prayer times calculated?"
    a: "Using the calculation method of the Turkish Directorate of Religious Affairs, based on your current location."
  - q: "Is there an iPhone version?"
    a: "Yes. The app was built for both iPhone and Android from a single source; both platforms have the same features, and new features reach them at the same time."
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
