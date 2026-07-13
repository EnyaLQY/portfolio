# Astro Migration Notes

This file tracks what has been migrated while npm network access is unstable.

## Completed without npm install

- Astro scaffold and routing files created.
- Content collection schema created and extended with rich project metadata.
- Legacy portfolio detail pages migrated to markdown content entries via script.
- Homepage upgraded to data-driven project cards with category filtering.
- Legacy `portfolio_details_*.html` URLs now have generated Astro redirect routes to `/projects/[slug]/`.
- Legacy assets and detail HTML pages copied into `public/` for transition compatibility.
- GitHub Pages workflow added.

## Local migration command

Run this command whenever legacy `portfolio_details_*.html` pages change:

```bash
node scripts/migrate-legacy-to-content.mjs
```

It regenerates all project files in `src/content/projects/`.

## What remains after network is fixed

1. Install deps and build:
   - `npm install`
   - `npm run build`
2. Run local dev server:
   - `npm run dev`
3. Verify visual parity and adjust layout styles.
4. Replace contact PHP flow with static-compatible provider.
5. Gradually remove legacy pages once new routes are fully validated.
