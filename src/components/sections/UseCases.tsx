'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, TrendingUp } from 'lucide-react'
import type { Variants } from 'framer-motion'

const USE_CASE_CARDS = [
  {
    icon: <Briefcase size={20} strokeWidth={1.5} />,
    title: 'Équipe commerciale',
    description:
      'Identifiez instantanément les leads chauds, relancez au bon moment, et ne manquez plus jamais une opportunité declosing. EmailMind suit chaque thread et vous alerte quand un contact devient actif.',
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: 'Customer Success',
    description:
      'Gardez une vue claire sur vos clients à risque. Détection automatique des signaux de désengagement etalertage proactif avant la résiliation.',
  },
  {
    icon: <TrendingUp size={20} strokeWidth={1.5} />,
    title: 'Direction générale',
    description:
      'Reporting email-driven avec KPIs synthétiques. Comprenez l\'activité commerciale de votre équipe sans avoir à fouiller dans les fils de discussion.',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export function UseCases() {
  return (
    <section
      className="py-20 lg:py-24 px-6"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
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
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            Cas d&apos;usage
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            style={{
              color: 'var(--text-1)',
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-bricolage), var(--font-inter), sans-serif',
            }}
          >
            Conçu pour chaque équipe
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: 'var(--text-2)', lineHeight: '1.7' }}
          >
            EmailMind s&apos;adapte à votre métier. Chaque équipe y trouve les réponses qu&apos;elle
            cherchait depuis des heures.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {USE_CASE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative rounded-2xl p-7 flex flex-col gap-5 cursor-default group"
              style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(99,102,241,0.2)',
                }}
              >
                <div style={{ color: 'var(--accent)' }}>{card.icon}</div>
              </div>

              {/* Title */}
              <h3
                className="text-lg font-semibold"
                style={{
                  color: 'var(--text-1)',
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-bricolage), var(--font-inter), sans-serif',
                }}
              >
                {card.title}
              </h3>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-2)', lineHeight: '1.7' }}
              >
                {card.description}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'var(--accent)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
