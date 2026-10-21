// YumWords Thailand landing page. Card content comes from cards.ts
// (see scripts/generate-thailand-cards.py); media lives in
// public/media/thailand/.
import { Sarabun } from "next/font/google"
import Footer from "@/components/Footer"
import { collection } from "./cards"
import CollectionGallery from "./CollectionGallery"
import StoreBadges from "./StoreBadges"
import styles from "./thailand.module.css"

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-thai",
  display: "swap",
})

export const metadata = {
  title: "Discover Thai Food · YumWords Thailand",
  description:
    "Explore the dishes, ingredients and flavours of Thailand with YumWords.",
  alternates: { canonical: "/thailand" },
  openGraph: {
    title: "Discover Thai Food · YumWords Thailand",
    description:
      "Explore the dishes, ingredients and flavours of Thailand with YumWords.",
    url: "/thailand",
    siteName: "YumWords",
    type: "website",
  },
}

const features = [
  {
    image: "C007",
    title: "Explore ingredients",
    body: "Herbs, spices and market produce, named in Thai.",
    tint: "bg-[#F6E6DF]",
  },
  {
    image: "C012",
    title: "Understand Thai menus",
    body: "Spot the words that tell you how a dish is cooked.",
    tint: "bg-[#E4ECF2]",
  },
  {
    image: "C013",
    title: "Cook Thai favourites",
    body: "Sixteen classics, step by step, with a cooking mode.",
    tint: "bg-[#E7EFE9]",
  },
  {
    image: "C002",
    title: "Explore Thai food collections",
    body: "Discover street food, regional favourites, desserts and more.",
    tint: "bg-[#F8EDD3]",
  },
]

export default function ThailandPage() {
  return (
    <div className={`${sarabun.variable} min-h-screen bg-[#FBF8F3] text-[#1F1B16]`}>
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center gap-3">
          <img
            src="/media/thailand/icon.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-[11px] shadow-sm"
          />
          <p className="text-lg font-semibold leading-none tracking-tight">
            YumWords <span className="font-normal text-[#8A7B66]">Thailand</span>
          </p>
        </div>

        <div className="hidden md:block">
          <StoreBadges size="sm" />
        </div>
      </header>

      <main>
        {/* 1. Introduction */}
        <section className="px-5 pb-12 pt-10 text-center sm:px-8 md:pb-16 md:pt-16">
          <div className="mx-auto max-w-3xl">
            <p
              lang="th"
              className={`text-lg font-medium text-orange-700 md:text-xl ${styles.thai}`}
            >
              อาหารไทย
            </p>

            <h1 className="mt-2 text-[36px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[52px] md:text-[72px]">
              Discover Thai Food
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4A4036] md:text-xl md:leading-relaxed">
              Explore the dishes, ingredients and flavours of Thailand. Discover
              new favourites, learn a little Thai along the way, and bring the
              tastes of Thailand into your own kitchen.
            </p>

            <div className="mt-9">
              <StoreBadges size="lg" />
            </div>
          </div>
        </section>

        {/* 2. Beyond Pad Thai */}
        <section aria-labelledby="collection-title" className="px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex items-end justify-between gap-6 md:mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                  A collection from the app
                </p>
                <h2
                  id="collection-title"
                  className="mt-2 text-[30px] font-semibold leading-tight tracking-tight md:text-[44px]"
                >
                  {collection.title}
                </h2>
                <p className="mt-2 text-base text-[#6B5E4A] md:text-lg">
                  {collection.subtitle}
                </p>
              </div>
            </div>

            <CollectionGallery />

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-[#8A7B66] md:mt-8">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-orange-600" fill="currentColor" aria-hidden>
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8v8a4.47 4.47 0 002.5-4z" />
              </svg>
              Tap a dish to see it in Thai and hear how it’s said
            </p>
          </div>
        </section>

        {/* 3. More in the app */}
        <section aria-labelledby="features-title" className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                More in the app
              </p>
              <h2
                id="features-title"
                className="mt-2 text-[30px] font-semibold leading-tight tracking-tight md:text-[44px]"
              >
                Explore more with YumWords
              </h2>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 md:mt-12 md:grid-cols-4 md:gap-6">
              {features.map((f) => (
                <article
                  key={f.title}
                  className={`overflow-hidden rounded-2xl sm:rounded-3xl ${f.tint}`}
                >
                  <img
                    src={`/media/thailand/features/${f.image}.webp`}
                    alt=""
                    width={512}
                    height={256}
                    loading="lazy"
                    className="aspect-[2/1] w-full object-cover"
                  />
                  <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6 lg:px-6 lg:pb-7 lg:pt-5">
                    <h3 className="text-base font-semibold leading-snug tracking-tight sm:text-lg lg:text-xl">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#4A4036] sm:mt-2 sm:text-base">
                      {f.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Download */}
        <section className="px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-3xl rounded-[32px] bg-[#F0EDE6] px-6 py-10 text-center md:px-12 md:py-12">
            <h2 className="text-[30px] font-semibold leading-tight tracking-tight md:text-[40px]">
              Start discovering Thai food
            </h2>
            <p className="mx-auto mt-3 max-w-md text-lg text-[#4A4036]">
              Get YumWords Thailand on your phone.
            </p>
            <div className="mt-7">
              <StoreBadges size="lg" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
