import { Smile, Activity, Sparkles, Eye, Bone, HeartPulse, Wind, DoorOpen, Stethoscope } from 'lucide-react'
import { specialties } from '../content/site.js'

const ICONS = { Smile, Activity, Sparkles, Eye, Bone, HeartPulse, Wind, DoorOpen }

export default function Specialties() {
  return (
    <section aria-labelledby="spec-title" className="section">
      <div className="container-page">
        <h2 id="spec-title" className="h2">
          {specialties.heading}
        </h2>
        <p className="lede">{specialties.intro}</p>
        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-mist-line bg-mist-line sm:grid-cols-2 lg:grid-cols-4">
          {specialties.items.map((s) => {
            const Icon = ICONS[s.icon] ?? Stethoscope
            return (
              <li key={s.key} className="bg-white p-6">
                <Icon className="h-7 w-7 text-mint-700" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{s.name}</h3>
                <p className="mt-1.5 text-[0.95rem] text-ink-soft">{s.note}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
