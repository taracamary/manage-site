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

## What I focused on

- Assembling a Webpack 4 pipeline from scratch with isolated bundlers for scripts, styles, views, images, and fonts
- Handlebars layout inheritance (`{{#extend}}` / `{{#content}}`) to avoid markup duplication across pages and layouts
- SCSS token system backed by `rem-calc()` — pixel values defined once, output consistently in `rem` across all components
- CSS-only form controls: checkbox, switcher, and select styled without any JS — state handled entirely via CSS selectors
- Strict BEM across all 12 components — no utility class mixing, no `!important`, no specificity overrides
- `js-` prefixed selectors as stable DOM hooks, decoupled from styling class names

---

## UI / UX Highlights

- Card grid uses CSS `columns` with `break-inside: avoid` — masonry layout without JS or a library
- Footer adapts by breakpoint: full logo + nav + socials on desktop; icon-only nav + socials behind a toggle on mobile
- Search input transitions on `:focus` — icon disappears, left padding shrinks, giving more typing room
- Switcher (Major / Minor) is a native radio group; active segment is highlighted via CSS `input:checked + label`, no JS state
- Checkbox checked state is driven entirely by CSS `:checked` selector on a visually hidden `<input>`
- Select retains native OS behavior and dropdown while replacing the default arrow with a custom SVG via `background-image`

---

## Architecture

- Handlebars templates with layout inheritance: `_master-layout` → `_site-layout` → page template
- Each component owns its markup and styles in one folder: `<name>.hbs` + `<name>.scss`
- SCSS layered into tokens (`variables`, `functions`, `mixins`), globals (`base`, `shared`, `fonts`), and per-component files
- BEM naming throughout — low specificity, no cascade conflicts
- CSS multi-column for the card masonry grid; Flexbox for header, footer, and form sections
- Custom Webpack 4 pipeline with separate bundlers for scripts, styles, views, images, and fonts
- Single JS entry point; UI modules initialized explicitly via `frontend.init()`

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

## Contact

- **Developer:** Maria Kapiturko — Frontend & HTML Developer
- **Location:** Minsk, Belarus (Available for global remote cooperation)
- **LinkedIn:** [Connect on LinkedIn](https://www.linkedin.com/in/taracamary)
- **GitHub:** [Follow on GitHub](https://github.com/taracamary)

---

_This project is part of a frontend portfolio focused on production-level layout structure, styling architecture, and UI interactions_
