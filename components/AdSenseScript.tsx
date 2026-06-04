"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const adEnabledPathnames = new Set([
  "/",
  "/free-ecommerce-calculators",
  "/ai-tools-for-ecommerce-sellers",
  "/blog",
  "/shopify-profit-calculator",
  "/etsy-fee-calculator",
  "/amazon-fba-profit-calculator",
  "/profit-margin-calculator",
  "/markup-calculator",
  "/roi-calculator",
  "/roas-calculator",
  "/break-even-calculator",
  "/paypal-fee-calculator",
  "/stripe-fee-calculator",
  "/ebay-fee-calculator",
  "/tiktok-shop-profit-calculator",
  "/woocommerce-profit-calculator",
  "/shopify-fee-calculator",
  "/etsy-profit-calculator",
  "/amazon-referral-fee-calculator",
  "/ebay-promoted-listing-fee-calculator",
  "/tiktok-shop-fee-calculator",
]);

function normalizePathname(pathname: string | null): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
}

export default function AdSenseScript() {
  const pathname = normalizePathname(usePathname());
  const shouldLoadAdSense =
    adEnabledPathnames.has(pathname) || pathname.startsWith("/blog/");

  if (!shouldLoadAdSense) {
    return null;
  }

  return (
    <Script
      id="adsense-script"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5827463097117050"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
