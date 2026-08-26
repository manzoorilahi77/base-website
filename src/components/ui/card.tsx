import { cn } from '@/lib/cn'

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('border-muted/20 bg-surface rounded-lg border p-6 sm:p-8', className)}>
      {children}
    </div>
  )
}
