"use client"

import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Body <br /> With Professional Training
          </h1>

          <p className="text-gray-300 mb-6 text-lg md:text-xl">
            Personalized workout programs, expert coaching, and full support to reach your fitness goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/booking"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Book a Session
            </Link>

            <Link
              href="/about"
              className="border border-red-600 hover:border-red-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full h-80 md:h-125">
          <Image
            src="/images/hero-fitness.jpg" // Add a professional gym image here
            alt="Hero Fitness"
            fill
            className="object-cover rounded-lg shadow-2xl"
          />
        </div>

      </div>

      {/* Background Overlay (optional) */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

    </section>
  )
}