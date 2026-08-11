---
title: "Post title goes here"
description: "One or two sentences. This shows up on the writing index, in the RSS feed, and in link previews, so make it a real summary rather than a teaser."
date: 2026-08-10
tags: ["backend"]
draft: true
---

Copy this file, rename it to something like `deriving-balances-by-replay.md`, and
set `draft: false` when it is ready. The filename becomes the URL.

Anything with `draft: true` is excluded from the site, the RSS feed, and the
sitemap, so you can leave half-finished posts in here safely.

## Headings work

Regular markdown throughout. Body copy, **bold**, `inline code`, and links.

```java
// Fenced code blocks are styled to match the case studies.
var balance = events.stream().reduce(Money.ZERO, Money::apply);
```

> Blockquotes get an accent rule on the left.

One formatting note: the site's visual language avoids em-dashes, so use a
period, a comma, or parentheses where you would normally reach for one.
