---
title: "Sample Blog Post"
description: "A draft post created to test the blog pipeline. Not visible in production."
pubDate: 2026-08-25
tags: ["sample"]
# Cover photo is optional: put the file under src/content/blog/_images/<post-slug>/
# (sources and the no-brands rule are in that folder's README) and describe it.
# cover: "../_images/sample-post/cover.jpg"
# coverAlt: "What the photo shows"
draft: true
---

This is a **draft** post — it only shows up in development (`npm run dev`)
and is never published to the live site.

## How to add a new post

1. Add a new `.md` file under `src/content/blog/en/`.
2. Fill in the frontmatter fields (`title`, `description`, `pubDate`).
   For a cover photo, uncomment `cover` and `coverAlt`; the file goes to
   `src/content/blog/_images/<post-slug>/cover.jpg`.
3. Remove the `draft: true` line (or set it to `false`) to publish.
4. `git push` — the site rebuilds automatically.
