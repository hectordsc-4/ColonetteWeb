import { useI18n } from '../../i18n/I18nProvider'
import './ContactIslands.css'

export default function ContactIslands() {
  const { t } = useI18n()

  return (
    <section className="islands">
      <div className="container">
        <div className="islands__head reveal">
          <div>
            <h2>{t.contact.islandsTitle}</h2>
            <p>{t.contact.islandsText}</p>
          </div>
          <span className="islands__stock">
            <span className="islands__dot" aria-hidden="true" />
            {t.contact.stockAvailable}
          </span>
        </div>

        <div className="islands__grid">
          <article className="island-card island-card--navy reveal">
            <div className="island-card__top">
              <h3>
                {t.contact.menorcaTitle}{' '}
                <span className="island-card__badge island-card__badge--green">
                  {t.contact.menorcaBadge}
                </span>
              </h3>
            </div>
            <p>{t.contact.menorcaText}</p>
            <ul>
              {t.contact.menorcaList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="mailto:socobalear@colonette.com?subject=Delegado%20Menorca">
              {t.contact.menorcaCta}
            </a>
          </article>

          <article className="island-card island-card--light reveal reveal-delay-1">
            <div className="island-card__top">
              <h3>
                {t.contact.ibizaTitle}{' '}
                <span className="island-card__badge island-card__badge--orange">
                  {t.contact.ibizaBadge}
                </span>
              </h3>
            </div>
            <p>{t.contact.ibizaText}</p>
            <ul>
              {t.contact.ibizaList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="mailto:socobalear@colonette.com?subject=Distribucion%20Ibiza">
              {t.contact.ibizaCta}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
