import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold mb-8">Ready to Improve Your Blackjack Skills?</h2>
          <Button size="lg">Get Started Now</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}