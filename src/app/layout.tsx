import "@/app/globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "Gym Trainer Platform",
  description: "Professional Fitness Trainer Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}