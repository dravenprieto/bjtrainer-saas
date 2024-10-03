import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="text-center py-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Master Blackjack with Our Trainer</h1>
      <p className="text-xl mb-8">Improve your skills and increase your chances of winning!</p>
      <Button size="lg">Get Started</Button>
    </div>
  )
}