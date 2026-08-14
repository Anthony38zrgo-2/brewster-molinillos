/**
 * CONFIGURACIÓN CENTRAL DEL SITIO - BREWSTER PERÚ
 * Configuración concisa, enfocada en producto y experiencia.
 */
import { assetUrl } from "@/utils/assets";

export const siteConfig = {
  brand: {
    name: "BREWSTER",
    legalName: "Brewster Perú",
    tagline: "El secreto de un buen café.",
    instagram: "https://instagram.com/brewster.peru",
    whatsappNumber: "51987654321",
    whatsappMessage: "¡Hola Brewster Perú! Deseo consultar sobre los molinillos Brewster B6.",
    logoUrl: assetUrl("images/logo-brewster.jpg"),
  },

  enabledSections: [
    "header",
    "hero",
    "brewing-guide",
    "colors",
    "about",
    "trust-faq",
    "footer",
    "floating-contact",
  ],

  hero: {
    titleBase: "Molienda de Precisión para ",
    titleAccent: "Café de Especialidad",
    description:
      "Precisión micrométrica, materiales de alta durabilidad y control total sobre tu molienda.",
    primaryAction: { label: "Ver guía de molienda", href: "#brewing-guide" },
  },

  brewingGuide: {
    title: "Guía de Molienda",
    description: "Ajuste de clics sugerido según tu método de preparación.",
    image: assetUrl("images/pouring-ground-coffee.jpg"),
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

  colorOptions: {
    title: "Colores disponibles",
    description: "Elige el acabado que mejor combine con tu cocina.",
    image: assetUrl("images/trio-grinders-wood.jpg"),
    colors: [
      {
        name: "Champagne Gold",
        swatch: "#d8b98a",
        desc: "Dorado champán con perilla de madera natural.",
      },
      {
        name: "Matte Black",
        swatch: "#2e3338",
        desc: "Negro mate texturizado con perilla de nogal oscuro.",
      },
      {
        name: "Titanium Gray",
        swatch: "#9aa0a6",
        desc: "Grafito metálico cepillado de alta durabilidad.",
      },
    ],
  },

  about: {
    title: "Diseñado para respetar el origen.",
    description:
      "Creemos que una buena molienda debe permitir que cada café peruano exprese su verdadero potencial aromático, honrando el trabajo de sus caficultores en cada taza.",
    image: assetUrl("images/farmer-origin-basket.jpg"),
  },

  trustFaq: {
    title: "Compra con Tranquilidad",
    description: "Resolvemos tus dudas sobre envíos, pagos y cuidado del molinillo.",
    faqs: [
      {
        icon: "shipping",
        q: "¿Hacen envíos a todo el Perú?",
        a: "Sí. Lima Metropolitana en 24 a 48 horas y provincias vía Olva o Shalom con número de seguimiento.",
      },
      {
        icon: "payment",
        q: "¿Qué medios de pago aceptan?",
        a: "Transferencias bancarias (BCP, Interbank, BBVA), Yape, Plin y tarjetas de crédito/débito.",
      },
      {
        icon: "cleaning",
        q: "¿Cómo limpio y mantengo el molinillo?",
        a: "Usa la brocha incluida tras cada uso. Evita sumergirlo en agua para proteger los rodamientos de acero inoxidable.",
      },
    ],
  },
};
