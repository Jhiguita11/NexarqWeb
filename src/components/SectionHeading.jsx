// Encabezado de sección con diseño llamativo (sin etiqueta):
//  - Título grande y contundente, con la última palabra en acento dorado.
//  - Subrayado dorado con glow.
// (Se acepta `eyebrow` por compatibilidad, pero ya no se muestra.)
export default function SectionHeading({ title, subtitle, center = false, light = false }) {
  // Resalta la última palabra del título en dorado para dar fuerza visual.
  const words = typeof title === 'string' ? title.trim().split(' ') : []
  const head = words.slice(0, -1).join(' ')
  const last = words.at(-1) ?? title

  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2
        className={`font-display text-[2.1rem] font-black leading-[1.05] tracking-tight sm:text-[3rem] ${
          light ? 'text-ink' : 'text-white'
        }`}
      >
        {head && <span>{head} </span>}
        <span
          className={
            light
              ? 'text-gold-600'
              : 'gold-text drop-shadow-[0_2px_18px_rgba(212,175,55,0.35)]'
          }
        >
          {last}
        </span>
      </h2>

      {/* Subrayado dorado con glow */}
      <span
        className={`mt-5 block h-1 w-20 rounded-full gold-gradient shadow-[0_0_16px_rgba(212,175,55,0.55)] ${
          center ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed ${light ? 'text-ink-700' : 'text-white/60'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
