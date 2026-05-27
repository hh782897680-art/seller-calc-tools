import type { MetadataRoute } from "next";
import { calculators } from "@/data/calculators";
import { blogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ecomprofittools.com";
  const staticPages = [
    "",
    "/free-ecommerce-calculators",
    "/ai-tools-for-ecommerce-sellers",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];
  const calculatorPages = calculators.map(
    (calculator) => `/${calculator.slug}`,
  );
  const articlePages = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPages, ...calculatorPages, ...articlePages].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path.includes("calculator")
          ? 0.8
          : path.startsWith("/blog/")
            ? 0.6
            : 0.5,
  }));
}
