import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ClosingSection } from "@/components/ClosingSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Image
        src="/logo.png"
        alt="Autotabs logo"
        width={64}
        height={64}
        className="mx-auto mt-6"
      />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      {/* <SocialProofSection /> */}
      <ClosingSection />
      <Footer />
    </main>
  );
}
