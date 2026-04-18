'use client'

import { FOOTER_LINKS } from '@/lib/data'

const NAV_PRODUCT = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Tarifs', href: '#pricing' },
  { label: 'Documentation', href: '#' },
  { label: 'Changelog', href: '#' },
]

const NAV_COMPANY = [
  { label: 'À propos', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Carrières', href: '#' },
  { label: 'Contact', href: '#' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-12 lg:py-16 px-6"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-base font-bold tracking-tight"
                style={{
                  color: 'var(--text-1)',
                  letterSpacing: '-0.02em',
                }}
              >
                EmailMind
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent)' }}
              />
            </div>
            <p
              className="text-sm leading-relaxed max-w-[220px]"
              style={{ color: 'var(--text-3)' }}
            >
              L&apos;assistant email intelligent pour les équipes commerciales et les freelances.
            </p>

            {/* Socials — SVG inline per brand icon rule */}
            <div className="flex items-center gap-3 mt-5">
              {/* Twitter/X */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-3)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(99,102,241,0.4)'
                  el.style.color = 'var(--accent)'
                  el.style.background = 'var(--accent-glow)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                  el.style.color = 'var(--text-3)'
                  el.style.background = 'rgba(255,255,255,0.04)'
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-3)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(99,102,241,0.4)'
                  el.style.color = 'var(--accent)'
                  el.style.background = 'var(--accent-glow)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                  el.style.color = 'var(--text-3)'
                  el.style.background = 'rgba(255,255,255,0.04)'
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-3)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(99,102,241,0.4)'
                  el.style.color = 'var(--accent)'
                  el.style.background = 'var(--accent-glow)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                  el.style.color = 'var(--text-3)'
                  el.style.background = 'rgba(255,255,255,0.04)'
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.38-3.87-1.38-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.77 1.06.77 2.14v3.17c0 .31.21.68.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                color: 'var(--text-3)',
                fontFamily: 'var(--font-mono), monospace',
              }}
            >
              Produit
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_PRODUCT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-3)' }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-3)'
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                color: 'var(--text-3)',
                fontFamily: 'var(--font-mono), monospace',
              }}
            >
              Compagnie
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_COMPANY.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-3)' }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-3)'
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                color: 'var(--text-3)',
                fontFamily: 'var(--font-mono), monospace',
              }}
            >
              Légal
            </p>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-3)' }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-3)'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono), monospace' }}
          >
            &copy; {currentYear} EmailMind. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            {['Confidentialité', 'Conditions', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-150"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-3)'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
