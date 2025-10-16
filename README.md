# Claudio Fava Architetto – Nuxt 4 Website

A static website built with **Nuxt 4**, **Vue 3**, and **Tailwind CSS**, showcasing architecture and interior design projects by Arch. Claudio Fava.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

---

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

---

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

---

## Static Generation

Generate a fully static build (for deployment on TopHost, Netlify, or other hosting):

```bash
# npm
npx nuxi generate
```

The generated static files will be available in:

```
.output/public
```

Preview the generated static site locally:

```bash
# npm
npx nuxi preview
```

---

## Clean Build Cache

Before generating a new build, you can remove temporary build folders:

```bash
# clean Nuxt and Vite cache
rm -rf .nuxt .output node_modules/.vite
```

---

## Production Build

Build the application for production (SSR or hybrid mode):

```bash
# npm
npm run build
```

Locally preview the production build:

```bash
# npm
npm run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

## Tech Stack

* [Nuxt 4](https://nuxt.com) – Application framework
* [Vue 3](https://vuejs.org) – Reactive UI engine
* [Tailwind CSS](https://tailwindcss.com) – Utility-first CSS
* [GSAP](https://greensock.com/gsap) – Smooth animations
* [@fancyapps/ui](https://fancyapps.com) – Fancybox image galleries
* [Headless UI](https://headlessui.dev/vue) – Accessible UI components
* [Heroicons](https://heroicons.com) – SVG icons
* [@nuxt/image](https://image.nuxt.com) – Optimized images
* [@nuxtjs/sitemap](https://nuxt.com/modules/sitemap) – Auto-generated sitemap
* [@nuxtjs/robots](https://nuxt.com/modules/robots) – Robots.txt management
* [EmailJS Browser](https://www.emailjs.com) – Contact form integration

---

## SEO & Accessibility

* Open Graph and Twitter Card support
* Structured Data (`schema.org`) for each project and article
* Auto-generated `sitemap.xml` and `robots.txt`
* WCAG-friendly: ARIA labels, focus states, and skip links

---

## License & Credits

© 2025 **Arch. Claudio Fava** – All rights reserved.
Developed by [**Gianluca Tiengo**](https://gianlucatiengo.com)
