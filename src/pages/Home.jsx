import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import CtaBanner from '../components/CtaBanner'
import HeroCarousel from '../components/HeroCarousel'
import Reveal from '../components/Reveal'
import FallIn from '../components/FallIn'
import DraggableDeck from '../components/DraggableDeck'
import LiquidGlass from '../components/LiquidGlass'
import { IconCube, IconArrowRight, IconCheck } from '../components/Icons'
import { serviceIconSet } from '../components/ServiceIcons'

export default function Home() {
  const { t } = useLanguage()
  usePageMeta(null, t.home.heroSubtitle)

  const stats = [
    { value: '2+', label: t.home.statsProjects },
    { value: '1', label: t.home.statsClients },
    { value: 'IA', label: t.home.statsAi },
    { value: '360°', label: t.home.statsSupport },
  ]

  const services = t.services.items.map((item, i) => ({
    Icon: serviceIconSet[i] ?? serviceIconSet[0],
    ...item,
  }))

  return (
    <>
      {/* ===================== HERO (panel publicitario / carrusel) ===================== */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold-600/10 blur-[120px]" />
        </div>

        <div className="container-px">
          <HeroCarousel />

          {/* Stats */}
          <Reveal>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-ink-soft/60 p-5 text-center backdrop-blur-sm"
                >
                  <div className="font-display text-3xl font-extrabold gold-text">{s.value}</div>
                  <div className="mt-1 text-xs text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICIOS (deck arrastrable) ===================== */}
      <section className="container-px py-16">
        <Reveal>
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.home.servicesTitle}
            subtitle={t.home.servicesSubtitle}
            center
          />
        </Reveal>

        <LiquidGlass className="mt-12 p-5 sm:p-7">
          <DraggableDeck>
            {services.map((s, i) => (
              <FallIn key={s.title} index={i} className="w-[280px] shrink-0 sm:w-[320px]">
                <ServiceCard {...s} index={i} />
              </FallIn>
            ))}
          </DraggableDeck>
        </LiquidGlass>

        <div className="mt-8 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition hover:gap-3 hover:text-gold-200"
          >
            {t.home.servicesCta}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ===================== PROYECTOS (deck arrastrable) ===================== */}
      <section className="container-px py-16">
        <Reveal>
          <SectionHeading
            eyebrow={t.portfolio.eyebrow}
            title={t.home.projectsTitle}
            subtitle={t.home.projectsSubtitle}
            center
          />
        </Reveal>

        <LiquidGlass className="mt-12 p-5 sm:p-7">
          <DraggableDeck>
            {projects.map((p, i) => (
              <FallIn key={p.id} index={i} className="w-[300px] shrink-0 sm:w-[360px]">
                <ProjectCard project={p} />
              </FallIn>
            ))}
          </DraggableDeck>
        </LiquidGlass>

        <div className="mt-8 text-center">
          <Link
            to="/portafolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition hover:gap-3 hover:text-gold-200"
          >
            {t.home.projectsCta}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ===================== ALIANZA ===================== */}
      <section className="border-y border-white/10 bg-ink-soft/50">
        <div className="container-px grid items-center gap-10 py-20 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow={t.home.clientEyebrow} title={t.home.allianceTitle} />
            <p className="mt-5 text-white/60">{t.home.allianceText}</p>
            <ul className="mt-6 space-y-3">
              {[t.services.items[2].title, t.services.items[3].title, t.services.items[1].title].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-gold-700/20 via-ink-soft to-ink">
              <div className="absolute inset-0 grid place-items-center">
                <IconCube className="h-40 w-40 animate-spin-slow text-gold-300/40" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink to-transparent p-8">
                <p className="font-display text-2xl font-bold text-white">360°</p>
                <p className="text-sm text-white/60">{t.home.heroEyebrow}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CtaBanner />
    </>
  )
}
