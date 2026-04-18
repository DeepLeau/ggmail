'use client'

import { motion } from 'framer-motion'
import { useId } from 'react'
import { ArrowRight } from 'lucide-react'

export function CTABanner() {
  const id = useId()

  return (
    <section
      className="py-20 lg:py-24 px-4 sm:px-6"
      style={{ background: 'var(--accent)' }}
    >
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: '#ffffff', letterSpacing: '-0.025em' }}
          >
            Votre prochaine opportunité est déjà
            <br className="hidden sm:block" /> dans votre boîte mail.
          </h2>
          <p
            className="text-base max-w-sm"
            style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}
          >
            Connectez-la en 2 minutes. Gratuit pour commencer.
          </p>
          <button
            className="h-11 px-7 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200"
            style={{
              background: '#ffffff',
              color: 'var(--accent)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.transform =
                'translateY(-1px)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 8px 28px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.transform =
                'translateY(0)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 4px 20px rgba(0,0,0,0.15)'
            }}
          >
            Essayer EmailMind gratuitement
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-mono, monospace)' }}
          >
            Essai gratuit 14 jours · Sans carte bancaire
          </p>
        </motion.div>
      </div>
    </section>
  )
}
