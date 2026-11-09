// One city's recommendations: Pete and Sarah's introduction, a map of the
// places, and the places as a list in the order set in the Editor, each
// opening to its note, where it is and a Google Maps link. Any city with
// published places gets this page at /places/<city slug>.
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import PhotoStrip from "@/components/PhotoStrip"
import { excerpt, getCity, mapsLink, paragraphs } from "@/lib/places"
import { entryId } from "./entry"
import OpenLinked from "./OpenLinked"
import styles from "../places.module.css"
import PlacesMap, { type Pin } from "./PlacesMap"

export const revalidate = 60

type Params = { params: Promise<{ city: string }> }

const defaultIntro = (city: string) => `The places we keep going back to in ${city}. Tap a pin or a name for our notes and directions.`

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const found = await getCity((await params).city)
  if (!found) return {}
  const { city } = found
  const title = `Where we eat in ${city.name}`
  const description = excerpt(city.intro || defaultIntro(city.name), 160)
  return {
    title,
    description,
    alternates: { canonical: `/places/${city.slug}` },
    // For the preview WhatsApp and others show when the link is shared; the
    // image is ./opengraph-image.tsx.
    openGraph: { title, description, url: `/places/${city.slug}`, siteName: "YumWords", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  }
}

export default async function CityPage({ params }: Params) {
  const found = await getCity((await params).city)
  if (!found) notFound()
  const { city } = found
  const intro = paragraphs(city.intro || defaultIntro(city.name))
  const places = city.places.map((p, i) => ({ ...p, n: i + 1 }))
  const pins: Pin[] = places.flatMap((p) =>
    p.latitude != null && p.longitude != null
      ? [{ slug: p.slug, name: p.name, n: p.n, latitude: Number(p.latitude), longitude: Number(p.longitude) }]
      : [],
  )

  return (
    <main className="px-5 pb-8 sm:px-8">
      <section className="mx-auto max-w-3xl pb-6 pt-2 md:pb-8 md:pt-6">
        <Link href="/places" className="text-sm text-[#6B5E4A] hover:text-[#1F1B16]">
          ← All places
        </Link>
        <p className={`${styles.hand} mt-5 text-2xl text-orange-700 md:text-3xl`}>Where we eat in</p>
        <h1 className="text-[44px] font-semibold leading-none tracking-[-0.03em] sm:text-[64px]">{city.name}</h1>
        <div className={`${styles.serif} mt-5 space-y-4 text-lg leading-relaxed text-[#3A332B]`}>
          {intro.map((t, i) => (
            <p key={i} className="whitespace-pre-line">
              {t}
            </p>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-3xl">
        <PhotoStrip page={`city:${city.slug}`} className="mb-6" />
        {pins.length > 0 && <PlacesMap pins={pins} />}

        <ol className="mt-6 space-y-3">
          {places.map((p) => {
            const maps = mapsLink(p)
            return (
              <li key={p.slug}>
                <details id={entryId(p.slug)} className={styles.place}>
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3">
                    <span className={styles.number} aria-hidden="true">
                      {p.n}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[17px] font-semibold leading-snug">{p.name}</span>
                      {p.category && <span className="block text-sm text-[#6B5E4A]">{p.category.name}</span>}
                    </span>
                    {p.draft && <span className={styles.draft}>Draft</span>}
                    <span className={styles.chevron} aria-hidden="true" />
                  </summary>
                  <div className="space-y-3 px-4 pb-4 pl-[3.75rem]">
                    {(p.neighbourhood || p.name_th) && (
                      <p className="text-sm text-[#6B5E4A]">
                        {p.neighbourhood}
                        {p.neighbourhood && p.name_th && " · "}
                        {p.name_th && (
                          <span lang="th" className={styles.thai}>
                            {p.name_th}
                          </span>
                        )}
                      </p>
                    )}
                    <div className={`${styles.serif} space-y-3 text-[17px] leading-relaxed text-[#3A332B]`}>
                      {paragraphs(p.description).map((t, i) => (
                        <p key={i} className="whitespace-pre-line">
                          {t}
                        </p>
                      ))}
                    </div>
                    {maps && (
                      <a
                        href={maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-semibold text-orange-700 hover:underline"
                      >
                        Open in Google Maps →
                      </a>
                    )}
                  </div>
                </details>
              </li>
            )
          })}
        </ol>

        <p className={`${styles.signature} pb-6 pt-8 text-right`}>— Pete &amp; Sarah</p>
        <OpenLinked />
      </div>
    </main>
  )
}
