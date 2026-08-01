import { useI18n } from '../../i18n/I18nProvider'
import { img } from '../../data/images'
import './ContactHero.css'

export default function ContactHero() {
  const { t } = useI18n()

  return (
    <section className="contact-hero">
      <div className="container contact-hero__grid">
        <div className="contact-hero__copy reveal-immediate">
          <span className="contact-hero__badge">{t.contact.badge}</span>
          <h1>{t.contact.title}</h1>
          <p>{t.contact.text}</p>
        </div>
        <div className="contact-hero__media reveal-immediate reveal-delay-1">
          <img src={img.contactHero} alt={t.contact.title} />
        </div>
      </div>
    </section>
  )
}
