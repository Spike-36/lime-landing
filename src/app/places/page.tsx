// Every city with places to show. A new city appears here once it has a
// published place; nothing in the code changes.
import Link from "next/link"
import { excerpt, getPlaces, mainPhoto, tilt } from "@/lib/places"
import Polaroid from "./Polaroid"
import styles from "./places.module.css"

export const revalidate = 300

export const metadata = {
  title: "Places we like to eat",
  description: "Pete and Sarah’s food journal: places we like to eat, city by city.",
  alternates: { canonical: "/places" },
}

// Where each photo lies in a city's little pile, by how many there are.
const SPREAD = [["left-[16%] top-4"], ["left-0 top-8", "right-0 top-2"], ["left-0 top-6", "right-0 top-2", "left-[16%] top-10"]]

export default async function PlacesPage() {
  const { cities } = await getPlaces()
  return (
    <main className="px-5 pb-8 sm:px-8">
      <section className="mx-auto max-w-3xl pb-10 pt-6 text-center md:pb-16 md:pt-12">
        <p className={`${styles.hand} text-2xl text-orange-700 md:text-3xl`}>Pete &amp; Sarah’s food journal</p>
        <h1 className="mt-1 text-[38px] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-[54px] md:text-[64px]">
          Places we like to eat
        </h1>
        <p className={`${styles.serif} mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#4A4036] md:text-xl`}>
          Restaurants, street stalls, markets and bars we keep going back to, city by city.
        </p>
      </section>

      {cities.length === 0 ? (
        <p className={`${styles.hand} mx-auto max-w-xl pb-16 text-center text-3xl text-[#6B5E4A]`}>
          Nothing here yet: we’re still eating our way around.
        </p>
      ) : (
        <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-12 gap-y-14 pb-12">
          {cities.map((city) => {
            const photos = city.places.map((p) => ({ p, ph: mainPhoto(p) })).filter((x) => x.ph).slice(0, 3)
            return (
              <li key={city.slug} className="w-full max-w-[440px]">
                <Link href={`/places/${city.slug}`} className={`${styles.lift} group block`}>
                  <div className="relative mx-auto mb-8 h-[250px] max-w-[380px] sm:h-[280px]">
                    {photos.map(({ p, ph }, i) => (
                      <Polaroid
                        key={ph!.id}
                        photo={ph!}
                        alt=""
                        tilt={(photos.length === 1 ? [-2] : [-6, 5, -1.5])[i] + tilt(p.slug, 1)}
                        tape={i === photos.length - 1}
                        eager={i === photos.length - 1}
                        className={`!absolute w-[68%] ${SPREAD[photos.length - 1][i]}`}
                      />
                    ))}
                  </div>
                  <h2 className={`${styles.hand} text-center text-5xl font-bold leading-none`}>{city.name}</h2>
                  <p className="mt-2 text-center text-sm font-medium uppercase tracking-[0.14em] text-[#8A7B66]">
                    {city.places.length} place{city.places.length === 1 ? "" : "s"}
                  </p>
                  {city.intro && (
                    <p className={`${styles.serif} mx-auto mt-3 max-w-md text-center leading-relaxed text-[#4A4036]`}>
                      {excerpt(city.intro, 180)}
                    </p>
                  )}
                  <p className="mt-3 text-center font-semibold text-orange-700 group-hover:underline">
                    Open the {city.name} pages →
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
