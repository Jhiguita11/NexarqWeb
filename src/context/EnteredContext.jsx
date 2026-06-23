import { createContext, useCallback, useContext, useState } from 'react'

const EnteredContext = createContext(null)

const STORAGE_KEY = 'nexarq-entered'

// Controla si el usuario ya pasó la intro (persistido por sesión).
export function EnteredProvider({ children }) {
  const [entered, setEntered] = useState(() => {
    if (typeof window === 'undefined') return false
    // ?intro en la URL fuerza mostrar la intro (útil para previsualizar/compartir).
    if (new URLSearchParams(window.location.search).has('intro')) return false
    return window.sessionStorage.getItem(STORAGE_KEY) === '1'
  })

  const enter = useCallback(() => {
    window.sessionStorage.setItem(STORAGE_KEY, '1')
    setEntered(true)
  }, [])

  // Vuelve a reproducir la intro (p. ej. al hacer clic en el logo).
  const replay = useCallback(() => {
    window.sessionStorage.removeItem(STORAGE_KEY)
    setEntered(false)
  }, [])

  return (
    <EnteredContext.Provider value={{ entered, enter, replay }}>
      {children}
    </EnteredContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useEntered() {
  const ctx = useContext(EnteredContext)
  if (!ctx) throw new Error('useEntered debe usarse dentro de <EnteredProvider>')
  return ctx
}
