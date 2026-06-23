# NEXARQ 360 — Sitio web

Sitio web oficial de **NEXARQ 360**: soluciones de programación 360 impulsadas por
inteligencia artificial para los sectores de arquitectura, construcción e innovación.

Trabajamos junto a **MIESGROUP 3D STUDIO** en proyectos de visualización 3D.

## 🛠️ Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) (multi-página)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Internacionalización **ES / EN** propia (sin dependencias extra)
- Gestor de paquetes: **bun**

## 🚀 Comandos

```bash
bun install      # instalar dependencias
bun run dev      # servidor de desarrollo (http://localhost:5173)
bun run build    # build de producción -> /dist
bun run preview  # previsualizar el build
```

## 📁 Estructura

```
src/
├── components/      # Componentes reutilizables (Navbar, Footer, tarjetas, iconos…)
├── pages/           # Páginas: Home, Services, Portfolio, About, Contact, NotFound
├── i18n/            # Contexto de idioma + diccionarios ES/EN (translations.js)
├── data/            # Datos editables: projects.js (portafolio) y site.js (contacto)
├── hooks/           # usePageMeta (título/meta por página)
├── App.jsx          # Definición de rutas
├── main.jsx         # Punto de entrada
└── index.css        # Sistema de diseño (paleta negro/dorado/blanco)
```

## ✏️ Cómo editar el contenido

- **Textos del sitio (ES/EN):** `src/i18n/translations.js`
- **Proyectos del portafolio:** `src/data/projects.js`
- **Datos de contacto y redes sociales:** `src/data/site.js`
  > ⚠️ Reemplaza los valores de ejemplo (correo, teléfono, WhatsApp, redes) por los reales.
- **Logos:** `public/logo.png` y `public/logo-transparente.png`

### Añadir imágenes reales a los proyectos

Las tarjetas de proyecto usan un degradado de marca como placeholder. Para usar
renders reales, agrega las imágenes a `public/` y referencia su ruta en
`src/data/projects.js`, luego renderízalas en `ProjectCard.jsx` / `Portfolio.jsx`.

## 🎨 Identidad de marca

- **Negro** `#0a0a0b` · **Dorado** `#d4af37` · **Blanco**
- Tipografías: Poppins (títulos) e Inter (texto)

## 🌐 Despliegue

El proyecto es una SPA. Para hosting estático (Netlify, Vercel, etc.) el archivo
`public/_redirects` ya redirige todas las rutas a `index.html`. Sube el contenido
de la carpeta `/dist` generada con `bun run build`.
