"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dunch2() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/transition");
  };

  useEffect(() => {
    const audio = new Audio('/ksig.mp3');
    audio.volume = 0.7;
    audio.loop = true;
    
    // Function to start playing from 1 minute in
    const playFromOneMinute = () => {
      audio.currentTime = 60; // Start at 60 seconds (1 minute)
      audio.play().catch(console.error);
    };

    // Wait for metadata to load to ensure we can set currentTime
    audio.addEventListener('loadedmetadata', playFromOneMinute);
    
    // If already loaded, play immediately
    if (audio.readyState >= 1) {
      playFromOneMinute();
    }

    return () => {
      audio.removeEventListener('loadedmetadata', playFromOneMinute);
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
          backgroundImage: "url('/dunch.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-10 max-w-5xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            {/* Sparkle emojis */}
            <div className="flex justify-center items-center mb-6 space-x-4">
              <div className="text-4xl">✨</div>
              <div className="text-4xl">✨</div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
              FOR THE TWO players with the lowest aura... now's your chance to redeem yourself.
            </h1>
            
            {/* Dance Options */}
            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-xl p-4">
                <p className="text-xl font-bold text-green-700">
                  1. Give us your best "nae nae": +3 aura
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-400 rounded-xl p-4">
                <p className="text-xl font-bold text-blue-700">
                  2. Give us your best "whip": +2 aura
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-400 rounded-xl p-4">
                <p className="text-xl font-bold text-purple-700">
                  3. Give us your best "dab": +1 aura
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-400 rounded-xl p-4">
                <p className="text-xl font-bold text-orange-700">
                  4. Give us your best "frat flick": +1 aura
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-400 rounded-xl p-4">
                <p className="text-xl font-bold text-red-700">
                  OR.... Refuse to dance: -10 aura
                </p>
              </div>
            </div>

            {/* Bonus Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-400 rounded-xl p-6 mb-8">
              <p className="text-lg font-medium text-yellow-800">
                & share your borg name for an extra +1 Prodigy Point :)
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