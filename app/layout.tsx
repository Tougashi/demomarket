import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NadinSportwear - Jersey & Sportswear Terlengkap",
  description: "Temukan koleksi jersey dan sportswear terbaru dari brand ternama seperti Nike, Adidas, Puma, dan lainnya. Gratis ongkir se-Indonesia!",
  keywords: "jersey, sportswear, nike, adidas, puma, nadinsportwear, indonesia, baju olahraga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
