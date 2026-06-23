import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { site } from '../data/site'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconWhatsapp,
  IconCheck,
  IconArrowRight,
  IconInstagram,
  IconLinkedin,
  IconFacebook,
} from '../components/Icons'

const initialForm = { name: '', email: '', company: '', message: '' }

export default function Contact() {
  const { t } = useLanguage()
  usePageMeta(t.nav.contact, t.contact.subtitle)

  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Sin backend: se prepara un correo con los datos del formulario.
    const subject = encodeURIComponent(`[NEXARQ 360] ${form.name} — ${form.company || 'Contacto'}`)
    const body = encodeURIComponent(
      `${t.contact.name}: ${form.name}\n` +
        `${t.contact.email}: ${form.email}\n` +
        `${t.contact.company}: ${form.company || '-'}\n\n` +
        `${form.message}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-ink-soft px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-gold-400/60 focus:ring-1 focus:ring-gold-400/40'

  // Iniciales del asesor para el avatar.
  const initials = site.advisor
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  const methods = [
    {
      Icon: IconPhone,
      label: site.phone,
      sub: t.contact.advisorLabel,
      href: `tel:${site.phone.replace(/\s/g, '')}`,
    },
    { Icon: IconMail, label: site.email, sub: 'Email', href: `mailto:${site.email}` },
    { Icon: IconMapPin, label: site.location, sub: 'Ubicación', href: null },
  ]

  const socials = [
    { Icon: IconInstagram, href: site.social.instagram },
    { Icon: IconLinkedin, href: site.social.linkedin },
    { Icon: IconFacebook, href: site.social.facebook },
  ]

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />

      <section className="container-px pt-8 pb-20">
        <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
          {/* ============ PANEL "HABLEMOS" ============ */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {/* Asesor destacado */}
              <div className="relative overflow-hidden rounded-3xl border border-gold-400/25 bg-gradient-to-br from-gold-700/20 via-ink-soft to-ink p-6">
                <span className="pointer-events-none absolute -right-6 -top-8 select-none font-display text-[7rem] font-black leading-none text-white/[0.03]">
                  360
                </span>
                <div className="relative flex items-center gap-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full gold-gradient font-display text-xl font-black text-ink shadow-lg shadow-gold-700/30">
                    {initials}
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] gold-text">
                      {t.contact.advisorLabel}
                    </p>
                    <p className="font-display text-lg font-bold leading-tight text-white">
                      {site.advisor}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/50">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {site.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp (CTA prominente) */}
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl gold-gradient px-6 py-4 text-ink shadow-lg shadow-gold-700/25 transition hover:brightness-110"
              >
                <span className="flex items-center gap-3">
                  <IconWhatsapp className="h-6 w-6" />
                  <span className="font-display text-base font-bold">WhatsApp</span>
                </span>
                <IconArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              {/* Métodos de contacto */}
              <div className="flex flex-col gap-3">
                {methods.map(({ Icon, label, sub, href }) => {
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-400/30 bg-gold-500/10 text-gold-300 transition group-hover/m:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[0.7rem] uppercase tracking-wide text-white/40">
                          {sub}
                        </span>
                        <span className="text-sm font-medium text-white/80">{label}</span>
                      </span>
                    </>
                  )
                  const cls =
                    'group/m flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-soft/60 p-4 transition hover:border-gold-400/40 hover:bg-ink-soft'
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className={cls}>
                      {inner}
                    </div>
                  )
                })}
              </div>

              {/* Redes */}
              <div className="mt-auto flex items-center justify-between rounded-2xl border border-white/10 bg-ink-soft/60 px-5 py-4">
                <span className="text-sm font-medium text-white/60">{t.contact.followUs}</span>
                <div className="flex gap-2.5">
                  {socials.map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Red social"
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-ink text-white/60 transition hover:border-gold-400/50 hover:text-gold-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ============ FORMULARIO ============ */}
          <Reveal delay={150} className="lg:col-span-3">
            {sent ? (
              <div className="grid h-full place-items-center rounded-3xl border border-gold-400/30 bg-ink-soft p-12 text-center">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gold-gradient text-ink">
                    <IconCheck className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    {t.contact.successTitle}
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-white/60">{t.contact.success}</p>
                  <button
                    onClick={() => {
                      setForm(initialForm)
                      setSent(false)
                    }}
                    className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-gold-400/60"
                  >
                    {t.contact.send}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative h-full space-y-5 overflow-hidden rounded-3xl border border-white/10 bg-ink-soft/50 p-7 backdrop-blur-md sm:p-9"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
                      {t.contact.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.placeholderName}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
                      {t.contact.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.contact.placeholderEmail}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-white/80">
                    {t.contact.company}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={t.contact.placeholderCompany}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/80">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.placeholderMessage}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full gold-gradient px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-gold-700/20 transition hover:brightness-110"
                >
                  {t.contact.send}
                  <IconArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
