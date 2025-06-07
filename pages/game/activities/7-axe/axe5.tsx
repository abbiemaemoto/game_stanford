import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function AnswerPage() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleContinue = () => {
    router.push("/game/activities/7-axe/axe6");
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((err) => console.warn("Autoplay may have been blocked:", err));
    }
  }, []);
  return (
    <div className="relative min-h-screen bg-sky-200 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/arbor.png"
          alt="Background Arbor"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          priority
        />
      </div>

      {/* Student image */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="relative w-40 h-40 md:w-64 md:h-64">
          <Image
            src="/trivia.png"
            alt="Students at trivia"
            fill
            style={{ transform: "scaleX(-1)" }}
            className="object-contain"
          />
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-[50vh] px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 drop-shadow">
          When was the last time Stanford won Big Game?
        </h2>

        {/* Trivia Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          <Card className="bg-red-800 border-2 border-yellow-400 text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-yellow-300">
                Option 1
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-base font-semibold text-gray-100 text-center">
                2022
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-800 border-2 border-yellow-400 text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-yellow-300">
                Option 2
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-base font-semibold text-gray-100 text-center">
                2021
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-600 border-2 border-yellow-400 text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-yellow-300">
                Option 3
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-base font-semibold text-gray-100 text-center">
                2020
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-800 border-2 border-yellow-400 text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-yellow-300">
                Option 4
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-base font-semibold text-gray-100 text-center">
                2019
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-6 max-w-4xl mx-auto px-4 text-center mt-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow">
          If you got it right...
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 leading-snug mt-4">
          You remembered a rare W. You’re looking like a Prodigy for historical
          recall under pressure.
        </h2>
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
      <audio ref={audioRef} src="/yay.mp3" loop={false} hidden preload="auto" />
    </div>
  );
}
