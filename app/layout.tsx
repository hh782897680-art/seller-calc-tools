import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ecomprofittools.com"),
  verification: {
    google: "XeuV7TT5f4SAPYLKoCRzEIPcLEG0r8F25pIlf4AbNaY",
  },
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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5827463097117050"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen">
        <Header />
        <GoogleAnalytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
