import { Link } from 'react-router-dom'
import { newsItems } from '../data/news'
import './NewsPage.css'

const featured = newsItems.find((n) => n.featured) ?? newsItems[0]
const rest = newsItems.filter((n) => n.id !== featured.id)

export default function NewsPage() {
  return (
    <main className="news-page">
      <section className="news-hero">
        <div className="container news-hero__grid">
          <div className="news-hero__copy reveal-immediate">
            <p className="news-hero__eyebrow">Actualidad Colonette</p>
            <h1>
              Novedades que refrescan el <span>Mediterráneo</span>
            </h1>
            <p className="news-hero__text">
              Productos, maquinaria y servicio para hostelería en Baleares. Mantente al día con
              lanzamientos, mejoras y lo que viene esta temporada.
            </p>
            <div className="news-hero__actions">
              <a href="#noticias" className="btn btn-primary">
                Ver noticias
                <span aria-hidden="true">→</span>
              </a>
              <Link to="/productos" className="btn btn-outline-brown">
                Ir al catálogo
              </Link>
            </div>
          </div>

          <figure className="news-hero__media reveal-immediate reveal-delay-1">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
              alt="Costa mediterránea al atardecer"
            />
          </figure>
        </div>
      </section>

      <section id="noticias" className="news-feed section-atmosphere">
        <div className="container">
          <article className="news-featured reveal">
            <div className="news-featured__media">
              <img src={featured.image} alt={featured.title} />
              <span className="news-tag">{featured.tag}</span>
            </div>
            <div className="news-featured__body">
              <time dateTime="2026-07-15">{featured.date}</time>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <Link to="/productos/granizados" className="btn btn-brown">
                Descubrir producto
              </Link>
            </div>
          </article>

          <div className="news-grid">
            {rest.map((item, i) => (
              <article
                key={item.id}
                className={`news-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="news-card__media">
                  <img src={item.image} alt={item.title} />
                  <span className="news-tag">{item.tag}</span>
                </div>
                <div className="news-card__body">
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news-cta">
        <div className="container news-cta__inner reveal">
          <div>
            <h2>¿Quieres ser el primero en probarlo?</h2>
            <p>
              Habla con nuestro equipo comercial o solicita información sobre productos y
              maquinaria para tu establecimiento.
            </p>
          </div>
          <div className="news-cta__actions">
            <Link to="/contacto" className="btn btn-primary">
              Contactar
            </Link>
            <Link to="/servicio-tecnico" className="btn btn-outline-light">
              Servicio técnico
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
