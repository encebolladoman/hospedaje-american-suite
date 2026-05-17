// ============================================
// HOSPEDAJE AMERICAN SUITES - CONFIGURACION CENTRALIZADA
// ============================================
// Este archivo contiene toda la informacion del hospedaje
// para facilitar futuras actualizaciones.
//
// COMO EDITAR IMAGENES:
// 1. Sube tu imagen a un servicio de hosting (ej: Vercel Blob, Cloudinary, etc.)
// 2. Copia la URL de la imagen
// 3. Reemplaza el valor de "src" con la nueva URL
// 4. Actualiza el "alt" con una descripcion de la imagen
//
// EJEMPLO:
// {
//   src: "https://tu-url.com/imagen.jpg",
//   alt: "Descripcion de la imagen",
// }
// ============================================

import { Wind, Wifi, Bath, Tv, Coffee, Users, Refrigerator, Microwave } from "lucide-react"

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
// IMAGENES DE SUITE ESPECIAL
// Para agregar/editar: Cambia "src" por la URL de tu imagen
// ============================================
const suiteEspecialImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%201-ICjbPXIaeAXOe4A1DG7mYzekyB3gLi.jpeg",
    alt: "Suite Especial - Vista de las camas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%202-5o6WX6lKo0HAx3ZYx3xu5dUAXzLY1v.jpeg",
    alt: "Suite Especial - Area de comedor con orquidea",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%203-6IGhZ2h2mTPGpLHuIdrZOSTVybLCHX.jpeg",
    alt: "Suite Especial - Vista amplia con aire acondicionado",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%204-ncrpyhzr0lh95ypvaTjmrgtGwKdQDO.jpeg",
    alt: "Suite Especial - Vista lateral de las camas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%205-TT7W04N6uIFSztTqFnpmwuRME9ofaK.jpeg",
    alt: "Suite Especial - Mesa de comedor completa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%206-xyyCjTHUwSh0mJ29vh9HdYR0ME257t.jpeg",
    alt: "Suite Especial - Terraza con vista a la calle",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20especial%20imagen%207-x4dVa6H0wmiwy6udywxLB93vDVflYe.jpeg",
    alt: "Suite Especial - Terraza nocturna",
  },
]

// ============================================
// IMAGENES DE SUITE ESTANDAR
// Para agregar/editar: Cambia "src" por la URL de tu imagen
// ============================================
const suiteEstandarImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%201-XvpLxok66vVwPlzLlUQPAPfUSUc01T.jpeg",
    alt: "Suite Estandar - Vista de la cama con ventana",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%202-6b5Yln7DPDmZiP2cUyV0zur3p9zt8o.jpeg",
    alt: "Suite Estandar - Vista con bano privado",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%203-1OnHZJ6LfdEFV3rqbwO8R06IzVjYrB.jpeg",
    alt: "Suite Estandar - Mesita de noche con controles",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%204-oHbswDnuzlOtGOWXdFeGTCs2Vl6hhN.jpeg",
    alt: "Suite Estandar - Terraza exterior nocturna",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suite%20estandar%20imagen%205-rJOQiEo54y5wgX4UgJITtDXAXqwSCs.jpeg",
    alt: "Suite Estandar - Vista frontal de la cama",
  },
]

// ============================================
// CONFIGURACION DE HABITACIONES
// ============================================
export const rooms = [
  {
    id: "suite-especial",
    name: "Suite Especial",
    description: "Amplia suite con todas las comodidades para una estadia confortable.",
    locationNote: "Ubicada en el segundo piso",
    images: suiteEspecialImages,
    amenities: [
      { icon: Users, text: "Cama de dos plazas" },
      { icon: Users, text: "Cama de plaza y media" },
      { icon: Refrigerator, text: "Nevera" },
      { icon: Microwave, text: "Microondas" },
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
    images: suiteEstandarImages,
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
// Combina automaticamente las imagenes de ambas suites
// Para agregar imagenes adicionales, anade objetos al array
// ============================================
export const galleryImages = [
  ...suiteEspecialImages,
  ...suiteEstandarImages,
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
