"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GraduationPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/7-axe/axe3");
  };

  return (
    <div className="relative min-h-screen w-full bg-sky-200 overflow-hidden">
      {/* Background Arbor Image (on top of sky-blue background) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/arbor.png"
          alt="The Arbor background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-80"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          📍 The Arbor
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mt-6 max-w-3xl drop-shadow">
          It’s finally Big Game! You’re wearing your best Stanford drip and
          rooting for Stanford (obviously) but how likely are we actually to
          win...
        </h2>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg shadow-lg"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
