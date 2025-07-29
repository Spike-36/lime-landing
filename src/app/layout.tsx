import './globals.css'
import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google'
import ConditionalNavbar from '@/components/ConditionalNavbar'

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
  title: 'Agile Advocacy',
  description: 'Why legal tech fails — and how to fix it.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibm.variable} ${serif.variable}`}>
      <body className="font-sans">
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  )
}
