import { useState } from 'react'
import { useI18n } from '../../i18n/I18nProvider'
import './ServiceFaq.css'

export default function ServiceFaq() {
  const { t } = useI18n()
  const [open, setOpen] = useState(0)

  return (
    <section className="faq">
      <div className="container faq__wrap">
        <header className="faq__intro reveal">
          <h2>{t.service.faqTitle}</h2>
          <p>{t.service.faqText}</p>
        </header>

        <div className="faq__list reveal reveal-delay-1">
          {t.service.faq.map((item, index) => {
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
