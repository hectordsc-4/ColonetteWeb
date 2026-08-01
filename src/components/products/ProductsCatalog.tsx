import { Link } from 'react-router-dom'
import { categories, type Product, type ProductCategory } from '../../data/products'
import './ProductsCatalog.css'

type Props = {
  category: ProductCategory
  onCategoryChange: (id: ProductCategory) => void
  sort: string
  onSortChange: (value: string) => void
  items: Product[]
}

export default function ProductsCatalog({
  category,
  onCategoryChange,
  sort,
  onSortChange,
  items,
}: Props) {
  const categoryLabel =
    categories.find((c) => c.id === category)?.label ?? 'Todas las categorías'

  return (
    <section id="catalogo" className="catalog">
      <div className="container catalog__layout">
        <aside className="catalog__sidebar reveal">
          <h2>Categorías</h2>
          <ul className="catalog__categories">
            {categories.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={category === item.id ? 'is-active' : undefined}
                  onClick={() => onCategoryChange(item.id)}
                >
                  <span>{item.label}</span>
                  <span className="catalog__count">{item.count}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="catalog__help">
            <span className="catalog__help-icon" aria-hidden="true">
              ?
            </span>
            <p>¿Necesitas ayuda? Contáctanos para presupuestos personalizados o servicio técnico.</p>
            <Link to="/contacto">
              Ir a contacto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H9M17 7v8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </aside>

        <div className="catalog__main reveal reveal-delay-1">
          <div className="catalog__toolbar">
            <div>
              <h2>Explora nuestro catálogo</h2>
              <p>
                Mostrando {category === 'todos' ? 'todas las categorías' : categoryLabel.toLowerCase()}{' '}
                ({items.length})
              </p>
            </div>

            <label className="catalog__sort">
              <span>Ordenar por:</span>
              <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
                <option value="destacados">Destacados</option>
                <option value="nombre">Nombre</option>
                <option value="categoria">Categoría</option>
              </select>
            </label>
          </div>

          <div className="catalog__grid">
            {items.map((product) => (
              <Link
                key={product.id}
                to={`/productos/${product.id}`}
                className="product-card"
              >
                <div className="product-card__media">
                  {product.badge ? (
                    <span className={`product-card__badge product-card__badge--${product.badge.tone}`}>
                      {product.badge.label}
                    </span>
                  ) : null}
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div className="product-card__body">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <span className="product-card__link">{product.linkLabel}</span>
                </div>
              </Link>
            ))}
          </div>

          {items.length === 0 ? (
            <p className="catalog__empty">No hay productos que coincidan con tu búsqueda.</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
