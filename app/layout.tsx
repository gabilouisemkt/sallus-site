import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sallus Esmalteria | Beleza em cada detalhe",
  description:
    "Unhas, cílios, sobrancelhas e harmonização podal em uma experiência elegante e acolhedora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#050505] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}