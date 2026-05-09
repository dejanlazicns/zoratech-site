import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apps } from "@/lib/apps-data";

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
