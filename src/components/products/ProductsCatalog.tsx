import { Link } from 'react-router-dom'
import { useCategories, type Product, type ProductCategory } from '../../data/products'
import { useI18n } from '../../i18n/I18nProvider'
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
  const { t } = useI18n()
  const categories = useCategories()
  const categoryLabel =
    categories.find((c) => c.id === category)?.label ?? t.productsPage.allCategoriesLabel

  return (
    <section id="catalogo" className="catalog">
      <div className="container catalog__layout">
        <aside className="catalog__sidebar reveal">
          <h2>{t.productsPage.categoriesTitle}</h2>
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
            <p>{t.productsPage.helpText}</p>
            <Link to="/contacto">
              {t.productsPage.helpCta}
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
              <h2>{t.productsPage.catalogTitle}</h2>
              <p>
                {t.productsPage.results
                  .replace(
                    '{category}',
                    category === 'todos'
                      ? t.productsPage.allCategoriesLabel
                      : categoryLabel.toLowerCase(),
                  )
                  .replace('{count}', String(items.length))}
              </p>
            </div>

            <label className="catalog__sort">
              <span>{t.productsPage.sortLabel}</span>
              <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
                <option value="destacados">{t.productsPage.sortFeatured}</option>
                <option value="nombre">{t.productsPage.sortName}</option>
                <option value="categoria">{t.productsPage.sortCategory}</option>
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
            <p className="catalog__empty">{t.productsPage.empty}</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
