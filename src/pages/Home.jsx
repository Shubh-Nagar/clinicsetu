import Hero from '../sections/Hero.jsx'
import ProofBar from '../sections/ProofBar.jsx'
import Problem from '../sections/Problem.jsx'
import WhatYouGet from '../sections/WhatYouGet.jsx'
import NmcSafe from '../sections/NmcSafe.jsx'
import FreeCheck from '../sections/FreeCheck.jsx'
import Specialties from '../sections/Specialties.jsx'
import Pricing from '../sections/Pricing.jsx'
import Work from '../sections/Work.jsx'
import HowItWorks from '../sections/HowItWorks.jsx'
import WontDo from '../sections/WontDo.jsx'
import About from '../sections/About.jsx'
import Faq from '../sections/Faq.jsx'
import CtaBanner from '../sections/CtaBanner.jsx'
import Enquiry from '../sections/Enquiry.jsx'
import { seo } from '../content/site.js'
import { useSeo } from '../lib/useSeo.js'

/** Single landing page — sections in the order of the brief. Reorder freely here. */
export default function Home() {
  useSeo({ ...seo.home, path: '/' })
  return (
    <>
      <Hero />
      <ProofBar />
      <Problem />
      <WhatYouGet />
      <NmcSafe />
      <FreeCheck />
      <Specialties />
      <Pricing />
      <Work />
      <HowItWorks />
      <WontDo />
      <About />
      <Faq />
      <CtaBanner />
      <Enquiry />
    </>
  )
}
