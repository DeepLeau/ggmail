'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const plans = [
    {
      name: 'Starter',
      price: '$299',
      highlighted: false,
      badge: null,
      description: 'Up to 50 employees. Unlimited expense submissions. Basic approvals. 5 integrations.',
      features: [
        'Up to 50 employees',
        'Unlimited expense submissions',
        'Basic approval flows',
        '5 integrations',
        'Email support',
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'outline' as const,
    },
    {
      name: 'Growth',
      price: '$799',
      highlighted: true,
      badge: null,
      description: 'Up to 250 employees. Advanced approval flows. Full integration suite. Custom policies. Priority support.',
      features: [
        'Up to 250 employees',
        'Advanced approval flows',
        'Full integration suite',
        'Custom expense policies',
        'Priority support',
        'Analytics & reporting',
      ],
      cta: 'Request Demo',
      ctaStyle: 'primary' as const,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      highlighted: false,
      badge: null,
      description: '500+ employees. Dedicated CSM. Custom integrations. SOC 2 Type II. SLA guarantee.',
      features: [
        '500+ employees',
        'Dedicated CSM',
        'Custom integrations',
        'SOC 2 Type II',
        'SLA guarantee',
        'Advanced security',
      ],
      cta: 'Talk to Sales',
      ctaStyle: 'dark' as const,
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-[clamp(5.5rem,9vw,11rem)] px-[clamp(1.5rem,5vw,4rem)]"
      style={{ background: 'var(--surface-1)' }}
    >
      {/* Scan line */}
      <div className="scan-line absolute top-0 left-0 w-full h-[1px] pointer-events-none" style={{ background: 'rgba(255,255,255,0.10)' }} />
      <div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto">
        <div className="text-center mb-16 reveal-up" style={isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}}>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] inline-block mb-4" style={{ color: 'var(--amber)' }}>[06] PRICING</span>
          <h2 className="font-display font-light leading-[1.1] tracking-tight text-[clamp(2rem,3.5vw,3.25rem)] mb-4 mx-auto" style={{ color: 'var(--text-1)' }}>
            Pricing by headcount. Not by seat.
          </h2>
          <p className="font-mono text-xs" style={{ color: 'var(--text-2)' }}>
            All plans: unlimited receipts, OCR extraction, audit trail. No per-user fees.
          </p>
        </div>

        {/* Pricing Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 reveal-up"
          style={{
            ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}),
            transitionDelay: '200ms',
            border: '1px solid var(--border)',
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className="p-8 md:p-10 flex flex-col"
              style={{
                background: plan.highlighted ? 'var(--surface-1)' : 'rgba(17,17,24,0.5)',
                borderTop: plan.highlighted ? '2px solid var(--amber)' : 'none',
                borderRight: i < plans.length - 1 ? '1px solid var(--border)' : 'none',
                marginTop: plan.highlighted ? '-2px' : 0,
                marginBottom: plan.highlighted ? '-2px' : 0,
                boxShadow: plan.highlighted ? '0 0 40px rgba(59,130,246,0.05)' : 'none',
                position: 'relative',
                zIndex: plan.highlighted ? 10 : 1,
                transition: 'background 0.3s ease',
              }}
            >
              <span className="font-mono text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: plan.highlighted ? 'var(--amber)' : 'var(--text-1)' }}>
                {plan.name}
              </span>
              <div className="mb-6">
                <span className="font-mono text-3xl font-medium" style={{ color: 'var(--text-1)' }}>{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="font-mono text-xs uppercase ml-1" style={{ color: 'var(--text-2)' }}>/mo</span>
                )}
              </div>
              <p className="font-body text-sm mb-8 flex-grow" style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>
                {plan.description}
              </p>

              {/* CTA Button */}
              {plan.ctaStyle === 'primary' && (
                <a
                  href="#demo"
                  className="relative w-full py-4 font-mono text-xs font-semibold uppercase tracking-[0.1em] overflow-hidden group"
                  style={{
                    background: 'var(--accent)',
                    color: '#ffffff',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.transform = 'translateY(-2px)'
                    el.style.boxShadow = '0 8px 32px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)'
                    el.style.animation = 'glow-pulse 1.5s ease-in-out infinite'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = '0 4px 20px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.15)'
                    el.style.animation = 'none'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2" style={{ color: '#ffffff' }}>
                    {plan.cta} <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              )}

              {plan.ctaStyle === 'outline' && (
                <a
                  href="#"
                  className="relative w-full py-3 font-mono text-xs font-medium uppercase tracking-[0.1em] group"
                  style={{
                    background: 'var(--surface-1)',
                    color: 'var(--text-1)',
                    border: '1px solid var(--border-md)',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.transform = 'translateY(-2px)'
                    el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
                    el.style.borderColor = 'var(--border-hi)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
                    el.style.borderColor = 'var(--border-md)'
                  }}
                >
                  {plan.cta}
                </a>
              )}

              {plan.ctaStyle === 'dark' && (
                <a
                  href="#"
                  className="relative w-full py-3 font-mono text-xs font-medium uppercase tracking-[0.1em] group"
                  style={{
                    background: 'var(--surface-2)',
                    color: 'var(--text-1)',
                    border: '1px solid var(--border-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = 'var(--surface-1)'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = 'var(--surface-2)'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
