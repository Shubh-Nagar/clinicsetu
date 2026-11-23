import { CalendarCheck, MonitorSmartphone } from 'lucide-react'
import WhatsAppIcon from '../components/ui/WhatsAppIcon.jsx'
import { contact, ctaBanner } from '../content/site.js'
import { waLink } from '../lib/whatsapp.js'

/**
 * CTA BANNER
 * Mint card with a cut-out doctor photo whose head breaks out above the card
 * (desktop). On mobile the text comes first and the photo sits at the bottom.
 * The photo is AI-generated and fictional, so it carries a small "illustrative" note.
 */
export default function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-banner-title"
      className="bg-[linear-gradient(to_bottom,#fff_50%,theme(colors.mint.50)_50%)] pb-16 pt-12 sm:pb-24 lg:pt-32"
    >
      <div className="container-page">
        <div className="relative rounded-[2rem] bg-mint-700 shadow-[0_30px_60px_-25px_rgba(18,63,48,.55)]">
          {/* Decoration, clipped to the card (the photo is not, so it can break out) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.07]" />
            <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-white/[0.05]" />
            <MonitorSmartphone
              className="absolute bottom-6 right-8 hidden h-24 w-24 text-white/15 lg:block"
              strokeWidth={1.25}
            />
          </div>

          <div className="relative grid items-end lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-10">
            {/* Copy */}
            <div className="px-6 pb-8 pt-10 sm:px-10 lg:order-2 lg:py-16 lg:pl-0 lg:pr-28">
              <p className="text-sm font-bold uppercase tracking-wider text-mint-200">{ctaBanner.eyebrow}</p>
              <h2 id="cta-banner-title" className="mt-3 text-[2rem] font-semibold leading-[1.1] !text-white sm:text-[2.6rem]">
                {ctaBanner.headline}
              </h2>
              <p className="mt-4 max-w-[34rem] text-lg text-white/85">{ctaBanner.sub}</p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="#enquire"
                  className="btn bg-white text-mint-800 ring-[6px] ring-white/20 hover:bg-mint-50 focus-visible:outline-white"
                >
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  {ctaBanner.primaryCta}
                </a>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2 font-bold text-white underline-offset-4 hover:underline focus-visible:outline-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {contact.whatsappDisplay}
                  <span className="sr-only">(WhatsApp, opens in a new tab)</span>
                </a>
              </div>
            </div>

            {/* Photo: soft arch behind, head breaks out of the card top on desktop */}
            <figure className="relative mx-auto w-full max-w-[340px] px-4 lg:order-1 lg:ml-8 lg:max-w-none lg:px-0">
              <div aria-hidden="true" className="absolute inset-x-6 bottom-0 top-[18%] rounded-t-full bg-white/10 lg:inset-x-2" />
              <img
                src={ctaBanner.image}
                alt="Smiling doctor in a white coat, seated at a desk"
                width="720"
                height="776"
                loading="lazy"
                decoding="async"
                className="relative block h-auto w-full lg:-mt-28"
              />
              <figcaption className="absolute bottom-2 right-3 rounded bg-mint-900/60 px-1.5 py-0.5 text-[0.7rem] text-white/90">
                {ctaBanner.imageNote}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
