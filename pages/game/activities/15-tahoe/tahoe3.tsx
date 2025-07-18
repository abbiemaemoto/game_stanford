import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function PlaceholderPage() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    router.push("/game/activities/15-tahoe/tahoe4");
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((err) => console.warn("Autoplay may have been blocked:", err));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
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
          On a good traffic day, how long does it take to drive to Lake Tahoe
          from Stanford campus?
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
                6 hours
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
                4.5 hours
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-800 border-2 border-yellow-400 text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-yellow-300">
                Option 3
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-base font-semibold text-gray-100 text-center">
                2 hours
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
                3.5 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Instructional Text */}
      {showInstructions && (
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-lg p-6 animate-pulse">
          <p className="text-lg md:text-3xl font-medium text-black text-center ">
            Place your player token in the Trivia Lot parking spot corresponding
            to the option you chose. Click continue after all players have made
            their choice.
          </p>
        </div>
      )}

      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg shadow-lg"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
      <audio
        ref={audioRef}
        src="/jeopardy.mp3"
        loop={false}
        hidden
        preload="auto"
      />
    </div>
  );
}
