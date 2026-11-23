import ImageSlot from '../components/ui/ImageSlot.jsx'
import { about } from '../content/site.js'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section bg-mint-50">
      <div className="container-page grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        {/*
          REAL PHOTO ONLY — this slot is for an actual photo of Shubham.
          Suggested: natural light, at a desk or in a clinic waiting area in Indore,
          looking at camera, plain background, portrait 4:5.
          Save as /public/images/shubham.webp and pass src="/images/shubham.webp".
        */}
        <ImageSlot
          src={about.photo.src}
          alt={about.photo.alt}
          label={about.photo.note}
          prompt="Real photograph only — do not generate a face."
          ratio="aspect-[4/5]"
          className="mx-auto max-w-sm"
        />
        <div>
          <h2 id="about-title" className="h2">
            {about.heading}
          </h2>
          <p className="mt-3 font-bold text-mint-800">
            {about.name}, {about.role}
          </p>
          <div className="mt-6 max-w-prose space-y-4 text-lg text-ink-soft">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-6 font-display text-xl font-medium text-ink">{about.hinglish}</p>
        </div>
      </div>
    </section>
  )
}
