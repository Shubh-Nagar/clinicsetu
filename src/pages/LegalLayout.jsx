import { Link } from 'react-router-dom'

/** Shared plain layout for Privacy and Terms. */
export default function LegalLayout({ title, updated, children }) {
  return (
    <article className="container-page max-w-3xl py-14 sm:py-20">
      <Link to="/" className="text-sm font-bold text-mint-800 underline underline-offset-4">
        Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-bold sm:text-5xl">{title}</h1>
      <p className="mt-3 text-sm text-ink-muted">Last updated: {updated}</p>
      <div className="mt-10 space-y-8 text-lg text-ink-soft [&_h2]:mb-2 [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
        {children}
      </div>
    </article>
  )
}
