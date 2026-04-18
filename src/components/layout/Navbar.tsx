'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Customers', href: '#customers' },
  ]

  return (
    <nav
      id="navbar"
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        'bg-transparent border-b border-transparent',
        scrolled && 'bg-[var(--surface-1)]/80 backdrop-blur-md border-[var(--border-md)]'
      )}
      style={{ padding: '0 clamp(1.5rem, 5vw, 4rem)' }}
    >
      <div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto flex items-center justify-between h-[60px]">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-semibold text-xl tracking-[0.04em] text-[var(--text-1)] uppercase"
        >
          Ledgr
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-2)] hover:text-[var(--accent)] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[var(--accent)] transition-all duration-200 group-hover:w-full group-hover:left-0 origin-center" />
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#demo"
          className="hidden md:inline-flex relative items-center justify-center px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-1)] bg-[var(--accent)] shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden rounded-none"
          style={{ animation: 'glow-pulse 1.8s ease-in-out infinite' }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Request Demo
            <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }} />
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[var(--text-1)]" aria-label="Open menu">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  )
}
