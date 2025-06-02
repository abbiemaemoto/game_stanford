
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PointsPage() {
    const router = useRouter();
  
    const handleContinue = () => {
      router.push("/game/transition");
    };

    return (
      <div className="min-h-screen bg-sky-200 p-8 relative">
        {/* Student image in bottom left corner, reflected over y-axis */}
        <div className="absolute bottom-8 left-8">
          <div className="relative w-40 h-40 md:w-64 md:h-64">
            <Image
              src="/happy_grad.png"
              alt="Happy grad student"
              fill
              style={{ transform: "scaleX(-1)" }} // Reflect over y-axis
              className="object-contain"
            />
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto pl-0 md:pl-32">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                O all the places you'll go...let's see where you want to go next after you leave the Farm.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Option 1 */}
                <div className="flex flex-col items-center">
                <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform">
                    <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl font-bold text-red-600">Option 1</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center space-y-4 p-6 h-48 text-gray-600">
                    <p className="text-xl font-bold text-center">
                        You got in! Classes are a breeze and you’re surprised by how much the grad students love to party. It’s going to be a great year!
                    </p>
                    </CardContent>
                </Card>
                <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
                    <div className="flex justify-center space-x-4 text-sm font-semibold">
                        <span className="text-red-600">Health: -1</span>
                        <span className="text-green-600">Aura: +3</span>
                        <span className="text-blue-600">Prodigy: -2</span>
                    </div>
                </div>
                </div>
  
            {/* Option 2 */}
            <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm bg-white border-2 border-red-500 shadow-1xl transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 2</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4 p-6 h-48 text-gray-600">
                <p className="text-xl font-bold text-center">
                    After 8 months, you FINALLY got pre-seed funding! You’re living off cup ramen...but that’s the dream, right?
                </p>
                </CardContent>
            </Card>
            <div className="mt-4 bg-white/100 rounded-lg p-3 border border-red-800">
                    <div className="flex justify-center space-x-4 text-sm font-semibold">
                        <span className="text-red-600">Health: +0</span>
                        <span className="text-green-600">Aura: +1</span>
                        <span className="text-blue-600">Prodigy: +1</span>
                    </div>
                </div>
            </div>
        

  
            {/* Option 3 */}
            <div className="flex flex-col items-center">
              <Card className="w-full max-w-sm bg-white border-2 border-red-500 shadow-1xl transform hover:scale-105 transition-transform duration-300">
                  <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-bold text-red-600">Option 3</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center space-y-4 p-6 h-48 text-gray-600">
                  <p className="text-xl font-bold text-center">
                      Your boss is a nightmare but the free happy hour everyday is SO worth it. Being wined & dined is kinda nice :)
                  </p>
                  </CardContent>
              </Card>

                <div className="mt-4 bg-white/100 rounded-lg p-3 border border-red-800">
                    <div className="flex justify-center space-x-4 text-sm font-semibold">
                        <span className="text-red-600">Health: +0</span>
                        <span className="text-green-600">Aura: -3</span>
                        <span className="text-blue-600">Prodigy: +3</span>
                    </div>
                </div>

            </div>

              <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-gray-800 p-4 bg-white/100 rounded-lg inline-block shadow-md">
                Don't forget to gather your point cards!
              </p>
            </div>

          </div>

          

          {/* Continue Button */}
          <div className="fixed bottom-8 right-10">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
