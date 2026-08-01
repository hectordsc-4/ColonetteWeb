import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { img } from '../data/images'
import './NewsPage.css'

export default function NewsPage() {
  const { t } = useI18n()

  const items = [
    { key: 'featured' as const, image: img.newsFeatured, featured: true },
    { key: 'soft' as const, image: img.newsSoft },
    { key: 'catalog' as const, image: img.newsCatalog },
    { key: 'service' as const, image: img.newsService },
    { key: 'cafe' as const, image: img.newsCafe },
    { key: 'islands' as const, image: img.newsIslands },
  ].map((item) => ({ ...item, ...t.news.items[item.key] }))

  const featured = items.find((item) => item.featured) ?? items[0]
  const rest = items.filter((item) => item.key !== featured.key)

  return (
    <main className="news-page">
      <section className="news-hero">
        <div className="container news-hero__grid">
          <div className="news-hero__copy reveal-immediate">
            <p className="news-hero__eyebrow">{t.news.eyebrow}</p>
            <h1>
              {t.news.titleBefore} <span>{t.news.titleAccent}</span>
            </h1>
            <p className="news-hero__text">{t.news.text}</p>
            <div className="news-hero__actions">
              <a href="#noticias" className="btn btn-primary">
                {t.news.ctaNews}
                <span aria-hidden="true">→</span>
              </a>
              <Link to="/productos" className="btn btn-outline-brown">
                {t.news.ctaCatalog}
              </Link>
            </div>
          </div>

          <figure className="news-hero__media reveal-immediate reveal-delay-1">
            <img src={img.newsHero} alt={t.news.titleBefore} />
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
              <time>{featured.date}</time>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <Link to="/productos/granizados" className="btn btn-brown">
                {t.news.discoverProduct}
              </Link>
            </div>
          </article>

          <div className="news-grid">
            {rest.map((item, i) => (
              <article
                key={item.key}
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
            <h2>{t.news.ctaTitle}</h2>
            <p>{t.news.ctaText}</p>
          </div>
          <div className="news-cta__actions">
            <Link to="/contacto" className="btn btn-primary">
              {t.news.ctaContact}
            </Link>
            <Link to="/servicio-tecnico" className="btn btn-outline-light">
              {t.news.ctaService}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
