import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-2">FitTrainer</h2>
          <p className="text-gray-400">
            Transform your body with professional fitness coaching.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Social */}
        <div>
          <p className="mb-2 font-semibold">Follow Us</p>
          <p className="text-gray-400">
            Instagram • YouTube • Facebook
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 pb-6">
        © {new Date().getFullYear()} FitTrainer. All rights reserved.
      </div>

    </footer>
  )
}