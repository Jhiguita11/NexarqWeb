import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { site } from '../data/site'
import BrandLogo from './BrandLogo'
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconInstagram,
  IconLinkedin,
  IconFacebook,
} from './Icons'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/servicios', label: t.nav.services },
    { to: '/portafolio', label: t.nav.portfolio },
    { to: '/nosotros', label: t.nav.about },
    { to: '/contacto', label: t.nav.contact },
  ]

  const socials = [
    { href: site.social.instagram, label: 'Instagram', Icon: IconInstagram },
    { href: site.social.linkedin, label: 'LinkedIn', Icon: IconLinkedin },
    { href: site.social.facebook, label: 'Facebook', Icon: IconFacebook },
  ]

  return (
    <footer className="border-t border-white/10 bg-ink-soft">
      <div className="container-px grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="lg:col-span-1">
          <BrandLogo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">{t.footer.tagline}</p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wider text-gold-300/80">
            {t.footer.allianceNote}
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.navTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/55 transition hover:text-gold-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-sm text-white/55 transition hover:text-gold-300"
              >
                <IconMail className="h-4 w-4 shrink-0 text-gold-400" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 text-sm text-white/55 transition hover:text-gold-300"
              >
                <IconPhone className="h-4 w-4 shrink-0 text-gold-400" />
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/55">
              <IconMapPin className="h-4 w-4 shrink-0 text-gold-400" />
              {site.location}
            </li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.contact.followUs}
          </h3>
          <div className="mt-4 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400/60 hover:text-gold-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <p>
            {t.footer.createdBy}{' '}
            {site.creator.url ? (
              <a
                href={site.creator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-text font-semibold transition hover:brightness-110"
              >
                {site.creator.name}
              </a>
            ) : (
              <span className="gold-text font-semibold">{site.creator.name}</span>
            )}{' '}
            · {site.creator.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
