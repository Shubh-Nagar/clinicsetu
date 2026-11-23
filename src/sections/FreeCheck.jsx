import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ClipboardCheck, CheckCircle2 } from 'lucide-react'
import { TextField } from '../components/ui/Fields.jsx'
import { freeCheck } from '../content/site.js'
import { formatMessage, waLink } from '../lib/whatsapp.js'
import { submitLead } from '../lib/submit.js'

export default function FreeCheck() {
  const [sent, setSent] = useState(false)
  const f = freeCheck.fields

  function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const fields = { [f.name]: data.name, [f.clinic]: data.clinic, [f.city]: data.city, [f.link]: data.link }
    submitLead({
      subject: `Free NMC + Google Profile check – ${data.clinic}`,
      fields,
      waUrl: waLink(formatMessage('Hello Shubham, I would like the free NMC + Google Profile check.', fields)),
    })
    setSent(true)
  }

  return (
    <section id="free-check" aria-labelledby="check-title" className="bg-mint-800 py-16 text-white sm:py-24">
      <div className="container-page grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <ClipboardCheck className="h-10 w-10 text-mint-300" aria-hidden="true" />
          <h2 id="check-title" className="h2 mt-4 text-white">
            {freeCheck.heading}
          </h2>
          <p className="mt-4 max-w-prose text-lg text-mint-50">{freeCheck.body}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 text-ink sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <m.div key="ok" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} role="status" className="py-6 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-mint-700" aria-hidden="true" />
                <p className="mt-4 text-lg font-bold">{freeCheck.success}</p>
                <button type="button" className="mt-5 text-sm font-bold text-mint-800 underline" onClick={() => setSent(false)}>
                  Send another
                </button>
              </m.div>
            ) : (
              <m.form key="form" exit={{ opacity: 0 }} onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField id="fc-name" name="name" label={f.name} required autoComplete="name" />
                  <TextField id="fc-clinic" name="clinic" label={f.clinic} required autoComplete="organization" />
                </div>
                <TextField id="fc-city" name="city" label={f.city} required defaultValue="Indore" autoComplete="address-level2" />
                <TextField
                  id="fc-link"
                  name="link"
                  label={f.link}
                  required
                  inputMode="url"
                  placeholder="https://maps.app.goo.gl/…"
                  hint="Open your clinic on Google Maps, tap Share, and paste the link here."
                />
                <button type="submit" className="btn-primary w-full">
                  {freeCheck.submit}
                </button>
              </m.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
