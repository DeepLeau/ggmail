import type { Metadata } from 'next'
import { Inter, Space_Mono, Bricolage_Grotesque } from 'next/font/google'
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

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
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
    <html
      lang="fr"
      className={`${inter.variable} ${spaceMono.variable} ${bricolageGrotesque.variable}`}
    >
      <body className="dark antialiased">{children}</body>
    </html>
  )
}
