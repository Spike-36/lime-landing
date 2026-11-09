// The image WhatsApp and others show when a city's page is shared: its name
// on the Places paper, with no photo.
import { ImageResponse } from "next/og"
import { getCity } from "@/lib/places"

export const alt = "Where we eat, by Pete and Sarah of YumWords"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const revalidate = 60

export default async function Image({ params }: { params: Promise<{ city: string }> }) {
  const found = await getCity((await params).city)
  const name = found?.city.name ?? "Places"
  const count = found?.city.places.length ?? 0
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#fbf8f3",
          color: "#1F1B16",
        }}
      >
        <div style={{ fontSize: 44, color: "#c2410c" }}>Where we eat in</div>
        <div style={{ fontSize: 128, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>{name}</div>
        <div style={{ marginTop: 36, fontSize: 36, color: "#6B5E4A" }}>
          {`${count > 0 ? `${count} ${count === 1 ? "place" : "places"} we keep going back to · ` : ""}Pete & Sarah, YumWords`}
        </div>
      </div>
    ),
    size,
  )
}
