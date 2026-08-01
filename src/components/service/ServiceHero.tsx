import { useI18n } from '../../i18n/I18nProvider'
import { img } from '../../data/images'
import './ServiceHero.css'

export default function ServiceHero() {
  const { t } = useI18n()

  return (
    <section className="service-hero">
      <div
        className="service-hero__bg"
        style={{ backgroundImage: `url(${img.serviceHero})` }}
        aria-hidden="true"
      />
      <div className="service-hero__veil" aria-hidden="true" />

      <div className="container service-hero__content reveal-immediate">
        <p className="service-hero__eyebrow">{t.service.eyebrow}</p>
        <h1>{t.service.title}</h1>
        <p className="service-hero__text">{t.service.text}</p>
        <div className="service-hero__actions">
          <a href="#soporte" className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            {t.service.ctaSupport}
          </a>
          <a href="#manuales" className="btn btn-outline-orange">
            <span aria-hidden="true">↓</span>
            {t.service.ctaManuals}
          </a>
        </div>
      </div>
    </section>
  )
}
