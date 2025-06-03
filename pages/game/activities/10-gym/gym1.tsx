"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GymMinigame1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/10-gym/gym2");
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
      <div className="absolute inset-0 bg-black/55" />

      {/* Centered Header Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl text-center mb-6">
          Time to fulfill that New Year's Resolution!
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-white leading-tight drop-shadow-2xl text-center">
          Let's hit the Stanford Gym for a workout! 💪
        </h2>
      </div>

      {/* Jumping Weightlifter Animation */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-5">
        <div className="animate-weightlifter">
          <div className="text-8xl">🏋️</div>
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
        .animate-weightlifter {
          animation: jump 1.2s ease-in-out infinite;
          opacity: 1;
        }

        @keyframes jump {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
      `}</style>
    </div>
  );
} 