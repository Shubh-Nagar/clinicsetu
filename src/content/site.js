/**
 * ============================================================
 *  SITE CONTENT & CONFIG — edit this file, not the components.
 * ============================================================
 *  Everything a visitor reads lives here: brand name, contact
 *  details, prices, section copy, FAQ, form options.
 *
 *  This file is also read by vite.config.js at build time to
 *  fill in the <title>, meta tags, JSON-LD schema, sitemap.xml
 *  and robots.txt, so keep it plain JavaScript (no JSX).
 *
 *  COPY RULE: this site follows the same NMC-safe rules it sells.
 *  Do not add "best", "No.1", "leading", "top", "guaranteed",
 *  invented numbers, or reviews you don't have permission to use.
 *  Placeholders in [SQUARE BRACKETS] must be replaced with real,
 *  permitted content — or the item removed — before launch.
 * ============================================================
 */

export const brand = {
  name: 'ClinicSetu',
  tagline: 'Clinic websites for doctors in Indore',
  // Public URL after deploy (no trailing slash). Used for canonical, OG, sitemap.
  siteUrl: 'https://clinicsetu.in',
}

export const contact = {
  founder: 'Shubham Nagar',
  city: 'Indore',
  region: 'Madhya Pradesh',
  country: 'IN',
  whatsappDisplay: '+91 93217 32524',
  whatsappNumber: '919321732524', // digits only, with country code, for wa.me links
  email: 'shubham.nagar2001@gmail.com',
  serviceAreas: ['Indore', 'Dewas', 'Ujjain', 'Bhopal'],
  // Default message for the floating WhatsApp button and "WhatsApp me" CTAs
  whatsappDefaultMessage:
    'Hello Shubham, I am a doctor and I would like a free preview of my clinic website.',
}

/**
 * Optional form endpoint. Leave empty to use WhatsApp only.
 *  - Web3Forms: set provider 'web3forms' and paste your access key
 *    (https://web3forms.com — free, no backend needed).
 *  - Formspree: set provider 'formspree' and paste the full form URL,
 *    e.g. https://formspree.io/f/abcdwxyz
 * When set, form data is sent here AND WhatsApp opens with the details.
 */
export const forms = {
  provider: '', // '' | 'web3forms' | 'formspree'
  web3formsAccessKey: '', // e.g. 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  formspreeUrl: '', // e.g. 'https://formspree.io/f/abcdwxyz'
}

export const seo = {
  home: {
    title: `Doctor Website Design in Indore | ${brand.name} – Clinic Websites, NMC-safe`,
    description:
      'Clinic website design in Indore for doctors and small clinics. Website + Google Business Profile, NMC-safe copy, fixed prices from ₹14,999. See a free preview of your homepage before you pay.',
  },
  privacy: {
    title: `Privacy Policy | ${brand.name}`,
    description: `How ${brand.name} uses the details you share in an enquiry form.`,
  },
  terms: {
    title: `Terms | ${brand.name}`,
    description: `Plain-language terms for ${brand.name} clinic website projects.`,
  },
}

export const nav = [
  { label: 'What you get', href: '#what-you-get' },
  { label: 'NMC-safe', href: '#nmc-safe' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

/* ---------------------------------------------------------------- HERO */
export const hero = {
  headline: 'See your clinic website before you pay for it.',
  hinglish: 'Pehle dekhiye, phir decide kijiye.',
  sub: 'I build a mobile-first website for your clinic and set up your Google Business Profile properly, as one bundle. In 2 working days you get a working preview of your own homepage. You pay only if you like it.',
  primaryCta: 'Get my free preview',
  secondaryCta: 'WhatsApp me',
  trust: ['Indore-based', 'NMC-safe', 'Fixed price', 'You own everything'],
  // Sample clinics shown in the hero phone. Fictional — labelled "Sample" in the UI.
  samples: [
    {
      specialty: 'Dental',
      clinic: 'Smile Line Dental Clinic',
      doctor: 'Dr. Ananya Rao, BDS, MDS (Endodontics)',
      reg: 'Reg. No. MP-XXXXX',
      area: 'Vijay Nagar, Indore',
      timings: 'Mon–Sat · 10 am–2 pm, 5–8 pm',
      fee: 'Consultation ₹300',
      line: 'Root canal under local anaesthesia',
      // AI-generated photo. OK here only because this clinic is fictional and labelled "Sample".
      photo: '/images/sample-dental-doctor.webp',
    },
    {
      specialty: 'Physiotherapy',
      clinic: 'MoveWell Physio Centre',
      doctor: 'Dr. Kabir Jain, BPT, MPT (Ortho)',
      reg: 'Reg. No. XXXXX',
      area: 'Palasia, Indore',
      timings: 'Mon–Sat · 8 am–1 pm, 4–8 pm',
      fee: 'Session ₹500',
      line: 'Knee and back pain rehabilitation',
    },
    {
      specialty: 'Pulmonology',
      clinic: 'Breathe Chest Clinic',
      doctor: 'Dr. Meera Joshi, MBBS, MD (Pulmonary Medicine)',
      reg: 'Reg. No. MP-XXXXX',
      area: 'Old Palasia, Indore',
      timings: 'Mon–Sat · 11 am–2 pm, 6–8 pm',
      fee: 'Consultation ₹600',
      line: 'Asthma, COPD and lung function tests',
    },
  ],
}

/* ---------------------------------------------------------- PROOF BAR */
export const proof = {
  heading: 'Clinics I have built for',
  // Replace with real clinic names ONLY with the doctor's written permission.
  items: [
    '[CLIENT CLINIC NAME – add with permission]',
    '[CLIENT CLINIC NAME – add with permission]',
    '[CLIENT CLINIC NAME – add with permission]',
    '[CLIENT CLINIC NAME – add with permission]',
  ],
  note: 'Names are shown only with each doctor’s permission.',
}

/* ------------------------------------------------------------ PROBLEM */
export const problem = {
  heading: 'Patients look you up on Google Maps before they call.',
  intro:
    'Most patients in Indore search “dentist near me” or a clinic name, look at the map listing, and decide in under a minute. If what they need isn’t there, they move on to the next pin.',
  points: [
    {
      title: 'Missing timings, fees or directions',
      body: 'No timings means a phone call — or a skipped visit. Your reception answers the same three questions all day.',
    },
    {
      title: 'No website, or one that doesn’t open well on a phone',
      body: 'A patient who can’t check your qualifications or find the clinic easily tends to choose a clinic they can.',
    },
    {
      title: 'Old wording that may now break NMC rules',
      body: 'Since the NMC guidelines of 6 October 2026, words like “best”, “painless” or patient testimonials can put your registration at risk. Many older clinic sites still use them.',
    },
  ],
}

/* ------------------------------------------------------ WHAT YOU GET */
export const whatYouGet = {
  heading: 'One bundle: your website and your Google profile, done properly.',
  intro:
    'A website alone isn’t enough, and a Google listing alone isn’t enough. Patients use both, so I set up both and make them say the same thing.',
  website: {
    title: 'Clinic website',
    items: [
      'Mobile-first design that loads fast on 4G',
      'WhatsApp and call buttons on every page',
      'Clinic timings, consultation fees and a map',
      'Doctor page with qualifications and registration number',
      'A clear page for each treatment you offer (Clinic Plus)',
      'English, or English + Hindi (Clinic Plus)',
      'Search Console set up, so Google can read your site',
    ],
  },
  google: {
    title: 'Google Business Profile',
    items: [
      'Correct clinic name, category and specialty',
      'Timings, holidays and phone number that match the website',
      'Map pin checked and corrected if needed',
      'Services, description and website link filled in',
      'Clinic photos you provide, uploaded and labelled',
      'Upkeep every year with the Care Plan',
    ],
  },
  outcomes: {
    title: 'What this does for you',
    items: [
      'Patients can find you on Google and see the essentials in one place',
      'They can check your qualifications and trust you before the visit',
      'They can call or WhatsApp you in one tap',
      'Fewer repeated calls about timings, fees and directions',
      'Your wording stays within NMC rules, so your registration stays safe',
    ],
  },
}

/* ----------------------------------------------------------- NMC-SAFE */
export const nmc = {
  heading: 'NMC-safe by design.',
  intro:
    'Every page I write follows the NMC Guidelines on Ethical Advertising and Public Communication (6 October 2026). The site should inform patients, not sell to them. Here is what that looks like in practice.',
  columns: { bad: 'Not allowed', good: 'What I write instead' },
  rows: [
    { bad: 'Best dentist in Indore', good: 'Dental clinic in Vijay Nagar, Indore' },
    { bad: 'Painless root canal', good: 'Root canal under local anaesthesia' },
    { bad: 'No.1 skin clinic in MP', good: 'Dermatology clinic, Dr. [Name], MD (Dermatology)' },
    { bad: '100% guaranteed results', good: 'What the treatment involves, how long it takes, and what to expect' },
    { bad: '“Best doctor ever!” – patient review', good: 'No patient testimonials on the website' },
    { bad: 'Before-and-after photos', good: 'Clear photos of the clinic, equipment and the doctor' },
    { bad: '20% off this month', good: 'Your standard consultation fee, shown plainly' },
  ],
  alsoIncluded: [
    'Qualifications and registration number shown for each doctor',
    'No discounts or offers on the doctor’s site',
    'I never charge per lead or per patient',
  ],
  disclaimer:
    'This is good practice based on my reading of the NMC guidelines, not legal advice. For a specific concern, please check with your state medical council or a lawyer.',
}

/* ----------------------------------------------------- FREE CHECK FORM */
export const freeCheck = {
  heading: 'Free NMC + Google Profile check',
  body: 'Send me your clinic’s Google Maps link or website. I’ll look at your website, Google profile and Instagram and send you a 1-page fix list on WhatsApp. No charge, and no obligation to work with me.',
  fields: {
    name: 'Your name',
    clinic: 'Clinic name',
    city: 'City',
    link: 'Google Maps link or website',
  },
  submit: 'Send me my fix list',
  success: 'WhatsApp should now be open with your details. Press send there and I’ll reply within 1 working day.',
}

/* --------------------------------------------------------- SPECIALTIES */
export const specialties = {
  heading: 'Built for your specialty.',
  intro: 'Each specialty has its own questions patients ask before they visit. I plan the pages around them.',
  items: [
    { key: 'dental', name: 'Dental', icon: 'Smile', note: 'Treatment pages, fees per consultation, chair-side photos' },
    { key: 'physio', name: 'Physiotherapy', icon: 'Activity', note: 'Conditions treated, session fees, home-visit details' },
    { key: 'derma', name: 'Dermatology', icon: 'Sparkles', note: 'Procedures explained plainly, no before-and-after images' },
    { key: 'eye', name: 'Eye care', icon: 'Eye', note: 'Tests offered, surgery days, insurance and TPA notes' },
    { key: 'ortho', name: 'Orthopaedics', icon: 'Bone', note: 'OPD timings, hospital attachments, X-ray facility' },
    { key: 'ivf', name: 'IVF & gynaecology', icon: 'HeartPulse', note: 'Sensitive, private tone; clear first-visit guide' },
    { key: 'pulmo', name: 'Pulmonology', icon: 'Wind', note: 'PFT, sleep study and allergy test information' },
    { key: 'new', name: 'Newly opened clinics', icon: 'DoorOpen', note: 'Get found from week one, with a correct map pin' },
  ],
}

/* ------------------------------------------------------------- PRICING */
export const pricing = {
  heading: 'Fixed prices. No surprises.',
  intro: 'You know the full cost before we start. GST extra where applicable.',
  currency: '₹',
  plans: [
    {
      id: 'essential',
      name: 'Clinic Essential',
      price: '14,999',
      period: 'one time',
      timeline: 'Live in 7 days',
      for: 'For a single doctor or a small clinic',
      features: [
        '5–6 pages',
        'WhatsApp and call buttons',
        'Timings, fees and map',
        'Doctor page with qualifications and registration number',
        'Google Business Profile set-up',
        'Google Search Console',
      ],
      cta: 'Start with a free preview',
    },
    {
      id: 'plus',
      name: 'Clinic Plus',
      price: '19,999',
      period: 'one time',
      timeline: 'Live in 10–14 days',
      for: 'For clinics with several treatments',
      highlight: true,
      features: [
        'Everything in Essential',
        '8–12 pages, one per treatment',
        'English + Hindi',
        'Appointment request form, or a link to your existing booking system',
        'NMC check of your Instagram',
      ],
      cta: 'Start with a free preview',
    },
  ],
  care: {
    name: 'Yearly Care Plan',
    price: '7,499',
    period: 'per year',
    badge: 'Recommended for every clinic',
    features: [
      'Hosting',
      'Domain renewal',
      'SSL certificate',
      'Backups',
      'Small content updates (timings, fees, new photos)',
      'Google Business Profile upkeep',
      'Yearly NMC re-check',
    ],
  },
  payment: {
    title: 'How payment works',
    steps: [
      'Free homepage preview first. You pay nothing to see it.',
      '50% after you approve the preview.',
      '50% at launch.',
    ],
    note: 'GST extra where applicable.',
  },
  notIncluded: {
    title: 'Not included',
    items: [
      'Professional photo shoots',
      'Paid ads budget',
      'More pages than your package',
      'Paid third-party software',
    ],
  },
}

/* ---------------------------------------------------------------- WORK */
export const work = {
  heading: 'Work',
  intro: 'Live clinic sites (shared with permission) and demo templates for three specialties.',
  clients: [
    {
      title: '[CLIENT CLINIC NAME – add with permission]',
      meta: '[Specialty · Area, City]',
      result: '[RESULT – e.g. live in 8 days]',
      url: '',
      imagePrompt:
        'Realistic device mockup: an iPhone and a laptop on a clean white desk showing a calm mint-and-white clinic website homepage with doctor name, timings and a green WhatsApp button; soft daylight, minimal props, no people, no logos, 4:3',
      alt: '[Clinic name] website shown on a phone and laptop',
    },
    {
      title: '[CLIENT CLINIC NAME – add with permission]',
      meta: '[Specialty · Area, City]',
      result: '[RESULT – e.g. Google profile fixed, map pin corrected]',
      url: '',
      imagePrompt:
        'Realistic device mockup: a single smartphone held at a slight angle against a soft grey background, screen showing a clinic website with timings, fees and a map section, mint accents, no people, no brand logos, 4:3',
      alt: '[Clinic name] website on a smartphone',
    },
  ],
  demos: [
    {
      title: 'Dental clinic demo',
      meta: 'Demo template · fictional clinic',
      url: '', // add your demo URL
      // AI-generated photo of a fictional dentist. Fine for a labelled demo, never for client work.
      image: '/images/demo-dental.webp',
      imagePrompt:
        'Flat UI illustration of a dental clinic website on a phone: white background, mint green accents, simple tooth icon, sections for treatments, timings and fees, clean sans-serif type, no people, 4:3',
      alt: 'AI-generated photo of a fictional dentist at a desk in a dental clinic, used in the dental demo template',
    },
    {
      title: 'Physiotherapy demo',
      meta: 'Demo template · fictional clinic',
      url: '',
      imagePrompt:
        'Flat UI illustration of a physiotherapy clinic website on a laptop and phone: white and mint palette, simple line icons of a knee and spine, session fee card, map block, no people, 4:3',
      alt: 'Demo physiotherapy clinic website template',
    },
    {
      title: 'Pulmonology demo',
      meta: 'Demo template · fictional clinic',
      url: '',
      imagePrompt:
        'Flat UI illustration of a chest clinic website on a tablet: white background, soft mint accents, abstract line drawing of lungs, sections for lung function test and timings, no people, 4:3',
      alt: 'Demo pulmonology clinic website template',
    },
  ],
}

/* -------------------------------------------------------- HOW IT WORKS */
export const howItWorks = {
  heading: 'How it works',
  steps: [
    {
      title: '10-minute brief',
      body: 'A short call, or just send me a WhatsApp voice note: your clinic, your timings, your treatments.',
    },
    {
      title: 'Free homepage preview in 2 working days',
      body: 'A working preview of your own homepage on your phone. Not a template, not a screenshot.',
    },
    {
      title: 'Approve, pay 50%, go live in 7–14 days',
      body: 'I build the remaining pages and set up your Google profile. You check everything before launch.',
    },
    {
      title: 'Hand-over and yearly care',
      body: 'You get every login. With the Care Plan, I keep hosting, renewals, updates and the yearly NMC re-check handled.',
    },
  ],
}

/* ---------------------------------------------------------- WON'T DO */
export const wontDo = {
  heading: 'What I won’t do',
  intro: 'Some things get clinics into trouble, or simply aren’t honest. I don’t offer them.',
  items: [
    { title: 'No “best doctor” claims', body: 'No superlatives, rankings or comparisons with other doctors.' },
    { title: 'No buying reviews', body: 'No fake, paid or incentivised Google reviews. Ever.' },
    { title: 'No per-patient or per-lead fees', body: 'You pay a fixed price for the work, not a share of your patients.' },
    { title: 'No ranking guarantees', body: 'Nobody can honestly guarantee a Google position. I set things up correctly; Google decides.' },
    { title: 'No ad-budget management', body: 'I don’t run paid ads. If you choose to run them, that stays with you.' },
  ],
}

/* --------------------------------------------------------------- ABOUT */
export const about = {
  heading: 'You deal with the person who builds your site.',
  name: 'Shubham Nagar',
  role: 'designer and engineer in Indore',
  paragraphs: [
    'I’m Shubham. I design and build websites, and I work with healthcare institutions in Madhya Pradesh day to day, so I know how clinics actually run: busy OPDs, receptionists on the phone, doctors who have five minutes between patients.',
    'I work alone, on purpose. There’s no account manager passing messages along. You talk to me, I build it, and I answer when something needs changing.',
    'I take on a limited number of new clinics each month, so each one gets proper attention.',
  ],
  hinglish: 'Aapki clinic, aapka naam, aapka control.',
  photo: {
    // Use a REAL photo of Shubham here. Do not use an AI-generated face.
    alt: `Shubham Nagar, founder of ${brand.name}, in Indore`,
    note: '[REAL PHOTO OF SHUBHAM – add here]',
  },
}

/* ---------------------------------------------------------- CTA BANNER */
export const ctaBanner = {
  eyebrow: 'Free homepage preview',
  headline: 'Let’s build a website your patients can trust.',
  sub: 'A clean, mobile-first site and a properly set-up Google Business Profile for your clinic. See your own homepage in 2 working days, before you pay anything.',
  primaryCta: 'Get my free preview',
  // AI-generated photo of a fictional doctor. It is illustrative only and labelled
  // as such on the page. Never present it as a client.
  image: '/images/cta-doctor.webp',
  imageNote: 'Illustrative AI-generated image',
}

/* ----------------------------------------------------------------- FAQ */
export const faq = {
  heading: 'Questions doctors ask',
  items: [
    {
      q: 'How much does a clinic website cost?',
      a: 'Clinic Essential is ₹14,999 one time and Clinic Plus is ₹19,999 one time. The Yearly Care Plan is ₹7,499 per year and covers hosting, domain renewal, SSL, backups, small updates, Google profile upkeep and a yearly NMC re-check. GST extra where applicable.',
    },
    {
      q: 'What does the free preview include?',
      a: 'A working homepage for your clinic, with your name, specialty, timings, fees and contact buttons, that you can open on your phone. It’s built for you, not a generic template. If you don’t like it, you don’t pay anything.',
    },
    {
      q: 'How long does it take?',
      a: 'The preview takes 2 working days. After you approve it, Clinic Essential is live in about 7 days and Clinic Plus in 10–14 days. The main thing that affects timing is how quickly I receive your details and photos.',
    },
    {
      q: 'Are doctors allowed to have websites under NMC rules?',
      a: 'Yes. The NMC guidelines allow factual, informational communication: your name, qualifications, registration number, specialty, services, timings, fees and contact details. What they restrict is self-promotion such as superlatives, guaranteed results, testimonials and discounts. I write every page within those limits. This is good practice, not legal advice.',
    },
    {
      q: 'Can patient reviews go on my website?',
      a: 'No. Patient testimonials and reviews on the doctor’s own website go against the NMC guidelines, so I don’t add them. Patients can still leave reviews on Google themselves; I just never buy, write or ask for them in exchange for anything.',
    },
    {
      q: 'Will this replace Practo or other listings?',
      a: 'No, and it doesn’t need to. A listing on a platform is rented space on someone else’s site. Your own website and Google profile belong to you. Many doctors keep both.',
    },
    {
      q: 'Who owns the website?',
      a: 'You do. The domain, hosting account, Google Business Profile and all logins are in your name. If you ever stop working with me, everything stays with you.',
    },
    {
      q: 'Are there yearly charges?',
      a: 'The website itself is a one-time payment. Domains and hosting need renewing every year, which the Yearly Care Plan (₹7,499 per year) covers along with updates and an NMC re-check. You can also manage renewals yourself.',
    },
    {
      q: 'Can I have pages in Hindi?',
      a: 'Yes. Clinic Plus includes English + Hindi pages. Many patients in Indore and nearby towns are more comfortable reading in Hindi.',
    },
    {
      q: 'Can we do everything over WhatsApp?',
      a: 'Yes. Most doctors send details, photos and feedback on WhatsApp, including voice notes. I can also visit your clinic in Indore if that’s easier.',
    },
  ],
}

/* ------------------------------------------------------ ENQUIRY FORM */
export const enquiry = {
  heading: 'Get your free preview.',
  body: 'Answer a few quick questions. When you press send, WhatsApp opens with your answers filled in. Press send there, and I’ll reply within 1 working day.',
  capacity: 'I take on a limited number of new clinics each month.',
  steps: ['About you', 'Your clinic online', 'Timing and contact'],
  specialtyOptions: [
    'Dental',
    'Physiotherapy',
    'Dermatology',
    'Eye care',
    'Orthopaedics',
    'IVF / Gynaecology',
    'Pulmonology',
    'General physician',
    'Other',
  ],
  yesNo: ['Yes', 'No', 'Not sure'],
  languageOptions: ['English', 'Hindi', 'English + Hindi'],
  timelineOptions: ['As soon as possible', 'Within a month', 'In 1–3 months', 'Just exploring'],
  submit: 'Send on WhatsApp',
  success: 'WhatsApp should now be open with your details. Press send there to reach me.',
}

/* -------------------------------------------------------------- FOOTER */
export const footer = {
  blurb: 'Clinic websites and Google Business Profiles for doctors. Indore, Madhya Pradesh.',
  privacyNote: 'Details you share are used only to reply to your enquiry.',
  credit: `Website by ${brand.name}`,
}
