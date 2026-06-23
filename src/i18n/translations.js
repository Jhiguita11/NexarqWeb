// Diccionarios de traducción ES / EN para NEXARQ 360.
// Estructura plana por secciones para mantenerlo legible y fácil de extender.

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      portfolio: 'Portafolio',
      about: 'Nosotros',
      contact: 'Contacto',
      cta: 'Cotizar proyecto',
    },
    intro: {
      tagline: 'Programación 360 · Potenciada con IA',
      enter: 'Entrar',
    },
    heroSlides: [
      {
        eyebrow: 'Programación 360 · Potenciada con IA',
        title: 'Construimos software 360',
        accent: 'impulsado por IA',
        subtitle:
          'Soluciones digitales a la medida para arquitectura, construcción e innovación.',
        cta: { label: 'Ver proyectos', to: '/portafolio' },
        cta2: { label: 'Hablemos', to: '/contacto' },
      },
      {
        eyebrow: 'Realidad Virtual',
        title: 'Recorridos 360°',
        accent: 'en Oculus Quest',
        subtitle: 'Experiencias inmersivas que tus clientes pueden recorrer en gafas VR.',
        cta: { label: 'Ver proyectos', to: '/portafolio' },
      },
      {
        eyebrow: 'Software a la medida',
        title: 'Plataformas digitales',
        accent: 'con inteligencia artificial',
        subtitle: 'Construimos tu producto digital de extremo a extremo, listo para escalar.',
        cta: { label: 'Nuestros servicios', to: '/servicios' },
      },
      {
        eyebrow: 'Hablemos',
        title: 'Cotiza tu proyecto',
        accent: 'hoy mismo',
        subtitle: 'Asesoría directa con Jeremy Higuita · +57 301 361 5120.',
        cta: { label: 'Contáctanos', to: '/contacto' },
      },
    ],
    home: {
      dragHint: 'Arrastra para explorar',
      heroEyebrow: 'Programación 360 · Inteligencia Artificial',
      heroTitle: 'Construimos software 360 impulsado por inteligencia artificial',
      heroSubtitle:
        'En NEXARQ 360 desarrollamos soluciones digitales a la medida para el sector de la arquitectura, la construcción y la innovación, combinando ingeniería de software e IA.',
      heroCtaPrimary: 'Ver proyectos',
      heroCtaSecondary: 'Hablemos',
      statsProjects: 'Proyectos entregados',
      statsClients: 'Clientes',
      statsAi: 'Impulsado por IA',
      statsSupport: 'Acompañamiento',
      servicesTitle: 'La mejor baraja para tu recorrido 360°',
      servicesSubtitle: 'Reparte y explora nuestras soluciones, carta por carta.',
      servicesCta: 'Conoce todos los servicios',
      projectsTitle: 'Proyectos destacados',
      projectsSubtitle: 'Resultados reales para nuestros clientes.',
      projectsCta: 'Ver portafolio completo',
      clientEyebrow: 'Caso de éxito',
      allianceTitle: 'MIESGROUP 3D STUDIO confió en NEXARQ',
      allianceText:
        'MIESGROUP 3D STUDIO contrató a NEXARQ 360 para desarrollar las experiencias digitales e inmersivas de los proyectos Valle Alto y Reserva De Mirriñao (Constructora Meléndez): recorridos 360° de alta calidad, visualizables incluso en gafas de realidad virtual Oculus Quest.',
      ctaBannerTitle: '¿Tienes un proyecto en mente?',
      ctaBannerText:
        'Convirtamos tu idea en una solución digital impulsada por inteligencia artificial.',
      ctaBannerButton: 'Cotizar mi proyecto',
    },
    services: {
      eyebrow: 'Nuestros servicios',
      title: 'Programación 360 de extremo a extremo',
      subtitle:
        'Diseñamos, desarrollamos y desplegamos software a la medida, integrando inteligencia artificial en cada etapa.',
      items: [
        {
          title: 'Desarrollo de software a la medida',
          desc: 'Aplicaciones web y plataformas construidas con tecnología moderna, escalables y pensadas para tu negocio.',
        },
        {
          title: 'Soluciones con Inteligencia Artificial',
          desc: 'Integramos modelos de IA, automatización y asistentes inteligentes para optimizar tus procesos.',
        },
        {
          title: 'Visualización 3D y experiencias inmersivas',
          desc: 'Recorridos virtuales, renders y experiencias 360° de alta calidad, visualizables en gafas de realidad virtual como Oculus Quest.',
        },
        {
          title: 'Plataformas para constructoras e inmobiliarias',
          desc: 'Portales de proyectos, catálogos digitales y herramientas de ventas para el sector de la construcción.',
        },
        {
          title: 'Diseño UX/UI',
          desc: 'Interfaces atractivas, intuitivas y centradas en el usuario que reflejan la calidad de tu marca.',
        },
        {
          title: 'Soporte y evolución continua',
          desc: 'Mantenimiento, mejoras y acompañamiento técnico para que tu producto siga creciendo.',
        },
      ],
      processTitle: 'Cómo trabajamos',
      processSubtitle: 'Un proceso claro, colaborativo y orientado a resultados.',
      process: [
        { step: '01', title: 'Descubrimiento', desc: 'Entendemos tu negocio, objetivos y necesidades.' },
        { step: '02', title: 'Estrategia y diseño', desc: 'Definimos la solución, la arquitectura y la experiencia.' },
        { step: '03', title: 'Desarrollo con IA', desc: 'Construimos con tecnología moderna e inteligencia artificial.' },
        { step: '04', title: 'Entrega y evolución', desc: 'Desplegamos, medimos y mejoramos de forma continua.' },
      ],
    },
    portfolio: {
      eyebrow: 'Portafolio',
      title: 'Proyectos que hablan por nosotros',
      subtitle:
        'Recorridos 360° desarrollados para MIESGROUP 3D STUDIO en proyectos de la Constructora Meléndez (2026), visualizables en gafas VR Oculus Quest.',
      visit: 'Ver proyecto',
      clientLabel: 'Constructora',
      yearLabel: 'Año',
      categoryLabel: 'Categoría',
      contractedByLabel: 'Contratado por',
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Somos NEXARQ 360',
      lead: 'Conectamos tecnología, inteligencia artificial y arquitectura.',
      text1:
        'NEXARQ 360 es un software de programación 360 impulsado por inteligencia artificial, creado por la empresa NIPHOS. Con él acompañamos a constructoras, desarrolladores y empresas que buscan transformar sus ideas en productos digitales de alto impacto.',
      text2:
        'Nuestra esencia combina la innovación tecnológica con un enfoque integral: cubrimos todo el ciclo de un proyecto digital, desde la estrategia y el diseño hasta el desarrollo, el despliegue y la evolución continua.',
      missionTitle: 'Misión',
      missionText:
        'Impulsar la transformación digital de nuestros clientes mediante software inteligente, confiable y a la medida.',
      visionTitle: 'Visión',
      visionText:
        'Ser referentes en soluciones de programación 360 con inteligencia artificial en el sector de la construcción y la innovación.',
      valuesTitle: 'Valores',
      values: ['Innovación', 'Calidad', 'Compromiso', 'Transparencia'],
      allianceTitle: 'MIESGROUP 3D STUDIO, nuestro cliente',
      allianceText:
        'MIESGROUP 3D STUDIO contrató a NEXARQ 360 para los proyectos de la Constructora Meléndez (Valle Alto y Reserva De Mirriñao), donde entregamos recorridos 360° de alta calidad, visualizables en gafas de realidad virtual como Oculus Quest.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hagamos realidad tu proyecto',
      subtitle: 'Cuéntanos tu idea y te responderemos lo antes posible.',
      name: 'Nombre',
      email: 'Correo electrónico',
      company: 'Empresa (opcional)',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      successTitle: '¡Gracias!',
      success: 'Tu mensaje fue preparado. Se abrirá tu correo para enviarlo.',
      directTitle: 'Contacto directo',
      advisorLabel: 'Asesor',
      followUs: 'Síguenos',
      placeholderName: 'Tu nombre',
      placeholderEmail: 'tucorreo@ejemplo.com',
      placeholderCompany: 'Nombre de tu empresa',
      placeholderMessage: 'Cuéntanos sobre tu proyecto...',
    },
    footer: {
      tagline: 'Programación 360 impulsada por inteligencia artificial.',
      navTitle: 'Navegación',
      contactTitle: 'Contacto',
      allianceNote: 'Cliente destacado: MIESGROUP 3D STUDIO',
      rights: 'Todos los derechos reservados.',
      createdBy: 'Creado por',
    },
    notFound: {
      title: 'Página no encontrada',
      text: 'La página que buscas no existe o fue movida.',
      back: 'Volver al inicio',
    },
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      cta: 'Get a quote',
    },
    intro: {
      tagline: '360 Programming · Powered by AI',
      enter: 'Enter',
    },
    heroSlides: [
      {
        eyebrow: '360 Programming · Powered by AI',
        title: 'We build 360 software',
        accent: 'powered by AI',
        subtitle: 'Tailor-made digital solutions for architecture, construction and innovation.',
        cta: { label: 'View projects', to: '/portafolio' },
        cta2: { label: "Let's talk", to: '/contacto' },
      },
      {
        eyebrow: 'Virtual Reality',
        title: '360° tours',
        accent: 'on Oculus Quest',
        subtitle: 'Immersive experiences your clients can walk through in VR headsets.',
        cta: { label: 'View projects', to: '/portafolio' },
      },
      {
        eyebrow: 'Custom software',
        title: 'Digital platforms',
        accent: 'with artificial intelligence',
        subtitle: 'We build your digital product end to end, ready to scale.',
        cta: { label: 'Our services', to: '/servicios' },
      },
      {
        eyebrow: "Let's talk",
        title: 'Get a quote',
        accent: 'today',
        subtitle: 'Direct advice with Jeremy Higuita · +57 301 361 5120.',
        cta: { label: 'Contact us', to: '/contacto' },
      },
    ],
    home: {
      dragHint: 'Drag to explore',
      heroEyebrow: '360 Programming · Artificial Intelligence',
      heroTitle: 'We build 360 software powered by artificial intelligence',
      heroSubtitle:
        'At NEXARQ 360 we develop tailor-made digital solutions for architecture, construction and innovation, blending software engineering with AI.',
      heroCtaPrimary: 'View projects',
      heroCtaSecondary: "Let's talk",
      statsProjects: 'Delivered projects',
      statsClients: 'Clients',
      statsAi: 'AI powered',
      statsSupport: 'Ongoing support',
      servicesTitle: 'The best deck for your 360° journey',
      servicesSubtitle: 'Deal and explore our solutions, card by card.',
      servicesCta: 'See all services',
      projectsTitle: 'Featured projects',
      projectsSubtitle: 'Real results for our clients.',
      projectsCta: 'View full portfolio',
      clientEyebrow: 'Success story',
      allianceTitle: 'MIESGROUP 3D STUDIO trusted NEXARQ',
      allianceText:
        'MIESGROUP 3D STUDIO hired NEXARQ 360 to build the digital and immersive experiences for the Valle Alto and Reserva De Mirriñao projects (Constructora Meléndez): high-quality 360° tours, viewable even on Oculus Quest VR headsets.',
      ctaBannerTitle: 'Have a project in mind?',
      ctaBannerText: "Let's turn your idea into a digital solution powered by artificial intelligence.",
      ctaBannerButton: 'Get a quote',
    },
    services: {
      eyebrow: 'Our services',
      title: 'End-to-end 360 programming',
      subtitle:
        'We design, develop and deploy custom software, integrating artificial intelligence at every stage.',
      items: [
        {
          title: 'Custom software development',
          desc: 'Web applications and platforms built with modern technology, scalable and tailored to your business.',
        },
        {
          title: 'Artificial Intelligence solutions',
          desc: 'We integrate AI models, automation and smart assistants to optimize your processes.',
        },
        {
          title: '3D visualization & immersive experiences',
          desc: 'High-quality virtual tours, renders and 360° experiences, viewable on VR headsets like Oculus Quest.',
        },
        {
          title: 'Platforms for builders & real estate',
          desc: 'Project portals, digital catalogs and sales tools for the construction sector.',
        },
        {
          title: 'UX/UI design',
          desc: 'Attractive, intuitive, user-centered interfaces that reflect the quality of your brand.',
        },
        {
          title: 'Support & continuous evolution',
          desc: 'Maintenance, improvements and technical support so your product keeps growing.',
        },
      ],
      processTitle: 'How we work',
      processSubtitle: 'A clear, collaborative, results-driven process.',
      process: [
        { step: '01', title: 'Discovery', desc: 'We understand your business, goals and needs.' },
        { step: '02', title: 'Strategy & design', desc: 'We define the solution, architecture and experience.' },
        { step: '03', title: 'AI development', desc: 'We build with modern technology and artificial intelligence.' },
        { step: '04', title: 'Delivery & evolution', desc: 'We deploy, measure and continuously improve.' },
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Projects that speak for us',
      subtitle:
        '360° tours built for MIESGROUP 3D STUDIO on Constructora Meléndez projects (2026), viewable on Oculus Quest VR headsets.',
      visit: 'View project',
      clientLabel: 'Developer',
      yearLabel: 'Year',
      categoryLabel: 'Category',
      contractedByLabel: 'Commissioned by',
    },
    about: {
      eyebrow: 'About us',
      title: 'We are NEXARQ 360',
      lead: 'We connect technology, artificial intelligence and architecture.',
      text1:
        'NEXARQ 360 is a 360 programming software powered by artificial intelligence, created by the company NIPHOS. With it we support builders, developers and companies that want to turn their ideas into high-impact digital products.',
      text2:
        'Our essence blends technological innovation with a holistic approach: we cover the entire lifecycle of a digital project, from strategy and design to development, deployment and continuous evolution.',
      missionTitle: 'Mission',
      missionText:
        'To drive our clients’ digital transformation through intelligent, reliable, tailor-made software.',
      visionTitle: 'Vision',
      visionText:
        'To be a benchmark in 360 programming solutions with artificial intelligence for the construction and innovation sectors.',
      valuesTitle: 'Values',
      values: ['Innovation', 'Quality', 'Commitment', 'Transparency'],
      allianceTitle: 'MIESGROUP 3D STUDIO, our client',
      allianceText:
        'MIESGROUP 3D STUDIO hired NEXARQ 360 for the Constructora Meléndez projects (Valle Alto and Reserva De Mirriñao), where we delivered high-quality 360° tours, viewable on VR headsets like Oculus Quest.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's make your project happen",
      subtitle: 'Tell us your idea and we will get back to you as soon as possible.',
      name: 'Name',
      email: 'Email',
      company: 'Company (optional)',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      successTitle: 'Thank you!',
      success: 'Your message is ready. Your email client will open to send it.',
      directTitle: 'Direct contact',
      advisorLabel: 'Advisor',
      followUs: 'Follow us',
      placeholderName: 'Your name',
      placeholderEmail: 'you@example.com',
      placeholderCompany: 'Your company name',
      placeholderMessage: 'Tell us about your project...',
    },
    footer: {
      tagline: '360 programming powered by artificial intelligence.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      allianceNote: 'Featured client: MIESGROUP 3D STUDIO',
      rights: 'All rights reserved.',
      createdBy: 'Created by',
    },
    notFound: {
      title: 'Page not found',
      text: 'The page you are looking for does not exist or was moved.',
      back: 'Back to home',
    },
  },
}
