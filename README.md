# portfolio

A minimal, monospaced electronic portfolio for listing projects and repositories. Built with Astro, deployed to GitHub Pages.

## setup

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## customising

**All content lives in one file: `src/data/site.ts`**

Edit `person` (your name, handle, bio, links) and the `projects` array (add/remove/reorder entries). Every page derives from this single source.

### adding a project

```ts
{
  name:        'my-tool',
  slug:        'my-tool',
  tagline:     'One sentence. What it does.',
  description: 'Longer description shown on card hover.',
  status:      'active',          // active | maintained | archived | wip
  category:    'cli',             // cli | library | api | web | infra | tool
  lang:        'Go',
  stars:       0,                 // omit if private / no stars
  repo:        'https://github.com/yourusername/my-tool',
  demo:        'https://...',     // optional
  tags:        ['go', 'cli'],
  featured:    false,
  year:        2025,
},
```

### fields to update before publishing

| File | Field |
|------|-------|
| `src/data/site.ts` | `person.name`, `person.handle`, `person.role`, `person.location`, `person.bio`, `person.email`, `person.github`, `person.linkedin` |
| `src/data/site.ts` | All entries in the `projects` array |
| `src/pages/about.astro` | "work" section prose (current company, previous company) |
| `astro.config.mjs` | `site:` URL |

## deploying to GitHub Pages

1. Push to a repo named `yourusername.github.io` (or any repo)
2. Settings → Pages → Source → **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles the rest

## structure

```
src/
  data/site.ts          ← all content
  components/
    Header.astro
    Footer.astro
    ProjectCard.astro
  layouts/Base.astro
  pages/
    index.astro         ← projects list with filter + view toggle
    about.astro         ← bio, skills, status key
    404.astro
  styles/global.css     ← full design system
public/favicon.svg
```
