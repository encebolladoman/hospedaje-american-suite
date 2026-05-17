"use client"

import { MessageCircle } from "lucide-react"
import { whatsappConfig, whatsappMessages, getWhatsAppLink } from "@/lib/config"

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink(whatsappConfig.primary.international, whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
