"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Play } from "lucide-react";

export default function StoryPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-sky-200 relative overflow-hidden">
      {/* Sun */}
      <div className="absolute top-12 left-8">
        <Image src="/sun.png" alt="Decorative sun" width={180} height={140} className="opacity-80" />
      </div>

      {/* Cloud */}
      <div className="absolute top-12 right-8">
        <Image src="/cloud.webp" alt="Decorative cloud" width={240} height={160} className="opacity-80" />
      </div>

      {/* Speaker aligned to bottom center */}
      <div className="absolute bottom-0 left-[40%] transform -translate-x-1/2">
        <div className="relative">
            {/* Speaker Image */}
            <Image src="/speaker.png" alt="commencement" width={520} height={480} />

            {/* Speech Bubble */}
            <div className="absolute top-0 left-full ml-4 bg-white text-black text-2xl font-bold px-10 py-8 rounded-xl shadow-md w-[380px]">
            As you saw from the final activity, everyone's Stanford journey takes them somewhere unexpected & exciting. Cherish this fact, and remember that it's your journey that makes you a winner. Thanks for playing the Game of Stanford!
            </div>

        </div>
        </div>

    <div className="fixed bottom-8 right-10">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
          onClick={handleContinue}
        >
        <Play className="w-5 h-5 fill-white" />
          Play Again
        </Button>
      </div>
    

    </div>
  );
}
