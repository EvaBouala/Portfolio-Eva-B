import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Eva Bouala | Développeuse Web & Designer & chef de projet digital",
  description:
    "Portfolio d'Eva Bouala - Développeuse web passionnée par le design, créant des expériences digitales élégantes et performantes. Découvrez les projets de Eva B: développement web, design et solutions digitales innovantes.",
  generator: "v0.app",
  keywords:
    "Eva Bouala, Eva B, développeuse web, designer, portfolio, développement web",
  icons: {
    icon: "/images/icone.png",
    shortcut: "/images/icone.png",
    apple: "/images/icone.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
