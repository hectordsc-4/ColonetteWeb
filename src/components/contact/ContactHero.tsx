import './ContactHero.css'

const HERO_IMG =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80'

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container contact-hero__grid">
        <div className="contact-hero__copy reveal-immediate">
          <span className="contact-hero__badge">Estamos aquí para ayudarte</span>
          <h1>Tu aliado en el paraíso mediterráneo</h1>
          <p>
            En Colonette, nuestro compromiso va más allá del producto. Ya sea que necesites
            asistencia técnica, información sobre nuestra red de distribución o realizar un pedido,
            nuestro equipo está a tu disposición en todo el archipiélago.
          </p>
        </div>
        <div className="contact-hero__media reveal-immediate reveal-delay-1">
          <img
            src={HERO_IMG}
            alt="Terraza mediterránea con granizados Colonette al atardecer"
          />
        </div>
      </div>
    </section>
  )
}
