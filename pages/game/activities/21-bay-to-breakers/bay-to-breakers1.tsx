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
    router.push("/game/activities/21-bay-to-breakers/bay-to-breakers2");
  };

  return (
    <div className="min-h-screen bg-[#6A5ACD] relative overflow-hidden pt-8 md:pt-16 lg:pt-20">
      {/* Audio */}
      <audio ref={audioRef} src="/b2b_music.mp3" hidden preload="auto" />

      {/* Moon Image */}
      <div className="absolute top-12 left-8">
        <Image src="/moon_b2b.png" alt="Decorative moon" width={180} height={140} className="opacity-80" />
      </div>

      {/* Header Text */}
      <div className="pt-14 px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6">
          {"RISE & SHINE! It's Bay to Breakers!"}
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mt-10">
          {"You need a costume to go with your borg!"}
        </h2>
      </div>

      {/* Student Image */}
      <div className="fixed inset-x-0 bottom-0 flex justify-center items-end h-screen overflow-hidden">
        <Image
          src="/b2b.png"
          alt="excited students"
          width={0}
          height={0}
          className="max-h-[50vh] w-auto object-contain"
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
