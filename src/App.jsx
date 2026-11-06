import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopupManager from './components/PopupManager'
import Home from './pages/Home'
import Category from './pages/Category'
import Model from './pages/Model'
import Ofertas from './pages/Ofertas'
import Simple from './pages/Simple'

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
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/classics" element={<Category cat="Classics" />} />
          <Route path="/roadsters" element={<Category cat="Roadsters" />} />
          <Route path="/adventure" element={<Category cat="Adventure" />} />
          <Route path="/moto/:slug" element={<Model />} />
          <Route path="/service" element={<Simple tipo="service" />} />
          <Route path="/accesorios" element={<Simple tipo="accesorios" />} />
          <Route path="/indumentaria" element={<Simple tipo="indumentaria" />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <PopupManager />
    </>
  )
}
