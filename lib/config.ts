// ============================================
// HOSPEDAJE AMERICAN SUITES - CONFIGURACION CENTRALIZADA
// ============================================
// Este archivo contiene toda la informacion del hospedaje
// para facilitar futuras actualizaciones.

import { Wind, Wifi, Bath, Tv, Coffee, Users, Refrigerator } from "lucide-react"

// ============================================
// INFORMACION GENERAL
// ============================================
export const siteConfig = {
  name: "Hospedaje American Suites",
  shortName: "American Suites",
  location: "Guayaquil, Ecuador",
  address: "Urbanizacion Renacer, Guayaquil, Ecuador",
  mapUrl: "https://maps.app.goo.gl/EMDsWhofVsrw3uwL8",
  description: "Hospedaje seguro y comodo cerca del Consulado de Estados Unidos. Ubicado en Urbanizacion Renacer, un sector privado y tranquilo.",
}

// ============================================
// NUMEROS DE WHATSAPP
// ============================================
export const whatsappConfig = {
  primary: {
    number: "0985902147",
    international: "593985902147",
    label: "Principal",
  },
  secondary: {
    number: "0968117731",
    international: "593968117731",
    label: "Adicional",
  },
}

// ============================================
// MENSAJES DE WHATSAPP CONTEXTUALES
// ============================================
export const whatsappMessages = {
  general: "Hola, vengo desde la pagina web de Hospedaje American Suites y deseo mas informacion.",
  suiteEspecial: "Hola, vengo desde la pagina web de Hospedaje American Suites y estoy interesado en la Suite Especial.",
  suiteEstandar: "Hola, vengo desde la pagina web de Hospedaje American Suites y estoy interesado en la Suite Estandar.",
}

// Funcion helper para generar enlaces de WhatsApp
export function getWhatsAppLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

// ============================================
// CONFIGURACION DE HABITACIONES
// ============================================
export const rooms = [
  {
    id: "suite-especial",
    name: "Suite Especial",
    description: "Amplia suite con todas las comodidades para una estadia confortable.",
    locationNote: "Ubicada en el segundo piso",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%201-b6nV3PZ5FsDetUe4sWTa9ay53dRp0r.jpeg",
        alt: "Suite Especial - Vista de las camas",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%202-QA4ntr8Mv1WM11Wr8W7qvTZcw7Wwvn.jpeg",
        alt: "Suite Especial - Area de comedor",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%203-tnHqPlGZlQUC3Fn1wySrcL6mfNeyOr.jpeg",
        alt: "Suite Especial - Vista amplia",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%204-CZYHUywgB0pxZNq6OoPNdXMUKfmi04.jpeg",
        alt: "Suite Especial - Vista lateral",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%205-zRrqquiVdElVO7DJyvjRohiKl1TNJI.jpeg",
        alt: "Suite Especial - Mesa de comedor",
      },
    ],
    amenities: [
      { icon: Users, text: "Cama de dos plazas" },
      { icon: Users, text: "Cama de plaza y media" },
      { icon: Refrigerator, text: "Nevera" },
      { icon: Coffee, text: "Tetera electrica" },
      { icon: Wifi, text: "WiFi" },
      { icon: Wind, text: "Aire acondicionado" },
      { icon: Tv, text: "TV" },
      { icon: Bath, text: "Bano privado" },
    ],
    whatsappMessage: whatsappMessages.suiteEspecial,
    featured: true,
  },
  {
    id: "suite-estandar",
    name: "Suite Estandar",
    description: "Suite comoda y bien equipada para tu descanso.",
    locationNote: "Ubicada en el segundo piso",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%203-EJvNAuntAYCz4oQ9gClFpOGiF8xhXq.jpeg",
        alt: "Suite Estandar - Mesita de noche",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%204-O8gGLjctQpyLNdhrnaAI2pnPaHfzYV.jpeg",
        alt: "Suite Estandar - Terraza exterior",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%205-emFrJeeh1PIpSVtJmfDZMKFSxWzx0k.jpeg",
        alt: "Suite Estandar - Vista de la cama",
      },
    ],
    amenities: [
      { icon: Users, text: "Cama de dos plazas" },
      { icon: Coffee, text: "Tetera electrica" },
      { icon: Wifi, text: "WiFi" },
      { icon: Wind, text: "Aire acondicionado" },
      { icon: Tv, text: "TV" },
      { icon: Bath, text: "Bano privado" },
    ],
    whatsappMessage: whatsappMessages.suiteEstandar,
    featured: false,
  },
]

// ============================================
// IMAGENES DE GALERIA
// ============================================
export const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%201-b6nV3PZ5FsDetUe4sWTa9ay53dRp0r.jpeg",
    alt: "Suite Especial - Vista de las camas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%203-tnHqPlGZlQUC3Fn1wySrcL6mfNeyOr.jpeg",
    alt: "Suite Especial - Vista amplia",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%202-QA4ntr8Mv1WM11Wr8W7qvTZcw7Wwvn.jpeg",
    alt: "Suite Especial - Area de comedor",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%204-CZYHUywgB0pxZNq6OoPNdXMUKfmi04.jpeg",
    alt: "Suite Especial - Vista lateral",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%205-zRrqquiVdElVO7DJyvjRohiKl1TNJI.jpeg",
    alt: "Suite Especial - Mesa de comedor",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%203-EJvNAuntAYCz4oQ9gClFpOGiF8xhXq.jpeg",
    alt: "Suite Estandar - Mesita de noche",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%204-O8gGLjctQpyLNdhrnaAI2pnPaHfzYV.jpeg",
    alt: "Suite Estandar - Terraza exterior",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%205-emFrJeeh1PIpSVtJmfDZMKFSxWzx0k.jpeg",
    alt: "Suite Estandar - Vista de la cama",
  },
]

// ============================================
// PREGUNTAS FRECUENTES
// ============================================
export const faqs = [
  {
    question: "¿A que distancia esta el consulado?",
    answer:
      "El Consulado de Estados Unidos se encuentra a aproximadamente 8 minutos caminando desde Hospedaje American Suites.",
  },
  {
    question: "¿Las habitaciones tienen aire acondicionado?",
    answer:
      "Si, todas nuestras suites incluyen aire acondicionado para garantizar tu comodidad durante la estadia.",
  },
  {
    question: "¿Las habitaciones tienen bano privado?",
    answer:
      "Si, todas las suites cuentan con bano privado completamente equipado.",
  },
  {
    question: "¿Como puedo reservar?",
    answer:
      `Puedes contactarnos directamente por WhatsApp para consultar disponibilidad y hacer tu reserva. Nuestros numeros son ${whatsappConfig.primary.number} y ${whatsappConfig.secondary.number}.`,
  },
  {
    question: "¿El sector es seguro?",
    answer:
      "Si, estamos ubicados en la Urbanizacion Renacer, un sector privado con garita de seguridad y guardias las 24 horas.",
  },
  {
    question: "¿Tienen WiFi?",
    answer:
      "Si, todas las suites incluyen WiFi de alta velocidad sin costo adicional.",
  },
]

// ============================================
// ENLACES DE NAVEGACION
// ============================================
export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#ubicacion", label: "Ubicacion" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
]
