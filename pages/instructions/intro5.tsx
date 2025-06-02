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
    "Collect points via the point cards on the physical board. You can gain and lose points in each category, but you cannot go below zero in any category.",
    "You & your team will progress through every square on the physical board. To unlock the challenge associated with each square, find & click on the corresponding icon on the digital map.",
    'To start the game, distribute the four avatars in the game box amongst the four players. You will use this avatar to mark your choices when it comes time to "Choose your Narrative" or play "Trivia at the Arbor".',
    "And finally, don't forget to have fun- reflect on your Stanford experience and make this senior year one that you'll never forget. Are you ready to play??",
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
    router.push("/game/map");
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%201%2C%202025%2C%2012_28_43%20PM-nmClUBhfDONnTrrPDopABrXDiBu017.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Back Button */}
      <div className="absolute top-3 left-3 z-10">
        <Link href="/instructions/traits">
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
        <div
          className="w-3.5/5 h-3.5/5 bg-white rounded-lg relative flex flex-col justify-between p-8"
          style={{ opacity: 0.95 }}
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-600">
              Final Instructions
            </h2>
          </div>

          {/* Carousel Content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-3xl">
              <div className="text-2xl font-medium mb-4 text-center">
                {currentSlide + 1}. {instructions[currentSlide]}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {instructions.map((_, index) => (
                  <div
                    key={index}
                    className={`h-3 w-3 rounded-full cursor-pointer ${
                      index === currentSlide ? "bg-red-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>

            {currentSlide < instructions.length - 1 ? (
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg flex items-center gap-2"
                onClick={nextSlide}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </Button>
            ) : (
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
                onClick={handleStartGame}
              >
                Start Game
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
