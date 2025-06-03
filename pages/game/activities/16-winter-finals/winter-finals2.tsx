"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WinterFinals2() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/16-winter-finals/winter-shareout1");
  };

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
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight underline">
              For the two players with the least number of Health points:
            </h1>
            
            {/* Health Point Icons */}
            <div className="flex justify-center items-center mb-8 space-x-4">
              <Image 
                src="/point-icons/health.png" 
                alt="Health Points" 
                width={48} 
                height={48} 
                className="animate-pulse"
              />
              <Image 
                src="/point-icons/health.png" 
                alt="Health Points" 
                width={48} 
                height={48} 
                className="animate-pulse"
              />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Find Christina's dog Nina to help relieve your finals stress!
            </h2>
            <h3 className="text-xl md:text-md font-medium text-gray-700 mb-8 leading-relaxed">
                hint: check the board!
            </h3>

            {/* Reward Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-6 mb-8 shadow-lg">
              <h3 className="text-xl text-green-800 mb-4 font-bold">🏆 Reward</h3>
              <p className="text-2xl font-bold text-green-700 leading-relaxed">
                First to spot her gets +1 Prodigy Points and +2 Health.
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