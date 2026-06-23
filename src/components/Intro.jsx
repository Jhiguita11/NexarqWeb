import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useEntered } from '../context/EnteredContext'
import IntroLockup from './IntroLockup'
import { IconArrowRight } from './Icons'

// Pantalla de entrada: anillo dorado + título NEXARQ 360 + botón "Entrar".
// Al confirmar, reproduce una salida cinematográfica (zoom + fade) y revela el sitio.
export default function Intro() {
  const { t } = useLanguage()
  const { enter } = useEntered()
  const [leaving, setLeaving] = useState(false)

  // Bloquea el scroll mientras la intro está visible.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  const handleEnter = () => {
    if (leaving) return
    setLeaving(true)
    // Espera a que termine la animación de salida antes de revelar el sitio.
    window.setTimeout(enter, 850)
  }

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink transition-all duration-[850ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${
        leaving ? 'pointer-events-none scale-110 opacity-0' : 'opacity-100'
      }`}
      aria-hidden={leaving}
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-600/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative flex flex-col items-center px-6 text-center">
        {/* Lockup de marca (anillo entrelazado con la X) */}
        <div
          className={`animate-intro-pop transition-transform duration-[850ms] ease-out ${
            leaving ? 'scale-150' : 'scale-100'
          }`}
        >
          <IntroLockup className="w-[min(92vw,600px)]" />
        </div>

        {/* Tagline */}
        <p
          className="animate-intro-pop mt-8 text-xs font-medium uppercase tracking-[0.3em] text-white/50 sm:text-sm"
          style={{ animationDelay: '300ms' }}
        >
          {t.intro.tagline}
        </p>

        {/* Botón Entrar con pulso anular */}
        <div
          className="animate-intro-pop relative mt-12"
          style={{ animationDelay: '550ms' }}
        >
          <span className="absolute inset-0 rounded-full border border-gold-400/60 animate-pulse-ring" />
          <button
            onClick={handleEnter}
            className="group relative inline-flex items-center gap-3 rounded-full gold-gradient px-10 py-4 text-sm font-bold uppercase tracking-widest text-ink shadow-xl shadow-gold-700/30 transition hover:brightness-110"
          >
            {t.intro.enter}
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
