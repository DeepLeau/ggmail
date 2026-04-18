'use client'

import { motion } from 'framer-motion'
import { Plug, MessageCircle, Zap, ArrowRight } from 'lucide-react'
import { SOLUTION_STEPS } from '@/lib/data'
import type { Variants } from 'framer-motion'

const STEP_ICONS = [Plug, MessageCircle, Zap]

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
            Comment ça marche
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{
              color: 'var(--text-1)',
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-bricolage), sans-serif',
            }}
          >
            EmailMind lit tout.
            <br />
            Vous demandez. Il répond.
          </h2>
        </motion.div>

        {/* Steps — 3 steps + dashboard mockup */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          style={{ marginTop: '40px' }}
        >
          {/* Steps list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-0"
            style={{ position: 'relative' }}
          >
            {/* Vertical connector line */}
            <div
              style={{
                position: 'absolute',
                left: '15px',
                top: 0,
                bottom: 0,
                width: '2px',
                background:
                  'linear-gradient(to bottom, transparent, rgba(99,102,241,0.2) 10%, rgba(99,102,241,0.2) 90%, transparent)',
                zIndex: 0,
              }}
            />

            {SOLUTION_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index]
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="flex gap-4 py-5"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  {/* Step number circle */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.04)',
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-base font-medium mb-2"
                      style={{
                        color: 'var(--text-1)',
                        letterSpacing: '-0.01em',
                        fontFamily: 'var(--font-bricolage), sans-serif',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-2)' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(40px)',
              transform: 'perspective(1200px) rotateY(-4deg) rotateX(2deg)',
              boxShadow: '32px 32px 80px rgba(0,0,0,0.5), -1px -1px 0 rgba(255,255,255,0.06)',
              transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform =
                'perspective(1200px) rotateY(0deg) rotateX(0deg)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform =
                'perspective(1200px) rotateY(-4deg) rotateX(2deg)'
            }}
          >
            {/* Topbar */}
            <div
              className="flex items-center gap-3 px-5 py-3"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: '#FF5F57' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#FEBC2E' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#28C840' }} />
              <span
                style={{
                  marginLeft: '8px',
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                EmailMind · boîte de réception
              </span>
              <div
                className="ml-auto glow-dot"
                style={{ width: 6, height: 6 }}
              />
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--accent-hi)',
                  fontFamily: 'var(--font-mono), monospace',
                  marginLeft: '4px',
                }}
              >
                LIVE
              </span>
            </div>

            {/* Email table header */}
            <div
              className="grid px-5 py-2"
              style={{
                gridTemplateColumns: '2fr 1fr 80px 80px 1fr',
                gap: '12px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontSize: '11px',
                fontFamily: 'var(--font-mono), monospace',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '.06em',
              }}
            >
              <span>Sujet</span>
              <span>De</span>
              <span>Score</span>
              <span>Statut</span>
              <span>Insight</span>
            </div>

            {/* Email rows */}
            {[
              {
                subject: 'RE: Proposition commerciale Q4',
                from: 'Lucas Bernard',
                score: '94',
                status: 'Hot',
                statusColor: '#f87171',
                insight: 'Deal à relancer +8j',
                barH: 78,
              },
              {
                subject: 'Question sur l\'intégration API',
                from: 'Sophie Martin',
                score: '72',
                status: 'Warm',
                statusColor: '#facc15',
                insight: 'Réponse +12h',
                barH: 55,
              },
              {
                subject: 'Confirmation de commande #4829',
                from: 'Marie Dupont',
                score: '88',
                status: 'OK',
                statusColor: '#4ade80',
                insight: 'Clôturé ✓',
                barH: 92,
              },
              {
                subject: 'Re: Call de suivi hebdo',
                from: 'Thomas Leroy',
                score: '45',
                status: 'Info',
                statusColor: 'rgba(255,255,255,0.3)',
                insight: 'À planifier',
                barH: 38,
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid px-5 py-3 items-center"
                style={{
                  gridTemplateColumns: '2fr 1fr 80px 80px 1fr',
                  gap: '12px',
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                  fontSize: '12px',
                }}
              >
                <span style={{ color: 'var(--text-1)', fontWeight: 500 }}>{row.subject}</span>
                <span style={{ color: 'var(--text-2)', fontFamily: 'var(--font-mono), monospace', fontSize: '11px' }}>{row.from}</span>
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      height: '4px',
                      width: '40px',
                      borderRadius: '2px',
                      background: 'rgba(255,255,255,0.06)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${row.score}%`,
                        borderRadius: '2px',
                        background: `linear-gradient(90deg, var(--accent), var(--accent-hi))`,
                        animation: `bar-grow 0.8s cubic-bezier(0.16,1,0.3,1) forwards`,
                        transformOrigin: 'bottom',
                      }}
                    />
                  </div>
                  <span style={{ color: 'var(--text-2)', fontFamily: 'var(--font-mono), monospace', fontSize: '10px' }}>{row.score}</span>
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono), monospace',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: row.statusColor + '15',
                    color: row.statusColor,
                    border: `1px solid ${row.statusColor}30`,
                    textAlign: 'center',
                  }}
                >
                  {row.status}
                </span>
                <span style={{ color: 'var(--text-2)', fontSize: '11px' }}>{row.insight}</span>
              </div>
            ))}

            {/* Mini chart at bottom */}
            <div className="px-5 py-4">
              <div
                style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.3)',
                  fontFamily: 'var(--font-mono), monospace',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '.06em',
                }}
              >
                Taux de réponse · 7 derniers jours
              </div>
              <div className="flex items-end gap-1" style={{ height: '48px' }}>
                {[40, 55, 45, 70, 65, 85, 78].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: '3px 3px 0 0',
                      background:
                        i % 2 === 0
                          ? 'linear-gradient(to top, rgba(99,102,241,0.5), rgba(99,102,241,0.2))'
                          : 'linear-gradient(to top, rgba(165,180,252,0.3), rgba(165,180,252,0.1))',
                      animation: `bar-grow 0.8s cubic-bezier(0.16,1,0.3,1) forwards`,
                      transformOrigin: 'bottom',
                      animationDelay: `${i * 0.08}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
