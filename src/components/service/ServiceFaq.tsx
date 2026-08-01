import { useState } from 'react'
import './ServiceFaq.css'

const faqs = [
  {
    q: '¿Cada cuánto tiempo se debe realizar el mantenimiento?',
    a: 'Recomendamos una revisión técnica profunda cada 6 meses, aunque la limpieza básica de filtros y superficies debe ser semanal por parte del personal del establecimiento.',
  },
  {
    q: '¿Tienen servicio de urgencia en fin de semana?',
    a: 'Sí. Disponemos de cobertura de urgencias en Mallorca los fines de semana y festivos para incidencias críticas que puedan paralizar tu servicio.',
  },
  {
    q: '¿Cómo puedo solicitar recambios originales?',
    a: 'Puedes solicitar recambios a través del formulario de soporte o llamando al 971 886 130. Indica modelo y número de serie del equipo para agilizar el envío.',
  },
]

export default function ServiceFaq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq">
      <div className="container faq__wrap">
        <header className="faq__intro reveal">
          <h2>Preguntas Frecuentes</h2>
          <p>Resolvemos tus dudas más comunes al instante.</p>
        </header>

        <div className="faq__list reveal reveal-delay-1">
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <span className="faq__chevron" aria-hidden="true">
                    {isOpen ? '⌃' : '⌄'}
                  </span>
                </button>
                {isOpen ? <p className="faq__answer">{item.a}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
