"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NeighborhoodsMinigame1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/4-neighborhoods/neighborhoods2");
  };

  useEffect(() => {
    const audio = new Audio('/walking.mp3');
    audio.loop = true;
    audio.volume = 0.5;
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
          backgroundImage: "url('/neighborhoods.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Cloud Images */}
      <div className="absolute top-12 left-8 z-10">
        <Image src="/cloud.webp" alt="Decorative cloud" width={120} height={80} className="opacity-80" />
      </div>

      <div className="absolute top-12 right-8 z-10">
        <Image src="/cloud.webp" alt="Decorative cloud" width={120} height={80} className="opacity-80" />
      </div>

      {/* Centered Header Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl text-center mb-6">
          It's time to head to EARTHSYS10, your intro to environmental science class.
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-white leading-tight drop-shadow-2xl text-center">
          But first, let's test your Stanford knowledge...
        </h2>
      </div>

      {/* Growing Tree Animation */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-5">
        <div className="animate-growing-tree">
          <div className="text-8xl">🌳</div>
        </div>
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

      {/* CSS Animation Styles */}
      <style jsx>{`
        .animate-growing-tree {
          animation: grow-tree 4s ease-out forwards;
        }

        @keyframes grow-tree {
          0% {
            transform: scale(0.1) translateY(50px);
            opacity: 0;
          }
          20% {
            transform: scale(0.3) translateY(30px);
            opacity: 0.5;
          }
          40% {
            transform: scale(0.6) translateY(10px);
            opacity: 0.8;
          }
          60% {
            transform: scale(1.0) translateY(-10px);
            opacity: 1;
          }
          80% {
            transform: scale(1.3) translateY(-30px);
            opacity: 1;
          }
          100% {
            transform: scale(1.5) translateY(-50px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
