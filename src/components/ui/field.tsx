import { cn } from '@/lib/cn'

const control =
  'border-muted/40 bg-bg text-text placeholder:text-muted/70 w-full rounded-md border px-4 py-3 ' +
  'text-base transition-colors focus:border-accent'

/**
 * Label + control + inline error.
 *
 * The error is wired with aria-describedby and aria-invalid, and rendered in an
 * aria-live region so it is announced when validation runs on submit.
 */
export function Field({
  id,
  label,
  error,
  hint,
  required,
  children,
}: {
  id: string
  label: string
  error?: string
  hint?: string
  required?: boolean
  children: (props: {
    id: string
    'aria-invalid': boolean
    'aria-describedby': string | undefined
    className: string
  }) => React.ReactNode
}) {
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ')

  return (
    <div>
      <label htmlFor={id} className="text-text mb-2 block text-sm font-medium">
        {label}
        {required ? (
          <span className="text-negative ml-1" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {hint ? (
        <p id={hintId} className="text-muted mb-2 text-sm">
          {hint}
        </p>
      ) : null}
      {children({
        id,
        'aria-invalid': Boolean(error),
        'aria-describedby': describedBy || undefined,
        className: cn(control, error && 'border-negative'),
      })}
      <p id={errorId} role="alert" className="text-negative mt-2 min-h-5 text-sm">
        {error ?? ''}
      </p>
    </div>
  )
}
