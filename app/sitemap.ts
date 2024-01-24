import { MetadataRoute } from "next";
import { baseURL, pageLinks } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageLinks.map((page) => {
    return {
      url: `${baseURL}${page.href === "/" ? "" : page.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page.name === "Home" ? 1 : 0.5,
    };
  });
}
