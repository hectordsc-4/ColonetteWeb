import { Link } from 'react-router-dom'
import './AlmondFeature.css'

const ALMOND =
  'https://images.unsplash.com/photo-1551024709-8f23befc0f44?auto=format&fit=crop&w=900&q=80'

const features = [
  {
    label: '100% Artesano',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12.5l4 4L19 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Natural',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 19c6-1 9-4 10-10 0 0 4 1 4 5-1 7-8 9-14 5z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M9 15c2-3 4-5 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Receta Tradicional',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 20s-7-4.4-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.6-7 10-7 10z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Premium Quality',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5l2.2 4.6 5 .7-3.6 3.5.9 5.1L12 15.4 7.5 17.4l.9-5.1L4.8 8.8l5-.7L12 3.5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function AlmondFeature() {
  return (
    <section id="novedades" className="almond section-atmosphere">
      <div className="container almond__grid">
        <div className="almond__media reveal">
          <span className="almond__badge">Producto Estrella</span>
          <img
            src={ALMOND}
            alt="Granizado de almendra Colonette con láminas de almendra y menta"
          />
        </div>

        <div className="almond__content reveal reveal-delay-1">
          <h2>El Secreto de la Almendra</h2>
          <p>
            Lo que no puedes perderte bajo ningún concepto es nuestro producto estrella: el{' '}
            <strong>granizado de almendra</strong>. Inspirado en las recetas tradicionales de las
            islas, utilizamos almendras seleccionadas para crear una textura cremosa y un sabor
            inolvidable que define el verano balear.
          </p>

          <ul className="almond__features">
            {features.map((item) => (
              <li key={item.label}>
                <span className="almond__icon">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>

          <Link to="/contacto" className="btn btn-brown">
            Leer más sobre nuestra historia
          </Link>
        </div>
      </div>
    </section>
  )
}
