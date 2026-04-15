import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Cursor from '@/components/Cursor'
import SpecialSection from '@/components/SpecialSection'
import SocialStrip from '@/components/SocialStrip'
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pointer-events-none ">
      
      <HeroSection />
        <SpecialSection />
    </main>
  )
}
