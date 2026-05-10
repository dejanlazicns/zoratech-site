import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — ZoraTech",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0F1A2E]">
      <Navbar />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#F6C98F] text-xs font-medium tracking-widest uppercase mb-4">Legal</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/30 text-sm mb-12">Last updated: May 9, 2026</p>

          <div className="space-y-10 text-white/60 text-base leading-relaxed">

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">1. What We Collect</h2>
              <p>ZoraTech collects only the information you voluntarily provide:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/50">
                <li>Email addresses submitted through waitlist forms</li>
                <li>Name, email, category, and message submitted through the contact form</li>
              </ul>
              <p className="mt-3">We do not collect any data passively — no tracking pixels, no behavioral profiling, no device fingerprinting.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">2. How We Use Your Data</h2>
              <p>Your data is used exclusively for the following purposes:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/50">
                <li>Notifying waitlist subscribers when their requested app launches</li>
                <li>Responding to contact form inquiries</li>
              </ul>
              <p className="mt-3">We will never use your email address for unsolicited marketing or share it with third parties for advertising purposes.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">3. Data Sharing</h2>
              <p>We do not sell, rent, or share your personal data with any third parties. Your information stays with ZoraTech and is stored securely in our database (Supabase, hosted in the EU).</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">4. GDPR Compliance</h2>
              <p>ZoraTech is committed to compliance with the General Data Protection Regulation (GDPR). Under GDPR, you have the following rights:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/50">
                <li><span className="text-white/70">Right of access</span> — request a copy of the data we hold about you</li>
                <li><span className="text-white/70">Right to rectification</span> — request correction of inaccurate data</li>
                <li><span className="text-white/70">Right to erasure</span> — request complete deletion of your data</li>
                <li><span className="text-white/70">Right to object</span> — object to the processing of your data</li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">5. Data Deletion Requests</h2>
              <p>To request deletion of your personal data, contact us at:</p>
              <Link href="/contact" className="mt-3 font-medium text-[#F6C98F] hover:underline underline-offset-4 block">contact@zoratech.tech</Link>
              <p className="mt-3">We will process all deletion requests within 30 days.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">6. Data Retention</h2>
              <p>Waitlist emails are retained until the corresponding app launches or until you request deletion. Contact form submissions are retained for up to 12 months.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">7. Contact</h2>
              <p>For any privacy-related questions, contact us at:</p>
              <Link href="/contact" className="mt-3 font-medium text-[#F6C98F] hover:underline underline-offset-4 block">contact@zoratech.tech</Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
