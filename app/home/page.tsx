
import HeroSection from '@/components/HeroSection'
import Cursor from '@/components/Cursor'
import SpecialSection from '@/components/SpecialSection'
import DocFeatured from '@/components/DocFeatured'
import ReasonSection from '@/components/ReasonSection'
import ServicesSection from '@/components/ServicesSection'
import FAQSection from '@/components/FaqSection'
import BookWithUs from '@/components/BookusSection'
import TestimonialSection from '@/components/TestimonialSection'
import CompanySection from '@/components/CompanySection'
import ArticleSection from '@/components/ArticleSection'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className="h-screen bg-white text-slate-900 pointer-events-none ">
     
      <HeroSection />
      <SpecialSection />
      <DocFeatured />
      
      <ReasonSection />

      
      <FAQSection />
      <TestimonialSection />
      <CompanySection />
      <ArticleSection />
      <Footer />
    </main>
  )
}
