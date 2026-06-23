import { useLanguage } from '../i18n/LanguageContext'

// Banner publicitario / informativo en la cima del sitio.
// Se desliza solo (marquee) de forma continua. Edita los mensajes en
// translations.js → `banner` (array, bilingüe). Pausa al pasar el cursor.
export default function PromoBanner() {
  const { t } = useLanguage()
  const items = t.banner ?? []
  if (items.length === 0) return null

  // Duplicamos la secuencia para un bucle sin costuras.
  const sequence = [...items, ...items]

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-9 overflow-hidden border-b border-gold-400/25 bg-ink-soft/95 backdrop-blur-md">
      {/* Línea dorada superior */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="marquee-pause flex h-full items-center">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {sequence.map((msg, i) => (
            <span
              key={i}
              className="flex items-center text-xs font-medium tracking-wide text-white/80"
              aria-hidden={i >= items.length ? 'true' : undefined}
            >
              <span className="mx-6 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400/80" />
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Difuminado en los bordes */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ink-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ink-soft to-transparent" />
    </div>
  )
}
