import { Hero } from "@/components/landing/hero"
import { PainPoints } from "@/components/landing/pain-points"
import { Curriculum } from "@/components/landing/curriculum"
import { TechStack } from "@/components/landing/tech-stack"
import { Instructor } from "@/components/landing/instructor"
import { Testimonials } from "@/components/landing/testimonials"
import { WhySevenDays } from "@/components/landing/why-seven-days"
import { Pricing } from "@/components/landing/pricing"
import { Urgency } from "@/components/landing/urgency"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <PainPoints />
      <Curriculum />
      <TechStack />
      <Instructor />
      <Testimonials />
      <WhySevenDays />
      <Pricing />
      <Urgency />
      <FinalCTA />
      <Footer />
    </main>
  )
}
