import { Link } from 'react-router-dom'
import './ProductsHero.css'

const collage = [
  {
    src: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=80',
    alt: 'Granizado Colonette',
    className: 'products-hero__shot--promo',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    alt: 'Café Colonette',
    className: 'products-hero__shot--coffee',
  },
  {
    src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    alt: 'Batido premium',
    className: 'products-hero__shot--shake',
  },
  {
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    alt: 'Máquina Soft Ice',
    className: 'products-hero__shot--soft',
  },
]

export default function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="container products-hero__grid">
        <div className="products-hero__copy reveal-immediate">
          <p className="products-hero__eyebrow">Catálogo oficial 2024</p>
          <h1>
            Refrescando cada rincón del <span>Mediterráneo</span>
          </h1>
          <p className="products-hero__text">
            Descubre nuestra selección exclusiva de productos para hostelería. Desde el icónico
            granizado de almendra hasta la tecnología Soft-ice más avanzada.
          </p>
          <div className="products-hero__actions">
            <Link to="/novedades" className="btn btn-primary">
              Ver Novedades
              <span aria-hidden="true">→</span>
            </Link>
            <a href="#catalogo" className="btn btn-outline-brown">
              Descargar Catálogo
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
