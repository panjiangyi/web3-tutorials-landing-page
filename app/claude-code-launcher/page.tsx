import { BenefitsSection } from "@/components/claude-code-launcher/benefits-section"
import { DemoSection } from "@/components/claude-code-launcher/demo-section"
import { FeaturesSection } from "@/components/claude-code-launcher/features-section"
import { Footer } from "@/components/claude-code-launcher/footer"
import { HeroSection } from "@/components/claude-code-launcher/hero-section"
import { InstallSection } from "@/components/claude-code-launcher/install-section"
import { PainPointsSection } from "@/components/claude-code-launcher/pain-points-section"

export default function ClaudeCodeLauncherPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <DemoSection />
      <BenefitsSection />
      <InstallSection />
      <Footer />
    </main>
  )
}
