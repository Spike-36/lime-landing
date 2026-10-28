// One city's page: Pete and Sarah's introduction, then each place pinned
// to the page, in the order set in the Editor.
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { excerpt, getCity, mainPhoto, paragraphs, tilt } from "@/lib/places"
import Polaroid from "../Polaroid"
import styles from "../places.module.css"

export const revalidate = 300

type Params = { params: Promise<{ city: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const found = await getCity((await params).city)
  if (!found) return {}
  const { city } = found
  return {
    title: `Where we eat in ${city.name}`,
    description: city.intro ? excerpt(city.intro, 160) : `Places Pete and Sarah like to eat in ${city.name}.`,
    alternates: { canonical: `/places/${city.slug}` },
  }
}

export default async function CityPage({ params }: Params) {
  const found = await getCity((await params).city)
  if (!found) notFound()
  const { data, city } = found
  const intro = paragraphs(city.intro)

  return (
    <main className="px-5 pb-8 sm:px-8">
      <section className="mx-auto max-w-3xl pb-12 pt-4 md:pb-16 md:pt-10">
        <Link href="/places" className="text-sm text-[#6B5E4A] hover:text-[#1F1B16]">
          ← All places
        </Link>
        <p className={`${styles.hand} mt-6 text-2xl text-orange-700 md:text-3xl`}>Where we eat in</p>
        <h1 className="text-[44px] font-semibold leading-none tracking-[-0.03em] sm:text-[64px] md:text-[80px]">{city.name}</h1>
        {intro.length > 0 ? (
          <div className={`${styles.serif} mt-6 space-y-4 text-lg leading-relaxed text-[#3A332B] md:text-xl md:leading-relaxed`}>
            {intro.map((t, i) => (
              <p key={i} className="whitespace-pre-line">
                {t}
              </p>
            ))}
          </div>
        ) : (
          data.preview && (
            <p className="mt-6 rounded-lg border border-dashed border-[#C9BBA4] p-4 text-sm text-[#6B5E4A]">
              Preview: no introduction yet. It is written in the Editor, under Places › Cities and categories.
            </p>
          )
        )}
      </section>

      <div className={`${styles.board} mx-auto max-w-6xl`}>
        {city.places.map((p, i) => {
          const photo = mainPhoto(p)
          const angle = tilt(p.slug)
          return (
            <article key={p.slug} className={styles.entry}>
              <Link href={`/places/${city.slug}/${p.slug}`} className="group block">
                {photo ? (
                  <Polaroid
                    photo={photo}
                    alt={p.name}
                    tilt={angle}
                    tape={i % 3 !== 1}
                    eager={i < 2}
                    sizes="(min-width: 1100px) 360px, (min-width: 700px) 45vw, 92vw"
                    caption={<span className="text-[28px] font-bold">{p.name}</span>}
                  />
                ) : (
                  <span className={`${styles.polaroid} ${styles.hand} block p-8 text-center text-3xl`}>{p.name}</span>
                )}
                <div className="mt-5 px-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    {p.category && <span className={styles.stamp}>{p.category.name}</span>}
                    {p.neighbourhood && <span className="text-sm text-[#6B5E4A]">{p.neighbourhood}</span>}
                    {p.draft && <span className={styles.draft}>Draft</span>}
                  </div>
                  {p.name_th && (
                    <p lang="th" className={`${styles.thai} mt-2 text-[#6B5E4A]`}>
                      {p.name_th}
                    </p>
                  )}
                  <p className={`${styles.serif} mt-2 text-[17px] leading-relaxed text-[#3A332B]`}>{excerpt(p.description)}</p>
                  <p className="mt-2 text-sm font-semibold text-orange-700 group-hover:underline">Read more →</p>
                </div>
              </Link>
            </article>
          )
        })}
      </div>

      <p className={`${styles.signature} mx-auto max-w-6xl pb-6 text-right`}>— Pete &amp; Sarah</p>
    </main>
  )
}
