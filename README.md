# majdfiras.github.io

Personal portfolio — Next.js 15 (App Router) exported as a static site and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into out/
npm run lint
```

`next build` writes the static site to `out/`, which is what
`.github/workflows/nextjs.yml` uploads to Pages on every push to `master`.

## Structure

```
app/
  data/content.ts            All copy: profile, experience, skills, links.
  globals.css                Design tokens, theming, animation layer.
  layout.tsx                 Fonts, metadata, theme provider, scroll progress.
  components/
    Navbar/ Hero/ About/     Page sections, one folder each.
    Experience/ Skills/ Contact/
    ui/                      Shared primitives (see below).
```

### Editing content

Everything the site says lives in `app/data/content.ts` — add an entry to
`experiences` or `skillGroups` and the section picks it up, animations
included. Section components hold layout only.

### Design system

Colours, spacing accents and shadows are CSS custom properties on `:root` and
`.dark` in `app/globals.css`, exposed to Tailwind v4 through `@theme inline`
(`bg-paper`, `text-ink`, `text-muted`, `border-hair`, `text-accent`, …). There
is no `tailwind.config.js` — Tailwind v4 reads the theme from the stylesheet.
Dark mode is class-based via `next-themes` and the `@custom-variant dark` rule.

### UI primitives (`app/components/ui`)

| Component | Role |
| --- | --- |
| `Reveal` | Scroll-triggered entrance, staggered with `delay`. One shared IntersectionObserver. |
| `SpotlightCard` | Card whose glow follows the cursor (writes CSS vars, no re-render). |
| `Aurora` | Drifting gradient backdrop, dot grid, optional pointer spotlight. |
| `SplitText` | Per-character headline animation. |
| `RotatingRole` | Typewriter cycling through roles. |
| `CountUp`, `Marquee`, `Magnetic`, `ScrollProgress`, `CopyEmail` | Small interaction pieces. |

All motion is CSS-driven and collapses under `prefers-reduced-motion: reduce`.
