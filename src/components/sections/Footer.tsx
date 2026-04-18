'use client'

import { FOOTER_LINKS } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-12 lg:py-16 px-4 sm:px-6"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base font-bold tracking-tight" style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}>
                EmailMind
              </span>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
            </div>
            <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: 'var(--text-3)' }}>
              L&apos;assistant email intelligent pour les équipes commerciales et les freelances.
            </p>
          </div>

          {/* Footer links — 3 columns */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono, monospace)' }}
            >
              Produit
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="text-sm transition-colors duration-150" style={{ color: 'var(--text-2)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)' }}>
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-150" style={{ color: 'var(--text-2)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)' }}>
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-150" style={{ color: 'var(--text-2)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)' }}>
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono, monospace)' }}
            >
              Compagnie
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="#" className="text-sm transition-colors duration-150" style={{ color: 'var(--text-2)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)' }}>
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-150" style={{ color: 'var(--text-2)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)' }}>
                    Blog
                  </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-150" style={{ color: 'var(--text-2)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono, monospace)' }}
            >
              Légal
            </p>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: 'var(--text-2)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)' }}
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
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono, monospace)' }}>
            © {currentYear} EmailMind. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            {['Confidentialité', 'Conditions', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-150"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-3)' }}
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
