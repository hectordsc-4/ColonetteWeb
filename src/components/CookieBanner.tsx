import { useEffect, useState } from 'react'
import './CookieBanner.css'

const KEY = 'colonette-cookies'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(KEY)
    if (!saved) setVisible(true)
  }, [])

  if (!visible) return null

  const accept = () => {
    localStorage.setItem(KEY, 'all')
    setVisible(false)
  }

  const configure = () => {
    localStorage.setItem(KEY, 'essential')
    setVisible(false)
  }

  return (
    <aside className="cookies" role="dialog" aria-labelledby="cookies-title">
      <div className="cookies__head">
        <span className="cookies__icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="9" cy="10" r="1.2" fill="currentColor" />
            <circle cx="14.5" cy="9" r="1" fill="currentColor" />
            <circle cx="12.5" cy="14" r="1.3" fill="currentColor" />
          </svg>
        </span>
        <h2 id="cookies-title">Preferencias de Cookies</h2>
      </div>
      <p>
        Utilizamos cookies para mejorar tu experiencia de navegación y analizar el tráfico del
        sitio. Puedes aceptar todas o configurar tus preferencias.
      </p>
      <div className="cookies__actions">
        <button type="button" className="btn btn-primary" onClick={accept}>
          Aceptar Todas
        </button>
        <button type="button" className="cookies__config" onClick={configure}>
          Configurar
        </button>
      </div>
    </aside>
  )
}
