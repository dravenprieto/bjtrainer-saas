'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'  // Import the Navbar component

export default function AuthPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    try {
      let result;
      if (isLogin) {
        result = await supabase.auth.signInWithPassword({ email, password })
      } else {
        result = await supabase.auth.signUp({ email, password })
      }
      
      if (result.error) throw result.error
      
      if (isLogin) {
        router.push('/profile')
      } else {
        setErrorMsg('Signup successful! Please check your email to confirm your account.')
      }
    } catch (error) {
      console.error('Error:', error)
      setErrorMsg(`Failed to ${isLogin ? 'sign in' : 'sign up'}. Please try again.`)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />  {/* Add the Navbar component here */}
      <div className="flex-grow flex flex-col items-center justify-center py-2">
        <h1 className="text-4xl font-bold mb-8">{isLogin ? 'Login' : 'Sign Up'}</h1>
        
        {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
        
        <form onSubmit={handleAuth} className="w-full max-w-md">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <Button type="submit" className="w-full mb-4">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>

        <p className="mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Button
            variant="link"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </Button>
        </p>
      </div>
    </div>
  )
}