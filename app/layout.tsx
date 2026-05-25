import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecomprofittools.com"),
  title: "Ecom Profit Tools",
  description:
    "Free ecommerce and business calculators for sellers, marketers, and small business owners.",
  applicationName: "Ecom Profit Tools",
  icons: {
    icon: "/brand-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
