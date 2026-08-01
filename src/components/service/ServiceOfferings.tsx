import './ServiceOfferings.css'

const INSTALL_IMG =
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80'
const TRAINING_IMG =
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80'

const manuals = ['Granizadoras Elite', 'Horchateras Pro', 'Milkshake Mixer']

export default function ServiceOfferings() {
  return (
    <section className="offerings">
      <div className="container">
        <header className="offerings__intro reveal">
          <h2>Servicios Especializados</h2>
          <p>
            Ofrecemos soluciones integrales para que tu negocio nunca se detenga, desde la
            instalación inicial hasta el mantenimiento preventivo.
          </p>
        </header>

        <div className="offerings__grid">
          <article className="offer-card offer-card--install reveal">
            <div className="offer-card__icon offer-card__icon--blue" aria-hidden="true">
              🔧
            </div>
            <h3>Instalación y Puesta en Marcha</h3>
            <p>
              Nos encargamos de todo el proceso de configuración inicial de tus máquinas de
              granizados, horchateras y cafeteras Colonette para asegurar un rendimiento óptimo
              desde el primer día.
            </p>
            <img src={INSTALL_IMG} alt="Instalación técnica de maquinaria Colonette" />
          </article>

          <article className="offer-card offer-card--navy reveal reveal-delay-1">
            <div className="offer-card__icon offer-card__icon--green" aria-hidden="true">
              ✓
            </div>
            <h3>Mantenimiento Preventivo</h3>
            <p>
              Evita paradas inesperadas con nuestras visitas periódicas de revisión y limpieza
              técnica profunda.
            </p>
            <ul>
              <li>Revisión de circuitos</li>
              <li>Cambio de filtros</li>
              <li>Calibración de frío</li>
            </ul>
          </article>

          <article id="manuales" className="offer-card offer-card--manuals reveal">
            <div className="offer-card__icon offer-card__icon--brown" aria-hidden="true">
              📄
            </div>
            <h3>Manuales de Usuario</h3>
            <p>
              Descarga toda la documentación técnica de tus equipos en formato digital para consulta
              rápida.
            </p>
            <ul className="offer-card__downloads">
              {manuals.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                  <a href="#soporte" aria-label={`Descargar ${item}`}>
                    ↓
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="offer-card offer-card--training reveal reveal-delay-1">
            <div className="offer-card__copy">
              <h3>Formación para el Personal</h3>
              <p>
                Capacitamos a tu equipo en el manejo diario, limpieza y resolución de problemas
                menores para maximizar la vida útil de tu inversión.
              </p>
              <a href="#soporte" className="offer-card__more">
                Saber más <span aria-hidden="true">→</span>
              </a>
            </div>
            <img src={TRAINING_IMG} alt="Formación técnica Colonette para personal de hostelería" />
          </article>
        </div>
      </div>
    </section>
  )
}
