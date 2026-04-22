// app/layout.tsx
import type { Metadata } from 'next'
import { Bangers, Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/AuthProvider'

const bangers = Bangers({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bangers',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Reboot BJ — Découvrez le Bénin',
  description: 'Histoire millénaire, culture Vodoun, nature sauvage. Le Bénin autrement. Agence de tourisme premium · Cotonou.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bangers.variable} ${cormorant.variable} ${dmSans.variable}`}>
      <body><AuthProvider>{children}</AuthProvider></body>
    </html>
  )
}
