import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#galeria", label: "Galería" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20Blue%20House-VdT2LzSzxm1BaiMJCemxJv2pp1qB4e.jpg"
                alt="Blue House Hospedaje Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <span className="block font-semibold text-foreground">
                  Blue House Hospedaje
                </span>
                <span className="text-sm text-muted-foreground">
                  Guayaquil, Ecuador
                </span>
              </div>
            </Link>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              Hospedaje seguro y cómodo cerca del Consulado de Estados Unidos. Ubicado en Urbanización Renacer, un sector privado y tranquilo.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Urbanización Renacer, Guayaquil, Ecuador</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
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
                  href="https://wa.me/593968117731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  0968117731 (Principal)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/593993183523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  0993183523 (Adicional)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Blue House Hospedaje. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
