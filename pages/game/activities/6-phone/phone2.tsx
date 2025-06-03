"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PhoneMinigame2() {
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);
  const [riddleSolved, setRiddleSolved] = useState(false);

  const handleSolveRiddle = () => {
    setRiddleSolved(true);
    // Show success message first, then show answer
    setTimeout(() => {
      setShowAnswer(true);
    }, 1500);
  };

  const handleContinueToTransition = () => {
    router.push("/game/transition");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image - Changes when answer is revealed */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: showAnswer ? "url('/phone2.png')" : "url('/phone1.png')",
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
          
          {/* Show Answer Screen */}
          {showAnswer ? (
            <div className="text-center animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                THE ANSWER IS...
              </h2>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-400 rounded-2xl p-8 mb-8 shadow-lg">
                <div className="text-6xl font-bold text-red-600 mb-4">
                  AXE AND PALM!!!
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  If you got it right, you found your phone at TAP and you win
                </p>
                
                {/* Rewards Section */}
                <div className="bg-white/80 rounded-xl p-6 border border-red-200">
                  <div className="flex justify-center items-center space-x-4">
                    <Image 
                      src="/point-icons/prodigy.png" 
                      alt="Prodigy Points" 
                      width={48} 
                      height={48} 
                      className="animate-pulse"
                    />
                    <div className="text-xl font-bold text-yellow-700">+4 Prodigy Points for being a genius</div>
                    <Image 
                      src="/point-icons/prodigy.png" 
                      alt="Prodigy Points" 
                      width={48} 
                      height={48} 
                      className="animate-pulse"
                    />
                  </div>
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 text-xl font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={handleContinueToTransition}
              >
                Continue
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                  Solve the Riddle:
                </h2>
                
                {/* Riddle illustration */}
                <div className="flex justify-center items-center mb-8">
                  <div className="text-4xl animate-pulse">🧩</div>
                  <div className="text-4xl ml-4">📱</div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-400 rounded-2xl p-8 mb-8 shadow-lg">
                  <div className="text-xl text-gray-800 mb-6 leading-relaxed italic">
                    "I sit where legacies clash and blend,<br/>
                    Where foes once fought, now students mend.<br/>
                    One half a symbol of bold school pride,<br/>
                    The other a place where palms reside.<br/>
                    Beneath the red, near halls of fame,<br/>
                    What Stanford spot lives up to its name?"
                  </div>
                  
                  {/* Rewards Section */}
                  <div className="bg-white/80 rounded-xl p-6 border border-blue-200">
                    <div className="flex justify-center items-center space-x-4">
                      <Image 
                        src="/point-icons/prodigy.png" 
                        alt="Prodigy Points" 
                        width={48} 
                        height={48} 
                      />
                      <div className="text-lg font-semibold text-blue-800">
                        Whoever gets it right gets +4 Prodigy Points
                      </div>
                      <Image 
                        src="/point-icons/prodigy.png" 
                        alt="Prodigy Points" 
                        width={48} 
                        height={48} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              {riddleSolved && !showAnswer && (
                <div className="text-center animate-fade-in">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-500 rounded-2xl p-6 mb-6 shadow-lg">
                    <p className="text-3xl font-bold text-green-800 mb-2">
                      Riddle Solved!
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 animate-pulse">
                    Revealing the answer...
                  </p>
                </div>
              )}

              {/* Instructions */}
              {!riddleSolved && (
                <div className="text-center">
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-6">
                    <p className="text-lg text-yellow-800 font-medium">
                      🧠 <strong>Brain Challenge:</strong> Work together to solve this Stanford riddle!
                    </p>
                  </div>
                  
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-xl font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={handleSolveRiddle}
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