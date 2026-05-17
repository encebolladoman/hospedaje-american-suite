import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Blue House Hospedaje | Cerca del Consulado de Estados Unidos en Guayaquil',
  description: 'Hospedaje seguro y cómodo en Guayaquil, Ecuador. Ubicado a solo 8 minutos caminando del Consulado de Estados Unidos. Habitaciones con aire acondicionado, WiFi y baño privado.',
  keywords: 'hospedaje guayaquil, hotel cerca consulado estados unidos, alojamiento guayaquil, blue house hospedaje, visa americana guayaquil',
  openGraph: {
    title: 'Blue House Hospedaje | Cerca del Consulado de Estados Unidos',
    description: 'Hospedaje seguro y cómodo a 8 minutos del Consulado de Estados Unidos en Guayaquil',
    locale: 'es_EC',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
