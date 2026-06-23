// Contenedor de "vidrio líquido": panel translúcido y esmerilado que va DETRÁS
// de un grupo de elementos (las cartas), para que parezca que están dentro de un
// contenedor de cristal. Deja ver el fondo 360 difuminado.
//
// El panel de cristal se recorta a su forma redondeada, pero el CONTENIDO no se
// recorta, para permitir que las cartas "caigan" desde arriba sin cortarse.
export default function LiquidGlass({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Panel de cristal (recortado a la forma) */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.05] shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.12] via-white/[0.02] to-transparent" />
        <span className="pointer-events-none absolute -left-1/5 -top-1/4 h-1/2 w-2/3 rounded-full bg-white/10 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-1/4 right-0 h-1/2 w-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <span className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
      </div>

      {/* Contenido (sin recorte, para permitir la caída de las cartas) */}
      <div className="relative">{children}</div>
    </div>
  )
}
