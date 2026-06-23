// Tarjeta de servicio con estética de NAIPE + contenedor "liquid glass".
// Cada servicio es una carta distinta (rango + palo). El icono va enmarcado por
// el SÍMBOLO DEL PALO (grande), arriba; el título y el texto van centrados debajo;
// y el fondo es un vidrio líquido translúcido (deja ver el panorama 360).

// --- Palos (relleno u outline) ---
function Suit({ type, className, outline = false }) {
  const p = {
    className,
    viewBox: '0 0 24 24',
    ...(outline
      ? { fill: 'none', stroke: 'currentColor', strokeWidth: 1.1, strokeLinejoin: 'round' }
      : { fill: 'currentColor' }),
  }
  if (type === 'heart')
    return (
      <svg {...p}>
        <path d="M12 20.7S3.3 15 3.3 8.9C3.3 5.9 5.6 4 8 4c1.9 0 3.2 1.1 4 2.2C12.8 5.1 14.1 4 16 4c2.4 0 4.7 1.9 4.7 4.9 0 6.1-8.7 11.8-8.7 11.8Z" />
      </svg>
    )
  if (type === 'diamond')
    return (
      <svg {...p}>
        <path d="M12 2.3 20.2 12 12 21.7 3.8 12Z" />
      </svg>
    )
  if (type === 'spade')
    return (
      <svg {...p}>
        <path d="M12 3.2S3.4 9 3.4 14.3c0 2.6 2 4.2 4.2 3.6.9-.2 1.5-.7 1.9-1.2-.1 1.7-.8 3.2-2.1 4.3h9.2c-1.3-1.1-2-2.6-2.1-4.3.4.5 1 1 1.9 1.2 2.2.6 4.2-1 4.2-3.6C20.6 9 12 3.2 12 3.2Z" />
      </svg>
    )
  // club
  return (
    <svg {...p}>
      <circle cx="12" cy="7.4" r="3.3" />
      <circle cx="7.7" cy="13.2" r="3.3" />
      <circle cx="16.3" cy="13.2" r="3.3" />
      <path d="M10.3 12.5h3.4c0 3.8.9 6.4 2.1 8H8.2c1.2-1.6 2.1-4.2 2.1-8Z" />
    </svg>
  )
}

// --- Corona (figuras) ---
function Crown({ className }) {
  return (
    <svg viewBox="0 0 32 22" className={className} fill="currentColor">
      <path d="M2.5 20 4.5 7l5.5 5L16 3l6 9 5.5-5 2 13z" />
      <rect x="3" y="19.2" width="26" height="2.6" rx="1.2" />
    </svg>
  )
}

// Identidad de naipe por servicio
const CARDS = [
  { rank: 'K', suit: 'spade', court: true }, // Software
  { rank: 'A', suit: 'diamond', court: false }, // IA
  { rank: 'Q', suit: 'heart', court: true }, // Visualización 3D
  { rank: 'J', suit: 'club', court: true }, // Inmobiliaria
  { rank: '3', suit: 'diamond', court: false }, // UX/UI
  { rank: '5', suit: 'spade', court: false }, // Soporte
]

function CornerIndex({ rank, suit, className = '' }) {
  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <span className="font-display text-lg font-extrabold gold-text">{rank}</span>
      <Suit type={suit} className="mt-0.5 h-3.5 w-3.5 text-gold-300" />
    </div>
  )
}

export default function ServiceCard({ Icon, title, desc, index = 0 }) {
  const card = CARDS[index % CARDS.length]

  return (
    <div className="group relative flex h-full min-h-[27rem] w-full flex-col overflow-hidden rounded-2xl border border-gold-400/30 bg-gradient-to-b from-ink-soft to-ink/92 shadow-xl shadow-black/50 transition-all duration-300 ease-out hover:-translate-y-2 hover:-rotate-1 hover:border-gold-400/70 hover:shadow-2xl hover:shadow-gold-900/50">
      {/* Velo dorado al hover */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-gold-500/5 opacity-0 transition duration-300 group-hover:opacity-100" />
      {/* Marco dorado interior (naipe) */}
      <span className="pointer-events-none absolute inset-3 rounded-2xl border border-gold-400/20" />

      {/* Esquinas: rango + palo (inferior derecha rotada 180°) */}
      <CornerIndex rank={card.rank} suit={card.suit} className="absolute left-3.5 top-3" />
      <CornerIndex
        rank={card.rank}
        suit={card.suit}
        className="absolute bottom-3 right-3.5 rotate-180"
      />

      {/* Contenido */}
      <div className="relative flex flex-1 flex-col items-center px-5 pb-6 pt-7 text-center">
        {/* Corona para figuras */}
        {card.court && <Crown className="mb-1 h-5 w-auto text-gold-300" />}

        {/* Emblema: el símbolo del palo como marco, con el icono dentro */}
        <div className="relative grid shrink-0 place-items-center">
          <span className="absolute h-20 w-20 rounded-full bg-gold-500/10 blur-xl" />
          <Suit type={card.suit} className="h-28 w-28 text-gold-400/10" />
          <Suit
            type={card.suit}
            outline
            className="absolute h-28 w-28 text-gold-400/70 drop-shadow-[0_0_16px_rgba(212,175,55,0.35)] transition-transform duration-500 group-hover:scale-105"
          />
          <Icon className="absolute h-10 w-10 text-gold-50" />
        </div>

        {/* Título + texto centrados en el espacio restante */}
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="font-display text-xl font-black leading-[1.1] gold-text drop-shadow-[0_1px_8px_rgba(212,175,55,0.25)]">
            {title}
          </h3>
          <p className="mt-3 text-[0.78rem] leading-relaxed text-white/60">{desc}</p>
        </div>
      </div>
    </div>
  )
}
