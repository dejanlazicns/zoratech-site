import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const apps = [
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
];

export function generateStaticParams() {
  return apps.map((app) => ({ id: app.id }));
}

export default function AppDetailPage({ params }: { params: { id: string } }) {
  const app = apps.find((a) => a.id === params.id);
  if (!app) notFound();

  return (
    <main className="min-h-screen bg-[#0F1A2E]">
      <Navbar />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/apps" className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#F6C98F] transition-colors duration-300 mb-12">
            ← Back to Apps
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-6xl">{app.icon}</span>
            {app.status === "live" ? (
              <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-green-400/40 text-green-400 bg-green-400/10">
                Live
              </span>
            ) : (
              <span className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-[#F6C98F]/40 text-[#F6C98F] bg-[#F6C98F]/10">
                Coming Soon
              </span>
            )}
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">{app.name}</h1>
          <p className="text-[#F6C98F] text-sm font-medium tracking-widest uppercase mb-8">{app.category}</p>
          <p className="text-white/70 text-lg leading-relaxed mb-12">{app.longDescription}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            {app.status === "live" ? (
              <a href={app.downloadUrl ?? "#"} target="_blank" rel="noopener noreferrer">
                <button type="button" className="px-8 py-4 bg-[#F6C98F] text-[#0F1A2E] font-semibold rounded-full text-sm tracking-wide hover:bg-[#FAD7C4] transition-all duration-300">
                  Open App
                </button>
              </a>
            ) : (
              <button type="button" disabled className="px-8 py-4 bg-white/5 text-white/25 text-sm font-medium rounded-full cursor-not-allowed">
                Coming Soon
              </button>
            )}
            <Link href="/apps">
              <button type="button" className="px-8 py-4 border border-white/10 text-white/50 text-sm font-medium rounded-full hover:border-[#F6C98F]/40 hover:text-[#F6C98F] transition-all duration-300">
                View All Apps
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
