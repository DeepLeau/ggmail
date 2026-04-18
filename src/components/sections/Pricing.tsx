'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const PLANS = [
  {
    name: 'Starter',
    price: '0',
    period: '€/mois',
    description: 'Pour découvrir EmailMind et automatiser vos premiers suivis.',
    features: [
      { text: '100 emails analysés/mois', included: true },
      { text: '10 questions/jour', included: true },
      { text: '1 boîte email connectée', included: true },
      { text: 'Résumé d\'email basique', included: true },
      { text: 'IA de détection d\'opportunité', included: false },
      { text: 'Intégrations CRM', included: false },
    ],
    cta: 'Commencer gratuitement',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '29',
    period: '€/mois',
    badge: 'Populaire',
    description: 'Pour les professionnels qui gèrent leur activité par email.',
    features: [
      { text: 'Emails illimités', included: true },
      { text: 'Questions illimitées', included: true },
      { text: '5 boîtes email connectées', included: true },
      { text: 'Cartographie relationnelle', included: true },
      { text: 'Détection d\'opportunité IA', included: true },
      { text: 'Alertes de suivi intelligent', included: true },
    ],
    cta: 'Essai gratuit 14 jours',
    highlighted: true,
  },
  {
    name: 'Équipe',
    price: '89',
    period: '€/mois',
    description: 'Pour les équipes commerciales et de relation client.',
    features: [
      { text: 'Tout illimité', included: true },
      { text: 'Utilisateurs illimités', included: true },
      { text: 'Intégrations CRM natives', included: true },
      { text: 'Reporting avancé', included: true },
      { text: 'Account manager dédié', included: true },
      { text: 'SLA 99.9%', included: true },
    ],
    cta: 'Contacter les ventes',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 lg:py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(99,102,241,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-5"
            style={{
              background: 'var(--accent-glow)',
              color: 'var(--accent)',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            Tarifs
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            style={{
              color: 'var(--text-1)',
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-bricolage), var(--font-inter), sans-serif',
            }}
          >
            Simple.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e8e3ff, #a5b4fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Transparent.
            </span>
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: 'var(--text-2)', lineHeight: '1.7' }}
          >
            Un seul critère de facturation : le volume de questions. Pas de surprise, pas de frais cachés.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.12,
              }}
              whileHover={{ y: plan.highlighted ? -8 : -4, transition: { duration: 0.25 } }}
              className={cn(
                'relative rounded-2xl p-7 flex flex-col gap-6',
                plan.highlighted ? 'md:-mt-5 md:mb-0' : ''
              )}
              style={{
                background: plan.highlighted ? '#0f0f0f' : '#111',
                border: plan.highlighted
                  ? '1px solid rgba(99,102,241,0.4)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: plan.highlighted
                  ? '0 0 48px rgba(99,102,241,0.12), 0 12px 40px rgba(0,0,0,0.4)'
                  : '0 4px 24px rgba(0,0,0,0.3)',
              }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-hi))',
                      color: '#fff',
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Top bar gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: plan.highlighted
                    ? 'linear-gradient(90deg, transparent, rgba(165,180,252,0.8), rgba(99,102,241,0.6), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)',
                }}
              />

              {/* Name */}
              <div>
                <p
                  className="text-base font-semibold mb-2"
                  style={{
                    color: 'var(--text-1)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {plan.name}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-2)', lineHeight: '1.6' }}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1.5">
                <span
                  className="text-4xl font-light tracking-tight"
                  style={{
                    color: plan.highlighted ? 'var(--accent)' : 'var(--text-1)',
                    letterSpacing: '-0.04em',
                    fontFamily: 'var(--font-bricolage), var(--font-inter), sans-serif',
                  }}
                >
                  {plan.price === '0' ? 'Gratuit' : plan.price + '€'}
                </span>
                <span className="text-sm" style={{ color: 'var(--text-3)' }}>
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: feature.included ? 'var(--text-2)' : 'var(--text-3)' }}
                  >
                    <Check
                      size={15}
                      strokeWidth={1.5}
                      className="flex-shrink-0 mt-0.5"
                      style={{
                        color: feature.included
                          ? plan.highlighted
                            ? 'var(--accent)'
                            : 'var(--green)'
                          : 'var(--text-3)',
                      }}
                    />
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={cn(
                  'h-11 px-5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center'
                )}
                style={
                  plan.highlighted
                    ? {
                        background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
                        color: '#fff',
                        boxShadow: '0 4px 16px rgba(99,102,241,0.4)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--text-1)',
                      }
                }
                onMouseEnter={(e) => {
                  const btn = e.currentTarget
                  if (plan.highlighted) {
                    btn.style.background = 'var(--accent-hi)'
                    btn.style.boxShadow = '0 6px 24px rgba(99,102,241,0.5)'
                  } else {
                    btn.style.borderColor = 'var(--accent)'
                    btn.style.color = 'var(--accent)'
                  }
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget
                  if (plan.highlighted) {
                    btn.style.background = 'linear-gradient(135deg, var(--accent), #4f46e5)'
                    btn.style.boxShadow = '0 4px 16px rgba(99,102,241,0.4)'
                  } else {
                    btn.style.borderColor = 'rgba(255,255,255,0.1)'
                    btn.style.color = 'var(--text-1)'
                  }
                }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
