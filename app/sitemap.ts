import type { MetadataRoute } from "next";
import { calculators } from "@/data/calculators";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ecomprofittools.com";
  const staticPages = ["", "/blog", "/about", "/privacy-policy", "/terms"];
  const calculatorPages = calculators.map(
    (calculator) => `/${calculator.slug}`,
  );

  return [...staticPages, ...calculatorPages].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("calculator") ? 0.8 : 0.5,
  }));
}
