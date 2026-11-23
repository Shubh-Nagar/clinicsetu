import { forms, brand } from '../content/site.js'

/**
 * Optionally send form data to Web3Forms or Formspree (configured in site.js).
 * Does nothing if no provider is set. Never throws — WhatsApp is the main channel,
 * so a failed email copy should not block the doctor.
 */
export async function sendToEndpoint(subject, fields) {
  try {
    if (forms.provider === 'web3forms' && forms.web3formsAccessKey) {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: forms.web3formsAccessKey, subject, from_name: brand.name, ...fields }),
      })
    } else if (forms.provider === 'formspree' && forms.formspreeUrl) {
      await fetch(forms.formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ _subject: subject, ...fields }),
      })
    }
  } catch (err) {
    console.warn('Form endpoint failed; WhatsApp still opened.', err)
  }
}

/**
 * Open WhatsApp first (synchronously, so mobile browsers don't block it as a popup),
 * then send the optional email copy in the background.
 */
export function submitLead({ subject, fields, waUrl }) {
  // Note: passing 'noopener' makes window.open return null, so we detach the opener manually.
  const win = window.open(waUrl, '_blank')
  if (win) win.opener = null
  else window.location.href = waUrl // popup blocked → same-tab fallback
  sendToEndpoint(subject, fields)
}
