# Digismartz Technologies — Website

A fast, static, multi-page marketing website for **Digismartz Technologies**, built to spec from the Website Requirement Document. No build step, no framework — plain HTML/CSS/JS, ready to deploy to GitHub Pages or Cloudflare Pages.

## Structure

```
├── index.html          Home
├── about.html           About Us
├── services.html         Services (all 14 offerings + FAQ)
├── portfolio.html        Portfolio / Gallery
├── testimonials.html     Testimonials
├── contact.html          Contact Us (enquiry form + consultation booking)
├── css/style.css         Design system & all styles
├── js/script.js          Nav toggle, FAQ accordion, forms, marquee
├── assets/favicon.svg    Site icon
├── assets/og-image.svg   Social share preview image
├── robots.txt
└── sitemap.xml
```

## Before you go live — fill these in

1. **Logo** — replace the placeholder text logo (`.logo-mark` + "Digismartz Technologies" wordmark) in each page's header/footer once your final logo is ready. Easiest: swap `.logo-mark` for an `<img>` tag.
2. **Contact details** — phone (`9087572428`) and WhatsApp links are live. Update the placeholder email (`hello@digismartz.example`) and add your business address + Google Maps embed in `contact.html` once available.
3. **Forms** — the contact and consultation forms post to Formspree (`https://formspree.io/f/YOUR_FORM_ID`). Since this is a static site with no backend:
   - Create a free account at [formspree.io](https://formspree.io), create a form, and replace `YOUR_FORM_ID` in both `<form action="...">` attributes in `contact.html`.
   - Until you do this, forms will still show a friendly success message to visitors, but submissions won't be captured anywhere — connect Formspree (or any alternative like Getform, Web3Forms) before launch.
4. **Newsletter signup** — currently a front-end only demo. Connect it to a provider like Mailchimp, Brevo, or ConvertKit by pointing the form's `action` to their embed endpoint.
5. **Real domain** — swap `https://digismartz.example` in `sitemap.xml`, `robots.txt`, and the `<link rel="canonical">` / Open Graph tags in each page once your domain is purchased.
6. **Portfolio & testimonials** — current entries are placeholder projects/quotes matching the site's tone. Swap in real client work, photos, and verified reviews as they become available.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Option A — Cloudflare Pages (preferred, per requirements)
1. Go to the Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select this repository.
3. Build settings: **Framework preset:** None · **Build command:** *(leave blank)* · **Build output directory:** `/`
4. Deploy. Cloudflare Pages provides free SSL, a global CDN, and automatic redeploys on every push to `main`.
5. Add your custom domain under the Pages project's **Custom domains** tab once purchased.

### Option B — GitHub Pages
1. In the repository, go to **Settings → Pages**.
2. Under **Source**, select the `main` branch and `/ (root)` folder.
3. Save — your site will publish to `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

## Performance & SEO notes
- No JS frameworks or build tools — pages load fast with minimal render-blocking resources.
- Each page has unique `<title>`, meta description, canonical URL, and Open Graph tags.
- Fonts (Space Grotesk, Inter, IBM Plex Mono) load from Google Fonts with `preconnect` for speed; self-host them later for a small additional performance gain if desired.
- All animations respect `prefers-reduced-motion`.
- Images are avoided in favor of lightweight inline SVG/CSS art, keeping the site fast and license-free by design — swap in real photography anytime without touching layout code.
