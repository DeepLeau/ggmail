'use client'

import { useEffect, useRef, useState } from 'react'

export function Integrations() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [logosVisible, setLogosVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setLogosVisible(true), 200)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const partners = [
    { initials: 'NS', name: 'NetSuite', tag: 'ERP' },
    { initials: 'XR', name: 'Xero', tag: 'Accounting' },
    { initials: 'WD', name: 'Workday', tag: 'HR' },
    { initials: 'RP', name: 'Ramp', tag: 'Cards' },
    { initials: 'BX', name: 'Brex', tag: 'Cards' },
    { initials: 'ST', name: 'Stripe', tag: 'Payments' },
    { initials: 'RG', name: 'Rippling', tag: 'HR' },
    { initials: 'OK', name: 'Okta', tag: 'SSO' },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-[clamp(5.5rem,9vw,11rem)] px-[clamp(1.5rem,5vw,4rem)]"
      style={{ background: 'var(--bg)' }}
    >
      {/* Scan line */}
      <div className="scan-line absolute top-0 left-0 w-full h-[1px] pointer-events-none" style={{ background: 'rgba(255,255,255,0.10)' }} />
      <div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto text-center reveal-up" style={isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}}>
        <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] inline-block mb-4" style={{ color: 'var(--amber)' }}>[05] ECOSYSTEM</span>
        <h2 className="font-display font-light leading-[1.1] tracking-tight text-[clamp(2rem,3.5vw,3.25rem)] mb-6 mx-auto" style={{ color: 'var(--text-1)' }}>
          Connects to the stack you already use.
        </h2>
        <p className="font-body max-w-[50ch] mx-auto leading-relaxed text-sm md:text-base mb-16" style={{ color: 'var(--text-2)' }}>
          LEDGR syncs bidirectionally with your ERP, HR system, and card provider. One integration setup. Zero ongoing maintenance.
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group"
              style={{
                opacity: logosVisible ? 1 : 0,
                transform: logosVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
                transition: `opacity 0.5s ease ${i * 50}ms, transform 0.5s ease ${i * 50}ms`,
              }}
            >
              {/* Logo box */}
              <div
                className="w-20 h-20 flex items-center justify-center mb-4 relative overflow-hidden"
                style={{
                  background: 'var(--surface-1)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)'
                  el.style.borderColor = 'rgba(59,130,246,0.4)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)'
                  el.style.borderColor = 'var(--border)'
                }}
              >
                {/* Gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, transparent 60%)',
                  }}
                />
                <span
                  className="font-display font-semibold text-2xl tracking-tighter relative z-10 transition-transform duration-300"
                  style={{ color: 'var(--text-1)', fontFamily: 'var(--font-display)' }}
                >
                  {partner.initials}
                </span>
              </div>
              <span className="font-display font-medium text-sm mb-1" style={{ color: 'var(--text-1)' }}>{partner.name}</span>
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{
                  color: 'var(--text-2)',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-1)',
                  padding: '2px 8px',
                }}
              >
                {partner.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
