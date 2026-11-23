import { ExternalLink } from 'lucide-react'
import ImageSlot from '../components/ui/ImageSlot.jsx'
import { work } from '../content/site.js'

/**
 * WORK
 * clients[] — real sites, added only with the doctor's permission.
 * demos[]   — fictional specialty templates, always labelled as demos.
 * Each item's image prompt + alt text lives in site.js (imagePrompt / alt).
 * Add `image: '/images/xyz.webp'` to an item in site.js to replace its placeholder.
 */
export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <div className="container-page">
        <h2 id="work-title" className="h2">
          {work.heading}
        </h2>
        <p className="lede">{work.intro}</p>

        <h3 className="mt-12 text-xl font-semibold">Client sites</h3>
        <ul className="mt-5 grid gap-6 md:grid-cols-2">
          {work.clients.map((c, idx) => (
            <li key={idx}>
              <Card item={c} wide />
            </li>
          ))}
        </ul>

        <h3 className="mt-14 text-xl font-semibold">Specialty demos</h3>
        <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.demos.map((d) => (
            <li key={d.title}>
              <Card item={d} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Card({ item, wide }) {
  const isPlaceholder = (t) => typeof t === 'string' && t.startsWith('[')
  return (
    <article className="group">
      <ImageSlot src={item.image} alt={item.alt} prompt={item.imagePrompt} label={item.image ? undefined : 'Image slot: see prompt in site.js'} ratio={wide ? 'aspect-[16/10]' : 'aspect-[4/3]'} />
      <div className="mt-4">
        <h4 className="font-display text-lg font-semibold">
          <span className={isPlaceholder(item.title) ? 'placeholder-tag' : ''}>{item.title}</span>
        </h4>
        <p className="mt-1 text-[0.95rem] text-ink-muted">
          <span className={isPlaceholder(item.meta) ? 'placeholder-tag' : ''}>{item.meta}</span>
        </p>
        {item.result && (
          <p className="mt-2 text-[0.95rem]">
            <span className={isPlaceholder(item.result) ? 'placeholder-tag' : 'text-ink-soft'}>{item.result}</span>
          </p>
        )}
        {item.url ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-bold text-mint-800 underline-offset-4 hover:underline">
            View site <ExternalLink className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <p className="mt-3 text-sm text-ink-muted">Link coming soon</p>
        )}
      </div>
    </article>
  )
}
