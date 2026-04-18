'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-base font-semibold text-[var(--text-1)] tracking-tight"
        >
          EmailMind
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: 'Fonctionnalités', href: '#features' },
            { label: 'Tarifs', href: '#pricing' },
            { label: 'Documentation', href: '#' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 h-8 flex items-center justify-center text-sm text-[var(--text-2)] hover:text-[var(--text-1)] rounded-md hover:bg-[var(--surface-1)] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors px-3 h-8 flex items-center justify-center"
          >
            Se connecter
          </a>
          <a
            href="#"
            className="h-8 px-4 flex items-center justify-center rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hi)] text-white text-sm font-medium transition-colors duration-150"
          >
            Essayer gratuitement
          </a>
        </div>
      </div>
    </header>
  )
}
