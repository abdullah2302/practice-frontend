
import HeroSection from '@/components/HeroSection'
import Cursor from '@/components/Cursor'
import SpecialSection from '@/components/SpecialSection'
import DocFeatured from '@/components/DocFeatured'
import ReasonSection from '@/components/ReasonSection'
import ServicesSection from '@/components/ServicesSection'
import FAQSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pointer-events-none ">
      
      <HeroSection />
        <SpecialSection />
        <DocFeatured />
          <ServicesSection />
        <ReasonSection />
      <FAQSection />
        <Footer />
    </main>
  )
}
