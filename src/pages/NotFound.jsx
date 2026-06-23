import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { IconArrowRight } from '../components/Icons'

export default function NotFound() {
  const { t } = useLanguage()
  usePageMeta('404', t.notFound.text)

  return (
    <section className="container-px grid min-h-[70vh] place-items-center py-20 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold gold-text sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white">{t.notFound.title}</h1>
        <p className="mt-3 text-white/60">{t.notFound.text}</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full gold-gradient px-7 py-3.5 text-sm font-semibold text-ink transition hover:brightness-110"
        >
          {t.notFound.back}
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
