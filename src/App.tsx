import { useEffect, useState } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import CartFab from './components/CartFab'
import useScrollReveal from './hooks/useScrollReveal'
import './App.css'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useScrollReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">
      <Header scrolled={scrolled} />
      <Outlet />
      <Footer />
      <CookieBanner />
      <CartFab />
      <ScrollRestoration />
    </div>
  )
}
