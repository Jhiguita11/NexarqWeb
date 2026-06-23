import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { site } from '../data/site'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import {
  IconCheck,
  IconCube,
  IconBrain,
  IconGlobe,
  IconLifebuoy,
  IconMapPin,
} from '../components/Icons'

// Clase base reutilizable para las teselas del bento.
const tile =
  'group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-soft/60 p-7 backdrop-blur-sm transition duration-300 hover:border-gold-400/40 hover:bg-ink-soft/80'

export default function About() {
  const { t } = useLanguage()
  usePageMeta(t.nav.about, t.about.lead)

  return (
    <>
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.lead} />

      {/* ===================== BENTO NOSOTROS ===================== */}
      <section className="container-px pt-8 pb-20">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[200px]">
            {/* A — Quiénes somos (grande) */}
            <article
              className={`${tile} sm:col-span-2 lg:col-span-4 lg:row-span-2 justify-between bg-gradient-to-br from-gold-700/15 via-ink-soft/70 to-ink`}
            >
              {/* Marca de agua 360 */}
              <span className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[10rem] font-black leading-none text-white/[0.03]">
                360
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.28em] gold-text">
                {t.about.eyebrow}
              </span>
              <div className="relative mt-auto">
                <p className="text-lg leading-relaxed text-white/80 sm:text-xl">{t.about.text1}</p>
                <div className="mt-5 flex items-center gap-2.5 text-sm text-white/55">
                  <IconMapPin className="h-4 w-4 text-gold-400" />
                  <span>
                    Software creado por la empresa{' '}
                    <span className="font-semibold gold-text">{site.creator.name}</span> ·{' '}
                    {site.creator.location}
                  </span>
                </div>
              </div>
            </article>

            {/* B — Stat proyectos */}
            <article className={`${tile} items-center justify-center text-center`}>
              <div className="font-display text-5xl font-black gold-text">2+</div>
              <div className="mt-2 text-sm text-white/55">{t.home.statsProjects}</div>
            </article>

            {/* C — Stat 360 */}
            <article
              className={`${tile} items-center justify-center text-center bg-gradient-to-br from-gold-700/20 to-ink`}
            >
              <div className="font-display text-5xl font-black gold-text drop-shadow-[0_2px_18px_rgba(212,175,55,0.4)]">
                360°
              </div>
              <div className="mt-2 text-sm text-white/55">{t.home.statsSupport}</div>
            </article>

            {/* D — Misión */}
            <article className={`${tile} sm:col-span-1 lg:col-span-2`}>
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl border border-gold-400/30 bg-gold-500/10 text-gold-300 transition group-hover:scale-110">
                <IconBrain className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {t.about.missionTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{t.about.missionText}</p>
            </article>

            {/* E — Visión */}
            <article className={`${tile} sm:col-span-1 lg:col-span-2`}>
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl border border-gold-400/30 bg-gold-500/10 text-gold-300 transition group-hover:scale-110">
                <IconGlobe className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {t.about.visionTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{t.about.visionText}</p>
            </article>

            {/* F — Valores */}
            <article className={`${tile} sm:col-span-2 lg:col-span-2`}>
              <span className="inline-grid h-11 w-11 place-items-center rounded-2xl border border-gold-400/30 bg-gold-500/10 text-gold-300 transition group-hover:scale-110">
                <IconLifebuoy className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white">
                {t.about.valuesTitle}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.about.values.map((v) => (
                  <li
                    key={v}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/20 bg-gold-500/5 px-3 py-1.5 text-xs font-medium text-white/75"
                  >
                    <IconCheck className="h-3.5 w-3.5 text-gold-400" />
                    {v}
                  </li>
                ))}
              </ul>
            </article>

            {/* G — Panel 360 / VR (grande) */}
            <article
              className={`${tile} sm:col-span-2 lg:col-span-3 lg:row-span-2 items-center justify-center bg-gradient-to-br from-gold-700/25 via-ink-soft to-ink`}
            >
              <IconCube className="absolute h-56 w-56 animate-spin-slow text-gold-300/20" />
              <div className="relative text-center">
                <p className="font-display text-7xl font-black gold-text drop-shadow-[0_2px_22px_rgba(212,175,55,0.45)]">
                  360°
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-ink/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-200 backdrop-blur">
                  <IconGlobe className="h-4 w-4" />
                  VR · Oculus Quest
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-6 text-center">
                <p className="text-sm font-semibold text-white">Constructora Meléndez</p>
                <p className="text-xs text-white/55">
                  Contratado por MIESGROUP 3D STUDIO · 2026
                </p>
              </div>
            </article>

            {/* H — Cliente destacado (texto) */}
            <article className={`${tile} sm:col-span-2 lg:col-span-3 lg:row-span-2 justify-center`}>
              <span className="text-xs font-bold uppercase tracking-[0.24em] gold-text">
                {t.footer.allianceNote}
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
                {t.about.allianceTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{t.about.allianceText}</p>
              <ul className="mt-5 space-y-2.5">
                {[t.services.items[2].title, t.services.items[1].title].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  )
}
