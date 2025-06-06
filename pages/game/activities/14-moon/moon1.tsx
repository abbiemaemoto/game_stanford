"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Moon1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/14-moon/moon2");
  };

  useEffect(() => {
    const audio = new Audio('/kids.mp3');
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              ITS FULL MOON ON THE QUAD TONIGHT
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 leading-relaxed">
              Your entire friend group goes ham at FMOTQ.. But unfortunately only one of you gets mono... who is it?
            </h2>

            {/* Moon Emoji */}
            <div className="flex justify-center items-center mb-8">
              <div className="text-6xl">🌕</div>
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
