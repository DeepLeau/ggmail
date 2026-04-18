'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

const STATS = [
  { value: 2.1, decimals: 1, suffix: 'B', label: 'Spend under management.' },
  { value: 340, decimals: 0, suffix: '', label: 'Finance teams trust LEDGR.' },
  { value: 4.2, decimals: 1, suffix: ' days', label: 'Average month-close time.' },
  { value: 99.97, decimals: 2, suffix: '%', label: 'Uptime. Not rounded.' },
]

function animateCounter(el: HTMLElement, target: number, decimals: number, duration: number = 2400) {
  const start = performance.now()
  function update(currentTime: number) {
    const elapsed = currentTime - start
    const progress = Math.min(elapsed / duration, 1)
    const easeProgress = 1 - Math.pow(1 - progress, 3)
    const currentVal = (target * easeProgress).toFixed(decimals)
    el.textContent = decimals === 0
      ? parseInt(currentVal).toLocaleString()
      : parseFloat(currentVal).toFixed(decimals)
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      el.textContent = target.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    }
  }
  requestAnimationFrame(update)
}

export function LogoStrip() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Scan line
            const scanLine = entry.target.querySelector('.scan-line')
            if (scanLine) scanLine.classList.add('is-visible')

            // Counters
            const counters = entry.target.querySelectorAll('.counter-value')
            counters.forEach((counter) => {
              if (!counter.hasAttribute('data-animated')) {
                const target = parseFloat(counter.getAttribute('data-target') || '0')
                const decimals = parseInt(counter.getAttribute('data-decimals') || '0')
                animateCounter(counter as HTMLElement, target, decimals)
                counter.setAttribute('data-animated', 'true')
              }
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
      className="w-full relative border-y observe-section"
      style={{ borderColor: 'var(--border-md)', background: 'var(--bg)' }}
    >
      {/* Scan line */}
      <div
        className="scan-line absolute top-0 left-0 w-full h-[1px]"
        style={{ background: 'var(--border-hi)' }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full"
        style={{ borderColor: 'var(--border-md)' }}>
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="p-8 lg:p-12 flex flex-col justify-center group"
            style={{ borderColor: 'var(--border-md)' }}
          >
            <span
              className="font-mono text-3xl md:text-4xl font-medium text-[var(--text-1)] mb-2 group-hover:text-[var(--accent)] group-hover:-translate-y-1 transition-all duration-300"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              $<span
                className="counter-value"
                data-target={stat.value}
                data-decimals={stat.decimals}
              >
                0{stat.decimals > 0 ? '.0' : ''}
              </span>
              {stat.suffix}
            </span>
            <span className="font-body text-xs text-[var(--text-2)] uppercase tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
