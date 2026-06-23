// Iconos personalizados (duotono) para las tarjetas de servicios.
// Estilo propio: trazo en `currentColor` (dorado claro) + acentos rellenos en
// dorado, para diferenciarse de los íconos de librería genéricos.
const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 28 28',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const GOLD = '#e7c45a'

// 1 · Desarrollo de software a la medida (ventana + código)
export const SvcSoftware = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="22" height="18" rx="2.6" />
    <path d="M3 9.5H25" />
    <circle cx="6" cy="7.2" r="0.9" fill={GOLD} stroke="none" />
    <circle cx="9" cy="7.2" r="0.9" fill="currentColor" stroke="none" opacity="0.5" />
    <path d="M11.5 13.5 8.5 16.5 11.5 19.5" />
    <path d="M16.5 13.5 19.5 16.5 16.5 19.5" />
    <path d="M14.8 12.4 13.2 20.6" stroke={GOLD} />
  </svg>
)

// 2 · Soluciones con IA (chip / procesador con núcleo dorado)
export const SvcAI = (p) => (
  <svg {...base} {...p}>
    <rect x="7.5" y="7.5" width="13" height="13" rx="2.4" />
    <rect x="11" y="11" width="6" height="6" rx="1.4" fill={GOLD} stroke="none" />
    <path d="M11 7.5V4.5M17 7.5V4.5M11 20.5V23.5M17 20.5V23.5M7.5 11H4.5M7.5 17H4.5M20.5 11H23.5M20.5 17H23.5" />
  </svg>
)

// 3 · Visualización 3D y experiencias inmersivas (visor VR con lentes dorados)
export const SvcImmersive = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="9" width="23" height="11" rx="4.2" />
    <path d="M11.2 19.6c1.8-2 3.8-2 5.6 0" />
    <circle cx="9" cy="14.2" r="2.4" fill={GOLD} stroke="none" opacity="0.9" />
    <circle cx="19" cy="14.2" r="2.4" fill={GOLD} stroke="none" opacity="0.9" />
    <path d="M2.6 12 1 12.6M25.4 12 27 12.6" />
  </svg>
)

// 4 · Plataformas para constructoras e inmobiliarias (edificios + ventana encendida)
export const SvcRealEstate = (p) => (
  <svg {...base} {...p}>
    <path d="M4 24V8.5l6.5-3V24" />
    <path d="M10.5 24V12l9 3.2V24" />
    <path d="M2.5 24h23" />
    <path d="M6.5 10.5v0M6.5 14v0M13.5 16v0M16.5 16.5v0" />
    <rect x="12.7" y="18.5" width="2.4" height="3" rx="0.4" fill={GOLD} stroke="none" />
  </svg>
)

// 5 · Diseño UX/UI (lienzo + cursor dorado)
export const SvcDesign = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="4.5" width="20" height="15" rx="2.4" />
    <path d="M4 9h20" />
    <path d="M11 19.5v3.5M17 19.5v3.5M9.5 23h9" />
    <path d="M11 11.5 18.5 14.7l-3 1.1-1.1 3z" fill={GOLD} stroke="none" />
  </svg>
)

// 6 · Soporte y evolución continua (ciclo + check dorado)
export const SvcSupport = (p) => (
  <svg {...base} {...p}>
    <path d="M22.5 14a8.5 8.5 0 1 1-2.7-6.2" />
    <path d="M21 4.2v4.2h-4.2" />
    <path d="M10.4 14.2 13 16.8l5-5.2" stroke={GOLD} />
  </svg>
)

export const serviceIconSet = [
  SvcSoftware,
  SvcAI,
  SvcImmersive,
  SvcRealEstate,
  SvcDesign,
  SvcSupport,
]
