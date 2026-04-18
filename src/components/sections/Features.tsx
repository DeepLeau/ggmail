'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const BARS = [
  { label: 'Travel', value: 80, amount: '$82,400' },
  { label: 'Software', value: 60, amount: '$61,200' },
  { label: 'Marketing', value: 45, amount: '$48,900' },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scanLine = entry.target.querySelector('.scan-line')
            if (scanLine) scanLine.classList.add('is-visible')

            const reveals = entry.target.querySelectorAll('.reveal-up')
            reveals.forEach((el) => el.classList.add('is-visible'))

            // Animate bars
            const bars = entry.target.querySelectorAll('[data-animate-width]')
            bars.forEach((bar) => {
              ;(bar as HTMLElement).style.transform = 'scaleX(1)'
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden observe-section"
      style={{ background: 'var(--surface-2)', padding: 'clamp(5.5rem, 9vw, 11rem) 0' }}
    >
      {/* Scan line */}
      <div
        className="scan-line absolute top-0 left-0 w-full h-[1px]"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      />

      {/* Marquee background text */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none font-mono font-bold text-[var(--accent)] opacity-[0.03]"
        style={{ fontSize: '12vw' }}
      >
        POLICY CHECK PASSED // RECEIPT MATCHED // APPROVAL SENT // SYNC COMPLETE //
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 px-4 sm:px-8"
        style={{ maxWidth: '96vw', margin: '0 auto' }}
      >
        {/* Left copy column */}
        <div className="lg:col-span-4 lg:col-start-2 reveal-up">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] inline-block mb-8">
            [03] LIVE VISIBILITY
          </span>
          <h2
            className="font-display font-light text-[var(--text-1)] mb-6 text-balance"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 300 }}
          >
            Real-time spend.{' '}
            <br />
            Zero surprises.
          </h2>
          <p className="font-body text-[var(--text-2)] max-w-[42ch] leading-relaxed text-sm md:text-base mb-10">
            Every transaction. Every category. Every policy exception. Live, in one view — not a report you generate on the 30th.
          </p>
          <a
            href="#demo"
            className="relative inline-flex items-center justify-center px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[var(--surface-1)] bg-[var(--accent)] shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden rounded-none"
            style={{ animation: 'glow-pulse 1.8s ease-in-out infinite' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              See Full Demo
              <ArrowRight size={16} strokeWidth={1.5} />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }} />
          </a>
        </div>

        {/* Right dashboard panel */}
        <div className="lg:col-span-7 reveal-up" style={{ transitionDelay: '200ms' }}>
          <div
            className="overflow-hidden"
            style={{
              background: 'var(--surface-1)',
              border: '1px solid var(--border-md)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
              borderRadius: 0,
            }}
          >
            {/* Metrics row */}
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{
                borderBottom: '1px solid var(--border-md)',
                background: 'var(--surface-2)',
              }}
            >
              {[
                { label: 'Total Spend', value: '$284,210' },
                { label: 'Pending', value: '$14,820', note: '(3)' },
                { label: 'Exceptions', value: '7', danger: true },
                { label: 'Missing Rcpt', value: '12', amber: true },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="p-4 group"
                  style={{ borderColor: 'var(--border-md)' }}
                >
                  <span className="block font-mono text-xs text-[var(--text-2)] uppercase tracking-widest mb-2">
                    {metric.label}
                  </span>
                  <span
                    className="font-mono text-sm sm:text-base group-hover:text-[var(--accent)] transition-colors"
                    style={{
                      color: metric.danger
                        ? 'var(--red)'
                        : metric.amber
                        ? 'var(--accent)'
                        : 'var(--text-1)',
                    }}
                  >
                    {metric.value}
                    {metric.note && (
                      <span className="text-xs text-[var(--text-2)] ml-1">
                        {metric.note}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Bar chart area */}
            <div className="p-6 md:p-8">
              <div className="space-y-4 max-w-2xl">
                {BARS.map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-[var(--text-1)]">{bar.label}</span>
                      <span className="text-[var(--text-2)]">{bar.amount}</span>
                    </div>
                    <div
                      className="h-2 overflow-hidden"
                      style={{ background: 'var(--surface-2)' }}
                    >
                      <div
                        data-animate-width=""
                        className="h-full origin-left transition-transform duration-1000"
                        style={{
                          width: `${bar.value}%`,
                          transitionDelay: `${(i + 3) * 100}ms`,
                          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                          transform: 'scaleX(0)',
                          background: 'var(--accent)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
