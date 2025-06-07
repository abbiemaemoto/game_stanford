"use client";

import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FinalInstructionsPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const instructions = [
    "Place your tandem bike onto the board.",
    "Distribute the four character tokens. These will be your placeholders when answering trivia/pick-your-path activities.  ",
    "Throughout the game you will collect point cards, and you can never go before 0 points in any category.",
    "Your tandem bike will bring through through senior year at Stanford, and the icons on the physical board will help you to identify where to go on the digital map.",
  ];

  const nextSlide = () => {
    if (currentSlide < instructions.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleStartGame = () => {
    router.push("/instructions/intro6");
  };

  return (
    <div className="min-h-screen relative">
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
      <div className="absolute top-3 left-3 z-10">
        <Link href="/instructions/intro4">
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

      {/* White Overlay in Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-10 flex flex-col justify-between transition-all duration-500">
          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold text-red-700 tracking-tight">
              Instructions
            </h2>
          </div>

          {/* Carousel Content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="min-h-[120px] text-2xl font-medium text-gray-800 text-center leading-relaxed">
              {currentSlide + 1}. {instructions[currentSlide]}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {instructions.map((_, index) => (
              <div
                key={index}
                className={`h-4 w-4 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? "bg-red-600 scale-110"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-6 py-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>

            {currentSlide < instructions.length - 1 ? (
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-lg flex items-center gap-2 shadow-md"
                onClick={nextSlide}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </Button>
            ) : (
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-lg shadow-md"
                onClick={handleStartGame}
              >
                Ready?
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
