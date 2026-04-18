'use client'

import { useId } from 'react'
import { AnimatedCanopy } from '@/components/ui/AnimatedCanopy'
import { TESTIMONIALS } from '@/lib/data'

function TestimonialCard({
  quote,
  name,
  role,
  initials,
  accentColor,
}: {
  quote: string
  name: string
  role: string
  initials: string
  accentColor: string
}) {
  return (
    <div
      className="flex-shrink-0 w-[380px] p-6 rounded-2xl flex flex-col gap-4"
      style={{
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="#f59e0b"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-2)', lineHeight: '1.7' }}
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: accentColor + '20', color: accentColor }}
        >
          {initials}
        </div>
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: 'var(--text-1)' }}
          >
            {name}
          </p>
          <p
            className="text-xs"
            style={{ color: 'var(--text-3)' }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const id = useId()
  const accentColors = ['#2563eb', '#7c3aed', '#2563eb']

  return (
    <section
      className="py-20 lg:py-24 overflow-hidden"
      style={{ background: 'var(--surface-1)' }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-14">
        <div className="text-center">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest mb-5"
            style={{
              background: 'var(--accent-glow)',
              color: 'var(--accent)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            Témoignages
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.025em' }}
          >
            Ce que nos utilisateurs ont arrêté de rater
          </h2>
        </div>
      </div>

      {/* Triple Marquee */}
      <div
        key={id}
        className="relative flex flex-col gap-4"
      >
        {/* Gradient mask left */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
          style={{
            background:
              'linear-gradient(to right, var(--surface-1), transparent)',
          }}
        />
        {/* Gradient mask right */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
          style={{
            background:
              'linear-gradient(to left, var(--surface-1), transparent)',
          }}
        />

        {/* Row 1 */}
        <AnimatedCanopy reverse={false} pauseOnHover>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={`r1-${i}`}
              {...t}
              accentColor={accentColors[i % accentColors.length]}
            />
          ))}
        </AnimatedCanopy>

        {/* Row 2 */}
        <AnimatedCanopy reverse={true} pauseOnHover>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={`r2-${i}`}
              {...t}
              accentColor={accentColors[(i + 1) % accentColors.length]}
            />
          ))}
        </AnimatedCanopy>

        {/* Row 3 */}
        <AnimatedCanopy reverse={false} pauseOnHover>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={`r3-${i}`}
              {...t}
              accentColor={accentColors[(i + 2) % accentColors.length]}
            />
          ))}
        </AnimatedCanopy>
      </div>
    </section>
  )
}
