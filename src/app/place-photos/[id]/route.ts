// A place's photo, by its id: the 1600 px display copy, only while its
// place is published (or, on a protected preview, a draft). Kept by
// browsers and Vercel for five minutes at most, so a photo of a place that
// is unpublished stops being served within about five minutes. Drafts'
// photos are never kept.
import { REVALIDATE, downloadPhoto, photoDone, photoFile } from "@/lib/places"

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

const notFound = () =>
  new Response("Not found", { status: 404, headers: { "Cache-Control": `public, max-age=60, s-maxage=60` } })

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!UUID.test(id)) return notFound()

  let file
  try {
    file = await photoFile(id)
  } catch (e) {
    console.error(e)
    return new Response("Unavailable", { status: 503, headers: { "Cache-Control": "no-store" } })
  }
  if (!file) return notFound()

  let res: Response
  try {
    res = await downloadPhoto(file.path)
  } finally {
    if (file.grant_id) await photoDone(file.grant_id)
  }
  if (!res.ok || !res.body) {
    console.error("Photo download failed:", res.status)
    return new Response("Unavailable", { status: 503, headers: { "Cache-Control": "no-store" } })
  }
  return new Response(res.body, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": file.draft ? "private, no-store" : `public, max-age=${REVALIDATE}, s-maxage=${REVALIDATE}`,
      "X-Content-Type-Options": "nosniff",
    },
  })
}
