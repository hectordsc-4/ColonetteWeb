import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { img } from '../data/images'
import './Hero.css'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section id="inicio" className="hero" aria-label={t.hero.bgAlt}>
      <div
        className="hero__media"
        style={{ backgroundImage: `url(${img.heroBg})` }}
        role="img"
        aria-label={t.hero.bgAlt}
      />
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__brand reveal-immediate">
          <span className="hero__brand-colon">Colon</span>
          <span className="hero__brand-ette">ette</span>
        </p>

        <h1 className="hero__title reveal-immediate reveal-delay-1">{t.hero.title}</h1>

        <p className="hero__text reveal-immediate reveal-delay-2">{t.hero.text}</p>

        <div className="hero__actions reveal-immediate reveal-delay-3">
          <Link to="/productos" className="btn btn-primary hero__cta-primary">
            {t.hero.ctaProducts}
          </Link>
          <Link to="/servicio-tecnico" className="btn hero__cta-secondary">
            {t.hero.ctaService}
          </Link>
        </div>
      </div>
    </section>
  )
}
