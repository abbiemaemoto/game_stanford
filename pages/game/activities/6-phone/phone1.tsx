"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PhoneMinigame1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/6-phone/phone2");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/phone1.png')",
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
          Uh-oh, you're hungover from Halloween...and you can't remember where you left your phone...
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-white leading-tight drop-shadow-2xl text-center">
          You need to piece it together.
        </h2>
      </div>

      {/* Floating Phone Animation */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-5">
        <div className="animate-phone-flyaway">
          <div className="text-8xl">📱</div>
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
        .animate-phone-flyaway {
          animation: phone-flyaway 4s ease-in-out forwards;
          opacity: 1;
        }

        @keyframes phone-flyaway {
          0%, 20% {
            transform: translateY(0) rotate(-5deg);
            opacity: 1;
            scale: 1;
          }
          30% {
            transform: translateY(-20px) rotate(5deg);
            opacity: 1;
            scale: 1;
          }
          100% {
            transform: translate(500px, -300px) rotate(45deg);
            opacity: 0;
            scale: 0.1;
          }
        }
      `}</style>
    </div>
  );
}
