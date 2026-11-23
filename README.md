# ClinicSetu — clinic website for Shubham Nagar

Marketing site for a one-person studio that builds clinic websites + Google Business Profiles for doctors in Indore.
Vite + React 18 + Tailwind CSS 3 + Framer Motion + lucide-react + React Router.

## 1. Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the production build
```

Node 18 or newer.

## 2. Edit content (no component changes needed)

**Everything a visitor reads is in `src/content/site.js`:**

| What | Where in `site.js` |
|---|---|
| Brand name (used everywhere, incl. meta tags + schema) | `brand.name` |
| Live domain (canonical, OG, sitemap) | `brand.siteUrl` |
| WhatsApp, email, city | `contact` |
| Prices, plan features, payment terms, not-included list | `pricing` |
| Every section's headings and copy | `hero`, `problem`, `whatYouGet`, `nmc`, … `footer` |
| FAQ (also feeds the FAQPage JSON-LD) | `faq.items` |
| Enquiry form dropdown options | `enquiry` |
| Page titles + meta descriptions | `seo` |

`index.html`, the JSON-LD schema, `sitemap.xml` and `robots.txt` are generated from this file at build time
(see the small plugin in `vite.config.js`), so after changing the brand name or domain just rebuild.

### Before launch — replace every placeholder
Search the project for `[` inside `site.js`. Placeholders show on the page with an amber highlight so you can't miss them:
- `proof.items` — real client clinic names, **only with written permission**
- `work.clients` — real client sites, results (e.g. "live in 8 days"), URLs
- `work.demos[].url` — links to your demo templates
- `about.photo` — a real photo of you

Never invent testimonials, numbers or client logos. The site follows the same NMC-safe rules it sells.

## 3. Images

Every image slot uses `<ImageSlot>` (`src/components/ui/ImageSlot.jsx`). Until you add a `src`, it shows a calm mint placeholder.
The AI image prompt and alt text for each slot are in `site.js` (`imagePrompt`, `alt`).

To fill a slot:
1. Generate the image from its prompt (or use a real screenshot/mockup of a client site).
2. Export as **WebP**, about 1200px wide, under 150 KB. Save in `public/images/`.
3. Add `image: '/images/your-file.webp'` to that item in `site.js` (for the founder photo: `about.photo.src`).

Rules: no stock or AI photos of real-looking doctors presented as clients. The founder photo must be a real photo.
AI photos of fictional doctors are used only where the clinic is clearly labelled fictional:
`public/images/sample-dental-doctor.webp` (hero phone, Dental sample) and `public/images/demo-dental.webp` (Dental demo card).

| Slot | Prompt summary |
|---|---|
| Client site 1 | iPhone + laptop mockup on white desk, mint-and-white clinic homepage, no people |
| Client site 2 | Single phone at an angle on soft grey, clinic site with timings/fees/map |
| Dental demo | Flat UI illustration, dental clinic site on a phone, mint accents |
| Physiotherapy demo | Flat UI illustration, physio site on laptop + phone, knee/spine line icons |
| Pulmonology demo | Flat UI illustration, chest clinic site on tablet, abstract lung line drawing |
| Founder | **Real photo**, natural light, portrait 4:5 |

Also replace `public/og-image.png` (1200×630, used for WhatsApp/social link previews) with a designed version if you like.

## 4. Forms

Both forms (free check + multi-step enquiry) open WhatsApp with the details pre-filled. Nothing is sent until the doctor presses send in WhatsApp.

Optional email copy — in `site.js` → `forms`:
- **Web3Forms:** `provider: 'web3forms'`, paste your access key from web3forms.com
- **Formspree:** `provider: 'formspree'`, paste your form URL (`https://formspree.io/f/…`)

## 5. Deploy to Vercel

1. Push this folder to a GitHub repo.
2. vercel.com → **Add New → Project** → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
4. Deploy. Then **Settings → Domains** → add your domain (e.g. `clinicsetu.in`) and follow the DNS steps.
5. Make sure `brand.siteUrl` in `site.js` matches the final domain, then redeploy.
6. In Google Search Console, add the domain and submit `https://yourdomain/sitemap.xml`.

`vercel.json` already rewrites routes like `/privacy` to the app, so direct links work.

## 6. Project structure

```
index.html                  meta tags, OG, JSON-LD (filled from site.js)
vite.config.js              build + plugin that writes meta, sitemap.xml, robots.txt
tailwind.config.js          colour tokens (mint, ink, mist, caution) and fonts
public/                     favicon.svg, apple-touch-icon.png, og-image.png, images/
src/content/site.js         ALL copy, prices, contact, SEO  ← edit this
src/components/             Header, Footer, FloatingWhatsApp, ui/ (Logo, ImageSlot, Fields, WhatsAppIcon)
src/sections/               one file per landing-page section, in page order (see pages/Home.jsx)
src/pages/                  Home, Privacy, Terms, NotFound
src/lib/                    whatsapp.js (wa.me links), submit.js (optional form endpoint), useSeo.js
```

## 7. Design notes

- Palette: mint `#1F6B50` (buttons/text), mint tints `#E2F4EA`/`#F2FAF6`, white, mist grey `#F4F6F5`, ink `#1D2723`.
  All text pairs meet WCAG AA (lowest is muted grey on mist at 5.1:1).
- Type: Bricolage Grotesque (headings) + Atkinson Hyperlegible (body; designed for low-vision legibility).
- Motion: one page-load sequence in the hero + the rotating sample phone; everything else moves only when the visitor acts
  (menu, FAQ, form steps). All motion respects `prefers-reduced-motion`.
- Performance: ~100 KB gzipped JS, no images on first load except SVG, legal pages lazy-loaded. Fonts use `display=swap`.
  To go further, self-host the two fonts (e.g. with `@fontsource`) to remove the Google Fonts request.
