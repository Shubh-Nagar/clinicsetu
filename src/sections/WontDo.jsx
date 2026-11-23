import { Ban } from 'lucide-react'
import { wontDo } from '../content/site.js'

export default function WontDo() {
  return (
    <section aria-labelledby="wont-title" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <h2 id="wont-title" className="h2">
            {wontDo.heading}
          </h2>
          <p className="lede">{wontDo.intro}</p>
        </div>
        <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {wontDo.items.map((w) => (
            <li key={w.title} className="flex gap-4">
              <Ban className="mt-1 h-6 w-6 shrink-0 text-caution" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-1 text-ink-soft">{w.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
