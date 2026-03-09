import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "greenline — Natürlich ist die beste Wahl",
    template: "%s — greenline Naturprodukte",
  },
  description:
    "Ökologischer Fachgroßhandel für wohngesunde Raumgestaltung. Teppichböden, Korkparkett, Wandgestaltung, Innendämmung, Öle & Wachse — seit über 20 Jahren.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
