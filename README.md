# Digital Portfolio (Astro Migration)

This repository is being migrated from hand-maintained static HTML pages to Astro for easier content management and GitHub Pages deployment.

## What is implemented

- Astro project scaffold and build config.
- Content collection for portfolio projects: `src/content/projects/*.md`.
- Generated pages:
  - Home page: `src/pages/index.astro`
  - Project detail pages: `src/pages/projects/[slug].astro`
- Legacy detail URL redirects: `src/pages/[legacy].html.astro`
- Legacy assets and detail pages mirrored into `public/` for compatibility during migration.
- GitHub Actions workflow for Pages deployment: `.github/workflows/deploy.yml`

## Local development

```bash
npm install
npm run dev
```

## Dev with github page preview

```bash
$env:GITHUB_PAGES="true"    
$env:BASE_PATH="/portfolio"
```

## Build

```bash
npm run build
npm run preview
```

## Add a new project

1. Create a new markdown file under `src/content/projects/`.
2. Fill frontmatter fields (`title`, `category`, `timeline`, `cover`, `summary`, etc.).
3. Write project narrative in markdown body.
4. The project will appear automatically on home and get a generated detail page.

## Regenerate content from legacy HTML

If you update any legacy detail file (`portfolio_details_*.html`), you can regenerate Astro content entries:

```bash
node scripts/migrate-legacy-to-content.mjs
```

The command overwrites files under `src/content/projects/`.

## Migration note

Current project markdown entries are baseline placeholders. Next migration step is to move rich narrative content from legacy HTML detail pages into each markdown file.
