import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine clsx and tailwind-merge for conditional Tailwind class handling.
 * Resolves Tailwind conflicts (last class wins) while supporting cn() calls.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
