"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function BikeMinigame1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/2-bike/bike2");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bookstore.png')",
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
          Kick off the year with moving your bike to your new dorm!
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-white leading-tight drop-shadow-2xl text-center">
          But first, you'll need to find your keys...
        </h2>
      </div>

      {/* Spiraling Keys Animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
        <div className="animate-spiral-keys">
          <div className="text-6xl">🗝️</div>
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
        .animate-spiral-keys {
          animation: chaotic-keys 10s ease-in-out forwards;
          filter: drop-shadow(0 0 10px #ffd700) drop-shadow(0 0 20px #ffd700) drop-shadow(0 0 30px #ffd700);
        }

        @keyframes chaotic-keys {
          0% {
            transform: translate(-200px, -150px) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          5% {
            transform: translate(-100px, -80px) rotate(45deg) scale(1.2);
            opacity: 1;
          }
          12% {
            transform: translate(150px, -120px) rotate(-30deg) scale(0.9);
            opacity: 1;
          }
          18% {
            transform: translate(-80px, 50px) rotate(120deg) scale(1.4);
            opacity: 1;
          }
          25% {
            transform: translate(200px, 80px) rotate(-90deg) scale(0.7);
            opacity: 1;
          }
          32% {
            transform: translate(-150px, -20px) rotate(200deg) scale(1.1);
            opacity: 1;
          }
          40% {
            transform: translate(100px, -200px) rotate(-150deg) scale(1.3);
            opacity: 1;
          }
          48% {
            transform: translate(-250px, 120px) rotate(80deg) scale(0.6);
            opacity: 1;
          }
          55% {
            transform: translate(180px, 150px) rotate(-200deg) scale(1.5);
            opacity: 1;
          }
          62% {
            transform: translate(-120px, -180px) rotate(300deg) scale(0.8);
            opacity: 1;
          }
          70% {
            transform: translate(250px, -50px) rotate(-100deg) scale(1.2);
            opacity: 1;
          }
          78% {
            transform: translate(-200px, 200px) rotate(150deg) scale(0.9);
            opacity: 0.8;
          }
          85% {
            transform: translate(300px, -180px) rotate(-250deg) scale(0.5);
            opacity: 0.5;
          }
          92% {
            transform: translate(-350px, -100px) rotate(400deg) scale(0.3);
            opacity: 0.2;
          }
          100% {
            transform: translate(500px, -300px) rotate(-500deg) scale(0.1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
