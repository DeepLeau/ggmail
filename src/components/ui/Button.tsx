import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'
import type { Variants, HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

/* ── Variants ── */
type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

/* ── Shared styles ── */
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-5 text-sm',
  lg: 'h-11 px-6 text-sm',
  icon: 'h-9 w-9 text-sm',
}

/* ── Button props type ── */
interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  loading?: boolean
  disabled?: boolean
}

/* ── Button ── */
interface ButtonProps extends ButtonBaseProps {
  as?: 'button'
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  loading,
  disabled,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'rounded-xl font-medium transition-all duration-150',
        'flex items-center justify-center gap-2',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
        sizeStyles[size],
        className
      )}
      style={{
        ...(variant === 'primary' && {
          background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
          color: '#fff',
          boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
        }),
        ...(variant === 'ghost' && {
          background: 'rgba(255,255,255,0.04)',
          color: 'var(--text-2)',
          border: '1px solid rgba(255,255,255,0.08)',
        }),
        ...(variant === 'outline' && {
          background: 'transparent',
          color: 'var(--text-1)',
          border: '1px solid rgba(255,255,255,0.1)',
        }),
        ...(variant === 'destructive' && {
          background: 'var(--red)',
          color: '#fff',
        }),
      }}
      onMouseEnter={(e) => {
        const btn = e.currentTarget
        if (variant === 'primary') {
          btn.style.background = 'linear-gradient(135deg, var(--accent-hi), var(--accent))'
          btn.style.boxShadow = '0 6px 24px rgba(99,102,241,0.45)'
          btn.style.transform = 'translateY(-1px)'
        } else if (variant === 'ghost') {
          btn.style.background = 'rgba(255,255,255,0.08)'
          btn.style.color = 'var(--text-1)'
        } else if (variant === 'outline') {
          btn.style.borderColor = 'var(--accent)'
          btn.style.color = 'var(--accent)'
        }
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        const btn = e.currentTarget
        if (variant === 'primary') {
          btn.style.background = 'linear-gradient(135deg, var(--accent), #4f46e5)'
          btn.style.boxShadow = '0 4px 16px rgba(99,102,241,0.3)'
          btn.style.transform = 'translateY(0)'
        } else if (variant === 'ghost') {
          btn.style.background = 'rgba(255,255,255,0.04)'
          btn.style.color = 'var(--text-2)'
        } else if (variant === 'outline') {
          btn.style.borderColor = 'rgba(255,255,255,0.1)'
          btn.style.color = 'var(--text-1)'
        }
        onMouseLeave?.(e)
      }}
      disabled={loading || disabled}
    >
      {loading ? (
        <svg
          className="animate-spin w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" opacity="0.25" />
          <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
        </svg>
      ) : null}
      {children}
    </button>
  )
}

/* ── MotionButton — with Framer Motion hover ── */
interface MotionButtonProps extends ButtonBaseProps {
  motionVariants?: Variants
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>
}

export function MotionButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  motionVariants,
  onMouseEnter,
  onMouseLeave,
  loading,
  disabled,
  ...props
}: MotionButtonProps) {
  return (
    <motion.button
      {...(props as Omit<HTMLMotionProps<'button'>, 'ref'>)}
      variants={motionVariants}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-xl font-medium transition-all duration-150',
        'flex items-center justify-center gap-2',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
        sizeStyles[size],
        className
      )}
      style={{
        ...(variant === 'primary' && {
          background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
          color: '#fff',
          boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
        }),
        ...(variant === 'ghost' && {
          background: 'rgba(255,255,255,0.04)',
          color: 'var(--text-2)',
          border: '1px solid rgba(255,255,255,0.08)',
        }),
      }}
      onMouseEnter={(e) => {
        const btn = e.currentTarget
        if (variant === 'primary') {
          btn.style.background = 'linear-gradient(135deg, var(--accent-hi), var(--accent))'
          btn.style.boxShadow = '0 8px 28px rgba(99,102,241,0.45)'
        } else if (variant === 'ghost') {
          btn.style.background = 'rgba(255,255,255,0.08)'
          btn.style.color = 'var(--text-1)'
        }
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        const btn = e.currentTarget
        if (variant === 'primary') {
          btn.style.background = 'linear-gradient(135deg, var(--accent), #4f46e5)'
          btn.style.boxShadow = '0 4px 16px rgba(99,102,241,0.3)'
        } else if (variant === 'ghost') {
          btn.style.background = 'rgba(255,255,255,0.04)'
          btn.style.color = 'var(--text-2)'
        }
        onMouseLeave?.(e)
      }}
      disabled={loading || disabled}
    >
      {loading ? (
        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" opacity="0.25" />
          <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
        </svg>
      ) : null}
      {children}
    </motion.button>
  )
}
