import { useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { CheckCircle2, ChevronLeft } from 'lucide-react'
import WhatsAppIcon from '../components/ui/WhatsAppIcon.jsx'
import { TextField, SelectField, ChoiceField } from '../components/ui/Fields.jsx'
import { enquiry, contact } from '../content/site.js'
import { formatMessage, waLink } from '../lib/whatsapp.js'
import { submitLead } from '../lib/submit.js'

const EMPTY = {
  doctor: '',
  clinic: '',
  specialty: '',
  area: '',
  website: '',
  google: '',
  language: '',
  when: '',
  phone: '',
}

// Which fields must be filled before moving past each step
const REQUIRED = [
  ['doctor', 'clinic', 'specialty'],
  ['area', 'website', 'google'],
  ['language', 'when', 'phone'],
]

const LABELS = {
  doctor: 'Doctor name',
  clinic: 'Clinic name',
  specialty: 'Specialty',
  area: 'City / area',
  website: 'Do you have a website?',
  google: 'Do you have a Google Business Profile?',
  language: 'Preferred language for the site',
  when: 'When do you want it live?',
  phone: 'Your WhatsApp number',
}

export default function Enquiry() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(EMPTY)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const formRef = useRef(null)
  const headingRef = useRef(null)

  const set = (k) => (v) => setData((d) => ({ ...d, [k]: typeof v === 'string' ? v : v.target.value }))

  function validate(s) {
    const missing = REQUIRED[s].filter((k) => !String(data[k]).trim())
    if (s === 2 && data.phone && data.phone.replace(/\D/g, '').length < 10) {
      return 'Please enter a 10-digit WhatsApp number.'
    }
    return missing.length ? `Please fill in: ${missing.map((k) => LABELS[k]).join(', ')}.` : ''
  }

  function next(e) {
    e.preventDefault()
    const msg = validate(step)
    setError(msg)
    if (msg) return
    if (step < 2) {
      setStep(step + 1)
      // move focus to the step heading so keyboard / screen-reader users know where they are
      requestAnimationFrame(() => headingRef.current?.focus())
      return
    }
    const fields = Object.fromEntries(Object.entries(data).map(([k, v]) => [LABELS[k], v]))
    submitLead({
      subject: `Website preview enquiry – ${data.clinic}`,
      fields,
      waUrl: waLink(formatMessage('Hello Shubham, I would like a free preview of my clinic website.', fields)),
    })
    setDone(true)
  }

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="section bg-gradient-to-b from-white to-mint-50">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 id="enquire-title" className="h2">
            {enquiry.heading}
          </h2>
          <p className="lede">{enquiry.body}</p>
          <p className="mt-6 rounded-2xl bg-white p-4 text-ink-soft ring-1 ring-mist-line">{enquiry.capacity}</p>
          <p className="mt-6 text-ink-soft">
            Prefer to talk?{' '}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="font-bold text-mint-800 underline underline-offset-4">
              WhatsApp {contact.whatsappDisplay}
            </a>
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-[0_20px_50px_-30px_rgba(18,63,48,.35)] ring-1 ring-mist-line sm:p-9">
          {done ? (
            <div role="status" className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-mint-700" aria-hidden="true" />
              <p className="mt-4 text-xl font-bold">{enquiry.success}</p>
              <button
                type="button"
                className="mt-6 text-sm font-bold text-mint-800 underline"
                onClick={() => {
                  setDone(false)
                  setStep(0)
                  setData(EMPTY)
                }}
              >
                Start a new enquiry
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={next} noValidate aria-describedby={error ? 'enq-error' : undefined}>
              {/* Progress */}
              <ol className="mb-7 flex gap-2" aria-label="Form progress">
                {enquiry.steps.map((label, idx) => (
                  <li key={label} className="flex-1">
                    <span className={`block h-1.5 rounded-full ${idx <= step ? 'bg-mint-700' : 'bg-mist-line'}`} aria-hidden="true" />
                    <span className={`mt-2 block text-xs font-bold sm:text-sm ${idx === step ? 'text-ink' : 'text-ink-muted'}`}>
                      <span className="sr-only">Step {idx + 1} of {enquiry.steps.length}: </span>
                      {label}
                      {idx < step && <span className="sr-only"> (done)</span>}
                      {idx === step && <span className="sr-only"> (current)</span>}
                    </span>
                  </li>
                ))}
              </ol>

              <h3 ref={headingRef} tabIndex={-1} className="mb-6 text-2xl font-semibold focus:outline-none">
                {enquiry.steps[step]}
              </h3>

              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="grid gap-5"
                >
                  {step === 0 && (
                    <>
                      <TextField id="enq-doctor" label={LABELS.doctor} required value={data.doctor} onChange={set('doctor')} placeholder="Dr. …" autoComplete="name" />
                      <TextField id="enq-clinic" label={LABELS.clinic} required value={data.clinic} onChange={set('clinic')} autoComplete="organization" />
                      <SelectField id="enq-specialty" label={LABELS.specialty} required options={enquiry.specialtyOptions} value={data.specialty} onChange={set('specialty')} />
                    </>
                  )}
                  {step === 1 && (
                    <>
                      <TextField id="enq-area" label={LABELS.area} required value={data.area} onChange={set('area')} placeholder="e.g. Vijay Nagar, Indore" autoComplete="address-level2" />
                      <ChoiceField name="enq-website" legend={LABELS.website} options={enquiry.yesNo} value={data.website} onChange={set('website')} required />
                      <ChoiceField name="enq-google" legend={LABELS.google} options={enquiry.yesNo} value={data.google} onChange={set('google')} required />
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <ChoiceField name="enq-language" legend={LABELS.language} options={enquiry.languageOptions} value={data.language} onChange={set('language')} required />
                      <SelectField id="enq-when" label={LABELS.when} required options={enquiry.timelineOptions} value={data.when} onChange={set('when')} />
                      <TextField
                        id="enq-phone"
                        label={LABELS.phone}
                        required
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="98xxx xxxxx"
                        value={data.phone}
                        onChange={set('phone')}
                      />
                    </>
                  )}
                </m.div>
              </AnimatePresence>

              {error && (
                <p id="enq-error" role="alert" className="mt-5 rounded-xl bg-caution-bg px-4 py-3 text-[0.95rem] font-bold text-caution">
                  {error}
                </p>
              )}

              <div className="mt-8 flex items-center justify-between gap-3">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setError('')
                      setStep(step - 1)
                    }}
                    className="inline-flex min-h-[48px] items-center gap-1 rounded-full px-3 font-bold text-ink-soft hover:text-ink"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" /> Back
                  </button>
                ) : (
                  <span />
                )}
                <button type="submit" className="btn-primary">
                  {step < 2 ? (
                    'Next'
                  ) : (
                    <>
                      <WhatsAppIcon className="h-5 w-5" /> {enquiry.submit}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
