// Set each URL once the store listing is live. While a link is null its
// badge is shown dimmed with "Coming soon" and is not a link or button, so
// nothing is presented as a working download.
const STORE_LINKS: { appStore: string | null; googlePlay: string | null } = {
  appStore: null,
  googlePlay: null,
}

type Props = {
  size?: "sm" | "lg"
  align?: "center" | "start"
}

export default function StoreBadges({ size = "lg", align = "center" }: Props) {
  // Apple's badge has no padding; Google's (cropped) is slightly wider
  const height = size === "lg" ? "h-[52px]" : "h-9"

  const badges = [
    {
      key: "appStore",
      href: STORE_LINKS.appStore,
      src: "/media/thailand/badges/app-store.svg",
      label: "Download on the App Store",
    },
    {
      key: "googlePlay",
      href: STORE_LINKS.googlePlay,
      src: "/media/thailand/badges/google-play.png",
      label: "Get it on Google Play",
    },
  ]

  const anyMissing = badges.some((b) => !b.href)

  return (
    <div className={`flex flex-col ${align === "center" ? "items-center" : "items-start"}`}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {badges.map((b) =>
          b.href ? (
            <a
              key={b.key}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[10px] transition hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              <img src={b.src} alt={b.label} className={`${height} w-auto`} />
            </a>
          ) : (
            <img
              key={b.key}
              src={b.src}
              alt={`${b.label} (coming soon)`}
              className={`${height} w-auto opacity-50 grayscale`}
            />
          )
        )}
      </div>

      {anyMissing && size === "lg" && (
        <p className="mt-2 text-xs text-[#8A7B66]">Coming soon</p>
      )}
    </div>
  )
}
