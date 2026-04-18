'use client'

import { motion } from 'framer-motion'

const COMPANIES = [
  'Salesforce',
  'HubSpot',
  'Zendesk',
  'Intercom',
  'Pipedrive',
  'ActiveCampaign',
  'Mailchimp',
  'Brevo',
]

export function LogoStrip() {
  return (
    <section
      className="py-10 px-6 border-y"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p
          className="text-center text-xs uppercase tracking-widest mb-8"
          style={{
            color: 'var(--text-3)',
            fontFamily: 'var(--font-mono, monospace)',
          }}
        >
          Utilisé par des équipes commerciales dans
        </p>

        {/* Ticker strip */}
        <div className="overflow-hidden" style={{ position: 'relative' }}>
          {/* Fade left */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
            style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }}
          />
          {/* Fade right */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
            style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }}
          />
          <div
            className="flex items-center gap-12"
            style={{
              animation: 'ticker 28s linear infinite',
              width: 'max-content',
            }}
          >
            {[...COMPANIES, ...COMPANIES].map((name, i) => (
              <motion.span
                key={i}
                whileHover={{ color: 'var(--text-2)' }}
                className="text-sm font-semibold whitespace-nowrap cursor-default"
                style={{
                  color: 'var(--text-3)',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
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
