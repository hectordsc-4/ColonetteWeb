import { useState, type FormEvent } from 'react'
import './DistributorCta.css'

export default function DistributorCta() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
    setEmail('')
  }

  return (
    <section id="distribuidor" className="distributor">
      <div className="container">
        <div className="distributor__card reveal">
          <div className="distributor__copy">
            <h2>¿Quieres ser distribuidor?</h2>
            <p>
              Únete a la familia Colonette y ofrece los mejores productos refrescantes en tu zona.
              Ofrecemos formación y soporte técnico continuo.
            </p>
          </div>

          <form className="distributor__form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="distributor-email">
              Tu correo electrónico
            </label>
            <input
              id="distributor-email"
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => {
                setSent(false)
                setEmail(e.target.value)
              }}
              required
            />
            <button type="submit" className="distributor__submit">
              Enviar Solicitud
            </button>
          </form>

          {sent ? (
            <p className="distributor__feedback" role="status">
              Gracias. Te contactaremos pronto.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
