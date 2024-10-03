import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <Link href="/" className="text-xl font-bold">
        Blackjack Trainer
      </Link>
      <div className="space-x-4">
        <Link href="/pricing">Pricing</Link>
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/login">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </nav>
  )
}