# Testing report

Date: 23 October 2026. Tested by running the production bundle in headless Chromium (Playwright).

## How it was built for testing

`npm install` was blocked in the build environment (the npm registry returned a policy 403), so Vite itself could not be run there. The app was bundled with **esbuild** instead, using the same source files, and the result was served from a local static server. Details are in the "Not tested" list below.

## Tested and passing (55 checks, 55 passed)

| Area | Result |
| --- | --- |
| Horizontal overflow at 1440, 820, 390 and 320 px widths | None |
| Page loads without JavaScript errors (desktop and mobile) | Pass |
| Heading is the name; primary button visible on first screen | Pass |
| Scroll reveals: everything appears while scrolling down, and stays visible scrolling back up | Pass (desktop, tablet, 390 px, 320 px) |
| Reading progress bar follows scroll | Pass |
| Nav links scroll to sections and the current section is highlighted | Pass |
| Pinned SubGuard case study: visual stays pinned and swaps per step (checked step 3, the architecture diagram) | Pass |
| Architecture diagram: caption updates on keyboard focus and hover | Pass |
| Project cards expand and collapse (`aria-expanded`) | Pass |
| Theme toggle switches to light and the choice persists after reload | Pass |
| CV download from the hero button saves `Davinder-Singh-CV.pdf` | Pass |
| CV fallback message appears when the PDF returns 404 | Pass |
| Contact: mailto link has the correct address and subject | Pass |
| Copy email button puts the address on the clipboard | Pass |
| Phone number and home address are not on the page | Pass |
| External links use `rel="noopener noreferrer"` | Pass |
| Mobile: menu opens, closes on link tap, closes on Escape, scrolls to section | Pass |
| Mobile: buttons at least 40 px tall; pinned panel replaced by inline visuals | Pass |
| Reduced motion: all content visible immediately, diagram dots not rendered, smooth scroll off | Pass |
| No JavaScript: fallback text with contact details is in the HTML | Pass |
| 404 page renders | Pass |

Screenshots of desktop, mobile and light theme were also reviewed by eye.

## Not tested

- **`npm run dev`, `npm run build` with Vite, and `tsc` type checking.** The npm registry was unreachable from the build environment, so the Vite build and TypeScript type check have not been run. Please run `npm install && npm run build` once; if the type check reports anything, it will be small and local.
- **Real SubGuard screenshots.** The sandbox could not reach your SubGuard website, so the screenshot URLs were not loaded. The fallback placeholder was tested instead. Please open the live site and confirm the images show.
- **Google Fonts.** Blocked in the sandbox, so the page was rendered with fallback fonts. Inter, Space Grotesk and JetBrains Mono will load for real visitors.
- **Real devices and other browsers** (Safari, Firefox, iPhone, Android phones). Only Chromium was used.
- **Opening the mail app** from the email button (only the link target was checked).
- **Lighthouse and Core Web Vitals scores.** Not measured, so no scores are claimed.
- **Deployment to Firebase Hosting.** Not done; instructions are in the README.
