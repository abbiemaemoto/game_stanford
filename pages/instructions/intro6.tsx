"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function InstructionsPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/map");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%201%2C%202025%2C%2012_28_43%20PM-nmClUBhfDONnTrrPDopABrXDiBu017.png')",
        }}
      />
      {/*black overlay*/}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Link href="/instructions/intro5">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-row items-center justify-center gap-8 max-w-6xl px-4">
        <h2 className="mt-6 text-gray-100 text-xl md:text-4xl drop-shadow">
          Move the tandem bike to the first square on your board, and find the
          icon on the game map!
        </h2>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Map%21%20%281%29.png-Igpgi4AoxhkFmQeVgXmKGYSLktzGVZ.jpeg"
          alt="Stanford Campus Map"
          className="object-contain relative w-[40rem] h-[40rem]"
        />
      </div>
      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg shadow-lg animate-bounce glow"
          onClick={handleContinue}
        >
          Continue to Map
        </Button>
      </div>
    </div>
  );
}
