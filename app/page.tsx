import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Cursor from '@/components/Cursor'
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pointer-events-none mix-blend-normal">
      <Cursor />
      <HeroSection />
    </main>
  )
}
