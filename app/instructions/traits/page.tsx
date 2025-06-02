"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TraitsInstructionsPage() {
  const router = useRouter()

  const handleContinue = () => {
    router.push("/instructions/final-instructions")
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%201%2C%202025%2C%2012_28_43%20PM-nmClUBhfDONnTrrPDopABrXDiBu017.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Back Button */}
      <div className="absolute top-3 left-3 z-10">
        <Link href="/instructions/final">
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/80 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
      </div>

      {/* White Overlay in Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-3.5/5 h-3.5/5 bg-white rounded-lg relative flex flex-col justify-between p-8"
          style={{ opacity: 0.95 }}
        >
          {/* Main Text */}
          <div className="flex-1 flex items-center justify-center">
            <p className="text-3xl text-gray-1000 text-center leading-relaxed max-w-3xl">
              Along the way, you'll collect Aura, Health, and Prodigy points - three traits that shape your choices,
              unlock surprises, and define your Stanford experience... maybe even who you are.
            </p>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg" onClick={handleContinue}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
