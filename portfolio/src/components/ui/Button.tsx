import type { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'primary' | 'secondary'
}

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
      : 'border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400'

  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 ${styles} ${className}`}
    >
      {children}
    </a>
  )
}