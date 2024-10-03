import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center text-lg font-semibold text-gray-900 hover:text-gray-700">
              Blackjack Trainer
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/login" passHref>
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/pricing" passHref>
              <Button variant="outline" className="ml-4">Pricing</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}