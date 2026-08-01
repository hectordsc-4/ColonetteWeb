import type { WhyCard } from '../../data/products'
import './ProductWhy.css'

type Props = {
  title: string
  subtitle: string
  cards: WhyCard[]
}

const icons: Record<WhyCard['icon'], string> = {
  smile: '☺',
  trend: '↗',
  service: '⚙',
  hygiene: '✦',
  design: '✎',
}

export default function ProductWhy({ title, subtitle, cards }: Props) {
  return (
    <section className="why">
      <div className="container">
        <header className="why__intro reveal">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </header>

        <div className="why__grid">
          {cards.map((card, i) => (
            <article
              key={card.title}
              className={`why-card why-card--${card.tone}${card.wide ? ' why-card--wide' : ''} reveal reveal-delay-${Math.min(i, 3)}`}
            >
              <span className="why-card__icon" aria-hidden="true">
                {icons[card.icon]}
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
