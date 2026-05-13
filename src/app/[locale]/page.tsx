import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsZoraTech from "@/components/WhatIsZoraTech";
import FeaturedApps from "@/components/FeaturedApps";
import UpcomingApps from "@/components/UpcomingApps";
import WhyWeBuild from "@/components/WhyWeBuild";
import JoinTheDawn from "@/components/JoinTheDawn";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZoraTech",
  url: "https://zoratech.tech",
  logo: "https://zoratech.tech/logo.png",
  description:
    "ZoraTech creates digital systems that bring clarity, warmth and intelligence into everyday life.",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <WhatIsZoraTech />
      <FeaturedApps />
      <UpcomingApps />
      <WhyWeBuild />
      <JoinTheDawn />
      <Footer />
    </main>
  );
}
