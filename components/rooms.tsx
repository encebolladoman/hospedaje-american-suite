"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, ChevronLeft, ChevronRight, Coffee, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { rooms, whatsappConfig, getWhatsAppLink, additionalServices } from "@/lib/config"

function RoomImageCarousel({ images, name }: { images: { src: string; alt: string }[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-t-xl">
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault()
              prevImage()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 opacity-0 shadow-md transition-all duration-200 hover:bg-white group-hover:opacity-100"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              nextImage()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 opacity-0 shadow-md transition-all duration-200 hover:bg-white group-hover:opacity-100"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                setCurrentIndex(index)
              }}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "w-4 bg-white"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Rooms() {
  return (
    <section id="habitaciones" className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestras Suites
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Espacios comodos y equipados para tu estadia en Guayaquil
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {rooms.map((room) => (
            <Card
              key={room.id}
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
                
                {/* Location Note */}
                <p className="mt-4 text-xs text-muted-foreground/80 italic">
                  {room.locationNote}
                </p>
              </CardContent>

              <CardFooter className="flex flex-col gap-2 border-t border-border/50 bg-muted/30 pt-4">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
                >
                  <a
                    href={getWhatsAppLink(whatsappConfig.primary.international, room.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Consultar ({whatsappConfig.primary.number})
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full transition-all duration-200 hover:shadow-sm"
                >
                  <a
                    href={getWhatsAppLink(whatsappConfig.secondary.international, room.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Consultar ({whatsappConfig.secondary.number})
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Servicios Adicionales Card */}
        <div className="mt-8 flex justify-center">
          <Card className="w-full max-w-md border-border/50 bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-lg">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex gap-2">
                <div className="rounded-full bg-primary/10 p-3">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <div className="rounded-full bg-primary/10 p-3">
                  <Printer className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 font-semibold text-foreground">
                Servicios adicionales
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {additionalServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
