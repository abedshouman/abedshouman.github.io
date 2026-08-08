# Portfolio — Abdul Basset Chouman

Personal portfolio site built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, exported as a static site and deployed to **GitHub Pages**.

**Live:** https://abedshouman.github.io

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

Deployments are **manual** via release branches. Pushing to `dev` does **not** trigger a deploy.

### One-time setup

In the GitHub repo → **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.  
(The branch dropdown disappears — that's normal, branch selection happens in the Actions tab.)

### Releasing a new version

1. Create a release branch from `dev`:
   ```bash
   git checkout dev
   git checkout -b release/1.0.0
   git push origin release/1.0.0
   ```
2. Go to GitHub → **Actions** tab → **"Deploy to GitHub Pages"** → **"Run workflow"** (on the right)
3. In the **"Branch"** dropdown, select your release branch (e.g. `release/1.0.0`)
4. Click the green **"Run workflow"** button
5. Wait for the run to complete — your site is now live at https://abedshouman.github.io

## Tech

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS (dark mode, responsive)
- GitHub Actions → GitHub Pages
