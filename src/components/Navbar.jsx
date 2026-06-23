import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import BrandLogo from './BrandLogo'
import { IconMenu, IconClose, IconArrowRight } from './Icons'

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/servicios', label: t.nav.services },
    { to: '/portafolio', label: t.nav.portfolio },
    { to: '/nosotros', label: t.nav.about },
    { to: '/contacto', label: t.nav.contact },
  ]

  // Cierra el menú móvil al navegar + bloquea el scroll con el menú abierto.
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // --- Indicador deslizante (magic-line): píldora que viaja al ítem activo/hover ---
  const listRef = useRef(null)
  const itemRefs = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const [hovered, setHovered] = useState(null)

  const activeKey = () => {
    const match = links.find((l) =>
      l.end ? location.pathname === l.to : location.pathname.startsWith(l.to),
    )
    return match ? match.to : null
  }

  const moveTo = (key) => {
    const list = listRef.current
    const el = key ? itemRefs.current[key] : null
    if (!list || !el) {
      setIndicator((p) => ({ ...p, opacity: 0 }))
      return
    }
    const lb = list.getBoundingClientRect()
    const eb = el.getBoundingClientRect()
    setIndicator({ left: eb.left - lb.left, width: eb.width, opacity: 1 })
  }

  useLayoutEffect(() => {
    moveTo(hovered ?? activeKey())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, hovered, t])

  useEffect(() => {
    const onResize = () => moveTo(hovered ?? activeKey())
    window.addEventListener('resize', onResize)
    // Reajusta cuando las fuentes terminan de cargar (el ancho cambia).
    document.fonts?.ready.then(onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered, location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-px pt-3 sm:pt-4">
        <nav className="relative flex h-16 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-ink/45 px-4 shadow-xl shadow-black/40 backdrop-blur-xl sm:px-6">
          {/* Acentos futuristas: línea dorada superior + canto de cristal */}
          <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />
          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

          {/* Logo */}
          <Link to="/" aria-label="NEXARQ 360 — Inicio" className="relative z-10 shrink-0">
            <BrandLogo className="h-12 w-auto sm:h-14" />
          </Link>

          {/* Menú de escritorio con indicador deslizante */}
          <div
            ref={listRef}
            className="relative z-10 hidden items-center lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {/* Píldora dorada deslizante */}
            <span
              className="pointer-events-none absolute top-1/2 -z-10 h-9 -translate-y-1/2 rounded-full border border-gold-400/40 bg-gold-400/10 shadow-[0_0_18px_rgba(212,175,55,0.28)] transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
            />
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                ref={(el) => (itemRefs.current[l.to] = el)}
                onMouseEnter={() => setHovered(l.to)}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-gold-200' : 'text-white/65 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Acciones */}
          <div className="relative z-10 hidden items-center gap-3 lg:flex">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-1.5 rounded-full gold-gradient px-5 py-2.5 text-sm font-semibold text-ink shadow-lg shadow-gold-700/20 transition hover:brightness-110"
            >
              {t.nav.cta}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Controles móviles */}
          <div className="relative z-10 flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              className="rounded-md p-1.5 text-white"
            >
              {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Menú móvil desplegable */}
        <div
          className={`mt-2 overflow-hidden rounded-2xl border bg-ink/90 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
            open ? 'max-h-96 border-gold-400/25' : 'max-h-0 border-transparent'
          }`}
        >
          <div className="flex flex-col gap-1 p-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium transition ${
                    isActive
                      ? 'bg-white/5 text-gold-200'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="mt-2 rounded-full gold-gradient px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
