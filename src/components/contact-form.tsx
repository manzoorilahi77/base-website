'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import {
  deliverContactForm,
  emptyContactForm,
  hasErrors,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/lib/contact-form'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const isSubmitting = status === 'submitting'

  function update(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    // Clear a field's error as soon as the user starts fixing it.
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)

    if (hasErrors(nextErrors)) {
      // Move focus to the first invalid control so keyboard and screen-reader users
      // land on the problem rather than hunting for it.
      const firstInvalid = Object.keys(nextErrors)[0]
      if (firstInvalid) {
        document.getElementById(firstInvalid)?.focus()
      }
      return
    }

    setStatus('submitting')
    try {
      await deliverContactForm(values)
      setStatus('success')
      setValues(emptyContactForm)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="border-positive/40 bg-surface rounded-lg border p-8 text-center"
      >
        <p className="text-positive font-display text-2xl font-semibold">Thanks - message sent</p>
        <p className="text-muted mt-3 leading-relaxed">
          We&apos;ve received your message and will get back to you shortly.
        </p>
        <Button variant="secondary" className="mt-7" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field id="name" label="Name" required error={errors.name}>
        {(props) => (
          <input
            {...props}
            type="text"
            name="name"
            autoComplete="name"
            value={values.name}
            disabled={isSubmitting}
            onChange={(event) => update('name', event.target.value)}
          />
        )}
      </Field>

      <Field id="email" label="Email" required error={errors.email}>
        {(props) => (
          <input
            {...props}
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            disabled={isSubmitting}
            onChange={(event) => update('email', event.target.value)}
          />
        )}
      </Field>

      <Field id="phone" label="Phone" hint="Optional" error={errors.phone}>
        {(props) => (
          <input
            {...props}
            type="tel"
            name="phone"
            autoComplete="tel"
            value={values.phone}
            disabled={isSubmitting}
            onChange={(event) => update('phone', event.target.value)}
          />
        )}
      </Field>

      <Field id="message" label="How can we help?" required error={errors.message}>
        {(props) => (
          <textarea
            {...props}
            name="message"
            rows={6}
            value={values.message}
            disabled={isSubmitting}
            onChange={(event) => update('message', event.target.value)}
          />
        )}
      </Field>

      {status === 'error' ? (
        <p role="alert" className="text-negative text-sm">
          Something went wrong sending your message. Please try again, or call us instead.
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? 'Sending...' : 'Send message'}
      </Button>

      <p className="text-muted text-sm">Required fields are marked with an asterisk.</p>
    </form>
  )
}
