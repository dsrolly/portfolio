# How to update the portfolio

All content lives in `src/data/`. You should not need to touch components for routine changes.

## Add a new project

Open `src/data/projects.ts` and add an object to the `projects` array:

```ts
{
  id: 'my-project',                    // lowercase, no spaces, unique
  title: 'My Project',
  category: 'Web app · Backend',
  tagline: 'One line about what it is',
  status: 'In development',            // be honest: In development / Completed / Released
  period: 'March 2027',                // optional
  role: 'Solo project',
  overview: 'Two sentences on the problem it solves.',
  highlights: ['What it does', 'What I built', 'What I learned'],
  stack: ['Node.js', 'PostgreSQL'],
  links: [
    { label: 'Source code', href: 'https://github.com/dsrolly/my-project', kind: 'source' },
  ],
}
```

Rules that keep the portfolio credible:

- Add a `links` entry only if the link works and is public.
- Do not add numbers (users, speed-ups, downloads) unless you can show where they come from.
- Anything unfinished should say so in `status`.

## Turn another project into a full case study

Give the project a `story` array (see SubGuard for the pattern). Each step has `label`, `title`, `body`, optional `bullets`, and a `visual`, either `{ type: 'image', image: { src, alt } }` or `{ type: 'architecture' }`. The first project with a `story` becomes the featured, pinned case study.

## Add or change a skill

`src/data/skills.ts`. Each skill lists the projects that prove it in `evidence`. Add `level` only if you can defend it (for example, wording from your CV).

## Add a milestone, degree or certification

- Milestones: `timeline` in `src/data/journey.ts`
- Education: `education` in the same file
- Certifications: there is no certifications section yet because you have none to list. When you earn one, add a `certifications` array in `journey.ts`, create a small `Certifications.tsx` section modelled on `Education.tsx`, and render it in `src/App.tsx`.

## Replace screenshots

1. Put the image in `public/images/projects/<project-id>/` (WebP preferred, under about 200 KB).
2. In `src/data/projects.ts`, set `src` to `` `${import.meta.env.BASE_URL}images/projects/<project-id>/<file>.webp` ``.
3. Write a meaningful `alt` text describing the screen.

## Replace the CV

Overwrite `public/files/Davinder-Singh-CV.pdf` with the new file and redeploy.

## Change colours or fonts

`src/styles/tokens.css`. The accent colour is `--accent` (dark theme) and `--accent` inside `[data-theme='light']`.

## Publish changes

```bash
npm run build
firebase deploy --only hosting
```
