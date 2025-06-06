"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PointsPage() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) =>
        console.warn("Autoplay blocked:", err)
      );
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleContinue = () => {
    router.push("/game/activities/24-fortune-teller/spring-shareout1");
  };

  return (
    <div className="min-h-screen bg-sky-200 p-8 relative">
      {/* Play shine.mp3 on page load */}
      <audio
        ref={audioRef}
        src="/shine.mp3"
        hidden
        preload="auto"
      />

      {/* Student image in bottom left corner */}
      <div className="absolute bottom-8 left-8">
        <div className="relative w-40 h-40 md:w-64 md:h-64">
          <Image
            src="/happy_grad.png"
            alt="Happy grad student"
            fill
            style={{ transform: "scaleX(-1)" }}
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto pl-0 md:pl-32">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Your time here at Stanford is wrapping up. What is the legacy you hope to leave?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Option 1 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">Option 1</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 h-48">
                <p className="text-xl font-bold text-center text-gray-200">
                  Most likely to be invited back as a future Commencement speaker
                </p>
              </CardContent>
            </Card>
            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
              <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-yellow-400">Health: +1</span>
                <span className="text-pink-400">Aura: +3</span>
                <span className="text-blue-400">Prodigy: +1</span>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">Option 2</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 h-48">
                <p className="text-xl font-bold text-center text-gray-200">
                  Most likely to become the next president of Stanford
                </p>
              </CardContent>
            </Card>
            <div className="mt-4 bg-white/100 rounded-lg p-3 border border-red-800">
              <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-yellow-400">Health: +1</span>
                <span className="text-pink-400">Aura: +2</span>
                <span className="text-blue-400">Prodigy: +1</span>
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">Option 3</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 h-48">
                <p className="text-xl font-bold text-center text-gray-200">
                  Most likely to get a Stanford building named after them
                </p>
              </CardContent>
            </Card>
            <div className="mt-4 bg-white/100 rounded-lg p-3 border border-red-800">
              <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-yellow-400">Health: +1</span>
                <span className="text-pink-400">Aura: +2</span>
                <span className="text-blue-400">Prodigy: +1</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-gray-800 p-4 bg-white/100 rounded-lg inline-block shadow-md">
              Don't forget to gather your point cards!
            </p>
          </div>
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
    </div>
  );
}
