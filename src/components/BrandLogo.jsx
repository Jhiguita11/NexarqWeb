// Marca NEXARQ 360: logo oficial en blanco (texto blanco + flecha dorada),
// ideal para fondos oscuros. Acepta className para el tamaño (alto).
export default function BrandLogo({ className = 'h-9 w-auto' }) {
  return (
    <img
      src="/logo-blanco.png"
      alt="NEXARQ 360"
      className={`select-none ${className}`}
      loading="eager"
      decoding="async"
      draggable="false"
    />
  )
}
