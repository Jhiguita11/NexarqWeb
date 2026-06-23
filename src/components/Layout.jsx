import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import LanguageSwitch from './LanguageSwitch'
import { site } from '../data/site'
import { IconWhatsapp } from './Icons'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Switch de idioma flotante */}
      <LanguageSwitch />

      {/* Botón flotante de WhatsApp */}
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition hover:scale-105"
      >
        <IconWhatsapp className="h-7 w-7" />
      </a>
    </div>
  )
}
