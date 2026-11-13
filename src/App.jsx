import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopupManager from './components/PopupManager'
import Home from './pages/Home'
import Category from './pages/Category'
import Model from './pages/Model'
import Ofertas from './pages/Ofertas'
import Service from './pages/Service'
import Accesorios from './pages/Accesorios'
import Indumentaria from './pages/Indumentaria'
import Privacidad from './pages/Privacidad'
import { mostrarOfertas } from './data/dealer'

function ScrollTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={mostrarOfertas ? <Ofertas /> : <Navigate to="/" replace />} />
          <Route path="/classics" element={<Category cat="classics" />} />
          <Route path="/roadsters" element={<Category cat="roadsters" />} />
          <Route path="/adventure" element={<Category cat="adventure" />} />
          <Route path="/:cat/:slug" element={<Model />} />
          <Route path="/service" element={<Service />} />
          <Route path="/accesorios-triumph" element={<Accesorios />} />
          <Route path="/accesorios" element={<Navigate to="/accesorios-triumph" replace />} />
          <Route path="/indumentaria" element={<Indumentaria />} />
          <Route path="/politica-de-cookies" element={<Privacidad />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <PopupManager />
    </>
  )
}
