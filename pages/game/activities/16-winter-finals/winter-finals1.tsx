"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WinterFinals1() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/16-winter-finals/winter-finals2");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/winter-finals.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              It's finals crunch time. You're in CS 247G lecture and starting to stress for the final project.
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              Maybe you're in need of some emotional support?
            </h2>

            {/* Ready? text */}
            <div className="text-2xl text-white mb-8 font-medium">
              Ready?
            </div>
          </div>
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
    </div>
  );
}
