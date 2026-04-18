'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useId } from 'react'
import { Map, MessageSquare, Zap, RefreshCw, Link2, LayoutGrid } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FEATURES } from '@/lib/data'

/* ── Bento card with 3D tilt on hover ── */
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
        glowRef.current.style.background = `radial-gradient(500px circle at ${gx}px ${gy}px, rgba(37,99,235,0.1), transparent 40%)`
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
        'relative rounded-2xl overflow-hidden transition-shadow duration-200',
        wide && 'md:col-span-2',
        tall && 'md:row-span-2',
        full && 'md:col-span-1',
        className
      )}
      style={{
        background: 'var(--surface-1)',
        border: '1px solid var(--border)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        display: tall ? 'flex' : 'flex',
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
          background:
            'linear-gradient(90deg, transparent, var(--accent), transparent)',
        }}
      />

      <div className="relative z-10 p-7 flex flex-col gap-5 flex-1">
        {children}
      </div>
    </motion.div>
  )
}

/* ── Icon block ── */
function FeatureIcon({ icon, index }: { icon: React.ReactNode; index: number }) {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center"
      style={{
        background: index % 2 === 0 ? 'var(--accent-glow)' : 'var(--violet-dim)',
        border:
          index % 2 === 0
            ? '1px solid rgba(37,99,235,0.2)'
            : '1px solid rgba(124,58,237,0.2)',
      }}
    >
      <div
        style={{
          color: index % 2 === 0 ? 'var(--accent)' : 'var(--violet)',
        }}
      >
        {icon}
      </div>
    </div>
  )
}

/* ── Waveform animation (Card 1) ── */
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
            background:
              i % 2 === 0
                ? 'linear-gradient(to top, rgba(37,99,235,0.3), rgba(37,99,235,0.1))'
                : 'linear-gradient(to top, rgba(124,58,237,0.3), rgba(124,58,237,0.1))',
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

/* ── Connection graph (Card 2) ── */
function ConnectionGraph() {
  const nodes = [
    { id: 0, x: 20, y: 20, label: 'Inbox', color: 'var(--accent)' },
    { id: 1, x: 60, y: 15, label: 'Thread A', color: 'var(--violet)' },
    { id: 2, x: 35, y: 50, label: 'Thread B', color: 'var(--accent)' },
    { id: 3, x: 70, y: 55, label: 'Contact', color: 'var(--violet)' },
    { id: 4, x: 45, y: 80, label: 'Deal', color: 'var(--green)' },
    { id: 5, x: 15, y: 70, label: 'Action', color: 'var(--orange)' },
  ]
  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 4], [2, 5], [3, 4],
  ]
  const activeEdges = new Set([0, 2, 4])

  return (
    <div
      className="rounded-xl border mt-4 relative overflow-hidden"
      style={{
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        height: '160px',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {edges.map(([a, b], i) => {
            const na = nodes[a], nb = nodes[b]
            return (
              <line
                key={i}
                x1={`${na.x}%`} y1={`${na.y}%`}
                x2={`${nb.x}%`} y2={`${nb.y}%`}
                stroke={activeEdges.has(i) ? 'rgba(37,99,235,0.5)' : 'rgba(0,0,0,0.08)'}
                strokeWidth={activeEdges.has(i) ? '1.5' : '0.5'}
                strokeDasharray={activeEdges.has(i) ? '0' : '2 2'}
              />
            )
          })}
          {nodes.map((n) => (
            <g key={n.id}>
              <circle
                cx={`${n.x}%`} cy={`${n.y}%`}
                r={activeEdges.has(n.id) ? '4' : '3'}
                fill={n.color}
                opacity={activeEdges.has(n.id) ? 1 : 0.5}
              />
            </g>
          ))}
        </svg>
      </div>
      {/* Floating labels */}
      <div
        className="absolute top-3 left-4 text-xs px-2 py-1 rounded-md"
        style={{ background: 'var(--accent)', color: 'white', fontSize: '10px' }}
      >
        42 conversations analysées
      </div>
      <div
        className="absolute bottom-3 right-4 text-xs px-2 py-1 rounded-md"
        style={{ background: 'var(--violet-dim)', color: 'var(--violet)', fontSize: '10px' }}
      >
        3 opportunités détectées
      </div>
    </div>
  )
}

/* ── Chat preview (Card 3) ── */
function ChatPreview() {
  return (
    <div className="rounded-xl border mt-4 overflow-hidden" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
        <span className="text-xs" style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono, monospace)' }}>Conversation active</span>
        <div className="ml-auto w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--green)' }} />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
          <div className="rounded-lg rounded-tl-sm px-3 py-2 text-xs" style={{ background: 'var(--surface-1)', border: '1px solid var(--border)', color: 'var(--text-1)' }}>
            Quelle est la dernière évolution du projet ?
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <div className="rounded-lg rounded-tr-sm px-3 py-2 text-xs" style={{ background: 'var(--violet-dim)', border: '1px solid rgba(124,58,237,0.15)', color: 'var(--text-1)' }}>
            Marie a répondu il y a 2h. Elle propose un call demain.
          </div>
          <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center" style={{ background: 'var(--violet)' }}>
            <Zap size={10} color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Status badge ── */
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
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ background: color }}
      />
      {label}
    </div>
  )
}

/* ── Integration badges ── */
function IntegrationBadges() {
  const badges = ['Gmail', 'Outlook', 'Salesforce', 'HubSpot', 'Slack', 'Notion']
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {badges.map((b) => (
        <span
          key={b}
          className="px-3 py-1.5 rounded-full text-xs border cursor-default transition-colors duration-150"
          style={{
            borderColor: 'var(--border)',
            background: 'var(--surface-1)',
            color: 'var(--text-2)',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,99,235,0.4)'
            ;(e.currentTarget as HTMLElement).style.color = 'var(--text-1)'
            ;(e.currentTarget as HTMLElement).style.background = 'var(--accent-glow)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
            ;(e.currentTarget as HTMLElement).style.color = 'var(--text-2)'
            ;(e.currentTarget as HTMLElement).style.background = 'var(--surface-1)'
          }}
        >
          {b}
        </span>
      ))}
    </div>
  )
}

export function Features() {
  const id = useId()

  return (
    <section
      className="py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest mb-5"
            style={{
              background: 'var(--accent-glow)',
              color: 'var(--accent)',
              border: '1px solid rgba(37,99,235,0.2)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            Fonctionnalités
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--text-1)', letterSpacing: '-0.025em' }}
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

        {/* Bento grid — 3 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
          style={{ minHeight: '600px' }}
        >
          {/* Card 1 — Wide: Real-time mapping */}
          <BentoCard wide delay={0}>
            <StatusBadge label="Live" color="var(--accent)" />
            <FeatureIcon icon={<Map size={20} strokeWidth={1.5} />} index={0} />
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
              >
                Cartographie intelligente
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                Chaque conversation est indexée, structurée et liée à vos contacts et deals. Naviguez dans vos emails comme dans une base de données.
              </p>
            </div>
            <Waveform />
          </BentoCard>

          {/* Card 2 — Tall: Natural language */}
          <BentoCard tall delay={0.1}>
            <StatusBadge label="IA active" color="var(--violet)" />
            <FeatureIcon icon={<MessageSquare size={20} strokeWidth={1.5} />} index={1} />
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
              >
                Langage naturel
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                Posez vos questions comme à un collègue. L'IA comprend le contexte, les nuances et les隐含 intentions.
              </p>
            </div>
            <div className="flex-1">
              <ChatPreview />
            </div>
            {/* Model confidence */}
            <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="flex justify-between mb-2">
                <span className="text-[10px] font-mono" style={{ color: 'var(--text-3)' }}>Confiance du modèle</span>
                <span className="text-[10px] font-mono" style={{ color: 'var(--violet)' }}>97.3%</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--surface-2)' }}>
                <div className="h-full rounded-full" style={{ width: '97.3%', background: 'var(--violet)' }} />
              </div>
            </div>
          </BentoCard>

          {/* Card 3 — Regular: Full context */}
          <BentoCard delay={0.15}>
            <FeatureIcon icon={<Zap size={20} strokeWidth={1.5} />} index={0} />
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-1)', letterSpacing: '-0.02em' }}
              >
                Contexte complet
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                Chaque réponse inclut les threads, les pièces jointes, les contacts impliqués et les actions déjà réalisées.
              </p>
            </div>
            <ConnectionGraph />
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
                À chaque email reçu, le graphe de vos conversations se met à jour automatiquement. Pas de rafraîchissement manuel.
              </p>
            </div>
            {/* Mini status list */}
            <div className="mt-4 space-y-2">
              {[
                { label: 'Boîte mail sync', status: 'ok', time: 'il y a 2min' },
                { label: 'CRM en cours', status: 'ok', time: 'il y a 5min' },
                { label: 'Index mis à jour', status: 'warn', time: 'il y a 1min' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs"
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background:
                          item.status === 'ok'
                            ? 'var(--green)'
                            : 'var(--yellow)',
                      }}
                    />
                    <span style={{ color: 'var(--text-2)' }}>{item.label}</span>
                  </div>
                  <span className="font-mono" style={{ color: 'var(--text-3)' }}>{item.time}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Card 5 — Full-width: Integrations */}
          <BentoCard full delay={0.25}>
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
                Actions directement exploitables
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                Chaque insight se traduit en action : programmer un rappel, envoyer un email de suivi, mettre à jour un deal.
              </p>
            </div>
            {/* Action preview */}
            <div className="mt-4 space-y-2">
              {[
                { action: 'Relancer Marie D.', type: 'email', priority: 'Urgent' },
                { action: 'Mettre à jour le deal Renault', type: 'crm', priority: 'Normal' },
                { action: 'Transférer à Sophie', type: 'transfer', priority: 'Info' },
              ].map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg border cursor-default"
                  style={{
                    borderColor: 'var(--border)',
                    background: 'var(--surface-2)',
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background:
                        a.priority === 'Urgent'
                          ? 'var(--accent)'
                          : a.priority === 'Normal'
                          ? 'var(--violet)'
                          : 'var(--text-3)',
                    }}
                  />
                  <div className="flex-1">
                    <p className="text-xs font-medium" style={{ color: 'var(--text-1)' }}>{a.action}</p>
                    <p className="text-[10px]" style={{ color: 'var(--text-3)' }}>{a.type}</p>
                  </div>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background:
                        a.priority === 'Urgent'
                          ? 'var(--accent-glow)'
                          : a.priority === 'Normal'
                          ? 'var(--violet-dim)'
                          : 'var(--surface-1)',
                      color:
                        a.priority === 'Urgent'
                          ? 'var(--accent)'
                          : a.priority === 'Normal'
                          ? 'var(--violet)'
                          : 'var(--text-3)',
                    }}
                  >
                    {a.priority}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
