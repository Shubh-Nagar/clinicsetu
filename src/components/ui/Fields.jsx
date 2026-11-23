import { ChevronDown } from 'lucide-react'

/** Labelled form fields. Every input has a visible <label> tied by id. */

export function TextField({ id, label, hint, required, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {!required && <span className="font-normal text-ink-muted"> (optional)</span>}
      </label>
      <input id={id} name={props.name ?? id} required={required} aria-describedby={hint ? `${id}-hint` : undefined} className="field-input" {...props} />
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink-muted">
          {hint}
        </p>
      )}
    </div>
  )
}

export function SelectField({ id, label, options, required, value, onChange, placeholder = 'Choose one' }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <div className="relative">
        <select id={id} name={id} required={required} value={value} onChange={onChange} className="field-input appearance-none pr-11">
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
      </div>
    </div>
  )
}

/** Pill-style radio group — easy to tap on a phone. */
export function ChoiceField({ name, legend, options, value, onChange, required }) {
  return (
    <fieldset>
      <legend className="field-label">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const id = `${name}-${o.replace(/\W+/g, '-').toLowerCase()}`
          const checked = value === o
          return (
            <label
              key={o}
              htmlFor={id}
              className={`relative flex min-h-[44px] cursor-pointer items-center rounded-full border px-4 py-2 text-[0.95rem] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-mint-600 ${
                checked ? 'border-mint-700 bg-mint-700 font-bold text-white' : 'border-mist-line bg-white text-ink hover:border-mint-400'
              }`}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={o}
                checked={checked}
                onChange={() => onChange(o)}
                required={required}
                className="sr-only"
              />
              {o}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
