import { MetadataRoute } from "next";
import { baseURL } from "./data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api",
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
