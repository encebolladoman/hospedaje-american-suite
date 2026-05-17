import { MapPin, Building2, Hospital, ShoppingBag, GraduationCap, Plane, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const nearbyPlaces = [
  {
    icon: Building2,
    name: "Consulado de Estados Unidos",
    distance: "6–8 minutos caminando",
    highlight: true,
  },
  {
    icon: Hospital,
    name: "Interhospital",
    distance: "7–10 minutos en auto",
  },
  {
    icon: ShoppingBag,
    name: "Riocentro Los Ceibos",
    distance: "8–10 minutos en auto",
  },
  {
    icon: ShoppingBag,
    name: "San Eduardo Shopping",
    distance: "5–7 minutos en auto",
  },
  {
    icon: GraduationCap,
    name: "ESPOL",
    distance: "10–12 minutos en auto",
  },
  {
    icon: Hospital,
    name: "Hospital IESS Los Ceibos",
    distance: "10–12 minutos en auto",
  },
  {
    icon: Building2,
    name: "Estadio Monumental Banco Pichincha",
    distance: "10 minutos en auto",
  },
  {
    icon: Plane,
    name: "Aeropuerto Internacional de Guayaquil",
    distance: "20–25 minutos en auto",
  },
]

export function Location() {
  return (
    <section id="ubicacion" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ubicación estratégica
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Cerca de los principales puntos de interés en Guayaquil
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map Embed */}
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border/50 bg-muted lg:aspect-auto lg:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0137!2d-79.9587!3d-2.1617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d13d06f9e05e1%3A0x5e69c9a9e9d9e9e9!2sUrbanizaci%C3%B3n%20Renacer%2C%20Guayaquil!5e0!3m2!1ses!2sec!4v1709900000000!5m2!1ses!2sec"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Blue House Hospedaje"
              className="absolute inset-0"
            />
          </div>

          {/* Nearby Places */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Lugares cercanos
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {nearbyPlaces.map((place, index) => (
                <Card
                  key={index}
                  className={`border-border/50 transition-all duration-300 hover:shadow-md ${
                    place.highlight
                      ? "border-primary/50 bg-primary/5"
                      : "bg-card"
                  }`}
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <div
                      className={`rounded-full p-2 ${
                        place.highlight
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <place.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`truncate text-sm font-medium ${
                          place.highlight ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {place.name}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{place.distance}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href="https://maps.app.goo.gl/EMDsWhofVsrw3uwL8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Cómo llegar
              </a>
            </Button>
          </div>
        </div>

        {/* How to get to Consulate */}
        <div className="mt-16 rounded-2xl bg-primary/5 p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              Cómo llegar al Consulado desde Blue House
            </h3>
            <p className="mb-6 text-muted-foreground">
              Desde Blue House Hospedaje puedes caminar al Consulado de Estados Unidos en aproximadamente 8 minutos. Nuestra ubicación es ideal para personas que tienen citas de visa o cualquier trámite consular, permitiéndote llegar descansado y a tiempo a tu entrevista.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
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
