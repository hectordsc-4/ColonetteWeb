import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { img } from '../data/images'
import './Hero.css'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section id="inicio" className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${img.heroBg})` }}
        aria-hidden="true"
      />
      <div className="hero__veil" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__brand reveal-immediate">
            <span className="hero__brand-colon">Colon</span>
            <span className="hero__brand-ette">ette</span>
          </p>

          <span className="hero__badge reveal-immediate reveal-delay-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 19h16M6 19V10l6-6 6 6v9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M9 19v-5h6v5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            {t.hero.badge}
          </span>

          <h1 className="hero__title reveal-immediate reveal-delay-1">
            {t.hero.title}
          </h1>

          <p className="hero__text reveal-immediate reveal-delay-2">{t.hero.text}</p>

          <div className="hero__actions reveal-immediate reveal-delay-3">
            <Link to="/productos" className="btn btn-primary">
              {t.hero.ctaProducts}
            </Link>
            <Link to="/servicio-tecnico" className="btn btn-outline-orange">
              {t.hero.ctaService}
            </Link>
          </div>
        </div>

        <div className="hero__visual reveal-immediate reveal-delay-2">
          <img src={img.heroCard} alt={t.hero.cardAlt} className="hero__drinks" />
          <aside className="hero__card">
            <div className="hero__card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3v3M12 18v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M3 12h3M18 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="3.5" stroke="#fff" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <strong>{t.hero.cardTitle}</strong>
              <p>{t.hero.cardText}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
