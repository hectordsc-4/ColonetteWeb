import { Link } from 'react-router-dom'
import './Collection.css'

const cards = [
  {
    title: 'Granizados',
    subtitle: 'Nuestra esencia refrescante',
    cta: 'Explorar Sabores',
    image:
      'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1000&q=80',
    className: 'collection__card--main',
  },
  {
    title: 'Cafés y Chocolates',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    className: 'collection__card--wide',
  },
  {
    title: 'Maquinaria Soft',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    className: 'collection__card--tall',
  },
  {
    title: 'Cócteles Tropicales',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    className: 'collection__card--tall',
  },
]

export default function Collection() {
  return (
    <section id="productos" className="collection">
      <div className="container">
        <header className="collection__intro reveal">
          <h2>Nuestra Colección Refrescante</h2>
          <p>
            Explora nuestra gama de productos diseñados específicamente para satisfacer los
            paladares más exigentes del sector hospitality.
          </p>
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
                {card.cta ? (
                  <Link to="/productos" className="collection__pill">
                    {card.cta}
                  </Link>
                ) : (
                  <Link to="/productos" className="collection__pill">
                    Ver catálogo
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
