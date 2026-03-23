'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function ConditionalNavbar() {
  const pathname = usePathname()
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    // Hide navbar on specific minimal pages
    const hiddenRoutes = ['/', '/privacy', '/thanks']
    setShouldShow(!hiddenRoutes.includes(pathname))
  }, [pathname])

  return shouldShow ? <Navbar /> : null
}
