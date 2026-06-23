import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Fondo panorámico 360° con perspectiva real: el panorama equirectangular se
// proyecta sobre el interior de una esfera y la cámara (en el centro) rota
// lentamente en horizontal, como si miráramos alrededor desde el balcón.
// Va fijo detrás de todo el sitio, con una capa oscura para la legibilidad.
export default function PanoramaBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1100)

    // Esfera vista desde dentro (normales invertidas)
    const geometry = new THREE.SphereGeometry(500, 64, 40)
    geometry.scale(-1, 1, 1)

    const texture = new THREE.TextureLoader().load('/panorama.jpg')
    texture.colorSpace = THREE.SRGBColorSpace
    const material = new THREE.MeshBasicMaterial({ map: texture })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // La rotación del panorama es parte central de la experiencia de marca,
    // por eso se reproduce siempre (no se desactiva con prefers-reduced-motion).
    const SPEED = 0.9 // grados por segundo (rotación lenta y sutil)
    let lon = 0
    let raf = 0
    const clock = new THREE.Clock()

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const dt = clock.getDelta()
      lon = (lon + SPEED * dt) % 360

      const phi = THREE.MathUtils.degToRad(90) // latitud 0 → horizonte
      const theta = THREE.MathUtils.degToRad(lon)
      camera.lookAt(
        Math.sin(phi) * Math.cos(theta),
        Math.cos(phi),
        Math.sin(phi) * Math.sin(theta),
      )
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      texture.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
      aria-hidden="true"
    >
      {/* Difuminamos ligeramente el panorama para dar profundidad y que el
          contenido del frente resalte. La escala compensa el borde del blur. */}
      <canvas
        ref={canvasRef}
        className="block h-full w-full scale-105"
        style={{ filter: 'blur(4px)' }}
      />

      {/* Capas de oscurecimiento / tinte para legibilidad del contenido */}
      <div className="absolute inset-0 bg-ink/64" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/40 to-ink/95" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(212,175,55,0.10), transparent 60%)',
        }}
      />
    </div>
  )
}
