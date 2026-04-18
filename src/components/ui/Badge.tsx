'use client'

import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'success' | 'warn' | 'info'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  dot?: boolean
  className?: string
}

const VARIANT_STYLES: Record<BadgeVariant, { bg: string; border: string; color: string; dotColor: string }> = {
  default: {
    bg: 'rgba(40,200,100,0.1)',
    border: 'rgba(40,200,100,0.2)',
    color: 'rgba(40,200,100,0.9)',
    dotColor: 'rgba(40,200,100,1)',
  },
  success: {
    bg: 'rgba(40,200,100,0.1)',
    border: 'rgba(40,200,100,0.2)',
    color: 'rgba(40,200,100,0.9)',
    dotColor: 'rgba(40,200,100,1)',
  },
  warn: {
    bg: 'rgba(250,204,21,0.08)',
    border: 'rgba(250,204,21,0.2)',
    color: 'rgba(250,204,21,0.85)',
    dotColor: 'rgba(250,204,21,1)',
  },
  info: {
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    color: 'rgba(165,180,252,0.9)',
    dotColor: 'rgba(99,102,241,1)',
  },
}

export function Badge({
  children,
  variant = 'default',
  dot = true,
  className = '',
}: BadgeProps) {
  const styles = VARIANT_STYLES[variant]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border',
        className
      )}
      style={{
        background: styles.bg,
        borderColor: styles.border,
        color: styles.color,
        fontFamily: 'var(--font-mono)',
      }}
    >
      {dot && (
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: styles.dotColor,
            flexShrink: 0,
            animation: 'pulse-dot 2s ease-in-out infinite',
          }}
        />
      )}
      {children}
    </span>
  )
}
