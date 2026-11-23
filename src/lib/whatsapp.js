import { contact } from '../content/site.js'

/** Build a wa.me link with a pre-filled message. */
export function waLink(message = contact.whatsappDefaultMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Turn a { label: value } object into a tidy WhatsApp message. */
export function formatMessage(title, fields) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => `${k}: ${String(v).trim()}`)
  return `${title}\n\n${lines.join('\n')}`
}
