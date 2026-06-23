// Definiciones SVG compartidas (clip-paths) para reutilizar en todo el sitio.
// Se renderiza una sola vez (en App) y se referencia por id desde cualquier
// componente: style={{ clipPath: 'url(#cardValley)' }}.
export default function SvgDefs() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
      <defs>
        {/* Cabecera "gotera": borde inferior que baja, va recto y vuelve a subir */}
        <clipPath id="cardValley" clipPathUnits="objectBoundingBox">
          <path d="M0 0 H1 V0.55 C0.81 0.55 0.73 1 0.59 1 H0.41 C0.27 1 0.19 0.55 0 0.55 Z" />
        </clipPath>

        {/* Barra curva tipo VR: banda en arco pronunciado (techo y piso curvos,
            sube fuerte en los extremos) para la perspectiva envolvente. */}
        <clipPath id="navCurve" clipPathUnits="objectBoundingBox">
          <path d="M0 0 Q0.5 0.3 1 0 V0.56 Q0.5 1.02 0 0.56 Z" />
        </clipPath>
      </defs>
    </svg>
  )
}
