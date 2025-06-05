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
        console.warn("Autoplay may be blocked:", err)
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
    router.push("/game/activities/13-formal/formal4");
  };

  return (
    <div className="min-h-screen bg-sky-400 p-8 relative">
      {/* Play tada audio */}
      <audio ref={audioRef} src="/tada.mp3" hidden preload="auto" />

      <div className="absolute bottom-4 left-4 z-0">
        <div className="relative w-80 h-80 sm:w-80 sm:h-80 md:w-90 md:h-90 lg:w-100 lg:h-100">
          <Image
            src="/dancing.png"
            alt="dancing student"
            fill
            className="object-contain pointer-events-none"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto pl-0 md:pl-32 pt-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          You have a few options for a date. Time to shoot your shot!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Option 1 */}
          <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-red-600">Option 1</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
              <p className="text-xl font-bold text-center">
                THEY SAID YES!
                It was a little embarrassing, but now you’ve got a date AND a personal tutor for the class! :)
              </p>
            </CardContent>
          </Card>

          {/* Option 2 */}
          <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-red-600">Option 2</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
              <p className="text-xl font-bold text-center">
                You took the safe route. The fits don’t match and you kinda wish you took a risk, but you still have a great night at formal!
              </p>
            </CardContent>
          </Card>

          {/* Option 3 */}
          <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-red-600">Option 3</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
              <p className="text-xl font-bold text-center">
                They unfortunately already have a significant other. No formal date, BUT they referred you to their friend and you have a blind date for next week!
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
