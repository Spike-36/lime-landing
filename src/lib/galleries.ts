// Galleries: a short strip of Pete and Sarah's photos on a page, chosen in the
// Editor (Website › Galleries) from its Media library. Read on the server
// through site_gallery(), which gives only the photos' ids and sizes, in
// order (049_site_galleries.sql in the editor repository). Pages: "thailand",
// and "city:<city slug>" for each Places city.
import { REVALIDATE, config } from "@/lib/places"

export interface GalleryPhoto {
  id: string
  width: number
  height: number
}

/** A page's photos, or none: a gallery that can't be read is left out rather
 *  than stopping the page. Kept for REVALIDATE seconds, so a change saved in
 *  the Editor shows within about a minute. */
export async function getGallery(page: string): Promise<GalleryPhoto[]> {
  const c = config()
  if (!c) return []
  try {
    const res = await fetch(`${c.url}/rest/v1/rpc/site_gallery?p_page=${encodeURIComponent(page)}`, {
      headers: { apikey: c.key },
      signal: AbortSignal.timeout(10_000),
      next: { revalidate: REVALIDATE },
    })
    if (!res.ok) throw new Error(`Loading the ${page} gallery failed: ${res.status}`)
    return (await res.json()) as GalleryPhoto[]
  } catch (e) {
    console.error(e)
    return []
  }
}

/** Which stored file to send for a photo, if it is in a gallery. */
export async function galleryPhotoFile(id: string): Promise<string | null> {
  const c = config()
  if (!c) throw new Error("Galleries are not configured.")
  const res = await fetch(`${c.url}/rest/v1/rpc/site_gallery_photo?p_photo=${id}`, {
    headers: { apikey: c.key },
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`Finding photo failed: ${res.status}`)
  return ((await res.json()) as string | null) || null
}

/** The stored file itself, read with the publishable key (storage lets it
 *  read only gallery photos' display copies). */
export async function downloadGalleryPhoto(path: string): Promise<Response> {
  const c = config()
  if (!c) throw new Error("Galleries are not configured.")
  return fetch(`${c.url}/storage/v1/object/authenticated/media-library/${path}`, {
    headers: { apikey: c.key },
    signal: AbortSignal.timeout(15_000),
    cache: "no-store",
  })
}
