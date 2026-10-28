// Places: Pete and Sarah's food places, city by city, from the YumWords
// Editor. Read on the server through site_places(), the one Places function
// the publishable key may call (018_places_website.sql in the editor
// repository): published places only, with their public fields.
//
// Needs, in the Vercel project's environment (server-side only):
//   YUMWORDS_SUPABASE_URL              the Editor's Supabase project URL
//   YUMWORDS_SUPABASE_PUBLISHABLE_KEY  its publishable key
// and, for a protected preview only, never production:
//   PLACES_PREVIEW_KEY                 shows drafts too (see the editor's
//                                      scripts/site-preview-key.mjs)
import { cache } from "react"

/** Pages and photos are kept this long (seconds), so a place that is
 *  unpublished disappears within about five minutes. */
export const REVALIDATE = 300

export interface PlacePhoto {
  id: string
  width: number
  height: number
  main: boolean
}

export interface Place {
  slug: string
  name: string
  name_th: string
  neighbourhood: string
  category: { slug: string; name: string } | null
  description: string
  maps_url: string | null
  latitude: number | null
  longitude: number | null
  published_at: string | null
  updated_at: string
  /** Only ever true on a preview. */
  draft: boolean
  photos: PlacePhoto[]
}

export interface City {
  slug: string
  name: string
  intro: string
  places: Place[]
}

export interface Places {
  /** Drafts are shown too: a protected preview. */
  preview: boolean
  cities: City[]
}

function config() {
  const url = process.env.YUMWORDS_SUPABASE_URL?.replace(/\/$/, "")
  const key = process.env.YUMWORDS_SUPABASE_PUBLISHABLE_KEY
  // Belt and braces: production never sends a preview key, even if one is set.
  const preview = process.env.VERCEL_ENV === "production" ? undefined : process.env.PLACES_PREVIEW_KEY || undefined
  return url && key ? { url, key, preview } : null
}

/** The preview key, for the photo route. */
export const previewKey = () => config()?.preview

async function rpc(name: string, body: Record<string, unknown> | null, preview: boolean): Promise<Response> {
  const c = config()
  if (!c) throw new Error("Places are not configured: set YUMWORDS_SUPABASE_URL and YUMWORDS_SUPABASE_PUBLISHABLE_KEY.")
  // Without a preview key, a GET the data cache keeps for REVALIDATE seconds;
  // with one, always fresh and never kept.
  return fetch(`${c.url}/rest/v1/rpc/${name}`, {
    method: body ? "POST" : "GET",
    headers: { apikey: c.key, ...(body ? { "Content-Type": "application/json" } : {}) },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(10_000),
    ...(preview ? { cache: "no-store" as const } : { next: { revalidate: REVALIDATE } }),
  })
}

/** Every city with something to show, each with its places in order. */
export const getPlaces = cache(async (): Promise<Places> => {
  const preview = previewKey()
  const res = await rpc("site_places", preview ? { p_preview: preview } : null, !!preview)
  if (!res.ok) throw new Error(`Loading places failed: ${res.status}`)
  return (await res.json()) as Places
})

export async function getCity(slug: string): Promise<{ data: Places; city: City } | null> {
  const data = await getPlaces()
  const city = data.cities.find((c) => c.slug === slug)
  return city ? { data, city } : null
}

export async function getPlace(citySlug: string, slug: string) {
  const found = await getCity(citySlug)
  const place = found?.city.places.find((p) => p.slug === slug)
  return found && place ? { ...found, place } : null
}

/** Which stored file to send for a photo, if the website may show it. A
 *  draft's photo (preview only) comes with a one-download grant to end. */
export async function photoFile(id: string): Promise<{ path: string; draft: boolean; grant_id: string | null } | null> {
  const preview = previewKey()
  const res = await rpc("site_place_photo", { p_photo: id, p_preview: preview ?? null }, true)
  if (!res.ok) throw new Error(`Finding photo failed: ${res.status}`)
  const rows = (await res.json()) as { path: string; draft: boolean; grant_id: string | null }[]
  return rows[0] ?? null
}

export async function photoDone(grantId: string) {
  await rpc("site_place_photo_done", { p_grant: grantId, p_preview: previewKey() ?? null }, true).catch(() => undefined)
}

/** The stored file itself, read with the publishable key (storage lets it
 *  read only visible photos). */
export async function downloadPhoto(path: string): Promise<Response> {
  const c = config()
  if (!c) throw new Error("Places are not configured.")
  return fetch(`${c.url}/storage/v1/object/authenticated/place-photos/${path}`, {
    headers: { apikey: c.key },
    signal: AbortSignal.timeout(15_000),
    cache: "no-store",
  })
}

// ── For the pages ───────────────────────────────────────────────────────────

export const mainPhoto = (p: Place) => p.photos.find((ph) => ph.main) ?? p.photos[0]
export const photoUrl = (ph: PlacePhoto) => `/place-photos/${ph.id}`

/** The Google Maps link, or one made from the coordinates. */
export function mapsLink(p: Place): string | null {
  if (p.maps_url) return p.maps_url
  if (p.latitude != null && p.longitude != null) {
    return `https://www.google.com/maps/search/?api=1&query=${p.latitude},${p.longitude}`
  }
  return null
}

/** Paragraphs, split at blank lines; single line breaks are kept within one. */
export const paragraphs = (text: string) =>
  text.split(/\n\s*\n/).map((t) => t.trim()).filter(Boolean)

/** The first paragraph, shortened at a word to about `max` characters. */
export function excerpt(text: string, max = 160): string {
  const first = paragraphs(text)[0]?.replace(/\s+/g, " ") ?? ""
  if (first.length <= max) return first
  return `${first.slice(0, first.lastIndexOf(" ", max) > 0 ? first.lastIndexOf(" ", max) : max).replace(/[,;:.\s-]+$/, "")}…`
}

/** A small, steady tilt for each photo, so the page looks pinned by hand
 *  but doesn't change between visits. */
export function tilt(seed: string, max = 2.4): number {
  let h = 0
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0
  const t = ((Math.abs(h) % 1000) / 1000) * 2 - 1
  return Math.round(t * max * 10) / 10
}
