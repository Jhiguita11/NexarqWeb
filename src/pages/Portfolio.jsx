import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { projects } from '../data/projects'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'

export default function Portfolio() {
  const { t } = useLanguage()
  usePageMeta(t.nav.portfolio, t.portfolio.subtitle)

  return (
    <>
      <PageHeader
        eyebrow={t.portfolio.eyebrow}
        title={t.portfolio.title}
        subtitle={t.portfolio.subtitle}
      />

      <section className="container-px py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 120}>
              <ProjectCard project={p} showDescription />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
