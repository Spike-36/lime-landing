# YumWords website

The public site is the YumWords Thailand landing page at
`https://yumwords.com/thailand`, plus `/privacy` and `/contact`. The root `/`
redirects (307, temporary) to `/thailand`; see `redirects()` in
`next.config.ts`. `www.yumwords.com` is redirected to `yumwords.com` by the
Vercel project's domain settings, not by this code.

## YumWords Thailand page

- Page: `src/app/thailand/` (`page.tsx`, the "Beyond Pad Thai" gallery and
  the dish articles in `CardDetail.tsx`)
- Media: `public/media/thailand/` (`cards/` photos, `audio/` Thai
  pronunciations, `features/` illustrations, `badges/` store badges)
- Store links: set `STORE_LINKS` in `src/app/thailand/StoreBadges.tsx` when
  the App Store and Google Play listings are live. Until then the badges are
  shown dimmed as "Coming soon".
- Canonical origin: `SITE_URL` in `src/lib/site.ts` (used by metadata,
  `sitemap.xml` and `robots.txt`). Keep it in step with the primary domain in
  Vercel.

### Updating the dish content

The six dish cards in `src/app/thailand/cards.ts` are generated from the
FileMaker export bundled with the Flutter app. Don't edit that file by hand.
Update the source data, then regenerate:

```bash
python3 scripts/generate-thailand-cards.py
# or, if YumWords-v2 is not next to this repository:
python3 scripts/generate-thailand-cards.py --source /path/to/YumWords-v2/assets/thailand
```

The script copies text verbatim (no rewriting or standardising) and needs only
the Python standard library. It does not copy media: if a card's photo or audio
changes, update `public/media/thailand/cards/<ID>.webp` (512 × 512, converted
from the app's `images/words/<ID>.*.jpg`) and
`public/media/thailand/audio/<ID>.mp3` (copied from the app's
`audio/<ID>.*.mp3`).

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
