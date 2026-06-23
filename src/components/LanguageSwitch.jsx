import { useLanguage } from '../i18n/LanguageContext'
import { IconGlobe } from './Icons'

// Switch de idioma flotante y elegante (abajo-izquierda): globo + toggle
// segmentado ES/EN con una píldora dorada que se desliza (cohesivo con el navbar).
export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="flex items-center gap-2 rounded-full border border-white/15 bg-ink/55 py-1.5 pl-3 pr-1.5 shadow-lg shadow-black/40 backdrop-blur-xl">
        <IconGlobe className="h-4 w-4 text-gold-300" />
        <div className="relative flex h-8 w-[4.75rem] items-center rounded-full bg-white/5 text-xs font-bold tracking-wide">
          {/* Píldora dorada deslizante */}
          <span
            className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-gold-400/20 shadow-[0_0_12px_rgba(212,175,55,0.3)] ring-1 ring-inset ring-gold-400/50 transition-transform duration-300 ease-out"
            style={{ transform: lang === 'en' ? 'translateX(100%)' : 'translateX(0)' }}
          />
          <button
            type="button"
            onClick={() => setLang('es')}
            aria-pressed={lang === 'es'}
            className={`relative z-10 flex-1 py-1.5 text-center transition-colors ${
              lang === 'es' ? 'text-gold-100' : 'text-white/45 hover:text-white/80'
            }`}
          >
            ES
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
            className={`relative z-10 flex-1 py-1.5 text-center transition-colors ${
              lang === 'en' ? 'text-gold-100' : 'text-white/45 hover:text-white/80'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  )
}
