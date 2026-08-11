# abhishekjani.dev

[![CI](https://github.com/Abhishekjani2509/abhishekjani.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/Abhishekjani2509/abhishekjani.dev/actions/workflows/ci.yml)

Personal site. Single page with anchored sections, plus unlisted case study
pages for each project.

Built with [Astro](https://astro.build) and Tailwind v4. Static output, no
JavaScript bundles: the only client-side code is a theme toggle, a scroll-spy
nav, and an IntersectionObserver that counts the project metrics up when they
come into view.

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the built site
npm run og         # regenerate public/og.png
```

## Layout

```
src/
  assets/          headshot, processed by Astro's image pipeline
  components/      Nav, Footer, WorkEntry, ThemeToggle
  content/
    projects/      one MDX file per project: frontmatter + case study
    posts/         blog posts (draft: true is excluded everywhere)
  layouts/Base     head, theme script, scroll reveal, metric counters
  lib/
    site.ts        name, links, nav sections
    experience.ts  roles and education
    skills.ts      skill groups, one entry per tool with its icon
    brand.ts       official brand colours, adjusted per theme for legibility
  pages/
    index.astro    the single page
    projects/      case study route (noindex, unlisted)
    writing/       blog index and posts
  styles/global    design tokens, motion, prose, skill chips
scripts/og.mjs     generates the link-preview card with Satori
```

## Content

Projects live in `src/content/projects/*.mdx`. Frontmatter is validated by a
Zod schema in `src/content.config.ts`, so a missing or misspelled field fails
the build rather than rendering something broken.

Posts go in `src/content/posts/`. Copy `template.md`, set `draft: false` when
ready. Drafts are excluded from the site, the RSS feed, and the sitemap.

## Conventions

- Design tokens are CSS custom properties in `styles/global.css`. Light is the
  base definition; dark redefines the values only.
- One radius scale (4px), one accent colour, cool neutrals throughout.
- Prose avoids em-dashes.
