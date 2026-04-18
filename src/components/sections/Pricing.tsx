'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PRICING_PLANS } from '@/lib/data'
import { cn } from '@/lib/utils'
import type { Variants } from 'framer-motion'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: i * 0.12,
    },
  }),
}

export function Pricing() {
  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest mb-5"
            style={{
              background: 'var(--violet-dim)',
              color: 'var(--violet)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--violet)' }} />
            Tarifs
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.025em' }}
          >
            Simple. Transparent.
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
            Un seul critère de facturation : le volume de questions. Pas de surprise, pas de frais cachés.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className={cn('relative rounded-2xl p-7 flex flex-col gap-6', plan.highlighted ? 'md:-mt-5 md:mb-0' : '')}
              style={{
                background: plan.highlighted ? 'var(--bg)' : 'var(--surface-1)',
                border: plan.highlighted ? '2px solid var(--accent)' : '1px solid var(--border)',
                boxShadow: plan.highlighted ? '0 12px 40px rgba(37, 99, 235, 0.15)' : '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: 'var(--accent)' }}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Name */}
              <div>
                <p className="text-base font-semibold mb-2" style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}>
                  {plan.name}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-2)', lineHeight: '1.6' }}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1.5">
                <span
                  className="text-4xl font-bold tracking-tight"
                  style={{ color: plan.highlighted ? 'var(--accent)' : 'var(--text-1)', letterSpacing: '-0.03em' }}
                >
                  {plan.price}
                </span>
                <span className="text-sm" style={{ color: 'var(--text-3)' }}>
                  /mois
                </span>
              </div>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: 'var(--border)' }} />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-2)' }}>
                    <Check
                      size={15}
                      strokeWidth={1.5}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: plan.highlighted ? 'var(--accent)' : 'var(--green)' }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={cn(
                  'h-10 px-5 rounded-xl text-sm font-medium transition-all duration-200',
                  plan.highlighted ? 'text-white' : 'border'
                )}
                style={
                  plan.highlighted
                    ? { background: 'var(--accent)', boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)' }
                    : { background: 'var(--bg)', border: '1px solid var(--border-md)', color: 'var(--text-1)' }
                }
                onMouseEnter={(e) => {
                  const btn = e.currentTarget
                  if (plan.highlighted) {
                    btn.style.background = 'var(--accent-hi)'
                    btn.style.boxShadow = '0 6px 24px rgba(37, 99, 235, 0.4)'
                  } else {
                    btn.style.borderColor = 'var(--accent)'
                    btn.style.color = 'var(--accent)'
                  }
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget
                  if (plan.highlighted) {
                    btn.style.background = 'var(--accent)'
                    btn.style.boxShadow = '0 4px 16px rgba(37, 99, 235, 0.3)'
                  } else {
                    btn.style.borderColor = 'var(--border-md)'
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
