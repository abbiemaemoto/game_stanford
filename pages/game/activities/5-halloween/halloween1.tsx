"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function StoryPage() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.75; // 75% volume
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) =>
        console.warn("Autoplay may have been blocked:", err)
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
    router.push("/game/activities/5-halloween/halloween2");
  };

  return (
    <div className="min-h-screen bg-[rgb(45,26,50)] relative">
      {/* Play halloween.mp3 on load */}
      <audio
        ref={audioRef}
        src="/halloween.mp3"
        hidden
        preload="auto"
      />

      {/* Cloud Images */}
      <div className="absolute top-12 left-8">
        <Image src="/ghost.png" alt="Decorative ghost" width={240} height={1600} className="opacity-100" />
      </div>

      <div className="absolute top-12 right-8">
        <Image src="/ghost.png" alt="Decorative ghost" width={240} height={160} className="opacity-100" />
      </div>

      {/* Header Text */}
      <div className="pt-14 px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6">
          {"It's HALLOWEEKEND!"}
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mt-10">
          {"We all know it's a four-day holiday."}
        </h2>
      </div>

      {/* Halloween image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] sm:w-[220px] md:w-[280px] xl:w-[450px]">
        <Image
          src="/halloween.png"
          alt="partying"
          width={0}
          height={0}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-8 right-10">
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
