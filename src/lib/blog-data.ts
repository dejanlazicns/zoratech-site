export type BlogCategory = "Dev Log" | "App Updates" | "Philosophy" | "Behind the Scenes";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  date: string;
  description: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-built-zoratech-at-55",
    title: "Why I Built ZoraTech at 55",
    category: "Philosophy",
    date: "May 5, 2026",
    description: "A car mechanic. A late start. A clear mission. This is the story of how a life spent working with hands led to building technology for people.",
  },
  {
    slug: "iva-companion-first-100-users",
    title: "IVA Companion: First 100 Users",
    category: "App Updates",
    date: "April 18, 2026",
    description: "What we learned from the first hundred people who welcomed IVA into their daily lives — and what comes next.",
  },
  {
    slug: "what-car-mechanics-taught-me-about-software",
    title: "What Car Mechanics Taught Me About Software",
    category: "Behind the Scenes",
    date: "March 30, 2026",
    description: "Every engine has a logic. Every system has a rhythm. Here's how thirty years under the hood shaped the way ZoraTech thinks about design.",
  },
];
