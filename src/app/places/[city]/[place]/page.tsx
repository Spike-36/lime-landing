// Places have no pages of their own: an old link to one goes to its entry
// on the city page.
import { redirect } from "next/navigation"
import { entryId } from "../entry"

type Params = { params: Promise<{ city: string; place: string }> }

export default async function PlacePage({ params }: Params) {
  const { city, place } = await params
  redirect(`/places/${city}#${entryId(place)}`)
}
