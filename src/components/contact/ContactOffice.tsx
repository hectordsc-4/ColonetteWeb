import './ContactOffice.css'

export default function ContactOffice() {
  return (
    <section className="office">
      <div className="container">
        <header className="office__intro reveal">
          <h2>Nuestra Sede Central</h2>
          <p>Visítanos en el corazón de Mallorca, en el polígono industrial de Binissalem.</p>
        </header>

        <div className="office__panel reveal reveal-delay-1">
          <article className="office__card">
            <div className="office__row">
              <span className="office__icon office__icon--red" aria-hidden="true">
                ⌖
              </span>
              <div>
                <strong>Mallorca Office</strong>
                <p>
                  C/ Pou de sa Sinia, nº 19
                  <br />
                  Polígono industrial de Binissalem
                  <br />
                  07350 Binissalem. Mallorca
                </p>
              </div>
            </div>

            <div className="office__row">
              <span className="office__icon office__icon--blue" aria-hidden="true">
                ⏱
              </span>
              <p>L-V: 08:00 - 18:00</p>
            </div>

            <div className="office__row">
              <span className="office__icon office__icon--blue" aria-hidden="true">
                P
              </span>
              <p>Parking gratuito disponible</p>
            </div>
          </article>

          <div className="office__map" aria-label="Mapa de la sede en Binissalem">
            <iframe
              title="Colonette Binissalem"
              src="https://maps.google.com/maps?q=Carrer%20Pou%20de%20sa%20Sinia%2019%20Binissalem&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
