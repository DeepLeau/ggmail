'use client'

import { motion } from 'framer-motion'
import { useId } from 'react'
import { ArrowRight } from 'lucide-react'

export function CTABanner() {
  const id = useId()

  return (
    <section
      className="py-20 lg:py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--accent)' }}
    >
      {/* Reinforced radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 60%, rgba(0,0,0,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Decorative rings */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '300px',
          height: '300px',
          top: '-100px',
          right: '-100px',
          border: '1px solid rgba(255,255,255,0.15)',
          animation: 'ring-pulse 4s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '200px',
          height: '200px',
          bottom: '-60px',
          left: '-60px',
          border: '1px solid rgba(255,255,255,0.15)',
          animation: 'ring-pulse 4s ease-in-out infinite',
          animationDelay: '-2s',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '150px',
          height: '150px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(255,255,255,0.15)',
          animation: 'ring-pulse-center 4s ease-in-out infinite',
          animationDelay: '-1s',
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 40}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.4)',
              animation: `float-particle ${6 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(255,255,255,0.4), transparent)',
        }}
      />

      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <h2
            className="text-3xl lg:text-4xl font-light tracking-tight"
            style={{
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: '1.12',
              fontFamily: 'var(--font-bricolage), var(--font-inter), sans-serif',
            }}
          >
            Prêt à maîtriser vos emails&nbsp;?
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.7))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Rejoignez 10 000+ équipes.
            </span>
          </h2>
          <p
            className="text-base max-w-sm"
            style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}
          >
            Connectez votre boîte mail en 2 minutes. Gratuit pour démarrer. Aucune carte bancaire requise.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              className="h-11 px-7 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200"
              style={{
                background: '#ffffff',
                color: 'var(--accent)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.transform = 'translateY(-2px)'
                btn.style.boxShadow = '0 8px 28px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.transform = 'translateY(0)'
                btn.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              Essayer EmailMind gratuitement
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
            <button
              className="h-11 px-7 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.background = 'rgba(255,255,255,0.15)'
                btn.style.borderColor = 'rgba(255,255,255,0.4)'
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget as HTMLButtonElement
                btn.style.background = 'rgba(255,255,255,0.08)'
                btn.style.borderColor = 'rgba(255,255,255,0.2)'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="5 3 3 8 8 8 13 8 8 8 11 3"></polygon>
              </svg>
              Voir une démo
            </button>
          </div>

          <p
            className="text-xs"
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'var(--font-mono), monospace',
            }}
          >
            Essai gratuit 14 jours · Sans carte bancaire
          </p>
        </motion.div>
      </div>
    </section>
  )
}
