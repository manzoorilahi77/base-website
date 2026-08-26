// Contact form logic: validation rules and the single delivery swap point.
//
// Kept out of the component so the rules can be read, changed, and tested without
// touching JSX.

export interface ContactFormValues {
  name: string
  email: string
  phone: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

export const emptyContactForm: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

// Deliberately permissive: "something@something.something". Strict email regexes
// reject valid addresses, and the only authoritative check is sending mail.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Validates every field at once. An empty object means the form is valid. */
export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  // Phone is optional, but if given it must contain enough digits to be dialable.
  const digits = values.phone.replace(/\D/g, '')
  if (values.phone.trim() && digits.length < 7) {
    errors.phone = 'Please enter a valid phone number, or leave this blank.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us how we can help.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please add a little more detail (at least 10 characters).'
  }

  return errors
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0
}

/* ------------------------------------------------------------------------- *
 *  THE SWAP POINT
 *
 *  This is the ONLY function to change when a project needs real delivery.
 *  Right now it does nothing but resolve - the base template ships with no
 *  backend, no API route, and no network request. Submitting the form leaves
 *  the network tab empty by design.
 *
 *  To wire up real delivery, replace the body with a single call, e.g.:
 *
 *    const response = await fetch('https://formspree.io/f/XXXX', {
 *      method: 'POST',
 *      headers: { 'Content-Type': 'application/json' },
 *      body: JSON.stringify(values),
 *    })
 *    if (!response.ok) throw new Error('Message could not be sent.')
 *
 *  Throwing from here surfaces the error in the form's error state; returning
 *  normally shows the success confirmation. Nothing else needs to change.
 * ------------------------------------------------------------------------- */
export async function deliverContactForm(values: ContactFormValues): Promise<void> {
  // Referenced so the parameter is not flagged as unused before delivery is wired up.
  void values

  // Simulated latency, so the disabled-while-submitting state is visible in the
  // base template. Delete this line when adding a real request.
  await new Promise((resolve) => setTimeout(resolve, 600))
}
