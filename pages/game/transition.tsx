"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AnswerPage() {
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
    router.push("/game/map");
  };

  return (
    <div className="h-screen bg-sky-200 flex flex-col items-center p-6">
      {/* Audio: transition.mp3 */}
      <audio
        ref={audioRef}
        src="/transition.mp3"
        hidden
        preload="auto"
      />

      {/* Header */}
      <div className="w-full max-w-4xl pt-12">
        <h2 className="text-5xl font-bold text-center text-gray-800">
          Let’s move to the next square!
        </h2>
      </div>

      {/* Image */}
      <div className="relative w-[600px] h-[600px] mt-4">
        <Image
          src="/tandem.png"
          alt="Students biking"
          fill
          className="object-contain"
        />
      </div>

      {/* Button */}
      <div className="mt-4">
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
