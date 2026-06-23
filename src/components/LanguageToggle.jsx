import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle({ className = '' }) {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className={`group inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/80 transition hover:border-gold-400/60 hover:text-white ${className}`}
    >
      <span className={lang === 'es' ? 'gold-text' : ''}>ES</span>
      <span className="text-white/30">/</span>
      <span className={lang === 'en' ? 'gold-text' : ''}>EN</span>
    </button>
  )
}
