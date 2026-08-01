import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'
import { img } from '../../data/images'
import './ProductsHero.css'

export default function ProductsHero() {
  const { t } = useI18n()

  const collage = [
    {
      src: img.productsHeroGranizado,
      alt: t.productsPage.altGranizado,
      className: 'products-hero__shot--promo',
    },
    {
      src: img.productsHeroCafe,
      alt: t.productsPage.altCafe,
      className: 'products-hero__shot--coffee',
    },
    {
      src: img.productsHeroBatido,
      alt: t.productsPage.altShake,
      className: 'products-hero__shot--shake',
    },
    {
      src: img.productsHeroMaquina,
      alt: t.productsPage.altMachine,
      className: 'products-hero__shot--soft',
    },
  ]

  return (
    <section className="products-hero">
      <div className="container products-hero__grid">
        <div className="products-hero__copy reveal-immediate">
          <p className="products-hero__eyebrow">{t.productsPage.eyebrow}</p>
          <h1>
            {t.productsPage.titleBefore} <span>{t.productsPage.titleAccent}</span>
          </h1>
          <p className="products-hero__text">{t.productsPage.text}</p>
          <div className="products-hero__actions">
            <Link to="/novedades" className="btn btn-primary">
              {t.productsPage.ctaNews}
              <span aria-hidden="true">→</span>
            </Link>
            <a href="#catalogo" className="btn btn-outline-brown">
              {t.productsPage.ctaCatalog}
            </a>
          </div>
        </div>

        <div className="products-hero__collage" aria-hidden="true">
          {collage.map((shot) => (
            <figure key={shot.className} className={`products-hero__shot ${shot.className}`}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
