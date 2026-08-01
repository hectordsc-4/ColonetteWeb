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

          <h1 className="hero__title reveal-immediate reveal-delay-1">{t.hero.title}</h1>

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
        </div>
      </div>
    </section>
  )
}
