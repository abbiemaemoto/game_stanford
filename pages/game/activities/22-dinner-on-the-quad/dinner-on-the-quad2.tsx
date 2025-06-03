"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DinnerOnTheQuad2() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/transition");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/dinner-on-the-quad2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 max-w-5xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            {/* Sparkle emojis */}
            <div className="flex justify-center items-center mb-6 space-x-4">
              <div className="text-4xl">✨</div>
              <div className="text-4xl">✨</div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-8 leading-tight">
              First person to slap the table<br />
              claims the last seat at the table.
            </h1>
                        {/* Table illustration */}
                        <div className="flex justify-center items-center mb-8">
              <div className="relative">
                <div className="text-8xl">🍽️</div>
                <div className="absolute -top-2 -right-2 text-5xl animate-pulse">👋</div>
              </div>
            </div>
                        {/* Action text */}
                        <div className="bg-gradient-to-r from-yellow-50/80 to-amber-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
              <p className="text-xl font-bold text-yellow-800">
                Ready... Set... SLAP! 🤚
              </p>
            </div>
            {/* Points Section */}
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-green-50/80 to-emerald-50 border-2 border-green-400 rounded-xl p-6">
                <p className="text-2xl font-bold text-green-700">
                  +2 Aura for the first person for being speedy!
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-red-50/80 to-pink-50 border-2 border-red-400 rounded-xl p-6">
                <p className="text-2xl font-bold text-red-700">
                  -2 Aura for everyone else for being late to the party
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
} 