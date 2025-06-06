"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Moon2() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/transition");
  };

  useEffect(() => {
    const audio = new Audio('/shine.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audio.play().catch(console.error);

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/moon.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight underline">
              NOSE GOES.
            </h1>
            
            {/* Game illustration */}
            <div className="flex justify-center items-center mb-8 space-x-4">
              <div className="text-4xl">✨</div>
              <div className="text-4xl">❤️</div>
              <div className="text-4xl">🌕</div>
            </div>

            {/* Consequences Section */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-400 rounded-2xl p-6 mb-8 shadow-lg">
              <p className="text-2xl font-bold text-red-700 leading-relaxed">
                Loser gets <span className="text-pink-400 font-bold">-1 Aura</span> & <span className="text-yellow-400 font-bold">-3 Health</span>, sorry. Gotta stay sharp.
              </p>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
              <p className="text-lg text-blue-800 font-medium">
                🎯 <strong>Physical Challenge:</strong> When someone says "Nose Goes," the last person to touch their nose loses!
              </p>
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