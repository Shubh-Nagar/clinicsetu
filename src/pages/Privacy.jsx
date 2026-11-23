import LegalLayout from './LegalLayout.jsx'
import { brand, contact, seo } from '../content/site.js'
import { useSeo } from '../lib/useSeo.js'

export default function Privacy() {
  useSeo({ ...seo.privacy, path: '/privacy' })
  return (
    <LegalLayout title="Privacy policy" updated="23 November 2026">
      <section>
        <h2>The short version</h2>
        <p>
          The details you share with {brand.name} are used only to reply to your enquiry and, if we work together, to build your
          website. I don’t sell, rent or share them for marketing.
        </p>
      </section>
      <section>
        <h2>What I collect</h2>
        <ul>
          <li>What you type into a form: your name, clinic name, specialty, city or area, links, preferences and WhatsApp number.</li>
          <li>Messages you send me on WhatsApp or by email.</li>
        </ul>
        <p className="mt-3">This site doesn’t use advertising trackers.</p>
      </section>
      <section>
        <h2>How it’s used</h2>
        <ul>
          <li>To reply to you and prepare your free check or preview.</li>
          <li>To carry out the work if you go ahead.</li>
        </ul>
      </section>
      <section>
        <h2>Where it goes</h2>
        <p>
          Submitting a form opens WhatsApp with your details filled in; nothing is sent until you press send there. If email
          delivery of forms is switched on, a copy is also sent to my inbox through a form service (Web3Forms or Formspree).
        </p>
      </section>
      <section>
        <h2>Patient data</h2>
        <p>
          I don’t collect patient data through this site. Clinic websites I build are set up so they don’t store patient medical
          records.
        </p>
      </section>
      <section>
        <h2>Deleting your details</h2>
        <p>
          Ask me any time and I’ll delete your enquiry details: WhatsApp {contact.whatsappDisplay} or email{' '}
          <a className="font-bold text-mint-800 underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  )
}
