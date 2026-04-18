'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'

export function CTABanner() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scanDone, setScanDone] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setScanDone(true), 400)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-[clamp(5.5rem,9vw,11rem)] px-[clamp(1.5rem,5vw,4rem)] flex justify-center"
      style={{ background: 'var(--bg)' }}
    >
      <div
        className="max-w-2xl w-full relative reveal-up"
        style={{
          ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}),
          background: 'var(--surface-1)',
          border: '1px solid var(--border-md)',
          padding: 'clamp(2rem,4vw,3rem)',
        }}
      >
        {/* Top scan line — amber sweep on box */}
        <div
          className="absolute top-0 left-0 h-[2px] origin-left"
          style={{
            width: '100%',
            background: 'var(--amber)',
            transform: scanDone ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: scanDone ? '0s' : '0.3s',
          }}
        />

        <div className="text-center mb-10">
          <h2 className="font-display font-light tracking-tight text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-1)' }}>
            See LEDGR on your numbers.
          </h2>
          <p className="font-body text-sm leading-relaxed max-w-md mx-auto" style={{ color: 'var(--text-2)' }}>
            <span className="font-mono" style={{ color: 'var(--text-1)' }}>30</span>-minute demo with a LEDGR implementation specialist. We&apos;ll walk through your current close process and show you exactly where time is lost.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full px-4 py-3 font-mono text-xs placeholder:text-[rgba(136,136,160,0.5)] focus:outline-none"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-md)',
                color: 'var(--text-1)',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--accent)' }}
              onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-md)' }}
            />
            <input
              type="email"
              placeholder="WORK EMAIL"
              className="w-full px-4 py-3 font-mono text-xs placeholder:text-[rgba(136,136,160,0.5)] focus:outline-none"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-md)',
                color: 'var(--text-1)',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--accent)' }}
              onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-md)' }}
            />
          </div>

          <div className="relative">
            <select
              className="w-full px-4 py-3 font-mono text-xs appearance-none cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-md)',
                color: 'var(--text-1)',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = 'var(--accent)' }}
              onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = 'var(--border-md)' }}
            >
              <option value="" disabled selected style={{ color: 'rgba(136,136,160,0.5)' }}>COMPANY SIZE</option>
              <option value="10-50">10–50 EMPLOYEES</option>
              <option value="51-200">51–200 EMPLOYEES</option>
              <option value="201-500">201–500 EMPLOYEES</option>
              <option value="500+">500+ EMPLOYEES</option>
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--text-2)' }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          <button
            type="submit"
            className="relative w-full py-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] overflow-hidden group"
            style={{
              background: 'var(--accent)',
              color: '#ffffff',
              boxShadow: '0 4px 20px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '1rem',
              transition: 'all 0.3s ease',
              animation: 'glow-pulse 2s ease-in-out infinite',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 32px rgba(59,130,246,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 4px 20px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2" style={{ color: '#ffffff' }}>
              Book My Demo <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </span>
          </button>

          <p className="font-mono text-xs text-center uppercase tracking-widest mt-4" style={{ color: 'var(--text-2)' }}>
            No sales pitch. No obligation. Response within <span className="font-semibold" style={{ color: 'var(--text-1)' }}>4</span> business hours.
          </p>
        </form>
      </div>
    </section>
  )
}
