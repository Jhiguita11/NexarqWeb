import { useEffect, useRef, useState } from 'react'

// Anima su contenido como una carta que CAE desde arriba y se acomoda con un
// leve rebote al aterrizar. Se dispara cuando entra en el viewport (scroll).
// La rotación inicial alterna por índice para un efecto de "reparto" natural.
export default function FallIn({ index = 0, className = '', children }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const rot = index % 2 === 0 ? -5 : 5

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition:
          'transform 0.85s cubic-bezier(0.28, 1.45, 0.5, 1), opacity 0.5s ease-out',
        transitionDelay: shown ? `${index * 95}ms` : '0ms',
        transform: shown
          ? 'translateY(0) rotate(0deg) scale(1)'
          : `translateY(-110px) rotate(${rot}deg) scale(1.06)`,
        opacity: shown ? 1 : 0,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
