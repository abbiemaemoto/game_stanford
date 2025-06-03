"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BikeMinigame3() {
  const router = useRouter();

  const handleReturnToMap = () => {
    router.push("/game/map");
  };

  const handleContinue = () => {
    router.push("/game/map");
  };

  useEffect(() => {
    // Celebration confetti effect using CSS animation instead of canvas-confetti
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);

    // Create confetti pieces
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)];
      confettiContainer.appendChild(confetti);
    }

    // Clean up after 5 seconds
    setTimeout(() => {
      document.body.removeChild(confettiContainer);
    }, 5000);

    return () => {
      if (document.body.contains(confettiContainer)) {
        document.body.removeChild(confettiContainer);
      }
    };
  }, []);

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
        {/* Success Banner */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-4 border-green-500 rounded-2xl p-8 mb-8 shadow-2xl transform rotate-1 animate-bounce-gentle">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 text-center">
            🎉 Success! 🎉
          </h1>
        </div>

        {/* Main Content Box */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Great job! You found your bike keys!
            </h2>
            
            {/* Bike with keys illustration */}
            <div className="flex justify-center items-center mb-8">
              <div className="text-8xl mr-6 animate-bounce">🚲</div>
              <div className="text-6xl animate-pulse">🗝️</div>
            </div>

            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
              Now you can ride your bike to your new dorm and start the year off right!
            </p>
          </div>

          {/* Rewards Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-green-50 border-2 border-yellow-400 rounded-2xl p-8 mb-8 shadow-lg">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
              🏆 Rewards Earned! 🏆
            </h3>
            <div className="flex justify-center space-x-12">
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <Image 
                  src="/point-icons/prodigy.png" 
                  alt="Prodigy Points" 
                  width={80} 
                  height={80} 
                  className="mx-auto mb-4 animate-pulse"
                />
                <div className="text-xl font-bold text-yellow-700">+2 Prodigy Points</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <Image 
                  src="/point-icons/health.png" 
                  alt="Health Points" 
                  width={80} 
                  height={80} 
                  className="mx-auto mb-4 animate-pulse"
                />
                <div className="text-xl font-bold text-red-600">+2 Health Points</div>
              </div>
            </div>
          </div>

          {/* Completion Message */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-400 rounded-2xl p-6 mb-8 shadow-lg">
            <p className="text-xl text-center text-blue-800 font-medium">
              <strong>🎮 Minigame Complete!</strong><br/>
              You successfully completed the bike moving challenge and found something green in the real world!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-xl font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={handleReturnToMap}
            >
              🗺️ Return to Campus Map
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-400 hover:bg-gray-100 px-10 py-4 text-xl font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={handleContinue}
            >
              🚀 Continue Exploring
            </Button>
          </div>
        </div>

        {/* Back to Map Helper */}
        <div className="mt-8 text-center">
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
            <p className="text-white text-xl font-medium">
              🌟 Ready to explore more activities on campus? 🌟
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx global>{`
        @keyframes bounce-gentle {
          0%, 100% {
            transform: rotate(1deg) translateY(0);
          }
          50% {
            transform: rotate(1deg) translateY(-10px);
          }
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .confetti-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1000;
        }

        .confetti-piece {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: confetti-fall 3s linear infinite;
        }
      `}</style>
    </div>
  );
} 