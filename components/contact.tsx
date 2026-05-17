import { MessageCircle, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig, whatsappConfig, whatsappMessages, getWhatsAppLink } from "@/lib/config"

export function Contact() {
  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contacto
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            ¿Tienes preguntas o deseas reservar? Contactanos por WhatsApp o telefono
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Primary Contact */}
            <Card className="border-primary/30 bg-primary/5 transition-all duration-200 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-full bg-primary/20 p-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  WhatsApp {whatsappConfig.primary.label}
                </h3>
                <p className="mb-4 text-2xl font-bold text-primary">
                  {whatsappConfig.primary.number}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
                >
                  <a
                    href={getWhatsAppLink(whatsappConfig.primary.international, whatsappMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar mensaje por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Secondary Contact */}
            <Card className="border-border/50 bg-card transition-all duration-200 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-full bg-muted p-4">
                  <Phone className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Numero {whatsappConfig.secondary.label}
                </h3>
                <p className="mb-4 text-2xl font-bold text-foreground">
                  {whatsappConfig.secondary.number}
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full transition-all duration-200 hover:shadow-sm"
                >
                  <a
                    href={getWhatsAppLink(whatsappConfig.secondary.international, whatsappMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar mensaje por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location Button */}
          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:shadow-sm"
            >
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Ver ubicacion en Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
