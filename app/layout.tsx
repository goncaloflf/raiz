import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Raiz Barber Studio - O teu estilo começa na Raiz!",
  description:
    "Na Raiz, acreditamos que cada detalhe importa. Combinamos técnicas clássicas de barbearia com um toque contemporâneo, oferecendo uma experiência única e personalizada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
