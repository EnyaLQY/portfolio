# Digital Portfolio (Astro Migration)

This repository is being migrated from hand-maintained static HTML pages to Astro for easier content management and GitHub Pages deployment.

## What is implemented

- Astro project scaffold and build config.
- Content collection for portfolio projects: `src/content/projects/*.md`.
- Generated pages:
  - Home page: `src/pages/index.astro`
  - Project detail pages: `src/pages/projects/[slug].astro`
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

## Content structure

- Project details live in `src/content/projects/*.md`.
- Published images, styles, scripts, and vendor files live in `public/assets/`.
- `src/pages/projects/[slug].astro` renders every project from its structured content blocks.
