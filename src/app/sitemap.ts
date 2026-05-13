import { MetadataRoute } from "next";
import { apps } from "@/lib/apps-data";

const BASE_URL = "https://zoratech.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "",       priority: 1.0 },
    { path: "/apps",      priority: 0.9 },
    { path: "/upcoming",  priority: 0.8 },
    { path: "/about",     priority: 0.7 },
    { path: "/blog",      priority: 0.7 },
    { path: "/contact",   priority: 0.6 },
  ];

  const staticRoutes = staticPages.flatMap(({ path, priority }) => [
    {
      url: `${BASE_URL}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    },
    {
      url: `${BASE_URL}/sr${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    },
  ]);

  const appRoutes = apps.flatMap((app) => [
    {
      url: `${BASE_URL}/apps/${app.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/sr/apps/${app.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);

  return [...staticRoutes, ...appRoutes];
}
