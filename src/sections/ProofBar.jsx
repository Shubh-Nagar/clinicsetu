import { proof } from '../content/site.js'

/** Real client names only, with permission. Placeholders are styled to stand out. */
export default function ProofBar() {
  return (
    <section aria-labelledby="proof-title" className="border-y border-mist-line bg-white">
      <div className="container-page flex flex-col gap-4 py-7 md:flex-row md:items-center md:gap-8">
        <h2 id="proof-title" className="shrink-0 font-sans text-[0.95rem] font-bold text-ink-soft" style={{ letterSpacing: 0 }}>
          {proof.heading}
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {proof.items.map((name, idx) => (
            <li key={idx}>
              <span className={name.startsWith('[') ? 'placeholder-tag' : 'font-display text-base font-semibold text-ink'}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
