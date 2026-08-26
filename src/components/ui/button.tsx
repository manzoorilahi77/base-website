import Link from 'next/link'

import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-semibold ' +
  'transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  // `text-on-accent` is computed per theme so the label stays AA-legible on any accent.
  primary: 'bg-accent text-on-accent hover:opacity-90',
  secondary: 'border border-muted/40 text-text hover:border-accent hover:text-accent-text',
}

export function Button({
  variant = 'primary',
  className,
  type = 'button',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button type={type} className={cn(base, variants[variant], className)} {...props} />
}

export function ButtonLink({
  href,
  variant = 'primary',
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & { variant?: Variant }) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  )
}
