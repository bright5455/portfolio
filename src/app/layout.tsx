import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import { personal } from "@/data/portfolio";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://anwanga-abasi-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personal.name} | Backend Developer`,
  description: personal.tagline,
  keywords: [
    "Backend Developer",
    "NestJS Developer",
    "Node.js Developer",
    "API Engineer",
    "TypeScript",
    personal.name,
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} | Backend Developer`,
    description: personal.tagline,
    url: siteUrl,
    siteName: personal.name,
    type: "website",
    images: [{ url: "/images/profile.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} | Backend Developer`,
    description: personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-off-white selection:bg-gold">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
