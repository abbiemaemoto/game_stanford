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
    router.push("/game/transition");
  };

  return (
    <div className="min-h-screen bg-[#6A5ACD] p-8 relative">
      {/* Audio */}
      <audio ref={audioRef} src="/shine.mp3" hidden preload="auto" />

      <div className="absolute bottom-0 left-0">
        <Image
          src="/caltrain.png"
          alt="Bottom-left image"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto pl-0 md:pl-32 pt-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Go big or go home. Pick a costume for your final B2B debut on the Oval.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Option 1 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform flex flex-col h-full">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 1</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                  It’s cute and you saved money! Not quite a B2B extravaganza but you had a great brunch in SF. But you spilled mimosas on your dress.
                </p>
              </CardContent>
            </Card>
            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
              <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-yellow-400">Health: +1</span>
                <span className="text-pink-400">Aura: +0</span>
                <span className="text-blue-400">Prodigy: +1</span>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 2</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                  Everyone LOVED your costume...but it took up so much space in the Caltrain that the costume popped on the way there :(
                </p>
              </CardContent>
            </Card>
            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
              <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-yellow-400">Health: -1</span>
                <span className="text-pink-400">Aura: +3</span>
                <span className="text-blue-400">Prodigy: -1</span>
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 3</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                  You missed B2B. Definitely not ideal but you feel well-rested and you’re going out to brunch with a friend who also hit snooze on B2B.
                </p>
              </CardContent>
            </Card>
            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
              <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-yellow-400">Health: +2</span>
                <span className="text-pink-400">Aura: -2</span>
                <span className="text-blue-400">Prodigy: +1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 flex justify-center mt-12">
          <div className="text-2xl font-bold text-gray-800 p-4 bg-white rounded-lg shadow-md">
            Don't forget to gather your point cards!
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
