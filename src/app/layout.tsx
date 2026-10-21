import './globals.css'
import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google'
import { SITE_URL } from '@/lib/site'

const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm',
  display: 'swap',
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'YumWords',
  description:
    'YumWords helps you discover the food of Thailand: dishes, ingredients and the Thai words behind them.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibm.variable} ${serif.variable}`}>
      <head>
        {/* Material Symbols (for volume_up icon) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
