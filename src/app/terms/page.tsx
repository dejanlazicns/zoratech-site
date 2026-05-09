import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — ZoraTech",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0F1A2E]">
      <Navbar />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#F6C98F] text-xs font-medium tracking-widest uppercase mb-4">Legal</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/30 text-sm mb-12">Last updated: May 9, 2026</p>

          <div className="space-y-10 text-white/60 text-base leading-relaxed">

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using zoratech.tech and any ZoraTech applications, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">2. Use of Services</h2>
              <p>ZoraTech grants you a limited, non-exclusive, non-transferable right to access and use our website and applications for personal or professional purposes. You agree not to misuse, reverse-engineer, or attempt to disrupt our services.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">3. Beta Applications</h2>
              <p>Several ZoraTech applications are currently in beta or development phase. By using beta applications, you acknowledge that:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/50">
                <li>Beta apps may contain bugs, errors, or incomplete features</li>
                <li>Functionality may change without notice</li>
                <li>ZoraTech is not liable for any loss, data corruption, or disruption caused by the use of beta-phase applications</li>
                <li>Beta status is clearly indicated on all relevant pages</li>
              </ul>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">4. Limitation of Liability</h2>
              <p>ZoraTech provides all services &quot;as is&quot; without warranties of any kind, express or implied. To the maximum extent permitted by law, ZoraTech shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">5. Intellectual Property</h2>
              <p>All content on zoratech.tech — including text, design, logos, and code — is the property of ZoraTech and may not be reproduced, distributed, or used without explicit written permission.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">6. Waitlist & Contact Forms</h2>
              <p>By submitting your email to a waitlist or contact form, you consent to being contacted by ZoraTech regarding the relevant application or inquiry. You may request removal at any time.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">7. Changes to Terms</h2>
              <p>ZoraTech reserves the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>
            </div>

            <div>
              <h2 className="font-playfair text-white text-xl font-semibold mb-3">8. Contact</h2>
              <p>For questions regarding these Terms, contact us at:</p>
              <p className="mt-3 font-medium text-[#F6C98F]">dejan797me@gmail.com</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
