"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/referscout_logo-DL4Wq6N0nDfubHr4dJ8QutbPH6Npit.png"
              alt="ReferScout Logo"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </a>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Testimonials
          </a>
        </nav>
        <div className="hidden md:flex md:items-center md:gap-4">
          <a href="#contact" className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Login
          </a>
          <a href="#demo" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Request Demo
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <a
              href="#features"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="#contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="#demo"
                className="block rounded-md bg-blue-600 px-3 py-2 text-center text-base font-medium text-white hover:bg-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
