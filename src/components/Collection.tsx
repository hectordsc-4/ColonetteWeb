import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { img } from '../data/images'
import './Collection.css'

export default function Collection() {
  const { t } = useI18n()

  const cards = [
    {
      title: t.collection.granizadosTitle,
      subtitle: t.collection.granizadosSub,
      cta: t.collection.granizadosCta,
      image: img.collectionGranizados,
      to: '/productos/granizados',
      className: 'collection__card--main',
    },
    {
      title: t.collection.cafesTitle,
      image: img.collectionCafes,
      to: '/productos/cafe',
      className: 'collection__card--wide',
    },
    {
      title: t.collection.machineryTitle,
      image: img.collectionMaquinaria,
      to: '/productos/soft-ice',
      className: 'collection__card--tall',
    },
    {
      title: t.collection.cocktailsTitle,
      image: img.collectionCocteles,
      to: '/productos',
      className: 'collection__card--tall',
    },
  ]

  return (
    <section id="productos" className="collection">
      <div className="container">
        <header className="collection__intro reveal">
          <h2>{t.collection.title}</h2>
          <p>{t.collection.text}</p>
        </header>

        <div className="collection__grid">
          {cards.map((card, i) => (
            <article
              key={card.title}
              className={`collection__card ${card.className} reveal reveal-delay-${Math.min(i, 3)}`}
              style={{ ['--card-image' as string]: `url(${card.image})` }}
            >
              <div className="collection__overlay">
                <h3>{card.title}</h3>
                {card.subtitle ? <p>{card.subtitle}</p> : null}
                <Link to={card.to} className="collection__pill">
                  {card.cta ?? t.collection.viewCatalog}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
