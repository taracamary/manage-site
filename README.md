# Manage

Responsive task planner dashboard — a frontend portfolio project

**Live demo:** [https://maria-kapiturko-manage.vercel.app/](https://maria-kapiturko-manage.vercel.app/)

---

## Overview

This project is a static single-page dashboard UI built to demonstrate practical frontend skills: semantic markup, scalable SCSS architecture, component-based structure, and accessible form controls

The focus is on clean, maintainable implementation — responsive grid layout, custom-styled native form elements, and a modular Handlebars template system compiled through a custom Webpack pipeline. No UI frameworks, no runtime overhead

The project follows a component-oriented approach with BEM methodology and modular SCSS structure

---

## Tech Stack

- HTML5 (semantic markup, Handlebars `.hbs` templates)
- SCSS (BEM methodology, modular architecture)
- JavaScript (ES6, vanilla)
- Webpack 4 (custom build pipeline)
- Babel (ES6+ transpilation)
- PostCSS + Autoprefixer

---

## Key Features

- **Fully responsive layout** — CSS Grid masonry card grid, Flexbox-based header and footer
- **Component-based structure** — each UI block owns its markup (`.hbs`) and styles (`.scss`) in the same folder
- **Custom-styled native form controls** — checkbox group, segmented switcher, select, search input — CSS-only, no JS
- **Mobile social dropdown** — vanilla JS interaction, no dependencies
- **Clean separation** of design tokens, mixins, base styles, and per-component SCSS
- **Basic accessibility improvements** — (A11y-ready markup)

---

## Architecture

### SCSS structure

```
src/scss/
├── functions.scss     # rem-calc(), unitless-lh()
├── variables.scss     # design tokens: colors, type scale, breakpoints, transitions
├── mixins.scss        # media-breakpoint-up / down / only
├── base.scss          # box-sizing reset, element defaults
├── shared.scss        # .container, .visually-hidden, .reset-button
├── fonts.scss         # @font-face declarations
├── pages.scss         # page-level style imports
└── components.scss    # imports all component SCSS files
```

Component styles live alongside their templates:

```
src/views/components/<name>/
├── <name>.hbs
└── <name>.scss
```

BEM naming convention is used throughout to keep specificity low and structure predictable.

### JavaScript structure

- Single entry point: `src/index.js` (SCSS + JS init)
- UI logic in `src/js/frontend.js`, initialized via `frontend.init()`
- Stable class-based selectors with `js-` prefix for JS hooks
- Null-guard on DOM queries — no crashes on partial page loads

---

## UI / UX Highlights

- CSS multi-column masonry layout for cards with `break-inside: avoid` — no JS reflow
- Custom form controls built on native inputs: keyboard-accessible, works without JS
- Responsive footer: full nav + socials on desktop, icon-only nav + dropdown socials on mobile
- Consistent spacing via `rem-calc()` — single source of truth for all sizes
- Hover and focus states on all interactive elements

---

## Accessibility (A11y)

- Semantic HTML structure (`header`, `main`, `section`, `article`, `footer`)
- Correct heading hierarchy within page and component contexts
- `aria-current="page"` on the active navigation link
- `aria-label` on icon-only buttons (add card, open socials)
- `aria-hidden="true"` on all decorative Font Awesome icons
- `:focus-visible`-aware focus management on custom controls
- Checkbox group uses `name="time-filter"` and per-item `value` attributes

---

## Getting Started

```bash
git clone https://github.com/taracamary/manage-site.git
cd manage-site
npm install
npm start        # dev server → http://localhost:8080/homepage.html
```

---

## What I focused on

- Building a modular SCSS architecture with design tokens and utility mixins
- Structuring reusable UI components without any JS framework
- Keeping form controls accessible while fully custom-styled
- Writing a custom Webpack build pipeline from scratch instead of using a starter
- Applying BEM consistently across all components

---

## Contact

- **Developer:** Maria Kapiturko — Frontend & HTML Developer
- **Location:** Minsk, Belarus (Available for global remote cooperation)
- **LinkedIn:** [Connect on LinkedIn](https://www.linkedin.com/in/taracamary)
- **GitHub:** [Follow on GitHub](https://github.com/taracamary)

---

_This project is part of a frontend portfolio focused on production-level layout structure, styling architecture, and UI interactions_
