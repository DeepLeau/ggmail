'use client'

import { motion } from 'framer-motion'

const COMPANIES = [
  'LVMH',
  'Dassault',
  'Accenture',
  'BNP Paribas',
  'Carrefour',
  'Engie',
  'Thales',
  'Sanofi',
  'Orange',
  'TotalEnergies',
  'Capgemini',
  'Deloitte',
]

export function LogoStrip() {
  return (
    <section
      className="py-10 px-6"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fade left */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '160px',
          background: 'linear-gradient(to right, var(--bg), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      {/* Fade right */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '160px',
          background: 'linear-gradient(to left, var(--bg), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <p
          className="text-center mb-8"
          style={{
            fontSize: '12px',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'var(--font-mono), monospace',
          }}
        >
          Ills nous font confiance
        </p>

        <div className="overflow-hidden" style={{ position: 'relative' }}>
          <div
            className="flex items-center"
            style={{
              animation: 'ticker 28s linear infinite',
              width: 'max-content',
            }}
          >
            {[...COMPANIES, ...COMPANIES].map((name, i) => (
              <motion.span
                key={i}
                whileHover={{ color: 'rgba(255,255,255,0.5)' }}
                className="whitespace-nowrap cursor-default"
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.18)',
                  letterSpacing: '.02em',
                  fontFamily: 'var(--font-bricolage), sans-serif',
                  transition: 'color 0.3s',
                  paddingRight: '64px',
                }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
