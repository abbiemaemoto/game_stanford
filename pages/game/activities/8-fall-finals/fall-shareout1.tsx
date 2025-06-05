"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function FallShareout1() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.75;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) =>
        console.warn("Autoplay blocked:", err)
      );
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleContinue = () => {
    router.push("/game/activities/8-fall-finals/fall-shareout2");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Audio */}
      <audio ref={audioRef} src="/transition.mp3" hidden preload="auto" />

      {/* Background with fall colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100" />
      
      {/* Decorative fall elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🍂</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">🍁</div>
        <div className="absolute bottom-32 left-20 text-3xl animate-bounce">🍂</div>
        <div className="absolute top-60 right-10 text-4xl animate-pulse">🍁</div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-orange-200">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-8 leading-tight">
              Fall Quarter is<br />
              coming to an end!
            </h1>

            {/* Fall tree illustration */}
            <div className="flex justify-center items-center mb-8">
              <div className="relative">
                <div className="text-8xl">🌳</div>
                <div className="absolute -top-4 -left-2 text-3xl">🍂</div>
                <div className="absolute -top-2 -right-4 text-2xl">🍁</div>
                <div className="absolute -bottom-2 left-8 text-2xl">🍂</div>
              </div>
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
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-5 text-lg"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
