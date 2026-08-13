/**
 * CONFIGURACIÓN CENTRAL DEL SITIO - BREWSTER PERÚ
 * Configuración concisa, enfocada en producto y experiencia.
 */
export const siteConfig = {
  brand: {
    name: "BREWSTER",
    legalName: "Brewster Perú",
    tagline: "El secreto de un buen café.",
    description: "Molinillos manuales de alta precisión diseñados para café de especialidad.",
    instagram: "https://instagram.com/brewster.peru",
    instagramHandle: "@brewster.peru",
    whatsappNumber: "51987654321",
    whatsappMessage: "¡Hola Brewster Perú! Deseo consultar sobre los molinillos Brewster B6.",
    email: "contacto@brewster.pe",
    logoUrl: "/images/logo-brewster.jpg",
  },

  enabledSections: [
    "header",
    "hero",
    "catalog",
    "brewing-guide",
    "about",
    "trust-faq",
    "footer",
    "floating-contact",
  ],

  hero: {
    eyebrow: "LÍNEA PROFESIONAL · B6",
    title: "Molienda de Precisión para Café de Especialidad",
    description:
      "Precisión micrométrica, materiales de alta durabilidad y control total sobre tu molienda.",
    primaryAction: { label: "Ver molinillos", href: "#catalog" },
    heroImage: "/images/trio-grinders-wood.jpg",
  },

  catalog: {
    eyebrow: "COLECCIÓN OFICIAL",
    title: "Molinillos Brewster B6",
    description: "Diseñados para extraer el verdadero potencial de cada grano.",
  },

  brewingGuide: {
    eyebrow: "CALIBRACIÓN",
    title: "Guía de Molienda",
    description: "Ajuste de clics sugerido según tu método de preparación.",
    methods: [
      {
        name: "Espresso & Moka",
        clicks: "10 – 14 clics",
        type: "Fina",
      },
      {
        name: "Aeropress & V60",
        clicks: "15 – 22 clics",
        type: "Media Fina",
      },
      {
        name: "Chemex & Kalita",
        clicks: "22 – 26 clics",
        type: "Media",
      },
      {
        name: "Prensa Francesa & Cold Brew",
        clicks: "27 – 34 clics",
        type: "Gruesa",
      },
    ],
  },

  about: {
    eyebrow: "FILOSOFÍA",
    title: "Diseñado para respetar el origen.",
    description:
      "Creemos que una buena molienda debe permitir que cada café exprese su verdadero potencial aromático y de sabor.",
    subDescription:
      "Herramientas pensadas para honrar el trabajo de los caficultores peruanos en cada taza.",
    image: "/images/farmer-origin-basket.jpg",
  },

  trustFaq: {
    eyebrow: "COMPRA SEGURA",
    title: "Compra con Tranquilidad",
    trustPillars: [
      {
        title: "Envíos a todo el Perú",
        desc: "Lima (24–48h) y provincias vía Olva o Shalom con seguimiento.",
      },
      {
        title: "Medios de Pago Flexibles",
        desc: "Yape, Plin, transferencias bancarias y tarjetas.",
      },
      {
        title: "Soporte & Garantía",
        desc: "Asesoría directa y repuestos oficiales de fábrica.",
      },
    ],
    faqs: [
      {
        q: "¿Hacen envíos a todo el Perú?",
        a: "Sí, realizamos envíos diarios a Lima Metropolitana (24 a 48 horas) y a todas las provincias mediante Olva Courier y Shalom con número de seguimiento.",
      },
      {
        q: "¿Qué medios de pago aceptan?",
        a: "Aceptamos transferencias bancarias (BCP, Interbank, BBVA), Yape, Plin y tarjetas de crédito/débito.",
      },
      {
        q: "¿Cómo limpio y mantengo el molinillo?",
        a: "Incluye una brocha de cerdas finas para limpiar los restos de café tras cada uso. Se recomienda no sumergir en agua para proteger los rodamientos de acero inoxidable.",
      },
    ],
  },
};
