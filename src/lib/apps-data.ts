export type AppStatus = "live" | "upcoming";

export type App = {
  id: string;
  icon: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  status: AppStatus;
  downloadUrl: string | null;
};

export const apps: App[] = [
  {
    id: "iva-companion",
    icon: "✨",
    name: "IVA Companion",
    description: "Your intelligent virtual assistant. Always there, always warm, always human.",
    longDescription: "IVA Companion is more than an assistant — she is a presence. Designed with warmth and intelligence, IVA helps you organize your thoughts, manage your day, and feel less alone in the digital world.",
    category: "AI",
    status: "live",
    downloadUrl: "#",
  },
  {
    id: "repuradar",
    icon: "📡",
    name: "RepuRadar",
    description: "AI reputation monitor for small businesses. Never miss a review again.",
    longDescription: "RepuRadar uses AI to monitor your business reputation across all major platforms in real time. Get instant alerts, sentiment analysis, and actionable insights — so you can respond fast and build trust that lasts.",
    category: "AI",
    status: "upcoming",
    downloadUrl: null,
  },
  {
    id: "caresync",
    icon: "🏥",
    name: "CareSync",
    description: "Family care coordinator for elderly loved ones. Stay connected, stay informed.",
    longDescription: "CareSync brings the whole family together around the care of elderly loved ones. Coordinate appointments, share updates, track medications, and stay connected — all in one calm and simple space.",
    category: "Health",
    status: "upcoming",
    downloadUrl: null,
  },
  {
    id: "grantpilot",
    icon: "📋",
    name: "GrantPilot",
    description: "AI assistant for writing and managing grants. Save 30 hours per application.",
    longDescription: "GrantPilot is your AI co-writer for grant applications. It understands your organization, finds matching opportunities, and helps you craft compelling proposals — cutting down application time from weeks to hours.",
    category: "Productivity",
    status: "upcoming",
    downloadUrl: null,
  },
  {
    id: "kidtrack",
    icon: "👧",
    name: "KidTrack",
    description: "Gamified habit tracker for kids. Make good habits fun and rewarding.",
    longDescription: "KidTrack turns everyday habits into adventures. Kids earn points, unlock rewards, and level up as they build healthy routines. Parents stay in the loop with gentle progress reports — no stress, just growth.",
    category: "Tools",
    status: "upcoming",
    downloadUrl: null,
  },
  {
    id: "veles",
    icon: "🌿",
    name: "Veles",
    description: "AI garden architect. Grow smarter, grow healthier, grow organic.",
    longDescription: "Veles is your personal AI garden guide. Tell it your space, your soil, your climate — and it designs your perfect garden. From planting schedules to pest control, Veles helps you grow with confidence.",
    category: "AI",
    status: "upcoming",
    downloadUrl: null,
  },
];

export const liveApps = apps.filter((a) => a.status === "live");
export const upcomingApps = apps.filter((a) => a.status === "upcoming");
