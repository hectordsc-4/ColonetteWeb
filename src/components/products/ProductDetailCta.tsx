import { useI18n } from '../../i18n/I18nProvider'
import './ProductDetailCta.css'

type Props = {
  title: string
  text: string
}

export default function ProductDetailCta({ title, text }: Props) {
  const { t } = useI18n()

  return (
    <section id="consulta" className="detail-cta">
      <div className="container detail-cta__inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="detail-cta__actions">
          <a href="tel:+34971886130" className="btn detail-cta__phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.5 5h3l1.5 4-2 1.2a12 12 0 005.8 5.8L16.5 14l4 1.5v3A2 2 0 0118.5 21 14.5 14.5 0 013 5.5 2 2 0 015 3.5h1.5z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            {t.productDetail.callUs} {t.productDetail.phone}
          </a>
          <a href="mailto:socobalear@colonette.com" className="btn detail-cta__mail">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
            </svg>
            {t.productDetail.sendInquiry}
          </a>
        </div>
      </div>
    </section>
  )
}
