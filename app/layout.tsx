import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Source_Sans_3 } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kswitch',
  description: 'Anti theft device',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={sourceSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
