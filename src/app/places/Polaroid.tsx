// A photo in a Polaroid frame, at the photo's own proportions, with an
// optional handwritten caption and a strip of tape.
import type { CSSProperties, ReactNode } from "react"
import { type PlacePhoto, photoUrl } from "@/lib/places"
import styles from "./places.module.css"

export default function Polaroid({
  photo,
  alt,
  caption,
  tilt = 0,
  tape = false,
  eager = false,
  sizes,
  className = "",
}: {
  photo: PlacePhoto
  alt: string
  caption?: ReactNode
  tilt?: number
  tape?: boolean
  eager?: boolean
  sizes?: string
  className?: string
}) {
  const style = { "--tilt": `${tilt}deg`, "--tape-tilt": `${-tilt * 1.5 - 2}deg` } as CSSProperties
  return (
    <span className={`${styles.polaroid} ${tape ? styles.tape : ""} ${className}`} style={style}>
      <img
        src={photoUrl(photo)}
        alt={alt}
        width={photo.width}
        height={photo.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
      />
      <span className={`${styles.caption} ${styles.hand}`}>{caption ?? " "}</span>
    </span>
  )
}
