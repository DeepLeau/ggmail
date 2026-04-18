import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { LogoStrip } from '@/components/sections/LogoStrip'
import { Problem } from '@/components/sections/Problem'
import { Features } from '@/components/sections/Features'
import { UseCases } from '@/components/sections/UseCases'
import { Integrations } from '@/components/sections/Integrations'
import { Pricing } from '@/components/sections/Pricing'
import { CTABanner } from '@/components/sections/CTABanner'
import { Footer } from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main>
      {/* Ticker bar — global ambient element */}
      <div
        className="fixed bottom-0 left-0 w-full h-[36px] z-[9997] overflow-hidden items-center pointer-events-none border-t hidden md:flex"
        style={{ background: 'var(--surface-1)', borderColor: 'var(--border)' }}
      >
        <div className="flex whitespace-nowrap animate-ticker font-mono text-xs tracking-[0.06em] text-[var(--text-2)]">
          <span className="mx-4">TRAVEL <span className="text-[var(--amber)]">$2,841</span> //</span>
          <span className="mx-4">SOFTWARE <span className="text-[var(--amber)]">$14,290</span> //</span>
          <span className="mx-4">MARKETING <span className="text-[var(--amber)]">$8,402</span> //</span>
          <span className="mx-4">MEALS <span className="text-[var(--amber)]">$1,204</span> //</span>
          <span className="mx-4">CONTRACTORS <span className="text-[var(--amber)]">$31,800</span> //</span>
          <span className="mx-4">EQUIPMENT <span className="text-[var(--amber)]">$6,100</span> //</span>
          {/* Duplicate for seamless loop */}
          <span className="mx-4">TRAVEL <span className="text-[var(--amber)]">$2,841</span> //</span>
          <span className="mx-4">SOFTWARE <span className="text-[var(--amber)]">$14,290</span> //</span>
          <span className="mx-4">MARKETING <span className="text-[var(--amber)]">$8,402</span> //</span>
          <span className="mx-4">MEALS <span className="text-[var(--amber)]">$1,204</span> //</span>
          <span className="mx-4">CONTRACTORS <span className="text-[var(--amber)]">$31,800</span> //</span>
          <span className="mx-4">EQUIPMENT <span className="text-[var(--amber)]">$6,100</span> //</span>
        </div>
      </div>

      <Navbar />
      <Hero />
      <LogoStrip />
      <Problem />
      <Features />
      <UseCases />
      <Integrations />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  )
}
