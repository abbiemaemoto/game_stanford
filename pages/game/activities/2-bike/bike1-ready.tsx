"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BikeReady() {
  const router = useRouter();

  const handleReady = () => {
    router.push("/game/activities/2-bike/bike2");
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: "url('/bike.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Cloud Images */}
      <div className="absolute top-12 left-8 z-10">
        <Image src="/cloud.webp" alt="Decorative cloud" width={120} height={80} className="opacity-80" />
      </div>

      <div className="absolute top-12 right-8 z-10">
        <Image src="/cloud.webp" alt="Decorative cloud" width={120} height={80} className="opacity-80" />
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-2xl mb-8">
            Get Ready!
          </h1>
      </div>

      {/* Ready Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-xl font-bold shadow-lg animate-pulse"
          onClick={handleReady}
        >
          I'm Ready!
        </Button>
      </div>
    </div>
  );
} 