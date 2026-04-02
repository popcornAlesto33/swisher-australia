import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Swishers Go Down Under",
  description:
    "A personalized travel itinerary for the Swisher family's Australian adventure — November 2026",
  metadataBase: new URL("https://swisher-au.vercel.app"),
  openGraph: {
    title: "The Swishers Go Down Under",
    description:
      "17 days across Sydney, Tasmania, the coast, and a wedding in Kangaroo Valley",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <div id="main-content" className="pt-16 flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
