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
      audioRef.current.volume = 0.75;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) =>
        console.warn("Autoplay may be blocked:", err)
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
    router.push("/game/activities/13-formal/formal2");
  };

  return (
    <div className="min-h-screen bg-sky-400 relative overflow-hidden pt-8 md:pt-16 lg:pt-20">
      {/* Play dance audio */}
      <audio ref={audioRef} src="/dance.mp3" hidden preload="auto" />

      {/* Star Images */}
      <div className="absolute top-12 left-8">
        <Image src="/stars.png" alt="Decorative cloud" width={240} height={160} className="opacity-80" />
      </div>

      <div className="absolute top-12 right-8">
        <Image src="/stars.png" alt="Decorative cloud" width={240} height={160} className="opacity-80" />
      </div>

      {/* Header Text */}
      <div className="pt-14 px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mt-6">
          {"Senior formal is coming up!"}
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-tight mt-10">
          {"You have the fit, but you need a date to formal..."}
        </h2>
      </div>

      {/* Dancing students image */}
      <div className="pt-10 flex justify-center">
        <Image
          src="/dancing.png"
          alt="excited students"
          width={0}
          height={0}
          className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto object-cover"
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
