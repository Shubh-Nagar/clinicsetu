import LegalLayout from './LegalLayout.jsx'
import { brand, contact, seo } from '../content/site.js'
import { useSeo } from '../lib/useSeo.js'

export default function Terms() {
  useSeo({ ...seo.terms, path: '/terms' })
  return (
    <LegalLayout title="Terms" updated="23 November 2026">
      <section>
        <h2>Free preview</h2>
        <p>The homepage preview is free and comes with no obligation. If you don’t want to go ahead, you owe nothing.</p>
      </section>
      <section>
        <h2>Prices and payment</h2>
        <ul>
          <li>Prices are fixed and shown on the home page. GST extra where applicable.</li>
          <li>50% is due after you approve the preview, and 50% at launch.</li>
          <li>Anything outside your package (extra pages, photo shoots, paid software, ad budget) is quoted separately before any work starts.</li>
        </ul>
      </section>
      <section>
        <h2>Ownership</h2>
        <p>
          You own your domain, hosting account, Google Business Profile, website content and all logins. They’re set up in your
          name and handed over at launch.
        </p>
      </section>
      <section>
        <h2>Content and NMC</h2>
        <p>
          I write content in line with the NMC Guidelines on Ethical Advertising and Public Communication as I understand them. You
          check and approve all content before it goes live and remain responsible for what your clinic publishes. My guidance is
          good practice, not legal advice.
        </p>
      </section>
      <section>
        <h2>Search results</h2>
        <p>I set up your website and Google profile correctly, but I can’t guarantee any position in Google search or Maps.</p>
      </section>
      <section>
        <h2>Yearly Care Plan</h2>
        <p>The Care Plan renews each year. You can cancel before renewal; your website, domain and accounts stay with you.</p>
      </section>
      <section>
        <h2>Questions</h2>
        <p>
          {brand.name} is run by {contact.founder} in {contact.city}. WhatsApp {contact.whatsappDisplay} or email {contact.email}.
        </p>
      </section>
    </LegalLayout>
  )
}
