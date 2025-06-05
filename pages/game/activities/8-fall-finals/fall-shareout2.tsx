"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function FallShareout2() {
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

  const handleStartWinterQuarter = () => {
    router.push("/game/transition");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Audio */}
      <audio ref={audioRef} src="/autumn_music.mp3" hidden preload="auto" />

      {/* Background with fall colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100" />
      
      {/* Decorative fall elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 text-3xl animate-bounce">🍂</div>
        <div className="absolute bottom-20 left-10 text-4xl animate-pulse">🍁</div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 max-w-5xl mx-auto shadow-2xl border border-orange-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-8 leading-tight">
              It's starting to hit you that you're one quarter into<br />
              your final year at Stanford...
            </h1>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-400 rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                Everyone share:
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-amber-800 leading-relaxed">
                What are you most grateful for<br />
                about Stanford?
              </p>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-4xl">🙏</div>
              <div className="text-4xl">❤️</div>
              <div className="text-4xl">🏛️</div>
            </div>

            {/* Gratitude prompts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="text-sm text-orange-700">💡 Maybe it's the professors who changed your perspective...</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-700">🤝 Or the friends who became your chosen family...</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-yellow-700">🌟 The opportunities that opened doors...</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="text-sm text-orange-700">🏠 The place that became home...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Winter Quarter Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-lg shadow-lg"
          onClick={handleStartWinterQuarter}
        >
          Start Winter Quarter ▶
        </Button>
      </div>
    </div>
  );
}
