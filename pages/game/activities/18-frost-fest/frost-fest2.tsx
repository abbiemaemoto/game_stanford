"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FrostFest2() {
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
          backgroundImage: "url('/frost-fest2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white/70 mb-8 leading-tight">
              The song is...
            </h1>
            
            <h2 className="text-4xl md:text-5xl font text-white/90 mb-8 leading-tight">
              <b>Viva La Vida</b> by Coldplay... 
              <br/>
              the perfect sentimental song to round off your college days.
            </h2>
            <h3 className="text-xl md:text-md font-medium text-white/90 mb-8 leading-relaxed"> if you got it right...</h3>
            {/* Sparkle emojis and aura points */}
            <div className="flex justify-center items-center mb-8 space-x-4">
              <div className="text-4xl">✨</div>
              <div className="text-2xl font-bold text-yellow-200">+2 Aura Points for being able to sing along</div>
              <div className="text-4xl">✨</div>
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