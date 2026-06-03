# Manage — Component-Driven Task Planner Layout Engine

A high-fidelity, responsive single-page dashboard designed for task orchestration and productivity tracking. This repository serves as an engineering showcase for a custom-built **Webpack asset pipeline** and a **component-based HTML architecture** using the Handlebars template engine—achieving modular development benefits with absolute zero runtime framework overhead

* **Live Showcase:** https://maria-kapiturko-manage.vercel.app
* **Target Domain:** Fintech, Productivity SaaS, Dashboard Interfaces

---

## 🏗️ Architectural Highlights & Engineering Choices

### 1. Custom Webpack 4 Compilation Pipeline
Instead of relying on boilerplate configurations, the build system was engineered from scratch to isolate build concerns into standalone modular scripts (`/webpack/bundlers`):
* Separate compilation streams optimize hot-reloading (HMR) speeds for assets, views, and stylesheets independently.
* Integrates a custom Handlebars configuration (`hbs-loader`) to compile isolated template partials into a unified production-ready HTML structure

### 2. Atomic Design Tokens & BEM CSS Architecture
Styles are decoupled using a scalable, tokenized directory structure (`src/scss/`):
* **`variables.scss` & `functions.scss`:** Centralized design tokens governing typography scaling, dynamic spacing ratios via custom `rem()` conversion functions, and semantic color mapping
* **Component-Level Isolation:** Every interface node (Cards, Filters, Sidebar elements) maps to independent style blocks, following strict **BEM structural naming** to guarantee low CSS specificity and fast browser paint cycles
* **Fluid Grids:** Layout layout shifts are mitigated by utilizing native CSS Grid (`repeat(auto-fill, minmax(...))`) and Flexbox alignments, ensuring perfect responsiveness on both high-resolution desktop configurations and mobile screens

### 3. Frameworkless Component Philosophy
By leveraging Handlebars (`.hbs`), the project demonstrates how to enforce a modern component approach (reusable partials, layout blocks, slot-like behavior) on static or multi-page applications without loading megabytes of heavy runtime JavaScript frameworks like React or Angular

---

## 🛠️ Detailed Tech Stack

* **Templating Engine:** Handlebars (HBS) for strict separation of markup and structural interface blocks
* **Module Bundler:** Webpack 4 (Custom environment, target, and loader setups)
* **Compiler:** Babel for processing modern ES6+ features into robust cross-browser compatible code
* **Styles:** SCSS Preprocessor integrated with PostCSS (Autoprefixer) for defensive cross-browser styling
* **Layout Systems:** Advanced CSS Flexbox & CSS Grid Matrix layouts
* **Package Management:** Yarn for deterministic dependency resolution

---

## 💻 Local Development Setup

Ensure you have Node.js and Yarn installed globally

```bash
git clone [https://github.com/taracamary.github.io/manage-site.git](https://github.com/taracamary.github.io/manage-site.git)
cd manage-site

```

```bash
yarn install

```

```bash
yarn run start-dev-server

```

*The application will mount locally. Navigate to: `http://localhost:8080/homepage.html*`

```bash
yarn run build-website

```

*Compiles compressed, production-grade assets directly into the `/dist` deployment root*

```
