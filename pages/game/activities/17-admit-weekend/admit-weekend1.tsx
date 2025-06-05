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
    router.push("/game/activities/17-admit-weekend/admit-weekend2");
  };

  return (
    <div className="min-h-screen bg-sky-200 relative overflow-hidden pt-8 md:pt-16 lg:pt-20">
      {/* Background music */}
      <audio ref={audioRef} src="/kids.mp3" hidden preload="auto" />

      {/* Star Images */}
      <div className="absolute top-12 left-8">
        <Image src="/sun.png" alt="Decorative cloud" width={180} height={140} className="opacity-80" />
      </div>

      <div className="absolute top-12 right-8">
        <Image src="/cloud.webp" alt="Decorative cloud" width={240} height={160} className="opacity-80" />
      </div>

      {/* Header Text */}
      <div className="pt-14 px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mt-6">
          {"It's Admit Weekend!"}
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-tight mt-10">
          {"The sun is shining, spring quarter vibes are high... and campus is filled to the brim with little high schoolers..."}
        </h2>
      </div>

      {/* student image */}
      <div className="fixed inset-x-0 bottom-0 flex justify-center items-end h-screen overflow-hidden">
        <Image
          src="/highschool.png"
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
