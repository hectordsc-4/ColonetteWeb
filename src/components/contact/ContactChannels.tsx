import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './ContactChannels.css'

export default function ContactChannels() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Información de productos',
    message: '',
    privacy: false,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.privacy) return
    setSent(true)
  }

  return (
    <section className="channels">
      <div className="container channels__grid">
        <aside className="channels__aside reveal">
          <article className="channel-card">
            <span className="channel-card__icon channel-card__icon--blue" aria-hidden="true">
              ☎
            </span>
            <h2>Llámanos</h2>
            <p>Lunes a Viernes de 8:00 a 18:00</p>
            <a href="tel:+34971886130" className="channel-card__value channel-card__value--phone">
              971 886 130
            </a>
          </article>

          <article className="channel-card">
            <span className="channel-card__icon channel-card__icon--green" aria-hidden="true">
              ✉
            </span>
            <h2>Email</h2>
            <p>Respondemos en menos de 24h</p>
            <a href="mailto:socobalear@colonette.com" className="channel-card__value">
              socobalear@colonette.com
            </a>
          </article>

          <article className="channel-card channel-card--assist">
            <p className="channel-card__eyebrow">Asistencia técnica</p>
            <p>
              ¿Necesitas ayuda con tu maquinaria? Accede a nuestros manuales detallados o contacta
              directamente con soporte técnico.
            </p>
            <Link to="/servicio-tecnico">Ir a Servicio Técnico →</Link>
          </article>
        </aside>

        <form className="channels__form reveal reveal-delay-1" onSubmit={onSubmit}>
          <h2>Envíanos un mensaje</h2>

          <div className="channels__row">
            <label>
              Nombre completo
              <input
                type="text"
                placeholder="Tu nombre..."
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>
            <label>
              Correo electrónico
              <input
                type="email"
                placeholder="email@ejemplo.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </label>
          </div>

          <label>
            Asunto
            <select
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            >
              <option>Información de productos</option>
              <option>Pedido / presupuesto</option>
              <option>Servicio técnico</option>
              <option>Distribución</option>
              <option>Otro</option>
            </select>
          </label>

          <label>
            Mensaje
            <textarea
              rows={5}
              placeholder="¿En qué podemos ayudarte?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </label>

          <label className="channels__privacy">
            <input
              type="checkbox"
              checked={form.privacy}
              onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
              required
            />
            <span>
              Acepto la{' '}
              <a href="#privacidad">política de privacidad</a> y el tratamiento de mis datos para
              fines de contacto.
            </span>
          </label>

          <button type="submit" className="btn btn-primary channels__submit">
            Enviar Mensaje
            <span aria-hidden="true">✈</span>
          </button>

          {sent ? (
            <p className="channels__feedback" role="status">
              Mensaje enviado. Te responderemos pronto.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
