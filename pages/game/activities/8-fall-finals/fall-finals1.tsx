"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FallFinals1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/8-fall-finals/fall-finals2");
  };

  useEffect(() => {
    const audio = new Audio('/library.mp3');
    audio.loop = true;
    audio.volume = 0.4;
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
          backgroundImage: "url('/fall-finals.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl text-center mb-6">
        You're at the library grinding for Fall Quarter finals     </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-white leading-tight drop-shadow-2xl text-center">
        ...but you need a brain break :)   
        </h2>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-10">
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
