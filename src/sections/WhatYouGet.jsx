import { Check, Globe, MapPinned, Plus } from 'lucide-react'
import { whatYouGet } from '../content/site.js'

/** The bundle: two panels joined by a "+" so the offer reads as one thing. */
export default function WhatYouGet() {
  const { website, google, outcomes } = whatYouGet
  return (
    <section id="what-you-get" aria-labelledby="wyg-title" className="section bg-mist">
      <div className="container-page">
        <h2 id="wyg-title" className="h2 max-w-3xl">
          {whatYouGet.heading}
        </h2>
        <p className="lede">{whatYouGet.intro}</p>

        <div className="relative mt-12 grid gap-4 md:grid-cols-2 md:gap-6">
          <Panel icon={Globe} {...website} />
          <span
            className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-mint-700 text-white ring-8 ring-mist md:flex"
            aria-hidden="true"
          >
            <Plus className="h-6 w-6" strokeWidth={3} />
          </span>
          <Panel icon={MapPinned} {...google} />
        </div>

        <div className="mt-6 rounded-3xl bg-mint-700 p-7 text-white sm:p-10">
          <h3 className="text-2xl font-semibold text-white">{outcomes.title}</h3>
          <ul className="mt-5 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {outcomes.items.map((o) => (
              <li key={o} className="flex gap-3 text-lg text-mint-50">
                <Check className="mt-1 h-5 w-5 shrink-0 text-mint-300" strokeWidth={3} aria-hidden="true" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Panel({ icon: Icon, title, items }) {
  return (
    <div className="rounded-3xl bg-white p-7 sm:p-9">
      <div className="flex items-center gap-3">
        <Icon className="h-7 w-7 text-mint-700" aria-hidden="true" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-ink-soft">
            <Check className="mt-1 h-5 w-5 shrink-0 text-mint-600" strokeWidth={2.5} aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}
