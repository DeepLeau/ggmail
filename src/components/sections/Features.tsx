'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Map, MessageSquare, Zap, RefreshCw, LayoutGrid, Link2, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ── Waveform ── */
function Waveform() {
  const heights = [30, 60, 85, 45, 70, 55, 90, 40, 65, 50, 80, 35, 75, 60, 45, 85, 30, 70, 55, 95, 40, 65, 50, 80]
  return (
    <div className="flex items-center gap-[3px] h-12 mt-4">
      {heights.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${h}%`,
            background: i % 2 === 0
              ? 'linear-gradient(to top, rgba(99,102,241,0.3), rgba(165,180,252,0.5))'
              : 'linear-gradient(to top, rgba(99,102,241,0.15), rgba(165,180,252,0.3))',
            borderRadius: '4px',
            animation: `wave 1.4s ease-in-out infinite`,
            animationDelay: `${i * 0.08}s`,
            transformOrigin: 'bottom',
          }}
        />
      ))}
    </div>
  )
}

/* ── Status Badge ── */
function StatusBadge({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono z-20"
      style={{
        background: color + '15',
        border: `1px solid ${color}30`,
        color,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
      {label}
    </div>
  )
}

/* ── Integration badges ── */
function IntegrationBadges() {
  const badges = ['Gmail', 'Outlook', 'Salesforce', 'HubSpot', 'Slack', 'Notion', 'Pipedrive']
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {badges.map((b) => (
        <span
          key={b}
          className="px-3 py-1.5 rounded-full text-xs border cursor-default transition-colors duration-150"
          style={{
            borderColor: 'rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.04)',
            color: 'rgba(248,247,255,0.55)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(99,102,241,0.4)'
            el.style.color = 'rgba(248,247,255,0.9)'
            el.style.background = 'rgba(99,102,241,0.1)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(255,255,255,0.08)'
            el.style.color = 'rgba(248,247,255,0.55)'
            el.style.background = 'rgba(255,255,255,0.04)'
          }}
        >
          {b}
        </span>
      ))}
    </div>
  )
}

/* ── Terminal block ── */
function TerminalBlock() {
  return (
    <div
      className="rounded-xl border overflow-hidden mt-4"
      style={{
        background: 'rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="flex gap-1.5 px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
      </div>
      <div className="p-4 space-y-3" style={{ fontFamily: 'var(--font-mono), monospace' }}>
        {[
          { prompt: '$', cmd: 'emailmind analyze --inbox', delay: 0 },
          { prompt: '', out: '✓ 847 emails analysés · 3 leads chauds détectés', delay: 400 },
          { prompt: '', out: '✓ Score depriorité chargé · p99: 2.1ms', delay: 800 },
          { prompt: '', out: '⚡ Alerte: follow-up en retard · Lucas B. (HotCRM)', delay: 1200 },
          { prompt: '', out: '→ Devis 12k€ envoyé il y a 6j sans réponse', delay: 1600 },
        ].map((line, i) => (
          <div
            key={i}
            className="text-xs"
            style={{
              opacity: 0,
              animation: `type-in 0.4s forwards`,
              animationDelay: `${line.delay}ms`,
              color: line.prompt ? 'rgba(99,102,241,0.9)' : 'rgba(40,200,100,0.7)',
            }}
          >
            <span style={{ color: 'rgba(232,227,255,0.5)', marginRight: '8px' }}>{line.prompt}</span>
            {line.cmd || line.out}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Email preview mini ── */
function EmailPreview() {
  return (
    <div
      className="rounded-xl border overflow-hidden mt-4"
      style={{
        background: 'var(--surface-2)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
          Inbox · mise à jour il y a 2min
        </span>
        <div className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--green)' }} />
      </div>
      <div className="p-4 space-y-3">
        {[
          { from: 'Lucas Bernard', subject: 'RE: Proposition DataFlow — devis v2', score: '🔥 Hot Lead', scoreColor: 'var(--accent)' },
          { from: 'Sophie Martin', subject: 'Call demain 10h — préparation?', score: '⏰ Follow-up', scoreColor: 'var(--yellow)' },
          { from: 'Marie Dupont', subject: 'Merci pour les infos!', score: '✓ Closé', scoreColor: 'var(--green)' },
        ].map((email, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: email.scoreColor === 'var(--accent)' ? 'var(--accent)' : email.scoreColor === 'var(--yellow)' ? 'var(--yellow)' : 'var(--green)' }}
              />
              <span style={{ color: 'var(--text-2)' }}>{email.from}</span>
            </div>
            <span
              style={{ color: email.scoreColor, fontSize: '10px' }}
            >
              {email.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Action list ── */
function ActionList() {
  const actions = [
    { action: 'Relancer Lucas B.', type: 'email · Hot Lead', priority: 'Urgent', color: 'var(--accent)' },
    { action: 'Préparer le call Sophie', type: 'réunion · Client actif', priority: 'Normal', color: 'var(--yellow)' },
    { action: 'Envoyer le devis final', type: 'proposition · Wait', priority: 'Info', color: 'var(--text-3)' },
  ]
  return (
    <div className="mt-4 space-y-2">
      {actions.map((a, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl border"
          style={{
            borderColor: 'rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.color }} />
          <div className="flex-1">
            <p className="text-xs font-medium" style={{ color: 'var(--text-1)' }}>{a.action}</p>
            <p className="text-[10px]" style={{ color: 'var(--text-3)' }}>{a.type}</p>
          </div>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
            style={{
              background: a.priority === 'Urgent' ? 'var(--accent-glow)' : a.priority === 'Normal' ? 'rgba(250,204,21,0.1)' : 'rgba(255,255,255,0.04)',
              color: a.priority === 'Urgent' ? 'var(--accent)' : a.priority === 'Normal' ? 'var(--yellow)' : 'var(--text-3)',
            }}
          >
            {a.priority}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ── Bento card with 3D tilt + mouse glow ── */
function BentoCard({
  children,
  className,
  wide = false,
  tall = false,
  full = false,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  wide?: boolean
  tall?: boolean
  full?: boolean
  delay?: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateZ(4px)`
      if (glowRef.current) {
        const gx = e.clientX - rect.left
        const gy = e.clientY - rect.top
        glowRef.current.style.background = `radial-gradient(500px circle at ${gx}px ${gy}px, rgba(99,102,241,0.15), transparent 40%)`
      }
    }
    const handleLeave = () => {
      card.style.transform = ''
      if (glowRef.current) glowRef.current.style.background = 'transparent'
    }
    card.addEventListener('mousemove', handleMove as EventListener)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove as EventListener)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      ref={cardRef}
      className={cn(
        'relative rounded-2xl overflow-hidden transition-shadow duration-200 group',
        wide && 'md:col-span-2',
        tall && 'md:row-span-2',
        className
      )}
      style={{
        background: '#111',
        border: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
      }}
    >
      {/* Mouse glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{ background: 'transparent', zIndex: 0 }}
      />

      {/* Gradient top line on hover */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
        }}
      />

      <div className="relative z-10 p-7 flex flex-col gap-5 flex-1">
        {children}
      </div>
    </motion.div>
  )
}

/* ── Feature icon ── */
function FeatureIcon({ icon, index }: { icon: React.ReactNode; index: number }) {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center"
      style={{
        background: 'var(--accent-glow)',
        border: '1px solid rgba(99,102,241,0.2)',
      }}
    >
      <div style={{ color: 'var(--accent)' }}>{icon}</div>
    </div>
  )
}

export function Features() {
  return (
    <section
      id="features"
      className="py-20 lg:py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
            Fonctionnalités
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            style={{
              color: 'var(--text-1)',
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-bricolage), var(--font-inter), sans-serif',
            }}
          >
            Tout ce dont vous avez besoin,
            <br />rien de plus
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: 'var(--text-2)', lineHeight: '1.7' }}
          >
            Les fonctions essentielles pour extraire les vraies opportunités
            de vos emails — sans friction, sans bruit.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto"
          style={{ minHeight: '600px' }}
        >
          {/* Card 1 — Wide: Real-time email stream */}
          <BentoCard wide delay={0}>
            <StatusBadge label="Live · 847 evt/s" color="var(--accent)" />
            <FeatureIcon icon={<Mail size={20} strokeWidth={1.5} />} index={0} />
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
              >
                Stream d&apos;emails en temps réel
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                Chaque email est analysé, indexé et intégré au graphe conversationnel en moins de 2ms. Aucunemail ne vous échappe.
              </p>
            </div>
            <Waveform />
            <TerminalBlock />
          </BentoCard>

          {/* Card 2 — Tall: AI opportunity detection */}
          <BentoCard tall delay={0.1}>
            <StatusBadge label="3 anomalies" color="var(--yellow)" />
            <FeatureIcon icon={<Zap size={20} strokeWidth={1.5} />} index={1} />
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
              >
                Détection IA des opportunités
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                Scoring intelligent de chaque conversation. Identifiez les leads, les signaux de churn, et les opportunités upsell automatiquement.
              </p>
            </div>
            <EmailPreview />
            {/* Model confidence */}
            <div
              className="mt-auto pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-[10px] font-mono" style={{ color: 'var(--text-3)' }}>
                  Confiance du modèle
                </span>
                <span className="text-[10px] font-mono" style={{ color: 'var(--accent)' }}>
                  97.3%
                </span>
              </div>
              <div
                className="h-1 rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: '97.3%',
                    background: 'linear-gradient(90deg, var(--accent), var(--accent-hi))',
                  }}
                />
              </div>
            </div>
          </BentoCard>

          {/* Card 3 — Regular: Natural language */}
          <BentoCard delay={0.15}>
            <FeatureIcon icon={<MessageSquare size={20} strokeWidth={1.5} />} index={0} />
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
              >
                Langage naturel
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                Posez vos questions comme à un collègue. L&apos;IA comprend le contexte, les nuances, et les intentions implicites.
              </p>
            </div>
            <div
              className="rounded-xl border mt-4 p-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <p className="text-xs font-mono mb-2" style={{ color: 'var(--text-3)' }}>
                &gt; Quel lead dois-je relancer cette semaine?
              </p>
              <p className="text-xs" style={{ color: 'var(--accent)' }}>
                → Lucas Bernard (DataFlow, 12k€) — silence de 6 jours. Priorité haute.
              </p>
            </div>
          </BentoCard>

          {/* Card 4 — Regular: Real-time sync */}
          <BentoCard delay={0.2}>
            <FeatureIcon icon={<RefreshCw size={20} strokeWidth={1.5} />} index={1} />
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
              >
                Mise à jour en temps réel
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                À chaque email reçu, le graphe se met à jour automatiquement. Pas de rafraîchissement manuel.
              </p>
            </div>
            <div className="mt-4 space-y-2">
              {[
                { label: 'Boîte mail sync', status: 'ok', time: 'il y a 2min' },
                { label: 'CRM en cours', status: 'ok', time: 'il y a 5min' },
                { label: 'Index mis à jour', status: 'ok', time: 'il y a 1min' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--green)' }}
                    />
                    <span style={{ color: 'var(--text-2)' }}>{item.label}</span>
                  </div>
                  <span className="font-mono" style={{ color: 'var(--text-3)' }}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Card 5 — Full width: Integrations */}
          <BentoCard delay={0.25}>
            <FeatureIcon icon={<LayoutGrid size={20} strokeWidth={1.5} />} index={0} />
            <div className="flex-1">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
              >
                Connexions simples
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                Gmail, Outlook, Salesforce, HubSpot — EmailMind se connecte à votre stack existant en 2 clics. Aucune migration requise.
              </p>
              <IntegrationBadges />
            </div>
          </BentoCard>

          {/* Card 6 — Regular: Actions */}
          <BentoCard delay={0.3}>
            <FeatureIcon icon={<Link2 size={20} strokeWidth={1.5} />} index={1} />
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
              >
                Actions exploitables
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                Chaque insight se traduit en action : relancer un lead, programmer un suivi, mettre à jour un deal.
              </p>
            </div>
            <ActionList />
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
