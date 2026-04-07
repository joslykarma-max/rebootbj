// app/layout.tsx
// Layout racine — fonts Google, meta, overflow:hidden, cursor:none global

import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Reboot BJ — Explorez le Bénin',
  description: "Avant de visiter le Bénin, vivez-le. Agence de tourisme premium · Cotonou, Bénin.",
  keywords: ['Bénin', 'tourisme', 'Cotonou', 'Abomey', 'Ganvié', 'Pendjari', 'safari'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
