import type { MetadataRoute } from "next";
import { allProjects } from "@/lib/projects";

const base = "https://alidanish.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: base, lastModified: now, priority: 1 },
    { url: `${base}/projects`, lastModified: now, priority: 0.8 },
    ...allProjects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}
