import SectionHeading from './SectionHeading'

// Cabecera estándar para páginas internas, con fondo decorativo.
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-16">
      {/* Resplandor decorativo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-600/10 blur-3xl" />
      </div>
      <div className="container-px animate-fade-up">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </div>
    </section>
  )
}
