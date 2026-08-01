import { useI18n } from '../../i18n/I18nProvider'
import './ContactOffice.css'

export default function ContactOffice() {
  const { t } = useI18n()

  return (
    <section className="office">
      <div className="container">
        <header className="office__intro reveal">
          <h2>{t.contact.officeTitle}</h2>
          <p>{t.contact.officeText}</p>
        </header>

        <div className="office__panel reveal reveal-delay-1">
          <article className="office__card">
            <div className="office__row">
              <span className="office__icon office__icon--red" aria-hidden="true">
                ⌖
              </span>
              <div>
                <strong>{t.contact.officeName}</strong>
                <p>{t.contact.officeAddress}</p>
              </div>
            </div>

            <div className="office__row">
              <span className="office__icon office__icon--blue" aria-hidden="true">
                ⏱
              </span>
              <p>{t.contact.officeHours}</p>
            </div>

            <div className="office__row">
              <span className="office__icon office__icon--blue" aria-hidden="true">
                P
              </span>
              <p>{t.contact.officeParking}</p>
            </div>
          </article>

          <div className="office__map" aria-label={t.contact.officeMapLabel}>
            <iframe
              title="Colonette Binissalem"
              src="https://maps.google.com/maps?q=Carrer%20Pou%20de%20sa%20Sinia%2019%20Binissalem&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
