---
title: "Sample Blog Post"
description: "A draft post created to test the blog pipeline. Not visible in production."
pubDate: 2026-08-25
tags: ["sample"]
draft: true
---

This is a **draft** post — it only shows up in development (`npm run dev`)
and is never published to the live site.

## How to add a new post

1. Add a new `.md` file under `src/content/blog/en/`.
2. Fill in the frontmatter fields (`title`, `description`, `pubDate`).
3. Remove the `draft: true` line (or set it to `false`) to publish.
4. `git push` — the site rebuilds automatically.
