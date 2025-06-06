"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GymMinigame2() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/transition");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/gym.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 z-10">
        <h1 className="text-6xl font-bold text-white mb-8 text-center drop-shadow-2xl">
          CARDIO TIME!!!
        </h1>
        <h2 className="text-4xl font-medium text-white mb-12 text-center drop-shadow-2xl">
          First person to <span className="underline">run to the nearest door</span><br/>
          gets <span className="text-yellow-400 font-bold">+3 Health Points</span>. 
        </h2>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
          onClick={handleContinue}
        >
          Complete Activity
        </Button>
      </div>
    </div>
  );
} 