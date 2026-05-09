import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsZoraTech from "@/components/WhatIsZoraTech";
import FeaturedApps from "@/components/FeaturedApps";
import UpcomingApps from "@/components/UpcomingApps";
import WhyWeBuild from "@/components/WhyWeBuild";
import JoinTheDawn from "@/components/JoinTheDawn";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
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
