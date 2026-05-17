import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿A qué distancia está el consulado?",
    answer:
      "El Consulado de Estados Unidos se encuentra a aproximadamente 8 minutos caminando desde Blue House Hospedaje.",
  },
  {
    question: "¿Las habitaciones tienen aire acondicionado?",
    answer:
      "Sí, todas nuestras habitaciones incluyen aire acondicionado para garantizar tu comodidad durante la estadía.",
  },
  {
    question: "¿Las habitaciones tienen baño privado?",
    answer:
      "Sí, todas las habitaciones cuentan con baño privado completamente equipado.",
  },
  {
    question: "¿Se puede cocinar?",
    answer:
      "La habitación familiar incluye cocina de inducción con sartén, olla y utensilios de cocina. Las demás habitaciones cuentan con microondas, mini nevera y tetera eléctrica.",
  },
  {
    question: "¿Cómo puedo reservar?",
    answer:
      "Puedes contactarnos directamente por WhatsApp para consultar disponibilidad y hacer tu reserva. Nuestros números son 0968117731 y 0993183523.",
  },
  {
    question: "¿El sector es seguro?",
    answer:
      "Sí, estamos ubicados en la Urbanización Renacer, un sector privado con garita de seguridad y guardias las 24 horas.",
  },
  {
    question: "¿Tienen WiFi?",
    answer:
      "Sí, todas las habitaciones incluyen WiFi de alta velocidad sin costo adicional.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Resolvemos tus dudas sobre nuestro hospedaje
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50 bg-card px-6 first:rounded-t-lg last:rounded-b-lg"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
