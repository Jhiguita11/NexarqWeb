import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { IconArrowRight } from './Icons'
import Reveal from './Reveal'

// Banner de llamado a la acción reutilizable.
export default function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="container-px py-20">
      <Reveal className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-ink-soft to-ink-700 p-10 text-center sm:p-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold-600/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
        </div>
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          {t.home.ctaBannerTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">{t.home.ctaBannerText}</p>
        <Link
          to="/contacto"
          className="mt-8 inline-flex items-center gap-2 rounded-full gold-gradient px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-gold-700/20 transition hover:brightness-110"
        >
          {t.home.ctaBannerButton}
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  )
}
