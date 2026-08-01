import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { img } from '../data/images'
import './AlmondFeature.css'

const featureIcons = [
  <svg key="check" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12.5l4 4L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="leaf" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 19c6-1 9-4 10-10 0 0 4 1 4 5-1 7-8 9-14 5z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M9 15c2-3 4-5 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  <svg key="heart" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 20s-7-4.4-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.6-7 10-7 10z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="star" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3.5l2.2 4.6 5 .7-3.6 3.5.9 5.1L12 15.4 7.5 17.4l.9-5.1L4.8 8.8l5-.7L12 3.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
]

export default function AlmondFeature() {
  const { t } = useI18n()
  const features = [t.almond.f1, t.almond.f2, t.almond.f3, t.almond.f4]

  return (
    <section id="estrella" className="almond section-atmosphere">
      <div className="container almond__grid">
        <div className="almond__media reveal">
          <span className="almond__badge">{t.almond.badge}</span>
          <img src={img.almond} alt={t.almond.alt} />
        </div>

        <div className="almond__content reveal reveal-delay-1">
          <h2>{t.almond.title}</h2>
          <p>
            {t.almond.textBefore} <strong>{t.almond.textStrong}</strong>
            {t.almond.textAfter}
          </p>

          <ul className="almond__features">
            {features.map((label, i) => (
              <li key={label}>
                <span className="almond__icon">{featureIcons[i]}</span>
                {label}
              </li>
            ))}
          </ul>

          <Link to="/contacto" className="btn btn-brown">
            {t.almond.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
