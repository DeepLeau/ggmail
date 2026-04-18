'use client'

import { useId } from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden pt-20 pb-10 px-[clamp(1.5rem,5vw,4rem)]"
      style={{ background: 'var(--surface-1)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Watermark */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none leading-none mt-10"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '20vw',
          fontWeight: 300,
          color: 'var(--text-1)',
          opacity: 0.02,
          letterSpacing: '-0.05em',
        }}
      >
        LEDGR
      </div>

      <div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Links Col 1 */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest mb-2 block" style={{ color: 'rgba(240,240,245,0.5)' }}>Platform</span>
            {['Product', 'Integrations', 'Pricing', 'Changelog'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-xs w-fit transition-colors duration-150"
                style={{ color: 'rgba(240,240,245,0.7)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--amber)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,240,245,0.7)' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Links Col 2 */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest mb-2 block" style={{ color: 'rgba(240,240,245,0.5)' }}>Company</span>
            {['Customers', 'Blog', 'Careers'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-xs w-fit transition-colors duration-150"
                style={{ color: 'rgba(240,240,245,0.7)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--amber)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,240,245,0.7)' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Links Col 3 */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest mb-2 block" style={{ color: 'rgba(240,240,245,0.5)' }}>Legal</span>
            {['Privacy', 'Terms', 'DPA', 'Security'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-xs w-fit transition-colors duration-150"
                style={{ color: 'rgba(240,240,245,0.7)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--amber)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,240,245,0.7)' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Newsletter / Social */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest block" style={{ color: 'rgba(240,240,245,0.5)' }}>The Close</span>
            <p className="font-body text-xs leading-relaxed" style={{ color: 'rgba(240,240,245,0.6)' }}>
              Monthly benchmarks on finance team efficiency and expense management.
            </p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="WORK EMAIL"
                className="flex-1 px-3 py-2 font-mono text-xs placeholder:text-[rgba(240,240,245,0.3)] focus:outline-none"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRight: 'none',
                  color: 'var(--text-1)',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--accent)' }}
                onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)' }}
              />
              <button
                className="px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all"
                style={{
                  background: 'var(--amber)',
                  color: 'var(--bg)',
                  border: '1px solid #c8910f',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.1)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)' }}
              >
                Subscribe
              </button>
            </div>
            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="transition-colors duration-150"
                style={{ color: 'rgba(240,240,245,0.5)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--amber)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,240,245,0.5)' }}
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="transition-colors duration-150"
                style={{ color: 'rgba(240,240,245,0.5)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--amber)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(240,240,245,0.5)' }}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240,240,245,0.5)' }}>
            LEDGR © {currentYear}. SOC 2 Type II Certified.
          </span>
          <a
            href="#demo"
            className="font-mono text-xs uppercase tracking-widest transition-colors duration-150"
            style={{ color: 'var(--amber)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--amber)' }}
          >
            Book a demo →
          </a>
        </div>
      </div>
    </footer>
  )
}
