"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WinterFinals2() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/16-winter-finals/winter-shareout1");
  };
  useEffect(() => {
    const audio = new Audio('/dog.mp3');
    audio.volume = 0.4;
    
    // Play immediately
    audio.play().catch(console.error);
    
    // Set up interval to play every 6 seconds
    const interval = setInterval(() => {
      audio.currentTime = 0;
      audio.play().catch(console.error);
    }, 6000);

    return () => {
      clearInterval(interval);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  useEffect(() => {
    const audio = new Audio('/kids.mp3');
    audio.volume = 0.1;
    audio.loop = true;
    audio.play().catch(console.error);

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/winter-finals.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight underline">
              For the two players with the least number of <span className="text-yellow-400">Health</span> points:
            </h1>
            


            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Find Christina's dog Nina to help relieve your finals stress!
            </h2>
            <h3 className="text-xl md:text-md font-medium text-white mb-8 leading-relaxed">
                hint: check the board!
            </h3>

            {/* Nina Image */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/90 rounded-2xl p-4 shadow-lg">
                <Image 
                  src="/nina.png" 
                  alt="Nina the dog" 
                  width={200} 
                  height={200} 
                  className="rounded-xl"
                />
                <p className="text-center text-gray-800 font-bold mt-2">This is Nina! 🐕</p>
              </div>
            </div>

            {/* Reward Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-6 mb-8 shadow-lg">
              <h3 className="text-xl text-green-800 mb-4 font-bold">🏆 Reward</h3>
              <p className="text-2xl font-bold text-green-700 leading-relaxed">
                First to spot her gets <span className="text-blue-400">+1 Prodigy Points</span> and <span className="text-yellow-400">+2 Health</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
} 