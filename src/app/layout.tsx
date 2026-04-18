import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EmailMind — Posez une question, votre email répond',
  description:
    'EmailMind cartographie vos conversations email et révèle les opportunités, contacts clés et actions prioritaires — sans fouiller un seul thread.',
  openGraph: {
    title: 'EmailMind — Posez une question, votre email répond',
    description:
      'Cartographiez vos conversations et révélez les opportunités business cachées dans votre boîte mail.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
