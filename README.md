# Portfolio — Abdul Basset Chouman

Personal portfolio site built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, exported as a static site and deployed to **GitHub Pages**.

**Live:** https://abedshouman.github.io/portfolio

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static export to ./out
```

## Editing content

All content lives in **`lib/data.ts`** — profile, skills, experience, and projects.
Edit that one file to update the site; no component changes needed.

- **Photo:** drop an image in `public/` (e.g. `abed.jpg`) and replace the monogram
  block in `components/About.tsx` with an `<img src="abed.jpg" />`.
- **Résumé:** replace `public/resume.pdf`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages.

**One-time setup:** In the GitHub repo → **Settings → Pages → Build and deployment**,
set **Source** to **GitHub Actions**.

### Custom domain

Add a `public/CNAME` file containing your domain, set `basePath`/`assetPrefix` to
`''` in `next.config.mjs`, and configure DNS. (Or rename the repo to
`abedshouman.github.io` to serve from the root without a basePath.)

## Tech

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS (dark mode, responsive)
- GitHub Actions → GitHub Pages
