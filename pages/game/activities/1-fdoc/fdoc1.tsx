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
    router.push("/game/activities/1-fdoc/fdoc2");
  };

  return (
    <div className="min-h-screen bg-sky-200 relative overflow-hidden">
      {/* Play fdoc_music.mp3 on load */}
      <audio
        ref={audioRef}
        src="/fdoc_music.mp3"
        hidden
        preload="auto"
      />

      {/* Cloud Images */}
      <div className="absolute top-12 left-8">
        <Image src="/cloud.webp" alt="Decorative cloud" width={120} height={80} className="opacity-80" />
      </div>

      <div className="absolute top-12 right-8">
        <Image src="/cloud.webp" alt="Decorative cloud" width={120} height={80} className="opacity-80" />
      </div>

      {/* Header Text */}
      <div className="pt-14 px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mt-6">
          {"Happy (last) first day of class!"}
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-black leading-tight mt-10">
          {"Let’s start the year off on the right foot with FDOC pictures. You’re running a little late for class though..."}
        </h2>
      </div>

      {/* Student running image */}
      <div className="pt-10 flex justify-center">
        <Image
          src="/running.png"
          alt="student late to class"
          width={0}
          height={0}
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto object-cover"
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
