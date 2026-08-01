import { useState, type FormEvent } from 'react'
import { useI18n } from '../../i18n/I18nProvider'
import './DistributorCta.css'

export default function DistributorCta() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
    setEmail('')
  }

  return (
    <section id="distribuidor" className="distributor">
      <div className="container">
        <div className="distributor__card reveal">
          <div className="distributor__copy">
            <h2>{t.productsPage.distributorTitle}</h2>
            <p>{t.productsPage.distributorText}</p>
          </div>

          <form className="distributor__form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="distributor-email">
              {t.productsPage.distributorEmail}
            </label>
            <input
              id="distributor-email"
              type="email"
              placeholder={t.productsPage.distributorEmail}
              value={email}
              onChange={(e) => {
                setSent(false)
                setEmail(e.target.value)
              }}
              required
            />
            <button type="submit" className="distributor__submit">
              {t.productsPage.distributorSubmit}
            </button>
          </form>

          {sent ? (
            <p className="distributor__feedback" role="status">
              {t.productsPage.distributorNote}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
