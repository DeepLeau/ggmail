'use client'

import { useEffect, useRef, useState } from 'react'
import { Plane, Monitor, ShieldCheck, UserCheck, Database, FileText, Receipt } from 'lucide-react'

export function UseCases() {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-[clamp(5.5rem,9vw,11rem)] px-[clamp(1.5rem,5vw,4rem)]"
      style={{ background: 'var(--bg)' }}
    >
      {/* Scan line */}
      <div className="scan-line absolute top-0 left-0 w-full h-[1px] pointer-events-none" style={{ background: 'rgba(255,255,255,0.10)' }} />
      <div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto">
        <div className="mb-16 reveal-up" style={isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}}>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] inline-block mb-8" style={{ color: 'var(--amber)' }}>[04] AUTOMATION</span>
          <h2 className="font-display font-light leading-[1.1] tracking-tight text-[clamp(2rem,3.5vw,3.25rem)] mb-6 max-w-2xl" style={{ color: 'var(--text-1)' }}>
            Approvals that don&apos;t require a meeting.
          </h2>
          <p className="font-body max-w-[60ch] leading-relaxed text-sm md:text-base" style={{ color: 'var(--text-2)' }}>
            Define your policy once. LEDGR enforces it on every submission — automatically escalating exceptions, routing by amount threshold, and flagging policy violations before they reach your inbox.
          </p>
        </div>

        {/* Workflow Pipeline Visualizer */}
        <div
          className="relative overflow-hidden reveal-up group"
          style={{
            ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}),
            transitionDelay: '200ms',
            transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
            background: 'var(--surface-1)',
            border: '1px solid var(--border)',
            padding: 'clamp(2rem,3vw,3rem)',
          }}
        >
          {/* Background connection line */}
          <div className="absolute top-1/2 left-16 right-16 h-[1px] -translate-y-1/2 hidden md:block z-0 pointer-events-none" style={{ background: 'rgba(255,255,255,0.06)' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 min-h-[220px]">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center h-full">
              <span className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: 'rgba(240,240,245,0.5)' }}>1. Submitted</span>
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 relative z-10 mt-auto"
                style={{ background: 'var(--surface-2)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <FileText size={20} className="transition-colors duration-300" style={{ color: 'rgba(240,240,245,0.5)' }} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs mt-auto" style={{ color: 'rgba(240,240,245,0.7)' }}>Aria C. · $840.00</span>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center h-full hidden md:flex">
              <span className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: 'rgba(240,240,245,0.5)' }}>2. Policy Engine</span>
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 relative z-10 mt-auto"
                style={{ background: 'var(--surface-2)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <ShieldCheck size={20} className="transition-colors duration-300" style={{ color: 'rgba(240,240,245,0.5)' }} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs mt-auto" style={{ color: 'rgba(240,240,245,0.7)' }}>Rule: &lt;$1k Auto-Approve</span>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center h-full hidden md:flex">
              <span className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: 'rgba(240,240,245,0.5)' }}>3. Approval</span>
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 relative z-10 mt-auto"
                style={{ background: 'var(--surface-2)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <UserCheck size={20} className="transition-colors duration-300" style={{ color: 'rgba(240,240,245,0.5)' }} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs mt-auto" style={{ color: 'var(--amber)' }}>Bypassed (Auto)</span>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center h-full hidden md:flex">
              <span className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: 'rgba(240,240,245,0.5)' }}>4. Reconciled</span>
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 relative z-10 mt-auto"
                style={{ background: 'var(--surface-2)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <Database size={20} className="transition-colors duration-300" style={{ color: 'rgba(240,240,245,0.5)' }} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs mt-auto" style={{ color: 'rgba(240,240,245,0.7)' }}>Synced to ERP</span>
            </div>
          </div>

          {/* Animated Token */}
          <div
            id="expense-token"
            className="absolute top-1/2 -translate-y-1/2 h-10 flex items-center px-4 pointer-events-none w-[max-content]"
            style={{
              left: '2rem',
              opacity: 0,
              background: 'var(--amber)',
              boxShadow: '0 0 20px rgba(232,160,32,0.3)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 20,
            }}
          >
            <Receipt size={16} className="mr-2 flex-shrink-0" style={{ color: 'var(--bg)' }} strokeWidth={1.5} />
            <span className="font-mono text-xs font-semibold" style={{ color: 'var(--bg)' }}>$840.00</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-8 pt-6 reveal-up" style={{
          ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}),
          transitionDelay: '400ms',
          borderTop: '1px solid var(--border)',
        }}>
          <div>
            <span className="font-mono text-xl block mb-1" style={{ color: 'var(--text-1)' }}>84%</span>
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-2)' }}>Approved Automatically</span>
          </div>
          <div>
            <span className="font-mono text-xl block mb-1" style={{ color: 'var(--text-1)' }}>2.1 <span className="text-sm">hrs</span></span>
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-2)' }}>Average Time to Approval</span>
          </div>
        </div>
      </div>
    </section>
  )
}
