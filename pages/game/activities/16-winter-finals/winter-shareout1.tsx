"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WinterShareout1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/16-winter-finals/winter-shareout2");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with winter to spring transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-100" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">❄️</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">🌸</div>
        <div className="absolute bottom-32 left-20 text-3xl animate-bounce">🌴</div>
        <div className="absolute top-60 right-10 text-4xl animate-pulse">☀️</div>
        <div className="absolute bottom-20 right-32 text-3xl animate-bounce">🌺</div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-blue-200">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 leading-tight">
              Winter Quarter is over &<br />
              spring break is right around the corner...
            </h1>

            {/* Winter to Spring transition illustration */}
            <div className="flex justify-center items-center mb-8 space-x-8">
              <div className="relative">
                <div className="text-6xl">❄️</div>
                <div className="absolute -bottom-2 -right-2 text-2xl">→</div>
              </div>
              <div className="text-6xl">🌴</div>
            </div>

            {/* Reflection Sign */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-400 rounded-2xl p-6 mb-8 shadow-lg max-w-md mx-auto">
              <div className="text-amber-800 font-bold text-xl">Time to Reflect!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-lg"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
} 