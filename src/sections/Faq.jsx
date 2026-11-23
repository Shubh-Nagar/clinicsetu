import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faq } from '../content/site.js'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" aria-labelledby="faq-title" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <h2 id="faq-title" className="h2 lg:sticky lg:top-24 lg:self-start">
          {faq.heading}
        </h2>
        <ul className="border-t border-mist-line">
          {faq.items.map((item, idx) => {
            const isOpen = open === idx
            const id = `faq-${idx}`
            return (
              <li key={item.q} className="border-b border-mist-line">
                <h3 className="font-sans text-lg" style={{ letterSpacing: 0 }}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel`}
                    id={`${id}-btn`}
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-bold text-ink hover:text-mint-800"
                  >
                    {item.q}
                    <Plus
                      className={`h-5 w-5 shrink-0 text-mint-700 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={`${id}-panel`}
                      role="region"
                      aria-labelledby={`${id}-btn`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-prose pb-6 text-ink-soft">{item.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
