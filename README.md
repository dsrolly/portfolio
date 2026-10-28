# Davinder Singh: Developer Portfolio

A single-page portfolio built with **React + TypeScript + Vite** and plain CSS. No animation library: scroll reveals use `IntersectionObserver`, the pinned case study uses native CSS `position: sticky`, and all motion switches off for visitors who prefer reduced motion.

Only two runtime dependencies: `react` and `react-dom`.

Fonts (Fraunces, Instrument Sans, IBM Plex Mono) load from Google Fonts, so the first view needs internet. If they cannot load, the site falls back to Georgia and system fonts.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # serve the built site locally
```

Requires Node 18 or newer.

## Where things live

| You want to change… | Edit this |
| --- | --- |
| Name, headline, intro, email, GitHub, LinkedIn, About text | `src/data/profile.ts` |
| Projects (text, stack, links, screenshots, SubGuard story steps) | `src/data/projects.ts` |
| Skills and which project proves each one | `src/data/skills.ts` |
| Timeline and education | `src/data/journey.ts` |
| Colours, fonts, spacing, light theme | `src/styles/tokens.css` |
| Layout and section styling | `src/styles/base.css`, `src/styles/sections.css` |
| Architecture diagram (hero and case study) | `src/components/animations/ArchitectureDiagram.tsx` |
| Animated phone on the SubGuard case study (sample data) | `src/components/animations/PhoneMock.tsx` |
| Sample renewal alert in the hero | `src/components/ui/RenewalTicker.tsx` (edit the `alerts` list) |
| Which skills light up for which project | `filters` list in `src/components/sections/Skills.tsx` |
| Page title, description, social preview tags | `index.html` |
| CV file | `public/files/Davinder-Singh-CV.pdf` (replace the file, keep the name) |
| Favicon, social preview image | `public/favicon.svg`, `public/og-image.png` |
| 404 page | `public/404.html` |

```
src/
  components/
    layout/       Header (nav, theme toggle), Footer, ScrollProgress
    sections/     Hero, About, Skills, Projects, Journey, Education, Contact
    projects/     CaseStudy (pinned storytelling), ProjectCard (expandable)
    animations/   ArchitectureDiagram
    ui/           Button/CV/CopyEmail/Icon/Reveal/ProjectImage building blocks
  data/           All content. Edit here, not in components.
  hooks/          useReveal, useScrollSpy, useScrollProgress, useTheme, useReducedMotion
  styles/         tokens.css, base.css, sections.css
  types/          TypeScript types for the data files
public/           Files copied as-is: CV, images, favicon, robots.txt, 404.html
docs/             Asset checklist, update guide, testing report
```

## CV download

Put your PDF at `public/files/Davinder-Singh-CV.pdf`. The button checks that the file exists before downloading; if it is missing, visitors see a message with an email link instead of a dead download. To use a different file name, change `cv.href` and `cv.fileName` in `src/data/profile.ts`.

Privacy note: the website never prints your phone number or home address, but the **CV PDF itself contains them**. If you do not want them public, export a copy of your CV without the phone number and address and use that as `Davinder-Singh-CV.pdf`.

## Deploy to Firebase Hosting

Your SubGuard site already uses Firebase Hosting, so keep the portfolio separate so you never overwrite it. The simplest way is a **new Firebase project** for the portfolio (free):

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

In the prompts:

- Select **Create a new project** (or pick an empty one). Do **not** reuse `subguard-265d6` unless you create a separate hosting site for it.
- Public directory: `dist`
- Single-page app rewrite: **No** (the site is one page and has its own `404.html`)
- Overwrite `dist/index.html`: **No**
- Overwrite `firebase.json`: **No** (the provided one already sets cache headers)

Then:

```bash
npm run build
firebase deploy --only hosting
```

Firebase prints your live URL (`https://<project-id>.web.app`). A custom domain can be added later from the Firebase console.

### After you have the live URL

LinkedIn needs absolute URLs for the preview card. In `index.html`, add:

```html
<link rel="canonical" href="https://YOUR-URL/" />
<meta property="og:url" content="https://YOUR-URL/" />
```

and change `og:image` to `https://YOUR-URL/og-image.png`. Also uncomment the `Sitemap:` line in `public/robots.txt` if you add a sitemap. Rebuild and deploy again, then paste the link into LinkedIn's Post Inspector to refresh the preview.

## Screenshots

SubGuard screenshots are currently loaded from your SubGuard website (`https://subguard-265d6.web.app/assets/img/...`). If one fails to load, a labelled placeholder is shown instead. For a faster, self-contained site, download those images into `public/images/projects/subguard/` and point the `img()` helper in `src/data/projects.ts` at them. See `docs/ASSET_CHECKLIST.md`.

## More docs

- `docs/UPDATE_GUIDE.md` – how to add a project, skill or milestone
- `docs/ASSET_CHECKLIST.md` – what is in place and what is still needed
- `docs/TESTING_REPORT.md` – what was tested, and what was not
