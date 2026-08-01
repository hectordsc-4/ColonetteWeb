import { Link } from 'react-router-dom'
import './Machinery.css'

const WORKSHOP =
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80'

export default function Machinery() {
  return (
    <section id="servicio" className="machinery">
      <div className="container">
        <div
          className="machinery__banner reveal"
          style={{ backgroundImage: `url(${WORKSHOP})` }}
        >
          <div className="machinery__copy">
            <h2>Expertos en Maquinaria</h2>
            <p>
              No solo vendemos maquinaria de calidad; garantizamos su funcionamiento impecable.
              Nuestro servicio técnico incluye mantenimiento preventivo y manuales completos para
              que tu negocio nunca se detenga.
            </p>
            <div className="machinery__actions">
              <Link to="/servicio-tecnico#manuales" className="btn btn-primary">
                Ver Manuales Técnicos
              </Link>
              <Link to="/servicio-tecnico#soporte" className="btn btn-outline-blue">
                Solicitar Asistencia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
