import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"

import { PlatformsSection } from "@/components/platforms-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { RiskSection } from "@/components/risk-section"

import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PlatformsSection />
      <HowItWorksSection />
      <RiskSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
