# dougbelote.com

High-end personal site for **Doug Belote** — New Orleans studio drummer & touring percussionist. Built as a natural extension of the midcitysound.com / streetbeat.video ecosystem (same dark + gold visual language, same stack).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v3** + `tailwindcss-animate`
- `next/image` for responsive images
- `lucide-react` icons
- Zero database/payment dependencies in the starter — but scaffolded for the MCS booking-system (Resend + Turso + Stripe) when Doug's ready.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## ✏️ Where to edit content

**99% of content swaps happen in one file:**

```
src/lib/data.ts
```

It holds every piece of copy and data on the site:

| Constant   | Controls                                  |
|------------|-------------------------------------------|
| `SITE`     | Name, role, taglines, email, socials, city|
| `NAV_LINKS`| The nav/footer links                      |
| `IMAGES`   | Hero / about / reel / fallback images     |
| `NEWS`     | Home "what's happening" cards             |
| `CREDITS`  | Credits page (filter chips auto-generate) |
| `GEAR`     | Gear page (set `endorsed: true` for badge)|
| `MEDIA`    | Media page videos (YouTube ID) + audio    |
| `ABOUT`    | Bio paragraphs + stat blocks              |

### Swapping in real images

1. Drop files into `public/images/` (e.g. `doug-hero.jpg`).
2. In `src/lib/data.ts`, change the `IMAGES` URLs to local paths:
   ```ts
   hero: "/images/doug-hero.jpg",
   ```
3. Once all images are local, remove the `remotePatterns` block in
   `next.config.mjs` (it only exists to allow placeholder hosts).

### Audio clips

Drop `.mp3` files in `public/audio/` and point the `MEDIA` audio `src`
values at them (e.g. `/audio/clip-1.mp3`).

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # dark theme + Navbar/Footer wrapper + metadata
│   ├── page.tsx            # HOME (Hero + NewsReel + BookingCTA)
│   ├── globals.css         # tokens, fonts, shared utilities
│   ├── about/page.tsx
│   ├── credits/page.tsx
│   ├── gear/page.tsx
│   ├── media/page.tsx
│   └── contact/page.tsx    # Booking enquiry
├── components/
│   ├── ui/                 # Button, Card, Badge, Input, Label, Textarea, Separator
│   ├── layout/             # Navbar, Footer
│   └── sections/           # Hero, NewsReel, BookingCTA, CreditsGrid,
│                           #   GearGrid, MediaPlayers, ContactForm, SectionHeading
├── lib/
│   ├── data.ts             # 👈 ALL editable content
│   └── utils.ts            # cn() class merge helper
└── types/index.ts          # content type definitions
```

## Going live (booking-system)

The contact form is client-only today. To wire it up like MCS:

1. Add `src/app/api/contact/route.ts` (POST → Resend email to `SITE.email`).
2. Replace the stub in `contact-form.tsx` `handleSubmit()` with a real `fetch("/api/contact")`.
3. Copy `.env.example` → `.env.local` and fill in keys.

See `.env.example` for the full variable list.

## Deploy (Vercel)

```bash
git init && git add . && git commit -m "dougbelote starter"
git branch -M main
git remote add origin https://github.com/flu-wop/dougbelote.git
git push -u origin main
```

Then import the repo in Vercel — it auto-deploys on every push to `main`.
Add env vars in Vercel → Settings → Environment Variables when you wire up booking.
