"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function StoryPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/9-early-winter-weekend/early-winter-weekend2");
  };

  return (
    <div className="min-h-screen bg-sky-200 relative overflow-hidden pt-8 md:pt-16 lg:pt-20">
      {/* Cloud Images */}
      <div className="absolute top-12 left-8">
        <Image src="/cloud.webp" alt="Decorative cloud" width={240} height={160} className="opacity-80" />
      </div>

      <div className="absolute top-12 right-8">
        <Image src="/cloud.webp" alt="Decorative cloud" width={240} height={160} className="opacity-80" />
      </div>

      {/* Header Text */}
      <div className="pt-14 px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mt-6">
          {"Time to make weekend plans!"}
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-black leading-tight mt-10">
          {"It's the weekend of week 1 (aka no work to do!)"}
        </h2>
      </div>

      {/* student running to class */}
        <div className="pt-10 flex justify-center">
        <Image
            src="/happy.png"
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
