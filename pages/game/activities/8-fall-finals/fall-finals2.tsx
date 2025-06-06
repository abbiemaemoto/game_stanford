"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FallFinals2() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/wordle-game");
  };

  useEffect(() => {
    const audio = new Audio('/library.mp3');
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
          backgroundImage: "url('/fall-finals.png')",
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Let's play Wordle!
            </h1>
            
            {/* Points Information */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-400 rounded-2xl p-6 mb-8 shadow-lg">
              <p className="text-2xl font-bold text-blue-700 leading-relaxed">
                Everyone gets <span className="text-blue-400">Prodigy Points</span> based on the number of attempts it took (+6 for getting on first attempt, +1 for getting on 6th attempt)
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