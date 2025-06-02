"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function GraduationPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/fortune-teller/fortune-teller2");
  };

  useEffect(() => {
    const duration = 1000; // 3 seconds
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 250);
  }, []);

  return (
    <div className="min-h-screen bg-sky-200 relative overflow-hidden">
      {/* Cloud Images */}
      <div className="absolute top-12 left-8">
        <Image src="/cloud.webp" alt="Decorative cloud" width={120} height={80} className="opacity-80" />
      </div>

      <div className="absolute top-12 right-8">
        <Image src="/cloud.webp" alt="Decorative cloud" width={120} height={80} className="opacity-80" />
      </div>

      {/* Header Text */}
      <div className="pt-12 px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          {"It's time for graduation!"}
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-black leading-tight mt-6">
          {"Let's see what the future holds for you"}
        </h2>
      </div>

      {/* Graduation Image - Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Image
          src="/graduation-ceremony.png"
          alt="Graduation ceremony with graduates in caps and gowns sitting in a stadium"
          width={0}
          height={0}
          className="w-[700px] h-auto object-cover"
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
