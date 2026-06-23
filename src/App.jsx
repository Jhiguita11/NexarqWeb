import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Intro from './components/Intro'
import SvgDefs from './components/SvgDefs'
import { useEntered } from './context/EnteredContext'

// El fondo 360 usa Three.js (pesado): se carga de forma diferida para no
// retrasar la primera pintura del sitio.
const PanoramaBackground = lazy(() => import('./components/PanoramaBackground'))
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const { entered } = useEntered()

  return (
    <>
      <SvgDefs />

      {/* Fondo panorámico 360 en movimiento, detrás de todo el sitio (lazy) */}
      <Suspense fallback={null}>
        <PanoramaBackground />
      </Suspense>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Services />} />
          <Route path="portafolio" element={<Portfolio />} />
          <Route path="nosotros" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* Pantalla de entrada (una vez por sesión) */}
      {!entered && <Intro />}
    </>
  )
}
