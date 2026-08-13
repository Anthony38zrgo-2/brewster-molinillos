/**
 * CONFIGURACIÓN CENTRAL DEL SITIO - BREWSTER PERÚ
 * Catálogo de Molinillos de Café de Precisión y Accesorios de Especialidad
 */
export const siteConfig = {
  brand: {
    name: "BREWSTER",
    legalName: "Brewster Perú",
    tagline: "El secreto de un buen café",
    subTagline: "Molinillos manuales de alta precisión & ingeniería para café de especialidad",
    description:
      "Herramientas de molienda profesional en acero inoxidable y madera noble. Diseñados para preservar los aceites esenciales, notas aromáticas y la riqueza del café de origen peruano.",
    country: "Perú",
    currency: "S/",
    instagram: "https://instagram.com/brewster.peru",
    instagramHandle: "@brewster.peru",
    whatsappNumber: "51987654321", // Número de contacto directo WhatsApp
    whatsappMessage: "¡Hola Brewster Perú! Me interesa solicitar información y comprar un molinillo Brewster B6.",
    phone: "+51 987 654 321",
    email: "contacto@brewster.pe",
    logoUrl: "/images/logo-brewster.jpg",
  },

  // Control modular de secciones
  enabledSections: [
    "header",
    "hero",
    "catalog",
    "benefits",
    "brewing-guide",
    "about",
    "contact",
    "footer",
    "floating-contact",
  ],

  hero: {
    eyebrow: "LÍNEA PROFESIONAL · EDICIÓN LIMITADA",
    title: "Molienda de Precisión para el Verdadero Café de Especialidad",
    highlightText: "Precisión Artesanal",
    description:
      "Descubre el molinillo manual Brewster B6: muelas cónicas de acero inoxidable 420, cuerpo texturizado antideslizante y empuñadura de nogal noble para una extracción perfecta.",
    primaryAction: { label: "Explorar Catálogo", href: "#catalog" },
    secondaryAction: { label: "Consultar por WhatsApp", href: "#contact" },
    stats: [
      { label: "Acero Inoxidable", value: "SUS 420" },
      { label: "Ajuste Micrométrico", value: "36 Clics" },
      { label: "Molienda Uniforme", value: "100% Precisa" },
      { label: "Garantía Oficial", value: "Satisfacción 100%" },
    ],
    heroImage: "/images/trio-grinders-wood.jpg",
    badge: "Envío seguro a todo el Perú",
  },

  catalog: {
    eyebrow: "COLECCIÓN OFICIAL",
    title: "Molinillos Profesionales Brewster B6",
    description:
      "Diseñados meticulosamente para baristas, catadores y apasionados del café que buscan consistencia en cada molienda.",
  },

  benefits: {
    eyebrow: "INGENIERÍA & RENDIMIENTO",
    title: "¿Por Qué Elegir un Molinillo Brewster?",
    description:
      "La frescura y uniformidad del grano molido al instante definen el 80% del perfil de sabor en tu taza.",
    items: [
      {
        id: "burrs",
        icon: "ShieldCheck",
        title: "Muelas Cónicas de Acero SUS 420",
        description:
          "Corte de grado CNC de alta dureza que corta el grano con precisión en lugar de aplastarlo, evitando finos indeseados.",
      },
      {
        id: "wood-handle",
        icon: "Sparkles",
        title: "Perilla Ergonómica de Madera Noble",
        description:
          "Madera de nogal pulida a mano con rodamiento suave que ofrece un agarre confortable y una rotación sin esfuerzo.",
      },
      {
        id: "clicks",
        icon: "Sliders",
        title: "36 Clics de Ajuste Micrométrico",
        description:
          "Control milimétrico para transitar con exactitud desde un Espresso denso hasta un Cold Brew o Prensa Francesa.",
      },
      {
        id: "grip",
        icon: "Maximize2",
        title: "Cuerpo Antideslizante CNC",
        description:
          "Patrón de estrías mecanizadas en aluminio aeroespacial que garantiza máxima estabilidad durante la molienda manual.",
      },
      {
        id: "zero-heat",
        icon: "Flame",
        title: "Cero Transferencia Térmica",
        description:
          "La rotación manual a bajas revoluciones no calienta el grano, preservando intactos los aceites aromáticos volátiles.",
      },
      {
        id: "portable",
        icon: "Compass",
        title: "Ultra Portátil & Sin Cables",
        description:
          "Llévalo contigo a la oficina, campamento o viajes sin depender de electricidad ni baterías.",
      },
    ],
  },

  brewingGuide: {
    eyebrow: "GUÍA DE CALIBRACIÓN",
    title: "Guía de Molienda por Método de Extracción",
    description:
      "Configura fácilmente los clics de tu Brewster B6 para lograr el balance perfecto entre acidez, dulzor y cuerpo.",
    methods: [
      {
        name: "Espresso & Moka",
        clicks: "10 - 14 Clics",
        type: "Fina / Extra Fina",
        notes: "Molienda densa y compacta para una extracción con crema dorada y cuerpo aterciopelado.",
        ratio: "1:2 a 1:2.5",
        time: "25 - 30 seg",
      },
      {
        name: "Aeropress & V60",
        clicks: "15 - 22 Clics",
        type: "Media Fina a Media",
        notes: "Flujo balanceado para resaltar notas florales, cítricas y acidez brillante.",
        ratio: "1:15 a 1:16",
        time: "2:30 - 3:15 min",
      },
      {
        name: "Chemex & Kalita",
        clicks: "22 - 26 Clics",
        type: "Media Gruesa",
        notes: "Claridad cristalina y dulzor prolongado con cuerpo limpio.",
        ratio: "1:15 a 1:17",
        time: "3:30 - 4:00 min",
      },
      {
        name: "Prensa Francesa & Cold Brew",
        clicks: "27 - 34 Clics",
        type: "Gruesa",
        notes: "Granulometría homogénea para inmersión prolongada sin amargor ni sedimentos.",
        ratio: "1:12 a 1:14",
        time: "4 min / 12-18 hrs",
      },
    ],
  },

  about: {
    eyebrow: "NUESTRA RAÍZ",
    title: "La Belleza del Café Comienza en su Origen",
    quote: "Detrás de cada grano hay manos peruanas que cultivan pasión.",
    description:
      "En Brewster creemos que el café no es solo una bebida, es un ritual que honra el esfuerzo de miles de caficultores peruanos. Nuestras herramientas nacen con el propósito de respetar la cadena de valor del grano de especialidad, permitiéndote extraer la máxima expresión de sabor y aroma en cada preparación.",
    image: "/images/farmer-origin-basket.jpg",
    secondaryImage: "/images/grinder-champagne-espresso.jpg",
    points: [
      "Homenaje a los orígenes cafetaleros de Cusco, Villa Rica, Cajamarca y Puno.",
      "Control absoluto sobre el tamaño de partícula para catas y calibración profesional.",
      "Construcción duradera de por vida, reduciendo el desperdicio de aparatos plásticos.",
    ],
  },

  contact: {
    eyebrow: "ATENCIÓN PERSONALIZADA",
    title: "¿Tienes Consultas o Deseas Comprar?",
    description:
      "Escríbenos directamente por WhatsApp para asesorarte en la elección de tu molinillo o coordinar tu envío inmediato.",
    shippingInfo: "Envíos a todo Lima (24-48h) y provincias del Perú (Olva Courier / Shalom).",
    warrantyInfo: "Garantía de satisfacción y soporte técnico en repuestos.",
  },
};
