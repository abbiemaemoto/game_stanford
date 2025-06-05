"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WinterShareout2() {
  const router = useRouter();

  useEffect(() => {
    const audio = new Audio("/winter_music.mp3");
    audio.volume = 0.75;
    audio.loop = false;

    audio.play().catch(() => {
      // Ignore autoplay block if user hasn’t interacted
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleStartSpringQuarter = () => {
    router.push("/game/transition");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with spring colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-100" />

      {/* Decorative spring elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 text-3xl animate-bounce">🌸</div>
        <div className="absolute bottom-20 left-10 text-4xl animate-pulse">🌺</div>
        <div className="absolute top-32 left-20 text-2xl animate-bounce">☀️</div>
        <div className="absolute bottom-40 right-20 text-3xl animate-pulse">🌴</div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-10 max-w-5xl mx-auto shadow-2xl border border-blue-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 leading-tight">
              As you begin to pack for your last spring break trip, you
              think about how excited you are to spend a week with
              your best friends
            </h1>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-blue-400 rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
                Everyone share:
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-blue-800 leading-relaxed">
                Share your favorite memory<br />
                with your Stanford friends.
              </p>
            </div>

            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-4xl">👫</div>
              <div className="text-4xl">💝</div>
              <div className="text-4xl">🏛️</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm text-green-700">🎉 That spontaneous adventure that became legendary...</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-700">📚 Late night study sessions that turned into deep conversations...</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-yellow-700">🍕 The random moments that made you laugh until you cried...</p>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
                <p className="text-sm text-pink-700">🤗 When they were there for you when you needed them most...</p>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="text-6xl">🌲</div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Spring Quarter Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 text-lg shadow-lg"
          onClick={handleStartSpringQuarter}
        >
          Start Spring Quarter ▶
        </Button>
      </div>
    </div>
  );
}
