"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GymReady() {
  const router = useRouter();

  const handleReady = () => {
    router.push("/game/activities/10-gym/gym2");
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
          backgroundImage: "url('/gym.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-3xl mx-auto shadow-2xl border border-white/20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl mb-8">
            Warm Up Time!
          </h1>
          <div className="text-6xl mb-8">🏋️‍♂️💪</div>
          <p className="text-xl text-white/90 mb-8">
            Stretch your muscles and get ready...
          </p>
        </div>
      </div>

      {/* Ready Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-xl font-bold shadow-lg animate-pulse"
          onClick={handleReady}
        >
          Let's Lift!
        </Button>
      </div>
    </div>
  );
} 