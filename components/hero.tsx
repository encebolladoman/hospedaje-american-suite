import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%201%20imagen%203-80QMiQ1UfV3AJ0jf5OPcOmgOf52qKg.jpeg"
          alt="Blue House Hospedaje - Habitación"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex min-h-[90vh] flex-col items-start justify-center px-4 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <MapPin className="mr-2 h-4 w-4" />
            Guayaquil, Ecuador
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hospedaje cerca del Consulado de Estados Unidos en Guayaquil
          </h1>
          
          <p className="mb-8 text-pretty text-lg text-gray-200 sm:text-xl">
            Ubicado en Urbanización Renacer, dentro de un sector privado, tranquilo y seguro, a solo 8 minutos caminando del Consulado de Estados Unidos.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href="https://wa.me/593968117731"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultar disponibilidad por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <a
                href="https://maps.app.goo.gl/EMDsWhofVsrw3uwL8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Ver ubicación
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
