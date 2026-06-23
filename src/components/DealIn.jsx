// Anima su contenido como una carta "repartida": entra rotando, desplazada
// y escalada hasta su posición. Se activa cuando `active` pasa a true.
export default function DealIn({ active, index = 0, className = '', children }) {
  return (
    <div
      style={{ transitionDelay: active ? `${index * 110}ms` : '0ms' }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        active
          ? 'translate-y-0 rotate-0 scale-100 opacity-100'
          : 'translate-y-20 -rotate-[7deg] scale-90 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
