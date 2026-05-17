import { Shield, MapPin, Bed, Wifi } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Sector seguro",
    description: "Urbanizacion privada con garita y guardias.",
  },
  {
    icon: MapPin,
    title: "Cerca del consulado",
    description: "Aproximadamente 8 minutos caminando.",
  },
  {
    icon: Bed,
    title: "Suites comodas",
    description: "Espacios amplios para descansar.",
  },
  {
    icon: Wifi,
    title: "Servicios incluidos",
    description: "WiFi, aire acondicionado y bano privado.",
  },
]

export function Features() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ventajas del hospedaje
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Todo lo que necesitas para una estadia comoda y tranquila
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
