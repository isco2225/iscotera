---
title: "Örnek Blog Yazısı"
description: "Bu, blog altyapısını test etmek için oluşturulmuş bir taslak yazıdır. Yayında görünmez."
pubDate: 2026-08-25
tags: ["örnek"]
draft: true
---

Bu bir **taslak** yazıdır — sadece geliştirme ortamında (`npm run dev`) görünür,
canlı sitede yayınlanmaz.

## Yeni yazı nasıl eklenir?

1. `src/content/blog/tr/` klasörüne yeni bir `.md` dosyası ekleyin.
2. Üstteki frontmatter alanlarını doldurun (`title`, `description`, `pubDate`).
3. Yayınlamak için `draft: true` satırını silin (veya `false` yapın).
4. `git push` — site otomatik olarak yeniden inşa edilir.

İngilizce karşılığı `src/content/blog/en/` klasörüne aynı şekilde eklenir.
