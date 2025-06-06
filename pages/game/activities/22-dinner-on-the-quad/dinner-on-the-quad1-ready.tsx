"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DinnerOnTheQuadReady() {
  const router = useRouter();

  const handleReady = () => {
    router.push("/game/activities/22-dinner-on-the-quad/dinner-on-the-quad2");
  };

  useEffect(() => {
    const audio = new Audio('/countdown.mp3');
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
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl border border-white/20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Get Ready...
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Speed is everything. Are you ready to claim your table?
          </p>
        </div>
      </div>


      {/* Ready Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-xl font-bold shadow-lg animate-pulse"
          onClick={handleReady}
        >
          Ready!
        </Button>
      </div>
    </div>
  );
} 