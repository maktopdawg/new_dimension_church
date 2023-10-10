import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: '400', subsets: ['devanagari', 'latin', 'latin-ext']})

export const metadata: Metadata = {
  title: 'New Dimension Church',
  description: 'Transforming Lives',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
