// A page's gallery: one row of photos at the same height, each its own shape,
// swiped (or scrolled) sideways. Nothing at all when the page has no photos.
// Photos are chosen in the Editor; their descriptions stay private there, so
// the photos are decorative here (empty alt text).
import Image from "next/image"
import { getGallery } from "@/lib/galleries"

/** Shown this high: 200 px on phones, 260 px from 640 px wide. */
const HEIGHT = { phone: 200, wide: 260 }

export default async function PhotoStrip({ page, className = "" }: { page: string; className?: string }) {
  const photos = await getGallery(page)
  if (photos.length === 0) return null
  return (
    <div className={className}>
      <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2">
        {photos.map((p, i) => {
          const ratio = p.width / p.height
          return (
            <li key={p.id} className="shrink-0 snap-start">
              <Image
                src={`/gallery-photos/${p.id}`}
                alt=""
                width={p.width}
                height={p.height}
                sizes={`(min-width: 640px) ${Math.ceil(HEIGHT.wide * ratio)}px, ${Math.ceil(HEIGHT.phone * ratio)}px`}
                loading={i < 2 ? "eager" : "lazy"}
                className="h-[200px] w-auto rounded-xl bg-[#EFE8DD] sm:h-[260px]"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
