import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const pathname = useLocation().pathname
  const isProducts = pathname.startsWith('/productos')
  const isDetail = /^\/productos\/[^/]+$/.test(pathname)
  const isService = pathname.startsWith('/servicio-tecnico')
  const isContact = pathname.startsWith('/contacto')

  if (isDetail) {
    return (
      <footer id="contacto" className="footer footer--detail">
        <div className="container footer__grid footer__grid--detail">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Colonette
            </Link>
            <p>
              Su partner de confianza en productos refrescantes y maquinaria de hostelería en las
              Islas Baleares.
            </p>
          </div>

          <div>
            <h3>Navegación</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/servicio-tecnico">Servicio Técnico</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#aviso">Aviso Legal</a></li>
              <li><a href="#privacidad">Privacidad</a></li>
              <li><a href="#cookies">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h3>Síguenos</h3>
            <div className="footer__social">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} Colonette — Todos los derechos reservados</p>
        </div>
      </footer>
    )
  }

  if (isService) {
    return (
      <footer id="contacto" className="footer footer--service">
        <div className="container footer__grid footer__grid--service">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Colonette
            </Link>
            <p>
              Proveedores líderes en hostelería para las Islas Baleares. Calidad, frescura y servicio
              técnico excepcional.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/servicio-tecnico" className="is-active-link">Servicio Técnico</Link></li>
              <li><Link to="/#novedades">Novedades</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#aviso">Aviso Legal</a></li>
              <li><a href="#privacidad">Privacidad</a></li>
              <li><a href="#cookies">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h3>Contacto Directo</h3>
            <ul className="footer__contact">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6.5 5h3l1.5 4-2 1.2a12 12 0 005.8 5.8L16.5 14l4 1.5v3A2 2 0 0118.5 21 14.5 14.5 0 013 5.5 2 2 0 015 3.5h1.5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="tel:+34971886130">971 886 130</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
                </svg>
                <a href="mailto:socobalear@colonette.com">socobalear@colonette.com</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
                </svg>
                <span>C/ Pou de sa Sinia, nº 19, Binissalem, Mallorca</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} Colonette — Todos los derechos reservados</p>
        </div>
      </footer>
    )
  }

  if (isContact) {
    return (
      <footer className="footer footer--contact">
        <div className="container footer__grid footer__grid--contact">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Colonette
            </Link>
            <p>
              Llevando el sabor del paraíso a los mejores establecimientos de Baleares desde hace
              décadas.
            </p>
          </div>

          <div>
            <h3>Explorar</h3>
            <ul>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/servicio-tecnico">Servicio Técnico</Link></li>
              <li><Link to="/#novedades">Novedades</Link></li>
              <li><Link to="/contacto" className="is-active-link">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#aviso">Aviso Legal</a></li>
              <li><a href="#privacidad">Privacidad</a></li>
              <li><a href="#cookies">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h3>Síguenos</h3>
            <div className="footer__social">
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <p className="footer__copy-inline">
              © {new Date().getFullYear()} Colonette — Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer id="contacto" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            Colonette
          </Link>
          <p>
            {isProducts
              ? 'Empresa proveedora líder de granizados, helados y cafés en las Islas Baleares. Calidad y tradición desde Mallorca.'
              : 'Líderes en soluciones refrescantes para hostelería en Baleares. Calidad, servicio y tradición desde Binissalem.'}
          </p>
          <div className="footer__social">
            <a href="https://colonette.com" aria-label="Sitio web" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </a>
            <a href="#pedido" aria-label="Compartir">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="6" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="18" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="18" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.7" />
                <path d="M8 11l8-4M8 13l8 4" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </a>
          </div>
        </div>

        {isProducts ? (
          <div>
            <h3>Productos</h3>
            <ul>
              <li><Link to="/productos/granizados">Granizados</Link></li>
              <li><Link to="/productos/horchata">Horchata de Chufa</Link></li>
              <li><Link to="/productos/cafe">Café Colonette</Link></li>
              <li><Link to="/productos/soft-ice">Soft Ice</Link></li>
              <li><Link to="/productos/yogurt">Yogurt Natural</Link></li>
            </ul>
          </div>
        ) : (
          <div>
            <h3>Empresa</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/#novedades">Novedades</Link></li>
              <li><Link to="/servicio-tecnico">Servicio Técnico</Link></li>
            </ul>
          </div>
        )}

        <div>
          <h3>{isProducts ? 'Empresa' : 'Legal'}</h3>
          <ul>
            {isProducts ? (
              <>
                <li><Link to="/servicio-tecnico">Servicio Técnico</Link></li>
                <li><Link to="/#novedades">Novedades</Link></li>
                <li><a href="#distribuidor">Distribuidores</a></li>
                <li><a href="#privacidad">Privacidad</a></li>
                <li><a href="#aviso">Aviso Legal</a></li>
              </>
            ) : (
              <>
                <li><a href="#aviso">Aviso Legal</a></li>
                <li><a href="#privacidad">Privacidad</a></li>
                <li><a href="#cookies">Cookies</a></li>
              </>
            )}
          </ul>
        </div>

        <div>
          <h3>Contacto</h3>
          <ul className="footer__contact">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              <span>
                {isProducts
                  ? 'Binissalem. Mallorca, 07350'
                  : 'C/ Pou de sa Sinia, nº 19 Binissalem, Mallorca'}
              </span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.5 5h3l1.5 4-2 1.2a12 12 0 005.8 5.8L16.5 14l4 1.5v3A2 2 0 0118.5 21 14.5 14.5 0 013 5.5 2 2 0 015 3.5h1.5z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="tel:+34971886130">971 886 130</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              <a href="mailto:socobalear@colonette.com">socobalear@colonette.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Colonette — Todos los derechos reservados</p>
        <div className="footer__bottom-links">
          {isProducts ? <a href="#cookies">Cookies</a> : null}
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
