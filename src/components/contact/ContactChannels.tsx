import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'
import './ContactChannels.css'

export default function ContactChannels() {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: t.contact.formSubjectOptions[0],
    message: '',
    privacy: false,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.privacy) return
    setSent(true)
  }

  return (
    <section className="channels">
      <div className="container channels__grid">
        <aside className="channels__aside reveal">
          <article className="channel-card">
            <span className="channel-card__icon channel-card__icon--blue" aria-hidden="true">
              ☎
            </span>
            <h2>{t.contact.c1Title}</h2>
            <p>{t.contact.c1Text}</p>
            <a href="tel:+34971886130" className="channel-card__value channel-card__value--phone">
              {t.contact.c1Value}
            </a>
          </article>

          <article className="channel-card">
            <span className="channel-card__icon channel-card__icon--green" aria-hidden="true">
              ✉
            </span>
            <h2>{t.contact.c2Title}</h2>
            <p>{t.contact.c2Text}</p>
            <a href="mailto:socobalear@colonette.com" className="channel-card__value">
              {t.contact.c2Value}
            </a>
          </article>

          <article className="channel-card channel-card--assist">
            <p className="channel-card__eyebrow">{t.contact.c3Title}</p>
            <p>{t.contact.c3Text}</p>
            <Link to="/servicio-tecnico">{t.contact.c3Cta}</Link>
          </article>
        </aside>

        <form className="channels__form reveal reveal-delay-1" onSubmit={onSubmit}>
          <h2>{t.contact.formTitle}</h2>

          <div className="channels__row">
            <label>
              {t.contact.formName}
              <input
                type="text"
                placeholder={t.contact.placeholders.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>
            <label>
              {t.contact.formEmail}
              <input
                type="email"
                placeholder={t.contact.placeholders.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </label>
          </div>

          <label>
            {t.contact.formSubject}
            <select
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            >
              {t.contact.formSubjectOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label>
            {t.contact.formMessage}
            <textarea
              rows={5}
              placeholder={t.contact.placeholders.message}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </label>

          <label className="channels__privacy">
            <input
              type="checkbox"
              checked={form.privacy}
              onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
              required
            />
            <span>
              {t.contact.privacyText} <a href="#privacidad">{t.contact.privacyLink}</a>{' '}
              {t.contact.privacyAfter}
            </span>
          </label>

          <button type="submit" className="btn btn-primary channels__submit">
            {t.contact.formSubmit}
            <span aria-hidden="true">✈</span>
          </button>

          {sent ? (
            <p className="channels__feedback" role="status">
              {t.contact.sentFeedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
