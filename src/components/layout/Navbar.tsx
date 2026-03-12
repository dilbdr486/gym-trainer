"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Transformations", href: "/transformations" },
    { name: "Blog", href: "/blog" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="w-full bg-black border-b border-gray-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          FitTrainer
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Booking Button */}
        <Link
          href="/booking"
          className="hidden md:block bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-medium"
        >
          Book Session
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">

          <nav className="flex flex-col px-6 py-4 gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="bg-red-600 text-center py-2 rounded-lg mt-2"
            >
              Book Session
            </Link>

          </nav>

        </div>
      )}
    </header>
  )
}