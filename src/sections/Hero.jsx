import { useEffect, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { Check, Clock, IndianRupee, MapPin, Phone, ShieldCheck } from 'lucide-react'
import WhatsAppIcon from '../components/ui/WhatsAppIcon.jsx'
import { hero } from '../content/site.js'
import { waLink } from '../lib/whatsapp.js'

/**
 * HERO
 * The memorable element of the page: a phone showing a *sample preview* of a
 * clinic homepage, the exact thing the doctor gets in 2 working days.
 * It cycles through three specialties (paused for reduced-motion, hover or focus).
 */
export default function Hero() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const s = hero.samples[i]

  useEffect(() => {
    if (reduce || paused) return
    const t = setInterval(() => setI((v) => (v + 1) % hero.samples.length), 4200)
    return () => clearInterval(t)
  }, [reduce, paused])

  const rise = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-to-b from-mint-50 to-white">
      <div className="container-page grid items-center gap-12 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div>
          <m.p {...rise(0)} className="font-display text-lg font-medium text-mint-800">
            {hero.hinglish}
          </m.p>
          <m.h1
            {...rise(0.06)}
            id="hero-title"
            className="mt-3 text-[2.6rem] font-bold leading-[1.02] sm:text-6xl lg:text-[4.25rem]"
          >
            {hero.headline}
          </m.h1>
          <m.p {...rise(0.14)} className="mt-6 max-w-[36rem] text-lg text-ink-soft sm:text-xl">
            {hero.sub}
          </m.p>

          <m.div {...rise(0.22)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#enquire" className="btn-primary text-lg">
              {hero.primaryCta}
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg">
              <WhatsAppIcon className="h-5 w-5" />
              {hero.secondaryCta}
            </a>
          </m.div>

          <m.ul {...rise(0.3)} aria-label="Why doctors choose this" className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {hero.trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-[0.95rem] font-bold text-ink-soft">
                <Check className="h-4 w-4 text-mint-700" strokeWidth={3} aria-hidden="true" />
                {t}
              </li>
            ))}
          </m.ul>
        </div>

        {/* Phone preview */}
        <m.div
          initial={{ opacity: 0, y: 40, rotate: reduce ? 0 : 3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[330px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <figure>
            <div className="relative rounded-phone border-[10px] border-ink bg-ink shadow-[0_30px_60px_-20px_rgba(18,63,48,.45)]">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" aria-hidden="true" />
              <div className="relative h-[560px] overflow-hidden rounded-[1.6rem] bg-white">
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={s.clinic}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35 }}
                    className="flex h-full flex-col"
                  >
                    <PhoneScreen s={s} />
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
            <figcaption className="mt-5 text-center text-sm text-ink-muted">
              Sample preview with a fictional clinic. Yours uses your real details.
            </figcaption>
          </figure>

          {/* Specialty switcher — also the control for keyboard / reduced-motion users */}
          <div role="group" aria-label="Show a sample for" className="mt-3 flex justify-center gap-1.5">
            {hero.samples.map((x, idx) => (
              <button
                key={x.specialty}
                type="button"
                aria-pressed={idx === i}
                onClick={() => setI(idx)}
                className={`rounded-full px-3.5 py-2 text-sm font-bold transition-colors ${
                  idx === i ? 'bg-mint-700 text-white' : 'bg-mint-100 text-mint-900 hover:bg-mint-200'
                }`}
              >
                {x.specialty}
              </button>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}

/**
 * The fake clinic homepage inside the phone. Mostly markup; a sample may add a
 * small AI-generated `photo` (fictional doctor, OK only because it's labelled "Sample").
 */
function PhoneScreen({ s }) {
  return (
    <>
      <div className="flex items-center justify-between bg-mint-700 px-4 pb-3 pt-8 text-white">
        <span className="font-display text-[0.95rem] font-semibold leading-tight">{s.clinic}</span>
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[0.65rem] font-bold">Sample</span>
      </div>
      <div className="flex-1 space-y-3 overflow-hidden px-4 py-4 text-[0.8rem]">
        <p className="text-[0.7rem] font-bold text-mint-800">{s.specialty} clinic · {s.area}</p>
        <p className="font-display text-[1.35rem] font-semibold leading-tight text-ink">{s.line}</p>
        <div className="flex items-center gap-3 rounded-xl bg-mist p-3">
          {s.photo && (
            <img
              src={s.photo}
              alt=""
              width="48"
              height="60"
              decoding="async"
              className="h-[60px] w-12 shrink-0 rounded-lg object-cover object-top"
            />
          )}
          <div>
            <p className="font-bold text-ink">{s.doctor}</p>
            <p className="mt-0.5 flex items-center gap-1 text-ink-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-mint-700" aria-hidden="true" /> {s.reg}
            </p>
          </div>
        </div>
        <ul className="space-y-1.5 text-ink-soft">
          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-mint-700" aria-hidden="true" /> {s.timings}
          </li>
          <li className="flex items-center gap-2">
            <IndianRupee className="h-4 w-4 text-mint-700" aria-hidden="true" /> {s.fee}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-mint-700" aria-hidden="true" /> {s.area}
          </li>
        </ul>
        {/* map placeholder */}
        <div className="relative h-24 overflow-hidden rounded-xl bg-mint-100" aria-hidden="true">
          <svg viewBox="0 0 200 80" className="h-full w-full" preserveAspectRatio="none">
            <path d="M0 50 Q50 30 100 45 T200 35" stroke="#fff" strokeWidth="6" fill="none" />
            <path d="M70 0 L90 80" stroke="#fff" strokeWidth="4" />
            <path d="M140 0 L130 80" stroke="#fff" strokeWidth="3" />
          </svg>
          <MapPin className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-full fill-mint-700 text-white" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 border-t border-mist-line p-3" aria-hidden="true">
        <span className="flex items-center justify-center gap-1.5 rounded-full border-2 border-mint-700 py-2 text-[0.8rem] font-bold text-mint-800">
          <Phone className="h-4 w-4" /> Call
        </span>
        <span className="flex items-center justify-center gap-1.5 rounded-full bg-mint-700 py-2 text-[0.8rem] font-bold text-white">
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
        </span>
      </div>
    </>
  )
}
