// A gallery photo, by its id: the 1600 px display copy of a Media photo, only
// while it is in a gallery and not archived. Kept by browsers and Vercel for a
// minute at most, so a photo taken out of every gallery stops being served
// within about a minute. Pages show it through next/image, resized for the
// screen.
import { REVALIDATE } from "@/lib/places"
import { downloadGalleryPhoto, galleryPhotoFile } from "@/lib/galleries"

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

const notFound = () =>
  new Response("Not found", { status: 404, headers: { "Cache-Control": `public, max-age=60, s-maxage=60` } })

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!UUID.test(id)) return notFound()

  let path
  try {
    path = await galleryPhotoFile(id)
  } catch (e) {
    console.error(e)
    return new Response("Unavailable", { status: 503, headers: { "Cache-Control": "no-store" } })
  }
  if (!path) return notFound()

  const res = await downloadGalleryPhoto(path)
  if (!res.ok || !res.body) {
    console.error("Gallery photo download failed:", res.status)
    return new Response("Unavailable", { status: 503, headers: { "Cache-Control": "no-store" } })
  }
  return new Response(res.body, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": `public, max-age=${REVALIDATE}, s-maxage=${REVALIDATE}`,
      "X-Content-Type-Options": "nosniff",
    },
  })
}
