import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Suhain | Boutique Fragrances & Luxury Scents",
  description: "Experience the essence of luxury with Suhain's curated collection of premium perfumes and fragrances.",
  keywords: ["perfume", "fragrance", "luxury", "boutique", "scents", "Suhain"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
