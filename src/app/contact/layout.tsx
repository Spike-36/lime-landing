// The contact page is a client component, so its metadata lives here
export const metadata = {
  title: 'Contact · YumWords',
  description: 'Contact YumWords for app support or general enquiries.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
