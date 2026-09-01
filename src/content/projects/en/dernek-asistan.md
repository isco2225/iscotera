---
title: "Dernek Asistan"
description: "A donation management system we built for Vefa Yolu Derneği, a Turkish charity. Donation records, share-based projects, the price list and staff reports in one app, on the web and on mobile."
type: case-study
tagline: "A charity's entire donation workflow, on one screen in the office and in the field."
status: live
category: "Web and mobile app"
client: "Vefa Yolu Derneği"
year: 2026
tags: ["web", "mobile", "custom software", "supabase"]
cover: "../_images/dernek-asistan/screen-performance-report.png"
# Ekranlar örnek kayıtlarla çekildi (gerçek bağışçı verisi gösterilmiyor);
# görsellerin altında "veriler temsilidir" notu çıkar.
screenshotsIllustrative: true
# No store links: the app is open only to the charity's own staff, not a
# public product. For the same reason there is deliberately no app
# (SoftwareApplication) block; reporting a price and an install URL for an
# app nobody can download would be wrong.
#
# results is deliberately empty: we have no verified usage figures. If real
# numbers arrive (monthly record counts etc.) they go here, three at most.
results: []
features:
  - title: "A donation recorded in seconds"
    text: "The staff member enters the donor's name, who the donation is on behalf of, the country and the channel it came through; the system finds the price for that country and type itself, calculates the amount and applies the charity's minimum-quantity rule. If one donor gives on behalf of several people, all of them go in through one form and a separate record is created for each name. Every record gets a permanent sequence number within its donation type: one reference for the receipt and for follow-up."
    image: "../_images/dernek-asistan/screen-donation-form.png"
    alt: "Dernek Asistan form for adding a qurbani donation: unit price filled in automatically; fields for donor name, on whose behalf, animal type, intention and donation source"
  - title: "Each kind of aid with its own rules"
    text: "Food distribution, bread distribution, qurbani, Qur'an donations, water wells and the Gaza water tanker project each live in their own section and follow their own rules. A qurbani donation records the animal and the intention (obligatory, vow, gratitude, charity, in memory of, healing); a water well tracks shares."
  - title: "Live occupancy for share-based projects"
    text: "Water well and water tanker projects run on shares. The app shows how many shares of each project are filled and how many remain; when a project fills up it moves itself to the completed list. Who joined which well, and the payment status of every share, is readable at a glance."
  - title: "The price list lives inside the system"
    text: "Unit prices, minimum quantities and share counts per country and type are held in the app, not in a separate spreadsheet. Only senior staff can change a price, and every change is stored with who made it and when."
  - title: "Staff performance and reporting"
    text: "Every record is tied to the staff member who entered it; managers see each person's total and monthly record counts, the donation amounts they brought in and the types they work on. Pick a date range, a donation type and a country to get a period summary, presented as charts and downloadable as a PDF in one click. The numbers for a board meeting are ready in minutes."
    image: "../_images/dernek-asistan/report-pdf.png"
    alt: "The PDF performance report Dernek Asistan generates: period, summary figures, tables by donation type and by source"
  - title: "Permissions and security"
    text: "Only staff defined by the charity can sign in. Standard staff enter and edit donations; senior staff can additionally delete records, edit prices and reach the staff and performance screens. These rules are enforced at the database level, not just on screen; an unauthorised deletion is technically impossible."
order: 2
draft: false
---

**Dernek Asistan** is a system we built so that Vefa Yolu Derneği, a Turkish
charity, can run its day-to-day donation work from one place. Donation
records, share-based projects, the price list, staff performance and reporting
all live in the same app; a staff member reaches the same data from the
office computer or from a phone in the field, and managers see the charity's
overall position in real time.

This page is not here to list the features above. It is here to explain the
need we started from and the decisions we made along the way.

## Why we built it

Charities take in hundreds of donation records in a short time, especially
around Qurban and Ramadan. Those records usually end up scattered across
spreadsheets, messaging apps and personal notes. The result:

- Which staff member took a donation, when, and for which country is hard to
  find afterwards.
- For share-based projects such as water wells, how many shares are filled
  and how many are open gets counted by hand.
- Prices sit in a separate list; amounts are calculated manually and errors
  are common.
- At month end, "how many donations did we take, through which channel, and
  who entered how many" takes hours of adding up.
- A record deleted or changed by mistake cannot be traced.

We designed Dernek Asistan to remove that mess.

## How we built it

### Rules inside the system, not in a spreadsheet

Our first decision was to move the charity's price table into the app. Unit
price, minimum quantity and share count per country and type are now data in
the system; staff do not look up prices, calculate amounts or remember
minimums. A rule is defined once and applied to every record automatically.
It is the shortest route to closing off manual arithmetic errors.

### Every donation type is its own workflow

A qurbani donation and a water well donation are not the same form. One
records an animal and an intention, the other tracks shares. Rather than
squeezing those differences into a single "general donation" form, we set up
each kind of aid as its own section with its own rules; the shared parts
(donor, country, channel, sequence number) sit on one common backbone. Adding
a new kind of aid means opening a new section without touching the existing
ones.

### Permanent sequence numbers, multiple records from one form

Every record gets a permanent sequence number within its donation type. When
a receipt is issued, a donor calls, or the month-end check is done, there is
one reference. When a donor gives on behalf of several people, the staff
member fills in the form once and the system creates a separate record for
each name; in the busy season this is what saved the most time.

### Permissions enforced in the database

There are two permission levels, and we did not implement them just by hiding
buttons in the interface: who may delete what and who may change prices is
defined at the database level. Even if the interface is bypassed, an
unauthorised deletion does not technically happen. Every price change is also
stored with who made it and when. On the server side we used Supabase: an
infrastructure a small team can sustain, where the charity's data stays the
charity's.

### The same app in the office and in the field

The app runs in the web browser and on mobile devices. The field team enters
records from a phone while the office team sees the same data on a desktop;
there are not two separate pieces of software and two maintenance bills.

## Where it is today

Dernek Asistan is in use at Vefa Yolu Derneği. Finding prices, calculating
amounts, assigning sequence numbers and opening multiple records are now
automatic; in the busy season, recording a donation went from a job that took
minutes to a form that takes seconds. "How many donations did we take this
month?", "Which channel brings in the most?", "How many shares are left in the
Bangladesh well?" are answered on screen without a search. Thanks to the
permission split and the change log, the charity is accountable to its donors
and to auditors.

A scattered, person-dependent record system became one the whole team shares,
that enforces its own rules and can produce a report at any moment. The
charity now spends its time on the aid itself, not on merging spreadsheets.

If part of your business still runs on spreadsheets, have a look at our
[custom software work](/en/services/custom-software-solutions/) or simply
[get in touch](/en/contact/); we will start by talking through whether an
off-the-shelf tool would do.
