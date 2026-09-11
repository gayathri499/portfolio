# Srigayathri M — Portfolio

A recruiter-focused personal portfolio built with React + Vite. Single page,
sticky navigation, no backend required.

## Stack

- React 19 + Vite (rolldown)
- Plain CSS with a small design-token system (no UI framework)
- lucide-react for the few UI icons used

## Project structure

```
src/
  components/       One component per section (Navbar, Hero, About, ...)
  data/content.js   All editable text/links/projects — edit this file only
  index.css         Design tokens + base styles
  components.css    Component-specific styles
  App.jsx           Assembles all sections
  main.jsx          Entry point
```

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173 with hot reload.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deploying

### Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com -> Add New Project -> import the repo.
3. Framework preset: Vite. Build command `npm run build`, output
   directory `dist` (Vercel usually detects these automatically).
4. Deploy.

### Netlify

1. Push this project to a GitHub repository.
2. Go to app.netlify.com -> Add new site -> Import an existing project.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.

### GitHub Pages (optional alternative)

```bash
npm install -D gh-pages
```

Add to `package.json`:

```json
"homepage": "https://<username>.github.io/<repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run `npm run deploy`. If deploying to a project page (not a custom
domain or `<username>.github.io` root), also set `base: "/<repo-name>/"` in
`vite.config.js`.

## Updating content

Everything text-based lives in `src/data/content.js` — you don't need to
touch any component to update copy, add a project, or change a link.

### Adding a project link later

Open `src/data/content.js` and find the project's entry (`featuredProject`
or an item in `otherProjects`). Set `github` and/or `demo` to the URL:

```js
github: "https://github.com/gayathri499/ai-tutor",
demo: "https://your-demo-url.com",
```

Leaving either as `null` hides that button automatically — no broken links.

### Adding certificate links later

The brief didn't include certificate URLs, so certifications currently
render as plain text (name + track). If you get credential URLs later,
update the `certifications` object in `content.js` to add a `url` field per
certificate, then wrap each `certs__row-name` in an `<a>` tag inside
`src/components/Certifications.jsx`.

### Adding real project metrics

Per the brief, no invented accuracy/performance numbers were included for
the Credit Scoring Model project. If you have real metrics (accuracy,
AUC-ROC, etc.), add them to that project's `description` or `features` in
`content.js`.

## Design notes

- Palette: warm paper background (`--paper`), near-black ink text, a muted
  amber accent (`--accent`) used sparingly for emphasis, and a small dose of
  desaturated teal (`--signal`) reserved for the "Featured" project badge.
- Type: Fraunces (serif, headings) + IBM Plex Sans (body) + IBM Plex Mono
  (tags, labels, nav mark) — chosen to read as technical/data-oriented
  without leaning on generic "AI" visual clichés (no neon gradients, no
  glowing effects, no stock robot imagery).
- The featured project's visual panel is a CSS-drawn diagram of the RAG
  pipeline (upload -> retrieve -> generate -> answer) instead of a stock
  photo.
