'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-base font-semibold tracking-tight"
          style={{ color: 'var(--text-1)', fontFamily: 'var(--font-bricolage), sans-serif' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
          EmailMind
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 h-8 flex items-center justify-center text-sm transition-colors duration-150 rounded-md"
              style={{ color: 'var(--text-2)' }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-1)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm transition-colors px-3 h-8 flex items-center justify-center"
            style={{ color: 'var(--text-2)' }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = 'var(--text-1)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
            }}
          >
            Se connecter
          </a>
          <a
            href="#"
            className="h-8 px-4 flex items-center justify-center rounded-full text-white text-sm font-medium transition-all duration-150"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 0 16px rgba(99,102,241,0.3)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'var(--accent-hi)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(99,102,241,0.5)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'var(--accent)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(99,102,241,0.3)'
            }}
          >
            Commencer
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={18} style={{ color: 'var(--text-1)' }} />
          ) : (
            <Menu size={18} style={{ color: 'var(--text-1)' }} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/[0.06]"
          style={{ background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(24px)' }}
        >
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 h-10 flex items-center text-sm rounded-md"
                style={{ color: 'var(--text-2)' }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
              <a href="#" className="h-9 flex items-center justify-center text-sm rounded-md" style={{ color: 'var(--text-2)', border: '1px solid var(--border-md)' }}>
                Se connecter
              </a>
              <a
                href="#"
                className="h-9 flex items-center justify-center rounded-md text-white text-sm font-medium"
                style={{ background: 'var(--accent)' }}
              >
                Commencer
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
