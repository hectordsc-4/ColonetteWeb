import './ServiceHero.css'

const HERO_IMG =
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=80'

export default function ServiceHero() {
  return (
    <section className="service-hero">
      <div
        className="service-hero__bg"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        aria-hidden="true"
      />
      <div className="service-hero__veil" aria-hidden="true" />

      <div className="container service-hero__content reveal-immediate">
        <p className="service-hero__eyebrow">Excelencia en mantenimiento</p>
        <h1>Tu confianza es nuestro mejor servicio</h1>
        <p className="service-hero__text">
          Garantizamos el funcionamiento impecable de tu maquinaria para hostelería con técnicos
          certificados y soporte especializado en Mallorca e Islas Baleares.
        </p>
        <div className="service-hero__actions">
          <a href="#soporte" className="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            Solicitar Soporte
          </a>
          <a href="#manuales" className="btn btn-outline-orange">
            <span aria-hidden="true">↓</span>
            Manuales PDF
          </a>
        </div>
      </div>
    </section>
  )
}
