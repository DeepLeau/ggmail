import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { LogoStrip } from '@/components/sections/LogoStrip'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { UseCases } from '@/components/sections/UseCases'
import { Features } from '@/components/sections/Features'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { CTABanner } from '@/components/sections/CTABanner'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Problem />
      <Solution />
      <UseCases />
      <Features />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  )
}
