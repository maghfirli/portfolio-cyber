import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",

      allow: "/",
    },

    sitemap: "https://portfolio-cyber-lyart.vercel.app/sitemap.xml",
  };
}
