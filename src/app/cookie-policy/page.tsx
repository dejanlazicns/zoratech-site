import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cookie Policy — ZoraTech",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#0F1A2E]">
      <Navbar />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#F6C98F] text-xs font-medium tracking-widest uppercase mb-4">Legal</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-white/30 text-sm mb-12">Last updated: May 9, 2026</p>

          <div className="space-y-10 text-white/60 text-base leading-relaxed">

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">1. What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They allow the website to remember certain information about your visit.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">2. Cookies We Use</h2>
              <p>ZoraTech uses only essential technical cookies necessary for the website to function:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/50">
                <li><span className="text-white/70">cookie_consent</span> — remembers your cookie preference (Accept or Decline)</li>
              </ul>
              <p className="mt-3">This cookie does not collect any personal information. It exists solely to avoid showing the cookie banner on every page visit.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">3. What We Do Not Use</h2>
              <p>ZoraTech does not use:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/50">
                <li>Tracking or advertising cookies</li>
                <li>Google Analytics or any third-party analytics</li>
                <li>Social media tracking pixels</li>
                <li>Any form of behavioral profiling</li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">4. Your Choices</h2>
              <p>When you first visit ZoraTech, you will be presented with a cookie banner. You may:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/50">
                <li><span className="text-white/70">Accept</span> — allows the preference cookie to be stored</li>
                <li><span className="text-white/70">Decline</span> — no cookies will be stored beyond this session</li>
              </ul>
              <p className="mt-3">You can also clear cookies at any time through your browser settings.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">5. Contact</h2>
              <p>For any cookie-related questions, contact us at:</p>
              <p className="mt-3 font-medium text-[#F6C98F]">contact@zoratech.tech</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
