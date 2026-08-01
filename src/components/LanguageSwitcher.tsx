import { useEffect, useRef, useState } from 'react'
import { LOCALES, type Locale } from '../i18n/types'
import { useI18n } from '../i18n/I18nProvider'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  const pick = (code: Locale) => {
    setLocale(code)
    setOpen(false)
  }

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className={`lang__btn ${open ? 'is-open' : ''}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={current.label}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang__code">{current.short}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {open ? (
        <ul className="lang__menu" role="listbox" aria-label="Idioma">
          {LOCALES.map((item) => (
            <li key={item.code}>
              <button
                type="button"
                role="option"
                aria-selected={item.code === locale}
                className={item.code === locale ? 'is-active' : undefined}
                onClick={() => pick(item.code)}
              >
                <span className="lang__code">{item.short}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
