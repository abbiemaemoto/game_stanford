"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NeighborhoodsMinigame2() {
  const router = useRouter();
  const [foundAnswer, setFoundAnswer] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFoundAnswer = () => {
    setFoundAnswer(true);
    // Show success message first, then show answer
    setTimeout(() => {
      setShowAnswer(true);
    }, 1500);
  };
  useEffect(() => {
    const audio = new Audio('/library.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(console.error);

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  const handleContinueToTransition = () => {
    router.push("/game/transition");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/neighborhoods.png')",
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
          
          {/* Show Answer Screen */}
          {showAnswer ? (
            <div className="text-center animate-fade-in">
              <h2 className="text-4xl font-bold text-white mb-8">
                The 8 Stanford Neighborhoods Named After Trees:
              </h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-8 mb-8 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {['Aspen', 'Olive', 'Ginkgo', 'Redwood', 'Magnolia', 'Rowan', 'Sequoia', 'Wisteria'].map((neighborhood, index) => (
                    <div key={index} className="bg-white/80 rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">🌳</div>
                      <div className="text-lg font-semibold text-green-800">{neighborhood}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 text-xl font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={handleContinueToTransition}
              >
                Continue to Next Activity
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Your assignment for the week?
                </h2>
                
                {/* Assignment illustration */}
                <div className="flex justify-center items-center mb-8">
                  <div className="text-4xl animate-pulse">📚</div>
                  <div className="text-4xl ml-4">🌳</div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-8 mb-8 shadow-lg">
                  <p className="text-3xl font-bold text-green-700 mb-6 leading-relaxed">
                  🌿 As a group, name all of the 8 Stanford neighborhoods named after trees... 🌿
                  </p>
                  
                  {/* Rewards Section */}
                  <div className="bg-white/80 rounded-xl p-6 border border-green-200">
                    <p className="text-xl font-semibold text-green-800 mb-4">
                      If successful, everyone <span className="text-blue-400">+ 3 Prodigy Points</span>.<br/>
                      If not, everyone <span className="text-blue-400">-3 Prodigy Points</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              {foundAnswer && !showAnswer && (
                <div className="text-center animate-fade-in">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 rounded-2xl p-6 mb-6 shadow-lg">
                    <p className="text-3xl font-bold text-green-800 mb-2">
                      Assignment Complete!
                    </p>
                  </div>
                  <p className="text-lg text-white animate-pulse">
                    Showing the answer...
                  </p>
                </div>
              )}

              {/* Instructions */}
              {!foundAnswer && (
                <div className="text-center">
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
                    <p className="text-lg text-blue-800 font-medium">
                      🏫 <strong>Group Challenge:</strong> Work together to name all 8 Stanford neighborhoods named after trees!
                    </p>
                  </div>
                  
                  <Button
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-xl font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={handleFoundAnswer}
                  >
                    Continue
                  </Button>
                </div>
              )}
            </>
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