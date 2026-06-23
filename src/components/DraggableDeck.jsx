import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

// Carrusel de tarjetas con arrastre por transform (GPU) y física real:
//  - Sigue al cursor/dedo 1:1 mientras arrastras.
//  - Inercia con fricción al soltar (fling).
//  - Rebote elástico en los extremos (rubber-band, estilo iOS).
// Funciona con mouse y táctil. Los hijos deben tener ancho fijo (shrink-0).
export default function DraggableDeck({ children, hint }) {
  const { t } = useLanguage()
  const viewport = useRef(null)
  const track = useRef(null)
  const s = useRef({
    offset: 0,
    min: 0,
    max: 0,
    dragging: false,
    pid: null,
    startX: 0,
    startOffset: 0,
    lastX: 0,
    lastT: 0,
    v: 0,
    raf: 0,
    moved: 0,
  })
  const [grabbing, setGrabbing] = useState(false)

  const apply = (o) => {
    if (track.current) track.current.style.transform = `translate3d(${o}px,0,0)`
  }

  // Mide los límites de desplazamiento y reposiciona dentro de rango.
  useEffect(() => {
    const measure = () => {
      const vp = viewport.current
      const tr = track.current
      if (!vp || !tr) return
      s.current.min = Math.min(0, vp.clientWidth - tr.scrollWidth)
      s.current.offset = Math.max(s.current.min, Math.min(0, s.current.offset))
      apply(s.current.offset)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (track.current) ro.observe(track.current)
    if (viewport.current) ro.observe(viewport.current)
    return () => ro.disconnect()
  }, [])

  const rubber = (o) => {
    const st = s.current
    if (o > st.max) return st.max + (o - st.max) * 0.4
    if (o < st.min) return st.min + (o - st.min) * 0.4
    return o
  }

  const onPointerDown = (e) => {
    const st = s.current
    cancelAnimationFrame(st.raf)
    st.dragging = true
    st.pid = e.pointerId
    st.startX = e.clientX
    st.startOffset = st.offset
    st.lastX = e.clientX
    st.lastT = performance.now()
    st.v = 0
    st.moved = 0
    e.currentTarget.setPointerCapture?.(e.pointerId)
    setGrabbing(true)
  }

  const onPointerMove = (e) => {
    const st = s.current
    if (!st.dragging) return
    const dx = e.clientX - st.startX
    st.moved = Math.max(st.moved, Math.abs(dx))
    st.offset = rubber(st.startOffset + dx)
    apply(st.offset)

    const now = performance.now()
    const dt = now - st.lastT
    if (dt > 0) st.v = (e.clientX - st.lastX) / dt
    st.lastX = e.clientX
    st.lastT = now
  }

  const settle = () => {
    const st = s.current
    let v = st.v * 16 // px por frame (16 ms)
    const friction = 0.94
    const tick = () => {
      if (st.offset > st.max) {
        // rebote elástico al borde superior (0)
        st.offset += (st.max - st.offset) * 0.2
        if (Math.abs(st.max - st.offset) < 0.5) {
          st.offset = st.max
          apply(st.offset)
          return
        }
      } else if (st.offset < st.min) {
        st.offset += (st.min - st.offset) * 0.2
        if (Math.abs(st.min - st.offset) < 0.5) {
          st.offset = st.min
          apply(st.offset)
          return
        }
      } else {
        v *= friction
        st.offset += v
        if (Math.abs(v) < 0.25) {
          apply(st.offset)
          return
        }
      }
      apply(st.offset)
      st.raf = requestAnimationFrame(tick)
    }
    st.raf = requestAnimationFrame(tick)
  }

  const endDrag = (e) => {
    const st = s.current
    if (!st.dragging) return
    st.dragging = false
    setGrabbing(false)
    if (st.pid != null) {
      e.currentTarget.releasePointerCapture?.(st.pid)
      st.pid = null
    }
    settle()
  }

  // Evita que un click después de arrastrar dispare enlaces dentro de las cards.
  const onClickCapture = (e) => {
    if (s.current.moved > 6) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <div className="relative">
      <div
        ref={viewport}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className={`overflow-hidden py-3 ${
          grabbing ? 'cursor-grabbing select-none' : 'cursor-grab'
        }`}
        style={{ touchAction: 'pan-y' }}
      >
        <div ref={track} className="flex w-max gap-6 will-change-transform">
          {children}
        </div>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
        <span aria-hidden="true">←</span>
        {hint ?? t.home.dragHint}
        <span aria-hidden="true">→</span>
      </p>
    </div>
  )
}
