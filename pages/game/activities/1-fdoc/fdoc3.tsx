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
    router.push("/game/activities/1-fdoc/fdoc4");
  };

  return (
    <div className="min-h-screen bg-sky-200 p-8 relative">
      {/* Play tada.mp3 on page load */}
      <audio
        ref={audioRef}
        src="/tada.mp3"
        hidden
        preload="auto"
      />

      <div className="absolute bottom-4 left-4 z-0">
        <div className="relative w-50 h-50 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-70 lg:h-70">
          <Image
            src="/cold.png"
            alt="cold student"
            fill
            className="object-contain pointer-events-none"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto pl-0 md:pl-32 pt-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Let’s start the year off on the right foot with FDOC pictures. You’re running a little late for class though...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Option 1 */}
          <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-2xl transform hover:scale-105 transition-transform flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-red-600">Option 1</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
              <p className="text-xl font-bold text-center">
                BRRR it’s kinda cold! The photos turned out great but the TA personally emailed you about the importance of attendance.
              </p>
            </CardContent>
          </Card>

          {/* Option 2 */}
          <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-red-600">Option 2</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
              <p className="text-xl font-bold text-center">
                The pic is cute, but the background was ugly so you didn’t post it–your mom loved it tho! You also made it to class without a problem!
              </p>
            </CardContent>
          </Card>

          {/* Option 3 */}
          <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-red-600">Option 3</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
              <p className="text-xl font-bold text-center">
                You now feel FOMO looking at everyone’s cute FDOC photos. But you were able to get valuable 1:1 time with the Nobel Laureate professor!
              </p>
            </CardContent>
          </Card>
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
