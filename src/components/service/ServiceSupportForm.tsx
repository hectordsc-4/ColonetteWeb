import { useState, type FormEvent } from 'react'
import { useI18n } from '../../i18n/I18nProvider'
import './ServiceSupportForm.css'

export default function ServiceSupportForm() {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    machine: t.service.machines[0],
    problem: '',
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="soporte" className="support">
      <div className="container support__grid">
        <div className="support__copy reveal">
          <h2>{t.service.formTitle}</h2>
          <p>{t.service.formText}</p>

          <ul className="support__contacts">
            <li>
              <span className="support__icon" aria-hidden="true">
                ☎
              </span>
              <div>
                <strong>{t.service.supportPhoneLabel}</strong>
                <a href="tel:+34971886130">{t.productDetail.phone}</a>
              </div>
            </li>
            <li>
              <span className="support__icon" aria-hidden="true">
                ⌖
              </span>
              <div>
                <strong>{t.service.supportLocationLabel}</strong>
                <span>{t.service.supportLocation}</span>
              </div>
            </li>
          </ul>
        </div>

        <form className="support__form reveal reveal-delay-1" onSubmit={onSubmit}>
          <div className="support__row">
            <label>
              {t.service.fields.name}
              <input
                type="text"
                placeholder={t.service.placeholders.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>
            <label>
              {t.service.fields.company}
              <input
                type="text"
                placeholder={t.service.placeholders.company}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
              />
            </label>
          </div>

          <label>
            {t.service.fields.email}
            <input
              type="email"
              placeholder={t.service.placeholders.email}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </label>

          <label>
            {t.service.fields.machine}
            <select
              value={form.machine}
              onChange={(e) => setForm({ ...form, machine: e.target.value })}
            >
              {t.service.machines.map((machine) => (
                <option key={machine}>{machine}</option>
              ))}
            </select>
          </label>

          <label>
            {t.service.fields.message}
            <textarea
              rows={4}
              placeholder={t.service.placeholders.message}
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
              required
            />
          </label>

          <button type="submit" className="btn btn-primary support__submit">
            <span aria-hidden="true">✈</span>
            {t.service.fields.submit}
          </button>

          {sent ? (
            <p className="support__feedback" role="status">
              {t.service.feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
