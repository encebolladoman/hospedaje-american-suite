import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Hospedaje American Suites | Cerca del Consulado de Estados Unidos en Guayaquil',
  description: 'Hospedaje seguro y comodo en Guayaquil, Ecuador. Ubicado a solo 8 minutos caminando del Consulado de Estados Unidos. Suites con aire acondicionado, WiFi y bano privado.',
  keywords: 'hospedaje guayaquil, hotel cerca consulado estados unidos, alojamiento guayaquil, hospedaje american suites, visa americana guayaquil',
  openGraph: {
    title: 'Hospedaje American Suites | Cerca del Consulado de Estados Unidos',
    description: 'Hospedaje seguro y comodo a 8 minutos del Consulado de Estados Unidos en Guayaquil',
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
    <html lang="es" className="scroll-smooth bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
