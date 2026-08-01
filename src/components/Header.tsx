import { useEffect, useState, type FormEvent } from 'react'
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import './Header.css'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/productos', label: 'Productos', end: false },
  { to: '/servicio-tecnico', label: 'Servicio Técnico', end: false },
  { to: '/#novedades', label: 'Novedades', end: false },
  { to: '/contacto', label: 'Contacto', end: false },
]

type HeaderProps = {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const onProducts = location.pathname === '/productos'
  const onService = location.pathname.startsWith('/servicio-tecnico')
  const showSearch = onProducts || onService
  const [query, setQuery] = useState(searchParams.get('q') ?? '')

  useEffect(() => {
    setQuery(searchParams.get('q') ?? '')
  }, [searchParams])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const onSearch = (e: FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/productos?q=${encodeURIComponent(q)}` : '/productos')
  }

  return (
    <header
      className={`header ${scrolled ? 'header--scrolled' : ''} ${showSearch ? 'header--products' : ''}`}
    >
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="Colonette inicio">
          <span className="header__logo-colon">Colon</span>
          <span className="header__logo-ette">ette</span>
        </Link>

        <button
          className={`header__toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          {links.map((link) =>
            link.to.includes('#') ? (
              <a key={link.to} href={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ),
          )}

          {showSearch ? (
            <form className="header__search header__search--mobile" onSubmit={onSearch}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder={onService ? 'Buscar...' : 'Buscar productos...'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          ) : null}

          <a href="#pedido" className="btn btn-primary header__cta-mobile" onClick={() => setOpen(false)}>
            Pedido Online
          </a>
        </nav>

        <div className="header__right">
          {showSearch ? (
            <form className="header__search" onSubmit={onSearch} role="search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder={onService ? 'Buscar...' : 'Buscar productos...'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Buscar"
              />
            </form>
          ) : null}

          <a href="#pedido" className="btn btn-primary header__cta">
            Pedido Online
          </a>
        </div>
      </div>
    </header>
  )
}
