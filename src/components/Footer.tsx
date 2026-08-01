import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import './Footer.css'

export default function Footer() {
  const { t } = useI18n()
  const pathname = useLocation().pathname
  const isProducts = pathname.startsWith('/productos')
  const isDetail = /^\/productos\/[^/]+$/.test(pathname)
  const isService = pathname.startsWith('/servicio-tecnico')
  const isContact = pathname.startsWith('/contacto')

  const rightsLine = `© ${new Date().getFullYear()} Colonette — ${t.footer.allRights}`

  if (isDetail) {
    return (
      <footer id="contacto" className="footer footer--detail">
        <div className="container footer__grid footer__grid--detail">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Colonette
            </Link>
            <p>{t.footer.brandDetail}</p>
          </div>

          <div>
            <h3>{t.footer.navigation}</h3>
            <ul>
              <li><Link to="/">{t.nav.home}</Link></li>
              <li><Link to="/productos">{t.nav.products}</Link></li>
              <li><Link to="/novedades">{t.nav.news}</Link></li>
              <li><Link to="/servicio-tecnico">{t.nav.service}</Link></li>
              <li><Link to="/contacto">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3>{t.footer.legal}</h3>
            <ul>
              <li><a href="#aviso">{t.footer.notice}</a></li>
              <li><a href="#privacidad">{t.footer.privacy}</a></li>
              <li><a href="#cookies">{t.footer.cookies}</a></li>
            </ul>
          </div>

          <div>
            <h3>{t.footer.follow}</h3>
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
          <p>{rightsLine}</p>
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
            <p>{t.footer.brandService}</p>
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
            <h3>{t.footer.quickLinks}</h3>
            <ul>
              <li><Link to="/">{t.nav.home}</Link></li>
              <li><Link to="/productos">{t.nav.products}</Link></li>
              <li><Link to="/servicio-tecnico" className="is-active-link">{t.nav.service}</Link></li>
              <li><Link to="/novedades">{t.nav.news}</Link></li>
              <li><Link to="/contacto">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3>{t.footer.legal}</h3>
            <ul>
              <li><a href="#aviso">{t.footer.notice}</a></li>
              <li><a href="#privacidad">{t.footer.privacy}</a></li>
              <li><a href="#cookies">{t.footer.cookies}</a></li>
            </ul>
          </div>

          <div>
            <h3>{t.footer.directContact}</h3>
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
          <p>{rightsLine}</p>
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
            <p>{t.footer.brandContact}</p>
          </div>

          <div>
            <h3>{t.footer.explore}</h3>
            <ul>
              <li><Link to="/productos">{t.nav.products}</Link></li>
              <li><Link to="/servicio-tecnico">{t.nav.service}</Link></li>
              <li><Link to="/novedades">{t.nav.news}</Link></li>
              <li><Link to="/contacto" className="is-active-link">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h3>{t.footer.legal}</h3>
            <ul>
              <li><a href="#aviso">{t.footer.notice}</a></li>
              <li><a href="#privacidad">{t.footer.privacy}</a></li>
              <li><a href="#cookies">{t.footer.cookies}</a></li>
            </ul>
          </div>

          <div>
            <h3>{t.footer.follow}</h3>
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
            <p className="footer__copy-inline">{rightsLine}</p>
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
          <p>{isProducts ? t.footer.brandProducts : t.footer.brandHome}</p>
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
            <a href="#pedido" aria-label={t.cart.label}>
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
            <h3>{t.footer.products}</h3>
            <ul>
              <li><Link to="/productos/granizados">{t.footer.productLinks.granizados}</Link></li>
              <li><Link to="/productos/horchata">{t.footer.productLinks.horchata}</Link></li>
              <li><Link to="/productos/cafe">{t.footer.productLinks.cafe}</Link></li>
              <li><Link to="/productos/soft-ice">{t.footer.productLinks.softIce}</Link></li>
              <li><Link to="/productos/yogurt">{t.footer.productLinks.yogurt}</Link></li>
            </ul>
          </div>
        ) : (
          <div>
            <h3>{t.footer.company}</h3>
            <ul>
              <li><Link to="/">{t.nav.home}</Link></li>
              <li><Link to="/productos">{t.nav.products}</Link></li>
              <li><Link to="/novedades">{t.nav.news}</Link></li>
              <li><Link to="/servicio-tecnico">{t.nav.service}</Link></li>
            </ul>
          </div>
        )}

        <div>
          <h3>{isProducts ? t.footer.company : t.footer.legal}</h3>
          <ul>
            {isProducts ? (
              <>
                <li><Link to="/servicio-tecnico">{t.nav.service}</Link></li>
                <li><Link to="/novedades">{t.nav.news}</Link></li>
                <li><a href="#distribuidor">{t.footer.distributors}</a></li>
                <li><a href="#privacidad">{t.footer.privacy}</a></li>
                <li><a href="#aviso">{t.footer.notice}</a></li>
              </>
            ) : (
              <>
                <li><a href="#aviso">{t.footer.notice}</a></li>
                <li><a href="#privacidad">{t.footer.privacy}</a></li>
                <li><a href="#cookies">{t.footer.cookies}</a></li>
              </>
            )}
          </ul>
        </div>

        <div>
          <h3>{t.nav.contact}</h3>
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
        <p>{rightsLine}</p>
        <div className="footer__bottom-links">
          {isProducts ? <a href="#cookies">{t.footer.cookies}</a> : null}
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
