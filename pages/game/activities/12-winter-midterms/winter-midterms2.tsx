"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WinterMidterms2() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/transition");
  };

  useEffect(() => {
    const audio = new Audio('/ksig.mp3');
    audio.loop = true;
    audio.volume = 0.4;
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
          backgroundImage: "url('/winter-midterms2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              2 players with the <em>most <span className="text-blue-400">prodigy points</span></em>, play rock paper scissors best out of 3
            </h1>
            
            {/* Game illustration */}
            <div className="flex justify-center items-center mb-8">
              <div className="text-4xl">🪨📄✂️</div>
            </div>

            {/* Rewards Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-400 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl text-purple-800 mb-2 font-bold">🏆 Champion Reward</h3>
                <p className="text-2xl font-bold text-purple-700">
                  <span className="text-pink-400">+3 aura points</span>; you're going to KSig!
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-400 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl text-blue-800 mb-2 font-bold">📚 Everyone Else</h3>
                <p className="text-2xl font-bold text-blue-700">
                  <span className="text-pink-400">-2 aura points</span> but <span className="text-blue-400">+1 Prodigy Point</span>;<br/>
                  you're hitting the stacks.
                </p>
              </div>
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