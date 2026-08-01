import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { img } from '../data/images'
import './Machinery.css'

export default function Machinery() {
  const { t } = useI18n()

  return (
    <section id="servicio" className="machinery">
      <div className="container">
        <div
          className="machinery__banner reveal"
          style={{ backgroundImage: `url(${img.machinery})` }}
        >
          <div className="machinery__copy">
            <h2>{t.machinery.title}</h2>
            <p>{t.machinery.text}</p>
            <div className="machinery__actions">
              <Link to="/servicio-tecnico#manuales" className="btn btn-primary">
                {t.machinery.manuals}
              </Link>
              <Link to="/servicio-tecnico#soporte" className="btn btn-outline-blue">
                {t.machinery.support}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
