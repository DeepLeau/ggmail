'use client'

import { useId } from 'react'
import { AnimatedCanopy } from '@/components/ui/AnimatedCanopy'

const TESTIMONIALS = [
  {
    name: 'Thomas Leclerc',
    role: 'CEO · Nexa Consulting',
    quote: 'J\'ai récupéré 3 heures par semaine sur ma gestion email. Mon chiffre d\'affaires a augmenté de 18% en 2 mois grâce aux relances opportunes.',
    initials: 'TL',
    color: '#6366f1',
  },
  {
    name: 'Marie Dubois',
    role: 'Directrice Commerciale · SoftPro',
    quote: 'Avant, je répondais aux urgences. Maintenant, je suis proactive. EmailMind m\'a appris à prioriser.',
    initials: 'MD',
    color: '#a5b4fc',
  },
  {
    name: 'Antoine Moreau',
    role: 'Fondateur · GrowthLab',
    quote: 'J\'ai réduit mon temps de réponse moyen de 4h à 45min. Mes clients sont plus satisfaits, mon pipeline se remplit mieux.',
    initials: 'AM',
    color: '#818cf8',
  },
  {
    name: 'Claire Fontaine',
    role: 'VP Customer Success · Qonto',
    quote: 'EmailMind a transformé notre façon de gérer les accounts. On détecte les signaux de churn 3 semaines à l\'avance maintenant.',
    initials: 'CF',
    color: '#6366f1',
  },
  {
    name: 'Julien Morel',
    role: 'Account Executive · Spendesk',
    quote: 'Je ne comprends pas comment je faisais avant. Chaque email est maintenant une occasion de avancer un deal.',
    initials: 'JM',
    color: '#a5b4fc',
  },
]

function TestimonialCard({
  name,
  role,
  quote,
  initials,
  color,
}: {
  name: string
  role: string
  quote: string
  initials: string
  color: string
}) {
  return (
    <div
      className="flex-shrink-0 w-[360px] p-6 rounded-2xl flex flex-col gap-4"
      style={{
        background: '#111',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#facc15">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-2)', lineHeight: '1.7' }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: color + '20', color }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>
            {name}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-3)' }}>
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const id = useId()
  const accentColors = ['#6366f1', '#a5b4fc', '#818cf8']

  return (
    <section
      className="py-20 lg:py-24 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-5"
            style={{
              background: 'var(--accent-glow)',
              color: 'var(--accent)',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            Témoignages
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight"
            style={{
              color: 'var(--text-1)',
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-bricolage), var(--font-inter), sans-serif',
            }}
          >
            Ce que nos utilisateurs ont{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e8e3ff, #a5b4fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              arrêté de rater
            </span>
          </h2>
        </div>
      </div>

      {/* Triple marquee */}
      <div className="relative flex flex-col gap-4">
        {/* Gradient masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
          style={{
            background: 'linear-gradient(to right, var(--bg), transparent)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
          style={{
            background: 'linear-gradient(to left, var(--bg), transparent)',
          }}
        />

        {/* Row 1 */}
        <AnimatedCanopy reverse={false} pauseOnHover>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={`r1-${i}`}
              name={t.name}
              role={t.role}
              quote={t.quote}
              initials={t.initials}
              color={accentColors[i % accentColors.length]}
            />
          ))}
        </AnimatedCanopy>

        {/* Row 2 */}
        <AnimatedCanopy reverse={true} pauseOnHover>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={`r2-${i}`}
              name={t.name}
              role={t.role}
              quote={t.quote}
              initials={t.initials}
              color={accentColors[(i + 1) % accentColors.length]}
            />
          ))}
        </AnimatedCanopy>

        {/* Row 3 */}
        <AnimatedCanopy reverse={false} pauseOnHover>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={`r3-${i}`}
              name={t.name}
              role={t.role}
              quote={t.quote}
              initials={t.initials}
              color={accentColors[(i + 2) % accentColors.length]}
            />
          ))}
        </AnimatedCanopy>
      </div>
    </section>
  )
}
