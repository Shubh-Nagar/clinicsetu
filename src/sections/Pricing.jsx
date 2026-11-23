import { Check, Minus, CalendarClock } from 'lucide-react'
import { pricing } from '../content/site.js'

export default function Pricing() {
  const { plans, care, payment, notIncluded, currency } = pricing
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section bg-mist">
      <div className="container-page">
        <h2 id="pricing-title" className="h2">
          {pricing.heading}
        </h2>
        <p className="lede">{pricing.intro}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {plans.map((p) => (
            <article
              key={p.id}
              aria-labelledby={`plan-${p.id}`}
              className={`flex flex-col rounded-3xl bg-white p-7 sm:p-9 ${p.highlight ? 'ring-2 ring-mint-700' : 'ring-1 ring-mist-line'}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 id={`plan-${p.id}`} className="text-2xl font-semibold">
                  {p.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-100 px-3 py-1 text-sm font-bold text-mint-900">
                  <CalendarClock className="h-4 w-4" aria-hidden="true" />
                  {p.timeline}
                </span>
              </div>
              <p className="mt-1 text-ink-muted">{p.for}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold tracking-tight">
                  {currency}
                  {p.price}
                </span>
                <span className="text-ink-muted">{p.period}</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-mint-700" strokeWidth={2.5} aria-hidden="true" />
                    <span className={f.startsWith('Everything') ? 'font-bold' : 'text-ink-soft'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#enquire" className={`mt-8 ${p.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Care plan — a wide strip, because it goes with either plan */}
        <article aria-labelledby="plan-care" className="mt-5 grid gap-6 rounded-3xl bg-mint-100 p-7 sm:p-9 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-mint-900">{care.badge}</p>
            <h3 id="plan-care" className="mt-1 text-2xl font-semibold">
              {care.name}
            </h3>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold tracking-tight">
                {currency}
                {care.price}
              </span>
              <span className="text-ink-soft">{care.period}</span>
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {care.features.map((f) => (
              <li key={f} className="flex gap-3 text-ink">
                <Check className="mt-1 h-5 w-5 shrink-0 text-mint-700" strokeWidth={2.5} aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">{payment.title}</h3>
            <ol className="mt-5 space-y-4">
              {payment.steps.map((s, idx) => (
                <li key={s} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-700 font-display text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5 text-ink-soft">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-ink-muted">{payment.note}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{notIncluded.title}</h3>
            <ul className="mt-5 space-y-3">
              {notIncluded.items.map((n) => (
                <li key={n} className="flex gap-3 text-ink-soft">
                  <Minus className="mt-1 h-5 w-5 shrink-0 text-ink-muted" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
