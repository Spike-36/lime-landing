// Every city with places to show. A new city appears here once it has a
// published place; nothing in the code changes.
import Link from "next/link"
import { excerpt, getPlaces } from "@/lib/places"
import styles from "./places.module.css"

export const revalidate = 60

export const metadata = {
  title: "Places we like to eat",
  description: "Pete and Sarah’s food journal: places we like to eat, city by city.",
  alternates: { canonical: "/places" },
}

export default async function PlacesPage() {
  const { cities, intro } = await getPlaces()
  return (
    <main className="px-5 pb-8 sm:px-8">
      <section className="mx-auto max-w-3xl pb-10 pt-6 text-center md:pb-16 md:pt-12">
        <p className={`${styles.hand} text-2xl text-orange-700 md:text-3xl`}>Pete &amp; Sarah’s food journal</p>
        <h1 className="mt-1 text-[38px] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-[54px] md:text-[64px]">
          Places we like to eat
        </h1>
        <p className={`${styles.serif} mx-auto mt-5 max-w-2xl whitespace-pre-line text-lg leading-relaxed text-[#4A4036] md:text-xl`}>
          {intro || "Restaurants, street stalls, markets and bars we keep going back to, city by city."}
        </p>
      </section>

      {cities.length === 0 ? (
        <p className={`${styles.hand} mx-auto max-w-xl pb-16 text-center text-3xl text-[#6B5E4A]`}>
          Nothing here yet: we’re still eating our way around.
        </p>
      ) : (
        <ul className="mx-auto max-w-3xl space-y-3 pb-12">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link href={`/places/${city.slug}`} className={`${styles.place} group block px-5 py-4`}>
                <h2 className="text-2xl font-semibold leading-tight">{city.name}</h2>
                <p className="mt-1 text-sm text-[#6B5E4A]">
                  {city.places.length} place{city.places.length === 1 ? "" : "s"}
                </p>
                {city.intro && (
                  <p className={`${styles.serif} mt-2 leading-relaxed text-[#4A4036]`}>{excerpt(city.intro, 180)}</p>
                )}
                <p className="mt-2 text-sm font-semibold text-orange-700 group-hover:underline">Open {city.name} →</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
