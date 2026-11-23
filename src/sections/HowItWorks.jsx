import { howItWorks } from '../content/site.js'

/** A real sequence, so numbered steps on a connecting line. */
export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section bg-mist">
      <div className="container-page">
        <h2 id="how-title" className="h2">
          {howItWorks.heading}
        </h2>
        <ol className="relative mt-12 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* connecting line */}
          <span aria-hidden="true" className="absolute bottom-4 left-[1.375rem] top-4 w-0.5 bg-mint-200 lg:bottom-auto lg:left-6 lg:right-6 lg:top-[1.375rem] lg:h-0.5 lg:w-auto" />
          {howItWorks.steps.map((s, idx) => (
            <li key={s.title} className="relative flex gap-5 lg:block">
              <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint-700 font-display text-lg font-bold text-white ring-8 ring-mist">
                {idx + 1}
              </span>
              <div className="lg:mt-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
