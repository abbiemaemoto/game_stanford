"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function StoryPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleModalDone = () => {
    setShowModal(false);

    // Start audio on user interaction
    if (audioRef.current) {
      audioRef.current.volume = 0.75;
      audioRef.current.play().catch(() => {
        console.warn("Autoplay blocked");
      });
    }
  };

  const handleContinue = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    router.push("/game/commencement/p2");
  };

  return (
    <div className="min-h-screen bg-sky-200 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-12 left-8">
        <Image src="/sun.png" alt="Decorative sun" width={180} height={140} className="opacity-80" />
      </div>
      <div className="absolute top-12 right-8">
        <Image src="/cloud.webp" alt="Decorative cloud" width={240} height={160} className="opacity-80" />
      </div>

      {/* Main content */}
      <div className="absolute bottom-0 left-[40%] transform -translate-x-1/2">
        <div className="relative">
          <Image src="/speaker.png" alt="commencement" width={520} height={480} />
          <div className="absolute top-0 left-full ml-4 bg-white text-black text-2xl font-bold px-10 py-8 rounded-xl shadow-md max-w-sm">
            CONGRATULATIONS on graduating from Stanford University! Welcome to your commencement.
          </div>
        </div>
      </div>

      {/* Continue Button */}
      {!showModal && (
        <div className="fixed bottom-8 right-10">
          <Button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome to your final milestone!
            </h2>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg"
              onClick={handleModalDone}
            >
              Done
            </Button>
          </div>
        </div>
      )}

      {/* Hidden audio tag */}
      <audio ref={audioRef} src="/grad_music.mp3" loop={false} hidden preload="auto" />
    </div>
  );
}
