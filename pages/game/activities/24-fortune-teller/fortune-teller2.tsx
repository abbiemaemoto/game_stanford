
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlaceholderPage() {
    const router = useRouter();
  
    const handleContinue = () => {
      router.push("/game/activities/24-fortune-teller/fortune-teller4");
    };

    return (
      <div className="min-h-screen bg-sky-200 p-8 relative">
        {/* Student image in bottom left corner, reflected over y-axis */}
        <div className="absolute bottom-8 left-8">
          <div className="relative w-40 h-40 md:w-64 md:h-64">
            <Image
              src="/student-dark.png"
              alt="Thinking graduate student"
              fill
              style={{ transform: "scaleX(-1)" }} // Reflect over y-axis
              className="object-contain"
            />
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto pl-0 md:pl-32">
          {" "}
          {/* Added padding to prevent overlap with image */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Your time here at Stanford is wrapping up. What is the legacy you hope to leave?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="flex flex-col items-center">
              <Card className="w-full max-w-sm bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-bold text-yellow-300">Option 1</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4 p-6 h-48">
                  <p className="text-xl font-bold text-center text-gray-200">
                    Most likely to be invited back as a future Commencement speaker
                  </p>
                </CardContent>
              </Card>
            </div>
  
            {/* Option 2 */}
            <div className="flex flex-col items-center">
              <Card className="w-full max-w-sm bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-bold text-yellow-300">Option 2</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4 p-6 h-48">
                  <p className="text-xl font-bold text-center text-gray-200">
                    Most likely to become the next president of Stanford
                  </p>
                </CardContent>
              </Card>
            </div>
  
            {/* Option 3 */}
            <div className="flex flex-col items-center">
              <Card className="w-full max-w-sm bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl font-bold text-yellow-300">Option 3</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4 p-6 h-48">
                  <p className="text-xl font-bold text-center text-gray-200">
                    Most likely to get a Stanford building named after them
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-medium text-gray-800 p-4 bg-white/50 rounded-lg inline-block shadow-md">
              Place your player token in the Narrative Lot parking spot corresponding to the option you chose. Click continue after all players have made their choice.
            </p>
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
  
