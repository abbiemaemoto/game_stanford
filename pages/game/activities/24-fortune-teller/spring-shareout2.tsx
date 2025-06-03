"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SpringShareout2() {
  const router = useRouter();

  const handleHeadToGraduation = () => {
    router.push("/game/commencement/intro");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with spring colors */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/alpine.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Decorative spring elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 text-3xl animate-bounce">🌸</div>
        <div className="absolute bottom-20 left-10 text-4xl animate-pulse">🌺</div>
        <div className="absolute top-32 left-20 text-2xl animate-bounce">☀️</div>
        <div className="absolute bottom-40 right-20 text-3xl animate-pulse">🌷</div>
      </div>

      {/* Alpine Inn illustration */}
      <div className="absolute top-8 right-8">
        <div className="bg-white/80 rounded-lg p-4 shadow-lg border border-gray-300">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800 mb-2">ALPINE INN</div>
            <div className="w-16 h-12 bg-gradient-to-b from-brown-400 to-brown-600 mx-auto rounded-sm relative">
              <div className="absolute top-1 left-1 right-1 h-3 bg-yellow-200 rounded-sm"></div>
              <div className="absolute bottom-1 left-2 right-2 h-2 bg-brown-800 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        {/* Main Content Box */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 max-w-5xl mx-auto shadow-2xl border border-green-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 leading-tight">
              You & your friends come together<br />
              for one last dinner at Alpine...
            </h1>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-green-400 rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
                Everyone share:
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-green-800 leading-relaxed">
                What is your biggest fear for the<br />
                future? And your greatest hope?
              </p>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-4xl">😰</div>
              <div className="text-4xl">💭</div>
              <div className="text-4xl">🌟</div>
            </div>

            {/* Fear/Hope prompts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-700 mb-3">😰 Biggest Fears</h3>
                <div className="space-y-2 text-left">
                  <p className="text-sm text-red-600">💼 Career?</p>
                  <p className="text-sm text-red-600">👥 Friendship?</p>
                  <p className="text-sm text-red-600">🌍 Impact?</p>
                  <p className="text-sm text-red-600">⏰ Regrets?</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-700 mb-3">🌟 Greatest Hopes</h3>
                <div className="space-y-2 text-left">
                  <p className="text-sm text-green-600">✨ Meaning?</p>
                  <p className="text-sm text-green-600">🤝 Relationships?</p>
                  <p className="text-sm text-green-600">🌱 Growing & Learning?</p>
                  <p className="text-sm text-green-600">🏠 Finding Home?</p>
                </div>
              </div>
            </div>

            {/* Graduation cap */}
            <div className="flex justify-center mb-8">
              <div className="text-6xl">🎓</div>
            </div>
          </div>
        </div>
      </div>

      {/* Head to Graduation Button */}
      <div className="fixed bottom-8 right-10 z-10">
        <Button
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-5 text-lg shadow-lg"
          onClick={handleHeadToGraduation}
        >
          Head to Graduation ▶
        </Button>
      </div>
    </div>
  );
} 