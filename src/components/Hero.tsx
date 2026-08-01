import { Link } from 'react-router-dom'
import './Hero.css'

const HERO_BG =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80'
const SLUSHES =
  'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=900&q=80'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${HERO_BG})` }}
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
            SABOR BALEAR AUTÉNTICO
          </span>

          <h1 className="hero__title reveal-immediate reveal-delay-1">
            Tu paraíso refrescante
            <span>en Baleares</span>
          </h1>

          <p className="hero__text reveal-immediate reveal-delay-2">
            Elevamos la experiencia de la hostelería con granizados artesanos, cafés premium y
            maquinaria de vanguardia. Disfruta del frescor que tus clientes merecen.
          </p>

          <div className="hero__actions reveal-immediate reveal-delay-3">
            <Link to="/productos" className="btn btn-primary">
              Descubrir Productos
            </Link>
            <Link to="/servicio-tecnico" className="btn btn-outline-orange">
              Servicio Técnico
            </Link>
          </div>
        </div>

        <div className="hero__visual reveal-immediate reveal-delay-2">
          <img
            src={SLUSHES}
            alt="Granizados de frutas artesanos Colonette"
            className="hero__drinks"
          />
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
              <strong>Granizado Premium</strong>
              <p>Sabor intenso a -5°C, perfecto para el verano mediterráneo.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
