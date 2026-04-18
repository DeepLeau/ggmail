'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const METRICS = [
  {
    value: 12,
    suffix: 'M+',
    label: 'Emails traités',
    sub: 'à travers toutes les équipes',
    data: [30, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 88, 92],
    trend: '+12% ce mois',
    trendUp: true,
  },
  {
    value: 98,
    suffix: '%',
    label: 'Précision IA',
    sub: 'sur la détection des leads',
    data: [80, 75, 65, 70, 55, 60, 45, 50, 35, 40, 30, 28, 25],
    trend: '+3 points ce trimestre',
    trendUp: true,
  },
  {
    value: 2,
    suffix: 'h',
    label: 'Temps économisé / jour',
    sub: 'par utilisateur en moyenne',
    data: [90, 92, 91, 93, 95, 94, 96, 95, 97, 96, 98, 97, 99],
    trend: 'par utilisateur',
    trendUp: true,
  },
  {
    value: 10,
    suffix: 'K+',
    label: 'Équipes actives',
    sub: 'à travers 40+ pays',
    data: [20, 28, 35, 42, 50, 48, 58, 65, 72, 70, 80, 85, 95],
    trend: '+280 cette semaine',
    trendUp: true,
  },
]

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data)
  return (
    <div className="metric__sparkline mt-3">
      {data.map((v, i) => (
        <div
          key={i}
          className="metric__spark-bar"
          style={{
            height: `${(v / max) * 100}%`,
            animationDelay: `${i * 0.06}s`,
            background: i === data.length - 1
              ? 'linear-gradient(to top, rgba(99,102,241,0.5), rgba(165,180,252,0.7))'
              : 'linear-gradient(to top, rgba(99,102,241,0.25), rgba(165,180,252,0.4))',
          }}
        />
      ))}
    </div>
  )
}

function MetricCard({
  value,
  suffix,
  label,
  sub,
  data,
  trend,
  trendUp,
  delay,
}: {
  value: number
  suffix: string
  label: string
  sub: string
  data: number[]
  trend: string
  trendUp: boolean
  delay: number
}) {
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = countRef.current
    if (!el) return
    let start = 0
    const target = value
    const total = 80
    let frame = 0
    const id = setInterval(() => {
      frame++
      const p = 1 - Math.pow(1 - frame / total, 3)
      const val = Math.min(start + (target - start) * p, target)
      el.textContent = String(Math.round(val))
      if (frame >= total) clearInterval(id)
    }, 1000 / 60)
    return () => clearInterval(id)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-7 flex flex-col gap-2"
      style={{
        background: '#111',
        border: '1px solid rgba(255,255,255,0.07)',
        cursor: 'default',
      }}
    >
      {/* Bottom line hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
          transform: 'scaleX(0)',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = 'scaleX(1)'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.transform = 'scaleX(0)'
        }}
      />

      {/* Value */}
      <div
        className="text-4xl font-light tracking-tight"
        style={{
          letterSpacing: '-0.04em',
          fontFamily: 'var(--font-bricolage), var(--font-inter), sans-serif',
          background: 'linear-gradient(135deg, #e8e3ff, #a5b4fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <span ref={countRef}>0</span>
        <span style={{ opacity: 0.7 }}>{suffix}</span>
      </div>

      {/* Label */}
      <div className="text-sm" style={{ color: 'var(--text-2)' }}>
        {label}
      </div>

      {/* Sub */}
      <div className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
        {sub}
      </div>

      {/* Sparkline */}
      <Sparkline data={data} />

      {/* Trend */}
      <div
        className="flex items-center gap-1 text-xs font-mono mt-1"
        style={{ color: trendUp ? 'rgba(74,222,128,0.8)' : 'rgba(248,113,113,0.8)' }}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          style={{
            transform: trendUp ? 'none' : 'rotate(180deg)',
          }}
        >
          <path
            d="M1 7L5 3L9 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {trend}
      </div>
    </motion.div>
  )
}

export function Metrics() {
  return (
    <section
      className="py-20 lg:py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Grid 4 columns */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '1px' }}
        >
          {METRICS.map((metric, i) => (
            <MetricCard key={i} {...metric} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
