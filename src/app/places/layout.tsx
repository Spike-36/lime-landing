// Places: Pete and Sarah's food journal, city by city. Content comes from
// the YumWords Editor (src/lib/places.ts). Not linked from elsewhere on the
// site and hidden from search engines until it is launched.
import { Caveat, Sarabun } from "next/font/google"
import Link from "next/link"
import Footer from "@/components/Footer"
import { previewKey } from "@/lib/places"
import styles from "./places.module.css"

const hand = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-hand", display: "swap" })
const thai = Sarabun({ subsets: ["thai", "latin"], weight: ["400", "500"], variable: "--font-thai", display: "swap" })

export const metadata = {
  title: { template: "%s · YumWords Places", default: "Places · YumWords" },
  robots: { index: false, follow: false },
}

export default function PlacesLayout({ children }: { children: React.ReactNode }) {
  const preview = !!previewKey()
  return (
    <div className={`${hand.variable} ${thai.variable} ${styles.page} flex min-h-screen flex-col text-[#1F1B16]`}>
      {preview && (
        <p className="bg-[#1F1B16] px-5 py-2 text-center text-sm text-white">
          Preview: drafts are shown and marked. Nothing here is public.
        </p>
      )}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link href="/places" className="flex items-center gap-3">
          <img src="/media/thailand/icon.png" alt="" width={40} height={40} className="h-10 w-10 rounded-[11px] shadow-sm" />
          <span className="text-lg font-semibold leading-none tracking-tight">
            YumWords <span className="font-normal text-[#8A7B66]">Places</span>
          </span>
        </Link>
        <Link href="/thailand" className="text-sm text-[#6B5E4A] hover:text-[#1F1B16]">
          The app →
        </Link>
      </header>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
