"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BikeMinigame2() {
  const router = useRouter();
  const [foundGreen, setFoundGreen] = useState(false);

  const handleFoundGreen = () => {
    setFoundGreen(true);
    // Add a small delay before continuing to show success
    setTimeout(() => {
      router.push("/game/transition");
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bookstore.png')",
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
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              But where did you leave your bike keys??
            </h2>
            
            {/* Key illustration */}
            <div className="flex justify-center items-center mb-8">
              <div className="text-4xl animate-pulse">🔍</div>
              <div className="text-4xl ml-4">🗝️</div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-8 mb-8 shadow-lg">
              <h3 className="text-2xl text-green-800 mb-4">
                🌿 Your lanyard is green... 🌿
              </h3>
              <p className="text-3xl font-bold text-green-700 mb-6 leading-relaxed">
              First to find and touch something <strong>GREEN</strong> in the area wins!!!
              </p>
              
              {/* Rewards Section */}
              <div className="bg-white/80 rounded-xl p-6 border border-green-200">
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <Image 
                      src="/point-icons/prodigy.png" 
                      alt="Prodigy Points" 
                      width={48} 
                      height={48} 
                      className="mx-auto mb-2"
                    />
                    <div className="text-lg font-semibold text-yellow-700">+2 Prodigy Points</div>
                  </div>
                  <div className="text-center">
                    <Image 
                      src="/point-icons/health.png" 
                      alt="Health Points" 
                      width={48} 
                      height={48} 
                      className="mx-auto mb-2"
                    />
                    <div className="text-lg font-semibold text-red-600">+2 Health Points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {foundGreen && (
            <div className="text-center animate-fade-in">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 rounded-2xl p-6 mb-6 shadow-lg">
                <p className="text-3xl font-bold text-green-800 mb-2">
                  🎉 Amazing! Your bike keys were attached to that green item! 🎉
                </p>
              </div>
              <p className="text-lg text-gray-600 animate-pulse">
                Moving to next screen...
              </p>
            </div>
          )}

          {/* Instructions */}
          {!foundGreen && (
            <div className="text-center">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
                <p className="text-lg text-blue-800 font-medium">
                  🔍 <strong>Physical Challenge:</strong> Look around the room for something GREEN and touch it!
                </p>
              </div>
              
              <Button
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-xl font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={handleFoundGreen}
              >
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
} 