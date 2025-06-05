"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnswerPage() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.75;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) =>
        console.warn("Autoplay may have been blocked:", err)
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
    router.push("/game/transition");
  };

  return (
    <div className="min-h-screen bg-[rgb(45,26,50)] p-8 relative">
      {/* Play shine.mp3 on page load */}
      <audio
        ref={audioRef}
        src="/shine.mp3"
        hidden
        preload="auto"
      />

      <div className="absolute bottom-2 left-2 z-0">
        <div className="relative w-50 h-50 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-80 lg:h-80">
          <Image
            src="/bed.png"
            alt="sick"
            fill
            className="object-contain pointer-events-none"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto pl-0 md:pl-32 pt-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Halloween is your favorite holiday and you’ve been planning your costume for months!!! But you and your friends are feeling sick...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Option 1 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-2xl transform hover:scale-105 transition-transform flex flex-col h-full">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 1</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                  The one night you rallied, not a single soul was at the function..... Picked the wrong night I guess
                </p>
              </CardContent>
            </Card>

            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
              <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-red-600">Health: +1</span>
                <span className="text-green-600">Aura: -2</span>
                <span className="text-blue-600">Prodigy: +1</span>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col h-full">
            <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 2</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                  Uh-oh, turns out you and your friends had hand, foot, mouth & got everyone sick... now your friend group is known as "patient zero".
                </p>
              </CardContent>
            </Card>

            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
              <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-red-600">Health: -3</span>
                <span className="text-green-600">Aura: +1</span>
                <span className="text-blue-600">Prodigy: -1</span>
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="flex flex-col h-full">
            <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 3</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                  You had a chill night, and now you're not sick! But since you didn't meet up with your situationship during the parties, it seems that they are getting cold feet...
                </p>
              </CardContent>
            </Card>

            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
              <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-red-600">Health: +3</span>
                <span className="text-green-600">Aura: -1</span>
                <span className="text-blue-600">Prodigy: +1</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex justify-center mt-12">
            <div className="text-2xl font-bold text-gray-800 p-4 bg-white rounded-lg shadow-md">
              Don't forget to gather your point cards!
            </div>
          </div>

          {/* Continue Button */}
          <div className="fixed bottom-8 right-10 items-center">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
