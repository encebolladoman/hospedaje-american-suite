import Link from "next/link"
import { Phone, MapPin } from "lucide-react"
import { siteConfig, whatsappConfig, whatsappMessages, getWhatsAppLink, navLinks } from "@/lib/config"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                AS
              </div>
              <div>
                <span className="block font-semibold text-foreground">
                  {siteConfig.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {siteConfig.location}
                </span>
              </div>
            </Link>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{siteConfig.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">
              Enlaces rapidos
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppLink(whatsappConfig.primary.international, whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {whatsappConfig.primary.number} ({whatsappConfig.primary.label})
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink(whatsappConfig.secondary.international, whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {whatsappConfig.secondary.number} ({whatsappConfig.secondary.label})
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
