import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { brand } from '../content/site.js'

export default function NotFound() {
  useEffect(() => {
    document.title = `Page not found | ${brand.name}`
  }, [])
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-4xl font-bold">This page doesn’t exist.</h1>
      <p className="mt-4 text-ink-soft">The link may be old or mistyped.</p>
      <Link to="/" className="btn-primary mt-8">
        Go to the home page
      </Link>
    </div>
  )
}
