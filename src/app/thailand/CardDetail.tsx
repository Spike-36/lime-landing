"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { cards, collection, type ThaiCard } from "./cards"
import styles from "./thailand.module.css"

type Props = {
  index: number
  onChange: (index: number) => void
  onClose: (lastIndex: number) => void
}

const FOCUSABLE = 'button, a[href], [tabindex]:not([tabindex="-1"])'

// Good to Know entries that only restate the Thai name with another
// romanisation, e.g. "Written as ห่อหมก (hor mok)". The page already shows
// the Thai and the card's own phonetic, so these are hidden here only.
function isNameRestatement(entry: string, thai: string) {
  const escaped = thai.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return new RegExp(`^(often )?written as ${escaped} \\([^)]*\\)$`, "i").test(entry.trim())
}

function goodToKnowFor(card: ThaiCard) {
  return card.goodToKnow.filter((entry) => !isNameRestatement(entry, card.thai))
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)")
    const update = () => setIsDesktop(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])
  return isDesktop
}

export default function CardDetail({ index, onChange, onClose }: Props) {
  const card = cards[index]
  const total = cards.length
  const prev = cards[(index - 1 + total) % total]
  const next = cards[(index + 1) % total]

  const panelRef = useRef<HTMLDivElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const articleRef = useRef<HTMLElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [playing, setPlaying] = useState(false)
  const [closing, setClosing] = useState(false)
  const isDesktop = useIsDesktop()

  const stopAudio = () => {
    audioRef.current?.pause()
    audioRef.current = null
    setPlaying(false)
  }

  const close = useCallback(() => {
    stopAudio()
    setClosing(true)
    setTimeout(() => onClose(index), 170)
  }, [index, onClose])

  const go = useCallback(
    (step: number) => onChange((index + step + total) % total),
    [index, total, onChange]
  )

  const playAudio = () => {
    stopAudio()
    const audio = new Audio(`/media/thailand/audio/${card.id}.mp3`)
    audioRef.current = audio
    audio.onended = () => setPlaying(false)
    setPlaying(true)
    audio.play().catch((err) => {
      console.error("Audio playback failed:", err)
      setPlaying(false)
    })
  }

  // New dish: stop any audio and show the article from the top
  useEffect(() => {
    stopAudio()
    bodyRef.current?.scrollTo({ top: 0 })
    articleRef.current?.scrollTo({ top: 0 })
  }, [index])

  // Lock page scroll and move focus into the dialog while it is open
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
      audioRef.current?.pause()
    }
  }, [])

  // Escape closes, arrows step through the dishes, Tab stays inside the dialog
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowRight") go(1)
      else if (e.key === "ArrowLeft") go(-1)
      else if (e.key === "Tab" && panelRef.current) {
        // Only elements shown at the current width (hidden ones have no layout)
        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
        ).filter((el) => el.getClientRects().length > 0)
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [close, go])

  const goodToKnow = goodToKnowFor(card)
  const hasEating =
    card.whereYouWillSeeIt.length > 0 ||
    card.whenItsEaten.length > 0 ||
    card.howPeopleUsuallyEatIt.length > 0
  const preparation = card.preparation
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <div
      className={`fixed inset-0 z-50 md:flex md:items-center md:justify-center md:p-6 ${
        closing ? styles.overlayClosing : styles.overlay
      }`}
    >
      {/* Backdrop */}
      <div aria-hidden onClick={close} className="absolute inset-0 bg-black/80" />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="card-detail-title"
        className={`relative flex h-[100dvh] w-full flex-col bg-[#FBF8F3] md:h-[min(90vh,720px)] md:max-w-[960px] md:flex-row md:overflow-hidden md:rounded-[28px] md:shadow-2xl ${
          closing ? styles.panelClosing : styles.panel
        }`}
      >
        {/* Announce the dish when stepping through them */}
        <p className="sr-only" aria-live="polite">
          {card.name}, {index + 1} of {total}
        </p>

        {/* Top bar (mobile) */}
        <div className="flex h-14 flex-none items-center border-b border-[#EAE2D6] bg-[#FBF8F3] pl-5 pr-16 pt-[env(safe-area-inset-top)] md:hidden">
          <p className="truncate text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
            {collection.title} · {index + 1} of {total}
          </p>
        </div>

        {/* Close */}
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-[calc(env(safe-area-inset-top)+0.5rem)] z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1EBE1] text-[#1F1B16] transition hover:bg-[#E8DFD1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600 md:right-4 md:top-4"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Body: scrolls as a whole on mobile; on desktop only the article scrolls */}
        <div
          ref={bodyRef}
          tabIndex={isDesktop ? -1 : 0}
          aria-label={isDesktop ? undefined : `${card.name} article`}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain focus:outline-none md:flex md:overflow-hidden"
        >
          {/* Photo and dish navigation */}
          {/* Photo and previous / next. Desktop: a ~42% column; the photo
              fills its width (within the 512px source) and sits centred
              above the navigation */}
          <div className="md:flex md:w-[42%] md:flex-none md:flex-col md:bg-[#F1EBE1]">
            <div className="aspect-[4/3] overflow-hidden bg-[#EFE8DD] md:my-auto md:aspect-square">
              <img
                key={card.id}
                src={`/media/thailand/cards/${card.id}.webp`}
                alt={card.name}
                width={512}
                height={512}
                className={`h-full w-full object-cover ${styles.photo}`}
              />
            </div>

            <nav
              aria-label="Dishes in this collection"
              className="hidden items-center justify-between px-4 py-4 md:flex"
            >
              <StepButton direction="prev" onClick={() => go(-1)} />
              <p className="text-sm text-[#6B5E4A]">
                {index + 1} of {total}
              </p>
              <StepButton direction="next" onClick={() => go(1)} />
            </nav>
          </div>

          {/* Article */}
          <article
            ref={articleRef}
            tabIndex={isDesktop ? 0 : -1}
            aria-label={isDesktop ? `${card.name} article` : undefined}
            className="px-5 pb-12 pt-7 focus:outline-none sm:px-8 md:min-w-0 md:flex-1 md:overflow-y-auto md:overscroll-contain md:px-10 md:pb-12 md:pt-10"
          >
            <header className="md:pr-12">
              <p className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-orange-700 md:block">
                {collection.title} · {index + 1} of {total}
              </p>

              <h2
                id="card-detail-title"
                className="font-serif text-[32px] font-semibold leading-[1.1] tracking-tight text-[#1F1B16] md:mt-3 md:text-[40px]"
              >
                {card.name}
              </h2>

              <p lang="th" className={`mt-3 text-[28px] leading-snug text-[#1F1B16] md:text-[32px] ${styles.thai}`}>
                {card.thai}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3">
                <p className="text-[17px] text-[#6B5E4A]">{card.phonetic}</p>

                <button
                  type="button"
                  onClick={playing ? stopAudio : playAudio}
                  aria-label={playing ? "Stop" : `Hear ${card.name} in Thai`}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 py-2 pl-3 pr-4 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  {playing ? (
                    <span className={styles.bars} aria-hidden>
                      <span />
                      <span />
                      <span />
                    </span>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8v8a4.47 4.47 0 002.5-4zM14 3.23v2.06a7 7 0 010 13.42v2.06A9 9 0 0014 3.23z" />
                    </svg>
                  )}
                  Hear it in Thai
                </button>
              </div>
            </header>

            <p className="mt-6 font-serif text-[19px] leading-[1.5] text-[#2B241D] md:text-[20px]">
              {card.description}
            </p>

            {goodToKnow.length > 0 && (
              <aside className="mt-8 border-l-2 border-orange-500 bg-[#FFF6EC] py-4 pl-5 pr-4 md:pl-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-orange-800">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 11v5M12 8h.01" />
                  </svg>
                  Good to know
                </h3>
                <BulletList items={goodToKnow} className="mt-3" />
              </aside>
            )}

            {hasEating && (
              <section className="mt-10">
                <SectionHeading>Eating it in Thailand</SectionHeading>
                <div className="mt-4 space-y-6">
                  <SubSection title="Where you’ll see it" items={card.whereYouWillSeeIt} />
                  <SubSection title="When it’s eaten" items={card.whenItsEaten} />
                  <SubSection title="How people usually eat it" items={card.howPeopleUsuallyEatIt} />
                </div>
              </section>
            )}

            {card.firstImpressions.length > 0 && (
              <section className="mt-10">
                <SectionHeading>First impressions</SectionHeading>
                <BulletList items={card.firstImpressions} className="mt-4" />
              </section>
            )}

            {card.spiceLevel.length > 0 && (
              <section className="mt-10">
                <SectionHeading>Spice level</SectionHeading>
                <BulletList items={card.spiceLevel} className="mt-4" />
              </section>
            )}

            {card.ingredients.length > 0 && (
              <section className="mt-10">
                <SectionHeading>Ingredients</SectionHeading>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {card.ingredients.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-white px-3 py-1.5 text-[15px] text-[#3D352C] ring-1 ring-[#E6DDCF]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {preparation.length > 0 && (
              <section className="mt-10">
                <SectionHeading>Preparation</SectionHeading>
                <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-[#3D352C]">
                  {preparation.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </section>
            )}

            {card.hasRecipe && (
              <p className="mt-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-[15px] font-medium text-[#1F1B16] ring-1 ring-[#E6DDCF]">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 13.9A4 4 0 017.5 6a5 5 0 019 0A4 4 0 0118 13.9V20H6z" />
                  <path d="M6 17h12" />
                </svg>
                Full recipe in the YumWords app
              </p>
            )}
          </article>
        </div>

        {/* Previous / next (mobile) */}
        <nav
          aria-label="Dishes in this collection"
          className="grid flex-none grid-cols-2 border-t border-[#EAE2D6] bg-[#FBF8F3] pb-[env(safe-area-inset-bottom)] md:hidden"
        >
          <button
            type="button"
            onClick={() => go(-1)}
            className="flex min-w-0 flex-col items-start px-5 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-600"
          >
            <span className="text-xs text-[#8A7B66]">← Previous</span>
            <span className="w-full truncate text-[15px] font-medium text-[#1F1B16]">{prev.name}</span>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="flex min-w-0 flex-col items-end border-l border-[#EAE2D6] px-5 py-3 text-right focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-600"
          >
            <span className="text-xs text-[#8A7B66]">Next →</span>
            <span className="w-full truncate text-[15px] font-medium text-[#1F1B16]">{next.name}</span>
          </button>
        </nav>
      </div>
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-[24px] font-semibold leading-tight text-[#1F1B16]">
      {children}
    </h3>
  )
}

function SubSection({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#8A7B66]">{title}</h4>
      <BulletList items={items} className="mt-2" />
    </div>
  )
}

function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 text-[17px] leading-relaxed text-[#3D352C] ${className}`}>
      {items.map((item) => (
        <li key={item} className="relative pl-5">
          <span aria-hidden className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-orange-500" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function StepButton({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#1F1B16] transition hover:bg-[#E8DFD1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600"
    >
      {direction === "prev" ? (
        <>
          <span aria-hidden>←</span> Previous
        </>
      ) : (
        <>
          Next <span aria-hidden>→</span>
        </>
      )}
    </button>
  )
}
