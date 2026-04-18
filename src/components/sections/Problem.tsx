'use client'

import { useEffect, useRef } from 'react'

const PROBLEM_CARDS = [
  {
    title: 'Receipts Without Context.',
    body: '67% of expense reports are missing required documentation. Your team finds out at review, not at submission.',
    highlight: '67%',
  },
  {
    title: 'Approval Chains That Break.',
    body: 'A policy exception at one level shouldn\'t require 3 emails and a Slack thread. But it does.',
    highlight: '3',
  },
  {
    title: 'Month-End That Takes Weeks.',
    body: 'The average finance team spends 11.4 days closing books on travel and expense alone. Every month.',
    highlight: '11.4',
  },
]

export function Problem() {
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
      className="relative observe-section"
      style={{
        padding: 'clamp(5.5rem, 9vw, 11rem) clamp(1.5rem, 5vw, 4rem)',
        background: 'var(--bg)',
      }}
    >
      {/* Scan line */}
      <div
        className="scan-line absolute top-0 left-0 w-full h-[1px]"
        style={{ background: 'var(--border-md)' }}
      />

      <div
        className="max-w-[clamp(70rem,92vw,96rem)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
      >
        {/* Left sticky column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 reveal-up">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] inline-block mb-8">
            [02] THE REALITY
          </span>
          <h2
            className="font-display font-light text-[var(--text-1)] mb-6 text-balance"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em', fontWeight: 300 }}
          >
            Spreadsheets don&apos;t close books. People do.
          </h2>
          <p className="font-body text-[var(--text-2)] max-w-[42ch] leading-relaxed text-sm md:text-base">
            At month-end, your team is manually reconciling receipts, chasing approvals, and correcting categorization errors that should never have happened. This is not a process problem. It&apos;s a visibility problem.
          </p>
        </div>

        {/* Right column — staggered cards */}
        <div className="lg:col-span-7 flex flex-col gap-4 mt-8 lg:mt-0">
          {PROBLEM_CARDS.map((card, i) => (
            <div
              key={i}
              className="relative group reveal-up"
              style={{
                transitionDelay: `${(i + 1) * 100}ms`,
                marginLeft: '0',
                padding: 'clamp(1.75rem, 2.5vw, 2.5rem)',
                background: 'var(--surface-1)',
                border: '1px solid var(--border-md)',
              }}
            >
              {/* Amber left border on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"
                style={{ background: 'var(--amber)' }}
              />

              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-1)] mb-4">
                {card.title}
              </h3>
              <p className="font-body text-sm text-[var(--text-2)] leading-relaxed max-w-[50ch]">
                <span className="font-mono text-[var(--amber)] text-sm mr-1 group-hover:text-[var(--accent)] transition-colors">
                  {card.highlight}
                </span>
                {card.body.replace(card.highlight, '')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
