import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { IconArrowRight } from './Icons'

// Tarjeta de proyecto limpia y premium: visor 360 (anillo de marca girando +
// play) arriba, e información clara debajo. Insignia "VR · Oculus Quest".
export default function ProjectCard({ project, showDescription = false }) {
  const { lang, t } = useLanguage()

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-soft/70 shadow-xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/45 hover:shadow-2xl hover:shadow-gold-900/30">
      {/* Visor 360 sobre la portada real del proyecto */}
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}>
        {/* Portada (render) con leve zoom al hover */}
        {project.cover && (
          <img
            src={project.cover}
            alt={project.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {/* Oscurecido para legibilidad de botones e insignias */}
        <div className="absolute inset-0 bg-ink/35 transition-colors duration-300 group-hover:bg-ink/25" />

        {/* Anillo orbital de marca (gira) */}
        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-gold-300/40" />
          <span className="absolute inset-5 rounded-full border border-gold-300/20" />
        </div>

        {/* Botón reproducir */}
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-gold-300/60 bg-ink/45 backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:border-gold-300/90">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-gold-100">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>

        {/* Categoría (arriba-izq) */}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/55 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-white/80 backdrop-blur">
          {project.category[lang]}
        </span>
        {/* Insignia VR (arriba-der) */}
        <span className="absolute right-4 top-4 rounded-full border border-gold-300/40 bg-ink/55 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-200 backdrop-blur">
          VR · Oculus Quest
        </span>

        {/* Logo del proyecto (abajo-izq) */}
        {project.logo && (
          <img
            src={project.logo}
            alt={`${project.name} logo`}
            className="absolute bottom-3 left-4 h-10 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          />
        )}

        {/* Fundido inferior */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink-soft to-transparent" />
      </div>

      {/* Información */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold leading-tight text-white">{project.name}</h3>
          <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-white/50">
            {project.year}
          </span>
        </div>

        <p className="mt-1.5 text-sm font-medium gold-text">{project.client}</p>
        {project.contractedBy && (
          <p className="mt-0.5 text-xs text-white/45">
            {t.portfolio.contractedByLabel}: {project.contractedBy}
          </p>
        )}

        {showDescription && (
          <p className="mt-3 text-sm leading-relaxed text-white/55">{project.description[lang]}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to="/portafolio"
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-gold-300 transition-all hover:gap-2.5 hover:text-gold-200"
        >
          {t.portfolio.visit}
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
