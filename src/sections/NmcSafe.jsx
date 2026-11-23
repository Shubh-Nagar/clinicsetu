import { ShieldCheck, X, Check, Info } from 'lucide-react'
import { nmc } from '../content/site.js'

/** "Not allowed → What I write instead" as a real, accessible table. */
export default function NmcSafe() {
  return (
    <section id="nmc-safe" aria-labelledby="nmc-title" className="section">
      <div className="container-page">
        <div className="flex items-center gap-3 text-mint-800">
          <ShieldCheck className="h-8 w-8" aria-hidden="true" />
          <h2 id="nmc-title" className="h2">
            {nmc.heading}
          </h2>
        </div>
        <p className="lede">{nmc.intro}</p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-mist-line">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Examples of wording not allowed under NMC guidelines, and the wording used instead</caption>
            <thead>
              <tr className="bg-mist text-[0.95rem]">
                <th scope="col" className="w-1/2 px-4 py-4 font-bold text-caution sm:px-7">
                  <span className="inline-flex items-center gap-2">
                    <X className="h-4 w-4" strokeWidth={3} aria-hidden="true" /> {nmc.columns.bad}
                  </span>
                </th>
                <th scope="col" className="w-1/2 px-4 py-4 font-bold text-mint-800 sm:px-7">
                  <span className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" /> {nmc.columns.good}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {nmc.rows.map((r) => (
                <tr key={r.bad} className="border-t border-mist-line align-top">
                  <td className="px-4 py-5 sm:px-7">
                    <span className="text-ink-muted line-through decoration-caution/70 decoration-2">{r.bad}</span>
                  </td>
                  <td className="bg-mint-50/60 px-4 py-5 font-bold text-ink sm:px-7">{r.good}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {nmc.alsoIncluded.map((a) => (
            <li key={a} className="flex gap-3 text-ink-soft">
              <Check className="mt-1 h-5 w-5 shrink-0 text-mint-700" strokeWidth={2.5} aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>

        <p className="mt-8 flex max-w-prose gap-2.5 rounded-2xl bg-mist p-4 text-sm text-ink-soft">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
          {nmc.disclaimer}
        </p>
      </div>
    </section>
  )
}
