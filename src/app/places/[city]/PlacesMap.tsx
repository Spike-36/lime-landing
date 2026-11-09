"use client"
// The city's places on an OpenStreetMap map (Leaflet), one numbered pin per
// place with coordinates. A pin opens its place in the list below and
// scrolls to it. No Google scripts, keys or cookies.
import "leaflet/dist/leaflet.css"
import { useEffect, useRef } from "react"
import { entryId } from "./entry"
import styles from "../places.module.css"

export interface Pin {
  slug: string
  name: string
  n: number
  latitude: number
  longitude: number
}

function openEntry(slug: string) {
  const entry = document.getElementById(entryId(slug))
  if (!(entry instanceof HTMLDetailsElement)) return
  entry.open = true
  entry.scrollIntoView({ behavior: "smooth", block: "center" })
  entry.classList.remove(styles.flash)
  // Restart the highlight even if this entry was the last one shown.
  void entry.offsetWidth
  entry.classList.add(styles.flash)
}

export default function PlacesMap({ pins }: { pins: Pin[] }) {
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: import("leaflet").Map | undefined
    let gone = false
    import("leaflet").then((L) => {
      if (gone || !box.current) return
      map = L.map(box.current, {
        scrollWheelZoom: false,
        // On a phone one finger scrolls the page; two pinch and pan the map.
        dragging: !L.Browser.mobile,
      })
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)
      for (const p of pins) {
        L.marker([p.latitude, p.longitude], {
          title: p.name,
          alt: p.name,
          icon: L.divIcon({ className: styles.pin, html: `<span>${p.n}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] }),
        })
          .addTo(map)
          .on("click", () => openEntry(p.slug))
      }
      map.fitBounds(L.latLngBounds(pins.map((p) => [p.latitude, p.longitude] as [number, number])), { padding: [32, 32], maxZoom: 15 })
    })
    return () => {
      gone = true
      map?.remove()
    }
  }, [pins])

  return <div ref={box} className={styles.map} role="region" aria-label="Map of the places" />
}
