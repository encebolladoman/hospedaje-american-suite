import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María G.",
    text: "Excelente ubicación para ir al consulado. Muy cómodo y seguro. Llegué caminando en menos de 10 minutos.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "Habitaciones limpias y tranquilas. Perfecto para descansar antes de la entrevista. El aire acondicionado funcionaba perfecto.",
    rating: 5,
  },
  {
    name: "Ana P.",
    text: "La urbanización es muy segura y está muy cerca del consulado. Muy recomendado para quienes tienen citas de visa.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Lo que dicen nuestros huéspedes
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Experiencias de personas que se han hospedado con nosotros
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mb-4 text-muted-foreground">
                  {`"${testimonial.text}"`}
                </p>

                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
