import { brand } from '../../content/site.js'

/** Brand mark: a bridge arc (setu) over a plus. Name comes from site.js. */
export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#1F6B50" />
        <path d="M14 40c4-10 10-15 18-15s14 5 18 15" fill="none" stroke="#C6E9D6" strokeWidth="5" strokeLinecap="round" />
        <path d="M32 33v14M25 40h14" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-ink">{brand.name}</span>
    </span>
  )
}
