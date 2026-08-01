import './ContactIslands.css'

export default function ContactIslands() {
  return (
    <section className="islands">
      <div className="container">
        <div className="islands__head reveal">
          <div>
            <h2>Presencia en las Islas</h2>
            <p>
              Contamos con una sólida red de distribución y servicio técnico en Menorca e Ibiza
              para garantizar que tu negocio nunca se detenga.
            </p>
          </div>
          <span className="islands__stock">
            <span className="islands__dot" aria-hidden="true" />
            Stock disponible
          </span>
        </div>

        <div className="islands__grid">
          <article className="island-card island-card--navy reveal">
            <div className="island-card__top">
              <h3>
                Menorca <span className="island-card__badge island-card__badge--green">Activo</span>
              </h3>
            </div>
            <p>
              Servicio logístico semanal y asistencia técnica in situ para todos nuestros clientes
              de hostelería menorquines.
            </p>
            <ul>
              <li>Distribución en Mahón y Ciutadella</li>
              <li>Soporte técnico 24/48h</li>
              <li>Catálogo completo de granizados</li>
            </ul>
            <a href="mailto:socobalear@colonette.com?subject=Delegado%20Menorca">
              Contactar Delegado Menorca →
            </a>
          </article>

          <article className="island-card island-card--light reveal reveal-delay-1">
            <div className="island-card__top">
              <h3>
                Ibiza &amp; Formentera{' '}
                <span className="island-card__badge island-card__badge--orange">Premium</span>
              </h3>
            </div>
            <p>
              Especialistas en suministro para Beach Clubs y Hoteles Boutique de gran volumen en la
              isla blanca.
            </p>
            <ul>
              <li>Suministro urgente temporada alta</li>
              <li>Línea especial Cocktail Tropical</li>
              <li>Mantenimiento preventivo preventa</li>
            </ul>
            <a href="mailto:socobalear@colonette.com?subject=Distribucion%20Ibiza">
              Consultar Distribución Ibiza →
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
