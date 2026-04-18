'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Plane, Monitor, Bell, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ── Ambient Orbs ── */
const Orb = ({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) => (
  <div
    className={cn('absolute rounded-full pointer-events-none blur-[80px]', className)}
    style={style}
  />
)

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reveal hero elements immediately
    const reveals = document.querySelectorAll('.reveal-up')
    setTimeout(() => {
      reveals.forEach((el) => el.classList.add('is-visible'))
    }, 100)

    // Parallax on hero panel
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY < window.innerHeight && panelRef.current) {
        const yPos = scrollY * -0.05
        panelRef.current.style.transform = `translateY(${yPos}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-end overflow-hidden"
      style={{ background: 'var(--bg)', paddingTop: '120px', paddingBottom: 'clamp(5.5rem, 9vw, 11rem)', paddingLeft: 'clamp(1.5rem, 5vw, 4rem)', paddingRight: 'clamp(1.5rem, 5vw, 4rem)' }}
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            'radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.08)_0%,transparent_55%), radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.06)_0%,transparent_50%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            'radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.06)_0%,transparent_60%)',
        }}
      />

      {/* Floating orbs */}
      <Orb
        className="w-[400px] h-[400px]"
        style={{
          background: 'rgba(59,130,246,0.12)',
          top: '10%',
          left: '5%',
          animation: 'orb-float-1 8s ease-in-out infinite alternate',
        }}
      />
      <Orb
        className="w-[300px] h-[300px]"
        style={{
          background: 'rgba(139,92,246,0.10)',
          top: '5%',
          right: '10%',
          animation: 'orb-float-2 10s ease-in-out infinite alternate',
        }}
      />
      <Orb
        className="w-[200px] h-[200px]"
        style={{
          background: 'rgba(59,130,246,0.08)',
          bottom: '20%',
          right: '30%',
          animation: 'orb-float-3 7s ease-in-out infinite alternate',
        }}
      />

      {/* Hero scan sweep */}
      <div
        className="absolute top-0 left-0 w-[1px] h-full opacity-0 z-10 pointer-events-none"
        style={{ background: 'var(--accent)', animation: 'scanSweep 2s linear forwards' }}
      />

      {/* Main content grid */}
      <div
        className="w-full max-w-[clamp(70rem,92vw,96rem)] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 items-end"
      >
        {/* Left column (5) */}
        <div className="md:col-span-5 flex flex-col justify-end pb-8 reveal-up">
          <h1
            className="font-display font-light leading-[1.05] tracking-tight text-[var(--text-1)] mb-6 text-balance"
            style={{ fontSize: 'clamp(2.75rem, 5.5vw, 5.25rem)', fontWeight: 300 }}
          >
            Every dollar your company spends.{' '}
            <br />
            <span className="font-normal text-[var(--accent)]">Visible.</span>
          </h1>
          <p
            className="font-body text-[var(--text-2)] max-w-[42ch] mb-10 leading-relaxed text-sm md:text-base"
          >
            LEDGR gives finance teams real-time visibility into company spend — categorized, approved, and reconciled before the month closes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
            {/* Primary CTA */}
            <a
              href="#demo"
              className="relative inline-flex items-center justify-center px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-1)] bg-[var(--surface-1)] border border-[var(--border-md)] shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden rounded-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Demo
                <Calendar size={16} strokeWidth={1.5} />
              </span>
              <div
                className="absolute inset-0 bg-[var(--accent)] opacity-0 hover:opacity-10 transition-opacity duration-300"
              />
            </a>
            {/* Secondary CTA */}
            <a
              href="#product"
              className="inline-flex items-center justify-center px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-1)] bg-[var(--bg)] border border-[var(--border-md)] shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-300 group rounded-none"
            >
              See it live
              <Play
                size={16}
                strokeWidth={1.5}
                className="ml-2 text-[var(--text-2)] group-hover:text-[var(--accent)] transition-colors"
              />
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex items-center gap-4 border-t pt-6"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="flex -space-x-2">
              <div
                className="w-8 h-8 rounded-none"
                style={{ background: 'var(--surface-2)', border: '1px solid var(--bg)' }}
              />
              <div
                className="w-8 h-8 rounded-none"
                style={{ background: 'var(--text-3)', border: '1px solid var(--bg)' }}
              />
              <div
                className="w-8 h-8 rounded-none"
                style={{ background: 'var(--accent)', border: '1px solid var(--bg)' }}
              />
            </div>
            <p className="font-mono text-xs tracking-[0.06em] text-[var(--text-2)] uppercase leading-tight max-w-[200px]">
              Trusted by{' '}
              <span className="text-[var(--text-1)] font-semibold">340</span> finance teams.
              <br />
              <span className="text-[var(--text-1)] font-semibold">$2.1B</span> in spend under management.
            </p>
          </div>
        </div>

        {/* Right column (7) — Dashboard Panel */}
        <div
          ref={panelRef}
          className="md:col-span-7 relative md:-ml-6 reveal-up"
          style={{ transitionDelay: '200ms' }}
        >
          <div
            className="border overflow-hidden relative group"
            style={{
              background: 'var(--surface-1)',
              borderColor: 'var(--border-md)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
              borderRadius: 0,
            }}
          >
            {/* Dashboard header */}
            <div
              className="px-6 py-4 flex justify-between items-center"
              style={{
                borderBottom: '1px solid var(--border-md)',
                background: 'rgba(17,17,24,0.8)',
              }}
            >
              <div className="flex items-center gap-6">
                <span className="font-display font-semibold text-sm uppercase tracking-tight text-[var(--text-1)]">
                  LEDGR
                </span>
                <div className="hidden sm:flex items-center gap-4">
                  <span className="font-mono text-xs tracking-[0.1em] text-[var(--text-1)] uppercase flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5"
                      style={{ background: 'var(--accent)' }}
                    />
                    Overview
                  </span>
                  <span className="font-mono text-xs tracking-[0.1em] text-[var(--text-2)] uppercase hover:text-[var(--text-1)] cursor-pointer transition-colors">
                    Expenses
                  </span>
                  <span className="font-mono text-xs tracking-[0.1em] text-[var(--text-2)] uppercase hover:text-[var(--text-1)] cursor-pointer transition-colors">
                    Approvals
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Bell
                  size={18}
                  strokeWidth={1.5}
                  className="text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors cursor-pointer"
                />
                <div
                  className="flex items-center gap-2 border-l pl-4"
                  style={{ borderColor: 'var(--border-md)' }}
                >
                  <div
                    className="w-6 h-6 text-[var(--text-1)] flex items-center justify-center font-mono text-xs font-semibold"
                    style={{ background: 'var(--text-3)' }}
                  >
                    AC
                  </div>
                  <span className="font-mono text-xs text-[var(--text-2)] hidden sm:block">
                    Aria Chen, CFO
                  </span>
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6" style={{ background: 'var(--surface-1)' }}>
              {/* Top bar */}
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="font-display font-normal text-lg mb-1 text-[var(--text-1)]">
                    Company Spend
                  </h3>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-xs text-[var(--text-2)] border px-2 py-0.5"
                      style={{ borderColor: 'var(--border-md)' }}
                    >
                      Nov 1–30, 2025
                    </span>
                    <span
                      className="font-mono text-xs text-[var(--accent)] px-2 py-0.5"
                      style={{ background: 'rgba(59,130,246,0.1)' }}
                    >
                      -4.2% vs Oct
                    </span>
                  </div>
                </div>
                <div
                  className="text-right group-hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <span className="block font-mono text-xs text-[var(--text-2)] mb-1 uppercase tracking-[0.06em]">
                    Total Spend
                  </span>
                  <span
                    className="font-mono text-2xl font-medium text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors"
                  >
                    $284,210.00
                  </span>
                </div>
              </div>

              {/* Spark cards grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Travel card */}
                <div
                  className="border p-4 hover:border-[var(--accent)] transition-colors cursor-pointer group/card flex justify-between items-start"
                  style={{ borderColor: 'var(--border-md)' }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Plane
                        size={16}
                        strokeWidth={1.5}
                        className="text-[var(--text-2)]"
                      />
                      <span className="font-display font-medium text-sm text-[var(--text-1)]">
                        Travel
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-2)] uppercase">
                      Current Month
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-[var(--green)] mb-2 block">
                      ↓ 12%
                    </span>
                    <span className="font-mono text-sm font-medium text-[var(--text-1)] group-hover/card:text-[var(--accent)] transition-colors">
                      $82,400
                    </span>
                  </div>
                </div>

                {/* Software card */}
                <div
                  className="border p-4 hover:border-[var(--accent)] transition-colors cursor-pointer group/card flex justify-between items-start"
                  style={{ borderColor: 'var(--border-md)' }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Monitor
                        size={16}
                        strokeWidth={1.5}
                        className="text-[var(--text-2)]"
                      />
                      <span className="font-display font-medium text-sm text-[var(--text-1)]">
                        Software
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-2)] uppercase">
                      Current Month
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-[var(--red)] mb-2 block">
                      ↑ 4%
                    </span>
                    <span className="font-mono text-sm font-medium text-[var(--text-1)] group-hover/card:text-[var(--accent)] transition-colors">
                      $61,200
                    </span>
                  </div>
                </div>
              </div>

              {/* Transactions list */}
              <div>
                <span
                  className="font-mono text-xs text-[var(--text-2)] uppercase tracking-[0.1em] border-b pb-2 block w-full mb-2"
                  style={{ borderColor: 'var(--border-md)' }}
                >
                  Recent Transactions
                </span>
                <div className="space-y-1">
                  {[
                    { dot: 'var(--green)', name: 'Delta Airlines', tag: 'Travel', amount: '$1,240.50' },
                    { dot: 'var(--amber)', name: 'AWS', tag: 'Software', amount: '$8,420.00', danger: false },
                    { dot: 'var(--red)', name: 'The Ritz-Carlton', tag: 'Meals', amount: '$840.00', danger: true },
                  ].map((tx, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2 px-2 hover:bg-[var(--surface-2)] transition-colors text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-none"
                          style={{ background: tx.dot }}
                        />
                        <span className="font-medium min-w-[120px] text-[var(--text-1)]">
                          {tx.name}
                        </span>
                        <span
                          className="font-mono text-xs text-[var(--text-2)] hidden sm:inline-block border px-1"
                          style={{ borderColor: 'var(--border-md)' }}
                        >
                          {tx.tag}
                        </span>
                      </div>
                      <span
                        className={cn(
                          'font-mono font-medium',
                          tx.danger ? 'text-[var(--red)]' : 'text-[var(--text-1)]'
                        )}
                      >
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div
              className="py-2 px-6 flex justify-between items-center"
              style={{ background: 'var(--surface-2)' }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-none animate-pulse"
                  style={{ background: 'var(--green)' }}
                />
                <span className="font-mono text-xs text-[var(--text-2)] uppercase tracking-[0.1em]">
                  All systems operational
                </span>
              </div>
              <span className="font-mono text-xs text-[var(--text-3)] uppercase tracking-[0.1em]">
                Last sync: 14s ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
