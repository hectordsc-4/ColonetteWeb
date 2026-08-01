import { useI18n } from '../../i18n/I18nProvider'
import { img } from '../../data/images'
import './ServiceOfferings.css'

export default function ServiceOfferings() {
  const { t } = useI18n()

  return (
    <section className="offerings">
      <div className="container">
        <header className="offerings__intro reveal">
          <h2>{t.service.offeringsTitle}</h2>
          <p>{t.service.offeringsText}</p>
        </header>

        <div className="offerings__grid">
          <article className="offer-card offer-card--install reveal">
            <div className="offer-card__icon offer-card__icon--blue" aria-hidden="true">
              🔧
            </div>
            <h3>{t.service.o1Title}</h3>
            <p>{t.service.o1Text}</p>
            <img src={img.serviceInstall} alt={t.service.o1Title} />
          </article>

          <article className="offer-card offer-card--navy reveal reveal-delay-1">
            <div className="offer-card__icon offer-card__icon--green" aria-hidden="true">
              ✓
            </div>
            <h3>{t.service.o2Title}</h3>
            <p>{t.service.o2Text}</p>
            <ul>
              {t.service.o2List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article id="manuales" className="offer-card offer-card--manuals reveal">
            <div className="offer-card__icon offer-card__icon--brown" aria-hidden="true">
              📄
            </div>
            <h3>{t.service.o3Title}</h3>
            <p>{t.service.o3Text}</p>
            <ul className="offer-card__downloads">
              {t.service.manualsList.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                  <a href="#soporte" aria-label={item}>
                    ↓
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="offer-card offer-card--training reveal reveal-delay-1">
            <div className="offer-card__copy">
              <h3>{t.service.o4Title}</h3>
              <p>{t.service.o4Text}</p>
              <a href="#soporte" className="offer-card__more">
                {t.service.o4More} <span aria-hidden="true">→</span>
              </a>
            </div>
            <img src={img.serviceTraining} alt={t.service.o4Title} />
          </article>
        </div>
      </div>
    </section>
  )
}
