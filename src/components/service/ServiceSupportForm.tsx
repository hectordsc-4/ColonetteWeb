import { useState, type FormEvent } from 'react'
import './ServiceSupportForm.css'

export default function ServiceSupportForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    machine: 'Granizadora',
    problem: '',
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="soporte" className="support">
      <div className="container support__grid">
        <div className="support__copy reveal">
          <h2>Solicitud de Soporte Directo</h2>
          <p>
            Completa el formulario y uno de nuestros técnicos se pondrá en contacto contigo en menos
            de 4 horas laborables.
          </p>

          <ul className="support__contacts">
            <li>
              <span className="support__icon" aria-hidden="true">
                ☎
              </span>
              <div>
                <strong>Soporte Telefónico</strong>
                <a href="tel:+34971886130">971 886 130</a>
              </div>
            </li>
            <li>
              <span className="support__icon" aria-hidden="true">
                ⌖
              </span>
              <div>
                <strong>Ubicación Central</strong>
                <span>C/ Pou de sa Sinia, nº 19, Binissalem, Mallorca</span>
              </div>
            </li>
          </ul>
        </div>

        <form className="support__form reveal reveal-delay-1" onSubmit={onSubmit}>
          <div className="support__row">
            <label>
              Nombre y Apellidos
              <input
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>
            <label>
              Empresa
              <input
                type="text"
                placeholder="Nombre de tu negocio"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
              />
            </label>
          </div>

          <label>
            Email de contacto
            <input
              type="email"
              placeholder="email@ejemplo.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </label>

          <label>
            Tipo de Maquinaria
            <select
              value={form.machine}
              onChange={(e) => setForm({ ...form, machine: e.target.value })}
            >
              <option>Granizadora</option>
              <option>Horchatera</option>
              <option>Soft-Ice</option>
              <option>Cafetera</option>
              <option>Milkshake Mixer</option>
              <option>Otra</option>
            </select>
          </label>

          <label>
            Descripción del problema
            <textarea
              rows={4}
              placeholder="Explícanos brevemente qué sucede..."
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
              required
            />
          </label>

          <button type="submit" className="btn btn-primary support__submit">
            <span aria-hidden="true">✈</span>
            Enviar Solicitud
          </button>

          {sent ? (
            <p className="support__feedback" role="status">
              Solicitud enviada. Un técnico te contactará pronto.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
