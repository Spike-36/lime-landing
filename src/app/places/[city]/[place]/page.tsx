// One place: its photos pinned to the page beside Pete and Sarah's note,
// where it is, and a link to Google Maps (no embedded map: it would load
// Google's scripts and cookies).
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { excerpt, getPlace, mainPhoto, mapsLink, paragraphs, photoUrl, tilt } from "@/lib/places"
import Polaroid from "../../Polaroid"
import styles from "../../places.module.css"

export const revalidate = 300

type Params = { params: Promise<{ city: string; place: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city, place } = await params
  const found = await getPlace(city, place)
  if (!found) return {}
  const p = found.place
  const photo = mainPhoto(p)
  return {
    title: `${p.name}, ${found.city.name}`,
    description: excerpt(p.description, 160),
    alternates: { canonical: `/places/${found.city.slug}/${p.slug}` },
    openGraph: {
      title: `${p.name}, ${found.city.name}`,
      description: excerpt(p.description, 160),
      url: `/places/${found.city.slug}/${p.slug}`,
      siteName: "YumWords",
      type: "article",
      images: photo && !p.draft ? [{ url: photoUrl(photo), width: photo.width, height: photo.height }] : undefined,
    },
  }
}

const month = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "Asia/Bangkok" })

export default async function PlacePage({ params }: Params) {
  const { city: citySlug, place: slug } = await params
  const found = await getPlace(citySlug, slug)
  if (!found) notFound()
  const { city, place: p } = found
  const main = mainPhoto(p)
  const others = p.photos.filter((ph) => ph !== main)
  const maps = mapsLink(p)

  return (
    <main className="px-5 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl pt-2">
        <Link href={`/places/${city.slug}`} className="text-sm text-[#6B5E4A] hover:text-[#1F1B16]">
          ← {city.name}
        </Link>
      </div>

      <article className="mx-auto mt-8 grid max-w-6xl gap-12 md:mt-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-16">
        <div className="space-y-10">
          {main && (
            <Polaroid
              photo={main}
              alt={p.name}
              tilt={tilt(p.slug, 1.8)}
              tape
              eager
              sizes="(min-width: 768px) 560px, 92vw"
              caption={<span className="text-[30px] font-bold">{p.name}</span>}
              className="mx-auto max-w-[560px]"
            />
          )}
          {others.length > 0 && (
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {others.map((ph, i) => (
                <Polaroid
                  key={ph.id}
                  photo={ph}
                  alt={`${p.name}, photo ${i + 2}`}
                  tilt={tilt(ph.id, 3)}
                  tape={i % 2 === 0}
                  sizes="(min-width: 768px) 260px, 45vw"
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            {p.category && <span className={styles.stamp}>{p.category.name}</span>}
            {p.draft && <span className={styles.draft}>Draft</span>}
          </div>
          <h1 className="mt-4 text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[48px]">{p.name}</h1>
          {p.name_th && (
            <p lang="th" className={`${styles.thai} mt-2 text-2xl text-[#6B5E4A]`}>
              {p.name_th}
            </p>
          )}
          <p className="mt-3 text-[#6B5E4A]">{[p.neighbourhood, city.name].filter(Boolean).join(" · ")}</p>

          <div className={`${styles.serif} mt-8 space-y-5 text-xl leading-relaxed text-[#2E2822]`}>
            {paragraphs(p.description).map((t, i) => (
              <p key={i} className="whitespace-pre-line">
                {t}
              </p>
            ))}
          </div>
          <p className={`${styles.signature} mt-6`}>— Pete &amp; Sarah</p>

          <section aria-labelledby="where" className="mt-10 rounded-2xl bg-[#F0EDE6] p-6">
            <h2 id="where" className={`${styles.hand} text-3xl font-bold`}>
              Where
            </h2>
            <p className="mt-1 text-lg">{[p.neighbourhood, city.name].filter(Boolean).join(", ")}</p>
            {maps && (
              <a
                href={maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-700"
              >
                Open in Google Maps ↗
              </a>
            )}
          </section>

          {p.published_at && <p className="mt-6 text-sm text-[#8A7B66]">Added {month(p.published_at)}</p>}
        </div>
      </article>
    </main>
  )
}
