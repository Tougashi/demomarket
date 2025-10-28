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
  authors: [{ name: "NadinSportwear" }],
  creator: "NadinSportwear",
  publisher: "NadinSportwear",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nadinsportwear.com",
    siteName: "NadinSportwear",
    title: "NadinSportwear - Jersey & Sportswear Terlengkap",
    description: "Temukan koleksi jersey dan sportswear terbaru dari brand ternama seperti Nike, Adidas, Puma, dan lainnya. Gratis ongkir se-Indonesia!",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "NadinSportwear Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NadinSportwear - Jersey & Sportswear Terlengkap",
    description: "Temukan koleksi jersey dan sportswear terbaru dari brand ternama seperti Nike, Adidas, Puma, dan lainnya. Gratis ongkir se-Indonesia!",
    images: ["/logo2.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-icon-36x36.png", sizes: "36x36", type: "image/png" },
      { url: "/android-icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/android-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/android-icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-config": "/browserconfig.xml",
  },
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
