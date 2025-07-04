"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dunch1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/20-dunch/dunch2");
  };
  useEffect(() => {
    const audio = new Audio('/ksig.mp3');
    audio.loop = true;
    audio.volume = 0.5;
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
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              HAPPY DUNCH!!!
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              Grab your borg and let's DANCEEE!
            </h2>

            {/* Dancing Emoji */}
            <div className="flex justify-center items-center mb-8">
              <div className="text-6xl">🕺💃</div>
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
