import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import Logo from './ui/Logo.jsx'
import WhatsAppIcon from './ui/WhatsAppIcon.jsx'
import { contact, footer, nav } from '../content/site.js'
import { waLink } from '../lib/whatsapp.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-mist-line bg-mist pb-24 pt-14 sm:pb-14">
      <div className="container-page grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-ink-soft">{footer.blurb}</p>
          <p className="mt-3 flex items-center gap-2 text-ink-soft">
            <MapPin className="h-4 w-4 text-mint-700" aria-hidden="true" />
            {contact.city}, {contact.region}
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">Contact</h2>
          <ul className="mt-3 space-y-2.5">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-soft hover:text-mint-800">
                <WhatsAppIcon className="h-4 w-4 text-mint-700" />
                WhatsApp {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 break-all text-ink-soft hover:text-mint-800">
                <Mail className="h-4 w-4 shrink-0 text-mint-700" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-base font-semibold">Links</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} className="text-ink-soft hover:text-mint-800">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="text-ink-soft hover:text-mint-800">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-ink-soft hover:text-mint-800">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-page mt-10 flex flex-col gap-2 border-t border-mist-line pt-6 text-sm text-ink-muted sm:flex-row sm:justify-between">
        <p>{footer.privacyNote}</p>
        <p>
          © {year} · {footer.credit}
        </p>
      </div>
    </footer>
  )
}
