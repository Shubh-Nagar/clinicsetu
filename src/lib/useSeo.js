import { useEffect } from 'react'
import { brand } from '../content/site.js'

/** Set the page <title>, meta description and canonical for client-side routes. */
export function useSeo({ title, description, path = '/' }) {
  useEffect(() => {
    document.title = title
    const set = (selector, attr, value) => {
      const el = document.head.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    set('link[rel="canonical"]', 'href', `${brand.siteUrl}${path}`)
  }, [title, description, path])
}
