import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import FallIn from '../components/FallIn'
import LiquidGlass from '../components/LiquidGlass'
import { serviceIconSet } from '../components/ServiceIcons'

export default function Services() {
  const { t } = useLanguage()
  usePageMeta(t.nav.services, t.services.subtitle)

  return (
    <>
      <PageHeader eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

      {/* Grid de servicios dentro del contenedor de vidrio líquido */}
      <section className="container-px py-20">
        <LiquidGlass className="p-6 sm:p-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((item, i) => (
              <FallIn key={item.title} index={i}>
                <ServiceCard
                  Icon={serviceIconSet[i] ?? serviceIconSet[0]}
                  title={item.title}
                  desc={item.desc}
                  index={i}
                />
              </FallIn>
            ))}
          </div>
        </LiquidGlass>
      </section>

      {/* Proceso de trabajo */}
      <section className="border-y border-white/10 bg-ink-soft/50">
        <div className="container-px py-20">
          <Reveal>
            <div className="max-w-2xl">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] gold-text">
                {t.services.processTitle}
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {t.services.processSubtitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-white/10 bg-ink p-7">
                  <span className="font-display text-5xl font-extrabold text-gold-500/20">{p.step}</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
