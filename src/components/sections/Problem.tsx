'use client'

import { motion } from 'framer-motion'
import { Mail, Clock, TrendingDown } from 'lucide-react'
import { PROBLEM_BLOCKS } from '@/lib/data'
import type { Variants } from 'framer-motion'

const ICON_MAP: Record<string, React.ReactNode> = {
  Mail: <Mail size={22} strokeWidth={1.5} style={{ color: 'var(--accent)' }} />,
  Clock: <Clock size={22} strokeWidth={1.5} style={{ color: 'var(--orange)' }} />,
  TrendingDown: <TrendingDown size={22} strokeWidth={1.5} style={{ color: 'var(--red)' }} />,
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Problem() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          {/* Section tag */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest mb-5"
            style={{
              background: 'rgba(99,102,241,0.1)',
              color: 'var(--accent-hi)',
              border: '1px solid rgba(99,102,241,0.2)',
              fontFamily: 'var(--font-mono), monospace',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            Le problème
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{
              color: 'var(--text-1)',
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-bricolage), sans-serif',
            }}
          >
            Chaque jour, votre équipe perd 2h sur des emails
          </h2>
          <p
            className="mt-4 text-base max-w-lg mx-auto"
            style={{ color: 'var(--text-2)', lineHeight: 1.7 }}
          >
            Boîte de réception saturée, réponses trop lentes,
            opportunités manquées. Le problème empire chaque trimestre.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {PROBLEM_BLOCKS.map((block) => (
            <motion.div
              key={block.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 flex flex-col gap-4 cursor-default"
              style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow =
                  '0 16px 48px rgba(0,0,0,0.4), 0 0 24px rgba(99,102,241,0.08)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {ICON_MAP[block.icon]}
              </div>
              <div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{
                    color: 'var(--text-1)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {block.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-2)' }}
                >
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
