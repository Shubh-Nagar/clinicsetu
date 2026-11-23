/**
 * ImageSlot — a placeholder that becomes a real, lazy-loaded image.
 *
 * Until you add `src`, it shows a calm mint panel with the slot's label,
 * so the layout never breaks. The AI image prompt for each slot is passed
 * in as `prompt` (kept in site.js / next to the usage) and also written
 * into a data attribute so you can find it in DevTools.
 *
 * To fill a slot:
 *  1. Generate the image from the prompt (or use a real photo).
 *  2. Save it as WebP in /public/images/, e.g. /images/work-dental.webp
 *  3. Pass src="/images/work-dental.webp" where the slot is used.
 *
 * RULE: never use stock or AI photos of real-looking doctors presented as clients.
 */
export default function ImageSlot({ src, alt, prompt, label, ratio = 'aspect-[4/3]', className = '' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${ratio} w-full rounded-2xl object-cover ${className}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={alt}
      data-image-prompt={prompt}
      className={`${ratio} relative w-full overflow-hidden rounded-2xl bg-mint-100 ${className}`}
    >
      {/* soft abstract shapes so empty slots still look intentional */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="330" cy="40" r="120" fill="#C6E9D6" />
        <circle cx="60" cy="280" r="90" fill="#E2F4EA" />
        <rect x="140" y="70" width="120" height="180" rx="18" fill="#fff" opacity=".85" />
        <rect x="156" y="96" width="88" height="10" rx="5" fill="#9DD7B9" />
        <rect x="156" y="116" width="60" height="8" rx="4" fill="#DFE5E2" />
        <rect x="156" y="200" width="88" height="26" rx="13" fill="#1F6B50" opacity=".85" />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-bold text-ink-soft">
          {label}
        </span>
      )}
    </div>
  )
}
