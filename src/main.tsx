import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { I18nProvider } from './i18n/I18nProvider.tsx'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import ProductsPage from './pages/ProductsPage.tsx'
import ProductDetailPage from './pages/ProductDetailPage.tsx'
import ServicePage from './pages/ServicePage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import NewsPage from './pages/NewsPage.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'productos', element: <ProductsPage /> },
        { path: 'productos/:productId', element: <ProductDetailPage /> },
        { path: 'servicio-tecnico', element: <ServicePage /> },
        { path: 'novedades', element: <NewsPage /> },
        { path: 'contacto', element: <ContactPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || undefined },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </StrictMode>,
)
