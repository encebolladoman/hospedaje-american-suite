import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/config"

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
                <AccordionTrigger className="text-left text-foreground transition-colors duration-200 hover:text-primary hover:no-underline">
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
