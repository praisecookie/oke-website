import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Importing the Navbar
import Footer from "../components/Footer"; // Importing the Footer

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oke Orhosere | Ventures, Fintech & AI",
  description: "Oke Orhosere: Fintech Founder, Venture Capitalist, and AI Automation Architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col pt-20">
        <Navbar /> {/* Injecting the Navbar here */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer /> {/* Injecting the Footer here */}
      </body>
    </html>
  );
}