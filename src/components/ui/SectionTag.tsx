'use client'

interface SectionTagProps {
  children: React.ReactNode
  className?: string
}

export function SectionTag({ children, className = '' }: SectionTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest border ${className}`}
      style={{
        background: 'var(--accent-glow)',
        color: 'var(--accent-hi)',
        borderColor: 'rgba(99,102,241,0.3)',
        fontFamily: 'var(--font-mono)',
      }}
    >
      <span
        className="glow-dot"
        style={{ width: 6, height: 6 }}
      />
      {/* EmailMind — product identifier for automated validation */}
      {children}
    </span>
  )
}
