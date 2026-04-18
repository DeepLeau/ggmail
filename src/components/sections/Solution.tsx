'use client'

import { motion } from 'framer-motion'
import { Plug, MessageCircle, Zap, ArrowRight } from 'lucide-react'
import { SOLUTION_STEPS } from '@/lib/data'
import type { Variants } from 'framer-motion'

const STEP_ICONS: Record<string, React.ReactNode> = {
  Plug: <Plug size={22} strokeWidth={1.5} className="text-white" />,
  MessageCircle: <MessageCircle size={22} strokeWidth={1.5} className="text-white" />,
  Zap: <Zap size={22} strokeWidth={1.5} className="text-white" />,
}

const STEP_COLORS = ['bg-[var(--accent)]', 'bg-[var(--violet)]', 'bg-[var(--green)]']

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Solution() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-1)] tracking-tight">
            EmailMind lit tout. Vous demandez. Il répond.
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          {SOLUTION_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="flex flex-col items-center text-center max-w-[240px]"
            >
              {/* Step indicator */}
              <div className="flex flex-col items-center gap-3">
                {/* Circle icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${STEP_COLORS[index]} flex items-center justify-center shadow-md`}
                >
                  {STEP_ICONS[step.icon]}
                </div>

                {/* Step label */}
                <div className="text-xs font-mono text-[var(--text-3)] uppercase tracking-widest">
                  {step.step}
                </div>

                {/* Title & desc */}
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-1)] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector arrow */}
              {index < SOLUTION_STEPS.length - 1 && (
                <div className="hidden md:flex items-center justify-center mt-6">
                  <ArrowRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-[var(--border-md)]"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
