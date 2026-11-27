# Dynamix Plus (Astro)

Static Astro site. Copy follows **Dynamix Plus — Complete Brand-Led Website Copy** (9 sections → 9 pages). Images and logos come from `Dynamix_plus_deck.pptx`.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview
```

## Pages (doc section → route)

| Doc section | Route | File |
| --- | --- | --- |
| 1. Home | `/` | `pages/index.astro` (components in `components/home/`) |
| 2. About Dynamix Plus | `/about` | `pages/about.astro` |
| 3. Featured Short Workshops | `/workshops` | `pages/workshops.astro` |
| 4. Lunch-Break Workplace Wellness | `/workplace-wellness` | `pages/workplace-wellness.astro` |
| 5. Corporate Training & Experiential Team Building | `/corporate-training` | `pages/corporate-training.astro` |
| 6. Facilitation Training & Train-the-Trainer | `/facilitation-training` | `pages/facilitation-training.astro` |
| 7. Tailored Development & Coaching | `/tailored-programmes` | `pages/tailored-programmes.astro` |
| 8. Our Approach — Human Intelligence Framework™ | `/our-approach` | `pages/our-approach.astro` |
| 9. Contact | `/contact` | `pages/contact.astro` |

## Structure

```
src/
  data/
    site.ts       routes, nav, contact details, programme names (edit links here)
    home.ts       all homepage copy and image paths
    pages.ts      all copy for the eight inner pages
    clients.ts    client logo groups
  components/
    Header, Footer, PageHero, CtaBand, Intro
    ProgramSection   title + details + "Learning focus" map (workshops, corporate, tailored, facilitation)
    ProgramGrid      card grid with a "Learning focus" map (wellness sessions, team-building experiences)
    FocusMap         Foundations → Development Experience → Applied Capabilities → Intended Business Outcomes
    home/            one component per homepage section
  scripts/  nav.ts, motion.ts (GSAP, respects reduced motion)
  styles/   global.css
```

Edit copy in `data/`, not in the components. Strings that contain `<strong>` are rendered as HTML.

## Notes

- Colours: Dynamix yellow `#eaca20`, charcoal `#303033`, light grey `#eeeeed`. Font: Onest (self-hosted via @fontsource), Noto Sans TC fallback for the Chinese labels on Our Approach.
- Contact form: Name, Organisation, Work Email, Programme Interest, Your Team’s Needs, plus optional Approximate Group Size, Preferred Date, Budget Range. It opens WhatsApp or the email app with the message pre-filled (no backend). CTAs elsewhere link to `/contact?programme=…` to pre-select Programme Interest (see `contactAbout()` in `data/site.ts`).
- Kept from the deck, not in the copy doc: the stats strip (home, About) and client logo wall (home, About). Remove the `<Stats />` / `<Clients />` lines to drop them.
- The doc spells one wellness session "Mindful Energys"; this is reproduced as written (`data/pages.ts`).
- Client logo `alt` text is "Client logo" where the logo has not been identified. Update in `src/data/clients.ts`.
