import WhatsAppIcon from './ui/WhatsAppIcon.jsx'
import { waLink } from '../lib/whatsapp.js'

/** Always-visible WhatsApp button, bottom-right, with a pre-filled message. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shubham on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint-700 text-white shadow-[0_8px_24px_-6px_rgba(18,63,48,.5)] transition-transform hover:scale-105 hover:bg-mint-800 focus-visible:outline-offset-4"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
