import { MessageCircle, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contacto
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            ¿Tienes preguntas o deseas reservar? Contáctanos por WhatsApp o teléfono
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Primary Contact */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-full bg-primary/20 p-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  WhatsApp Principal
                </h3>
                <p className="mb-4 text-2xl font-bold text-primary">
                  0968117731
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href="https://wa.me/593968117731"
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
            <Card className="border-border/50 bg-card">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-full bg-muted p-4">
                  <Phone className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Número Adicional
                </h3>
                <p className="mb-4 text-2xl font-bold text-foreground">
                  0993183523
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  <a
                    href="https://wa.me/593993183523"
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
              className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
            >
              <a
                href="https://maps.app.goo.gl/EMDsWhofVsrw3uwL8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Ver ubicación en Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
