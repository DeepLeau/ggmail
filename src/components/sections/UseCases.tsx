'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { USE_CASES } from '@/lib/data'
import type { Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function UseCases() {
  return (
    <section
      className="py-20 lg:py-24 px-4 sm:px-6"
      style={{ background: 'var(--surface-1)' }}
    >
      <div className="max-w-6xl mx-auto">
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
            Cas d&apos;usage
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.025em' }}
          >
            Des réponses que vous cherchiez
            <br className="hidden sm:block" /> depuis des heures
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
            EmailMind répond à vos questions métier en quelques secondes, avec le contexte exact de vos conversations.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {USE_CASES.map((uc, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative rounded-2xl p-6 flex flex-col gap-4 cursor-default group"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--violet-dim)' }}
              >
                <MessageCircle size={18} strokeWidth={1.5} style={{ color: 'var(--violet)' }} />
              </div>

              {/* Question */}
              <p
                className="text-base font-semibold leading-snug"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.01em' }}
              >
                {uc.question}
              </p>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: 'var(--border)' }} />

              {/* Answer */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                {uc.answer}
              </p>

              {/* Subtle hover accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'var(--violet)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
