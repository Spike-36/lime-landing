"use client"
// Opens the place a link points to (/places/<city>#place-<slug>), as an old
// link to a place's own page does after its redirect.
import { useEffect } from "react"

export default function OpenLinked() {
  useEffect(() => {
    const open = () => {
      const entry = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (entry instanceof HTMLDetailsElement) {
        entry.open = true
        entry.scrollIntoView({ block: "center" })
      }
    }
    open()
    window.addEventListener("hashchange", open)
    return () => window.removeEventListener("hashchange", open)
  }, [])
  return null
}
