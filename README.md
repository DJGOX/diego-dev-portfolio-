# Diego Dev · Portfolio

Personal portfolio of **Diego Ernesto Porras Vera**, freelance web & app developer in Brookline, Massachusetts.

English by default, with an EN / ES switch (also `?lang=es`).

## What's inside

- **Apps:** Manacus, Lifetime and FUFI (iPhone, iPad & Mac)
- **Websites & web apps:** Ruta MA, Pollos El Chalán and Peruflavor
- **Custom NFC cards** as a physical option for any app or website
- Contact by WhatsApp or email, with a form that drafts the message

## Built with

Plain HTML, CSS and JavaScript. No build step.

- [GSAP 3.13.0](https://gsap.com) with ScrollTrigger and SplitText, and [Lenis 1.3.11](https://lenis.darkroom.engineering), included in `vendor/`
- Space Grotesk and Manrope fonts (Google Fonts, SIL Open Font License), included in `fonts/`
- Brand icons from [Simple Icons](https://simpleicons.org) (CC0)

## Structure

```
index.html        the page
css/marca.css     brand system: colors, type, hero, buttons, cards, Boston skyline
css/sitio.css     page sections
js/idioma.js      English / Spanish text and WhatsApp messages
js/firma.js       smooth scroll and the hero entrance
js/main.js        menu, form, mobile bar and scroll animations
img/              logo, icons, share image and project screenshots
```

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## Publish

Works on GitHub Pages, Vercel or Netlify as a static site. Before publishing, replace `[TU-DOMINIO]` in `index.html` (canonical, `og:url` and `og:image`) with the real address.
