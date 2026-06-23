import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Lleva la vista al inicio cada vez que cambia la ruta.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}
