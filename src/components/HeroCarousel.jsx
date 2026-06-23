import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { IconArrowRight } from './Icons'

const AUTO_MS = 6000

// Imágenes de fondo por slide (independientes del idioma).
const SLIDE_IMAGES = ['/slide-1.jpg', '/slide-2.jpg', '/slide-3.jpg', '/slide-4.jpg']

// Panel publicitario del hero: carrusel de anuncios que se desliza solo y por el
// que se puede pasar (flechas, puntos, swipe y teclado). Edita las slides en
// translations.js → `heroSlides`.
//
// Mejoras: barra de progreso en el punto activo, Ken Burns en la imagen,
// entrada escalonada del texto y pausa al pasar el mouse / enfocar.
export default function HeroCarousel() {
  const { t } = useLanguage()
  const slides = t.heroSlides ?? []
  const n = slides.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  // Autoplay: se reinicia con cada cambio de slide y se detiene en pausa,
  // así la barra de progreso y el avance quedan siempre sincronizados.
  useEffect(() => {
    clearInterval(timer.current)
    if (paused || n <= 1) return
    timer.current = setInterval(() => setIndex((p) => (p + 1) % n), AUTO_MS)
    return () => clearInterval(timer.current)
  }, [index, paused, n])

  const goTo = (i) => setIndex(((i % n) + n) % n)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  // Navegación con teclado (← →)
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    else if (e.key === 'ArrowLeft') prev()
  }

  // Swipe / arrastre
  const drag = useRef({ x: 0, active: false })
  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, active: true }
  }
  const onPointerUp = (e) => {
    if (!drag.current.active) return
    drag.current.active = false
    const dx = e.clientX - drag.current.x
    if (dx < -60) next()
    else if (dx > 60) prev()
  }

  if (n === 0) return null

  return (
    <div
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft/30 shadow-2xl shadow-black/30 backdrop-blur-md"
      role="region"
      aria-roledescription="carousel"
      aria-label="Anuncios destacados"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      {/* Pista de slides */}
      <div
        className="flex cursor-grab touch-pan-y select-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] active:cursor-grabbing"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {slides.map((s, i) => {
          const active = i === index
          return (
            <div
              key={i}
              className="relative flex min-w-full flex-col items-center justify-center overflow-hidden px-6 py-16 text-center sm:px-16 sm:py-24"
              aria-hidden={!active}
            >
              {/* Imagen de fondo (Ken Burns) + capas oscuras para legibilidad */}
              {SLIDE_IMAGES[i] && (
                <>
                  <img
                    src={SLIDE_IMAGES[i]}
                    alt=""
                    aria-hidden="true"
                    draggable="false"
                    className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover hero-kenburns"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/85" />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" />
                  {/* Viñeta para asegurar contraste del texto */}
                  <span className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_40px_rgba(5,5,7,0.65)]" />
                </>
              )}

              <div className="relative z-10 flex flex-col items-center">
                <h1
                  className={`max-w-3xl font-display text-4xl font-extrabold leading-[1.1] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] sm:text-6xl ${
                    active ? 'hero-rise' : ''
                  }`}
                >
                  {s.title} <span className="gold-text">{s.accent}</span>
                </h1>
                {s.subtitle && (
                  <p
                    className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] sm:text-lg ${
                      active ? 'hero-rise hero-d1' : ''
                    }`}
                  >
                    {s.subtitle}
                  </p>
                )}
                <div
                  className={`mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row ${
                    active ? 'hero-rise hero-d2' : ''
                  }`}
                >
                  <Link
                    to={s.cta.to}
                    className="inline-flex items-center justify-center gap-2 rounded-full gold-gradient px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-gold-700/20 transition hover:brightness-110"
                  >
                    {s.cta.label}
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                  {s.cta2 && (
                    <Link
                      to={s.cta2.to}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-ink/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold-400/60"
                    >
                      {s.cta2.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Contador 01 / 04 */}
      <div className="absolute right-5 top-5 z-20 font-display text-xs font-semibold tracking-widest text-white/70">
        <span className="text-gold-300">{String(index + 1).padStart(2, '0')}</span>
        <span className="mx-1 text-white/30">/</span>
        {String(n).padStart(2, '0')}
      </div>

      {/* Flechas (desktop) */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/50 text-white/70 backdrop-blur transition hover:border-gold-400/60 hover:text-gold-200 sm:grid"
      >
        <IconArrowRight className="h-5 w-5 rotate-180" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/50 text-white/70 backdrop-blur transition hover:border-gold-400/60 hover:text-gold-200 sm:grid"
      >
        <IconArrowRight className="h-5 w-5" />
      </button>

      {/* Indicadores con barra de progreso en el activo */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) =>
          i === index ? (
            <span
              key={i}
              className="relative h-2 w-9 overflow-hidden rounded-full bg-white/20"
              aria-current="true"
            >
              {/* La key reinicia la animación en cada cambio/pausa para
                  mantenerla sincronizada con el autoplay. */}
              <span
                key={`${index}-${paused}`}
                className="absolute inset-y-0 left-0 rounded-full bg-gold-400"
                style={{
                  animation: paused ? 'none' : `hero-progress ${AUTO_MS}ms linear forwards`,
                }}
              />
            </span>
          ) : (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Anuncio ${i + 1}`}
              className="h-2 w-2 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/50"
            />
          ),
        )}
      </div>
    </div>
  )
}
