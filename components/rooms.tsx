"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, ChevronLeft, ChevronRight, Wind, Wifi, Bath, Tv, Microwave, Coffee, UtensilsCrossed, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const rooms = [
  {
    name: "Habitación Estándar",
    description: "Ideal para 1 a 3 personas.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%201%20imagen%201-G8oKLrNqJ4Wzkmch51PpI0o9BghIKJ.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%201%20imagen%203-80QMiQ1UfV3AJ0jf5OPcOmgOf52qKg.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%201%20imagen%202-jpDey2a1YBbIc927bYiBdNRGuQaNyS.jpeg",
    ],
    amenities: [
      { icon: Users, text: "1 cama de dos plazas" },
      { icon: Users, text: "1 cama de plaza y media" },
      { icon: Wind, text: "Aire acondicionado" },
      { icon: Wifi, text: "WiFi" },
      { icon: Bath, text: "Baño privado" },
    ],
    capacity: "1-3",
  },
  {
    name: "Habitación Equipada",
    description: "Ideal para 2 a 4 personas.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%202%20imagen%201-oCKUmgNmYUrhmM4rF9EQSOqW9QafUp.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%202%20imagen%202-RM6zjrMoJaK88hvMMlUROR9kcoyGFU.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%202%20imagen%203-mpLKAHNWYZ8lZ5zBoq2SiMriXNsmYV.jpeg",
    ],
    amenities: [
      { icon: Users, text: "2 camas de dos plazas" },
      { icon: Wind, text: "Aire acondicionado" },
      { icon: Wifi, text: "WiFi" },
      { icon: Bath, text: "Baño privado" },
      { icon: Tv, text: "TV" },
      { icon: Microwave, text: "Microondas" },
      { icon: Coffee, text: "Mini nevera y tetera eléctrica" },
      { icon: UtensilsCrossed, text: "Platos, vasos y cucharas" },
    ],
    capacity: "2-4",
  },
  {
    name: "Habitación Familiar",
    description: "Ideal para familias o grupos.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%203%20imagen%201-iumornYNUmQuCQH81fHMHjqiv794NM.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%203%20imagen%202-ffqhPbTikkbSQOVPeOozR9Viuok5TY.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habitacion%203%20imagen%203-ysprTTmlWbEUorMCjBHmjhVAQ6IOWj.jpeg",
    ],
    amenities: [
      { icon: Users, text: "Litera (cama de dos plazas + plaza y media)" },
      { icon: Users, text: "1 cama de dos plazas" },
      { icon: Wind, text: "Aire acondicionado" },
      { icon: Wifi, text: "WiFi" },
      { icon: Bath, text: "Baño privado" },
      { icon: Tv, text: "TV" },
      { icon: Microwave, text: "Microondas y mini nevera" },
      { icon: Coffee, text: "Tetera eléctrica" },
      { icon: UtensilsCrossed, text: "Cocina de inducción, sartén, olla y utensilios" },
    ],
    capacity: "4-6",
    featured: true,
  },
]

function RoomImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-t-lg">
      <Image
        src={images[currentIndex]}
        alt={`${name} - Imagen ${currentIndex + 1}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.preventDefault()
          prevImage()
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-4 w-4 text-foreground" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault()
          nextImage()
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-4 w-4 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault()
              setCurrentIndex(index)
            }}
            className={`h-1.5 w-1.5 rounded-full transition-all ${
              index === currentIndex
                ? "w-4 bg-white"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function Rooms() {
  return (
    <section id="habitaciones" className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestras Habitaciones
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Espacios cómodos y equipados para tu estadía en Guayaquil
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <Card
              key={index}
              className={`overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-xl ${
                room.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              <RoomImageCarousel images={room.images} name={room.name} />
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {room.name}
                  </h3>
                  <Badge variant="secondary" className="shrink-0">
                    {room.capacity} personas
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{room.description}</p>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="grid grid-cols-1 gap-2">
                  {room.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <amenity.icon className="h-4 w-4 shrink-0 text-primary" />
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-2 border-t border-border/50 bg-muted/30 pt-4">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href="https://wa.me/593968117731"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Consultar (0968117731)
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <a
                    href="https://wa.me/593993183523"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Consultar (0993183523)
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
