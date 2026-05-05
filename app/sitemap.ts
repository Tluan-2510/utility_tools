import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://utility-tools-hub.vercel.app"; // Replace with your production domain

  const tools = [
    "base64-converter",
    "case-converter",
    "image-to-webp",
    "lorem-ipsum-generator",
    "password-generator",
    "sql-formatter",
    "word-counter",
  ];

  const toolEntries = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const mainPages = [
    "",
    "/tools",
    "/blog",
    "/about",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const mainEntries = mainPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1 : 0.5,
  }));

  return [...mainEntries, ...toolEntries];
}
