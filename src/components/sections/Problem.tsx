'use client'

import { motion } from 'framer-motion'
import { Mail, Search, Clock } from 'lucide-react'
import { PROBLEM_BLOCKS } from '@/lib/data'
import type { Variants } from 'framer-motion'

const ICON_MAP: Record<string, React.ReactNode> = {
  Mail: <Mail size={22} strokeWidth={1.5} className="text-[var(--violet)]" />,
  Search: <Search size={22} strokeWidth={1.5} className="text-[var(--accent)]" />,
  Clock: <Clock size={22} strokeWidth={1.5} className="text-[var(--orange)]" />,
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
    <section className="py-20 px-6 bg-[var(--surface-1)]">
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
            Votre pipeline dort dans votre boîte mail.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROBLEM_BLOCKS.map((block) => (
            <motion.div
              key={block.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-xl bg-white border border-[var(--border)] p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4"
            >
              <div className="w-11 h-11 rounded-xl border border-[var(--border)] bg-[var(--surface-1)] flex items-center justify-center">
                {ICON_MAP[block.icon]}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-1)] mb-1">
                  {block.title}
                </h3>
                <p className="text-sm text-[var(--text-2)] leading-relaxed">
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
