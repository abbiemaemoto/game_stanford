"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function FrostFest1() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleReveal = () => {
    // Pause the music when revealing the answer
    if (audioRef.current) {
      audioRef.current.pause();
    }
    router.push("/game/activities/18-frost-fest/frost-fest2");
  };

  useEffect(() => {
    // Auto-play the music when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log("Auto-play was prevented:", error);
        }
      }
    };
    
    playAudio();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/frost-fest.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="/viva-la-vida.mp3" type="audio/mpeg" />
        <source src="/viva-la-vida.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              WOO it's your last Frost Fest!
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-8 leading-relaxed">
              First to guess the song wins +2 Aura Points. 
              <br />
              (volume up!!!)
            </h2>

            {/* Audio Player Visual */}
            <div className="bg-black rounded-lg p-8 mb-8 mx-auto max-w-md">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div className="text-white text-lg font-medium">♪ Now Playing ♪</div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="mt-4 text-gray-400 text-sm">
                Listen carefully to identify the song...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reveal Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
          onClick={handleReveal}
        >
          Reveal
        </Button>
      </div>
    </div>
  );
}
