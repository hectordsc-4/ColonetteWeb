import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import ProductGallery from '../components/products/ProductGallery'
import ProductWhy from '../components/products/ProductWhy'
import ProductSpecs from '../components/products/ProductSpecs'
import ProductDetailCta from '../components/products/ProductDetailCta'
import './ProductDetailPage.css'

const highlightIcon = (icon: string) => {
  switch (icon) {
    case 'gauge':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 14a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 14l4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="14" r="1.6" fill="currentColor" />
        </svg>
      )
    case 'leaf':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 19c6-1 9-4 10-10 0 0 4 1 4 5-1 7-8 9-14 5z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 15c2-3 4-5 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'snow':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'drop':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      )
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M13 3L5 14h6l-1 7 9-12h-6l0-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
  }
}

export default function ProductDetailPage() {
  const { productId } = useParams()
  const product = productId ? getProductById(productId) : undefined
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setActiveImage(0)
  }, [productId])

  if (!product) {
    return <Navigate to="/productos" replace />
  }

  const { detail } = product

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className="container">
          <Link to="/productos" className="detail-back reveal-immediate">
            ← Volver al catálogo
          </Link>

          <div className="detail-panel reveal-immediate reveal-delay-1">
            <ProductGallery
              title={detail.title}
              images={detail.gallery}
              activeIndex={activeImage}
              onSelect={setActiveImage}
            />

            <div className="detail-info">
              <span className="detail-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3v3M12 18v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M3 12h3M18 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
                {detail.badge}
              </span>

              <h1>{detail.title}</h1>
              <p className="detail-summary">{detail.summary}</p>

              <div className="detail-highlights">
                {detail.highlights.map((item) => (
                  <article key={item.title} className="detail-highlight">
                    <span className="detail-highlight__icon">{highlightIcon(item.icon)}</span>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="detail-actions">
                <a href="#consulta" className="btn btn-primary">
                  <span className="detail-actions__info" aria-hidden="true">
                    i
                  </span>
                  Solicitar información
                </a>
                <a href="#specs" className="btn btn-outline-brown">
                  <span aria-hidden="true">↓</span>
                  Manual PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductWhy
        title={detail.whyTitle}
        subtitle={detail.whySubtitle}
        cards={detail.whyCards}
      />
      <ProductSpecs specs={detail.specs} />
      <ProductDetailCta title={detail.ctaTitle} text={detail.ctaText} />
    </main>
  )
}
