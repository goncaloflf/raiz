import "./globals.css"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata = {
  title: "Raiz Barber Studio - Lisbon",
  description: "Premium barbershop services in the heart of Lisbon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}

