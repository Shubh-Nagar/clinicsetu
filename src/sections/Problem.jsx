import { Clock, Smartphone, AlertTriangle } from 'lucide-react'
import { problem } from '../content/site.js'

const icons = [Clock, Smartphone, AlertTriangle]

export default function Problem() {
  return (
    <section aria-labelledby="problem-title" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 id="problem-title" className="h2">
            {problem.heading}
          </h2>
          <p className="lede">{problem.intro}</p>
        </div>
        <ul className="divide-y divide-mist-line border-y border-mist-line">
          {problem.points.map((p, idx) => {
            const Icon = icons[idx] ?? Clock
            return (
              <li key={p.title} className="flex gap-5 py-7">
                <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-ink-soft">{p.body}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
