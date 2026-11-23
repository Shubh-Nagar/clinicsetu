import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, m } from 'framer-motion'
import Logo from './ui/Logo.jsx'
import { nav, hero, brand } from '../content/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur transition-shadow ${scrolled ? 'shadow-[0_1px_0_#DFE5E2]' : ''}`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label={`${brand.name} home`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={`/${item.href}`} className="text-[0.95rem] font-bold text-ink-soft hover:text-mint-800">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="/#enquire" className="btn-primary hidden min-h-[42px] px-5 py-2 text-[0.95rem] sm:inline-flex">
            {hero.primaryCta}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-mist lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-mist-line bg-white lg:hidden"
          >
            <ul className="container-page py-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-lg font-bold text-ink hover:bg-mint-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="/#enquire" onClick={() => setOpen(false)} className="btn-primary w-full">
                  {hero.primaryCta}
                </a>
              </li>
            </ul>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
