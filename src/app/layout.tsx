import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "OurNyxus — We Build. We Launch. We Grow.",
  description: "OurNyxus builds the latest SaaS products and premium websites — designed, deployed, managed, and grown.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis lenis-smooth" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans antialiased bg-white text-black min-h-screen flex flex-col")} suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
