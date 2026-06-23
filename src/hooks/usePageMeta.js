import { useEffect } from 'react'

// Actualiza el <title> y la meta description por página (SEO básico en una SPA).
export function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} · NEXARQ 360` : 'NEXARQ 360'
    document.title = fullTitle

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
