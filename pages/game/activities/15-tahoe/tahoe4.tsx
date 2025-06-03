import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnswerPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/15-tahoe/tahoe5");
  };

  return (
    <div className="min-h-screen bg-sky-200 p-8 relative">
      {/* REPLACE THIS: Student image in bottom left corner, reflected over y-axis */}
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
          On a good traffic day, how long does it take to drive to Lake Tahoe
          from Stanford campus?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Option 1 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm h-full bg-red-800 border-2 border-white shadow-2xl transform hover:scale-105 transition-transform">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">
                  Option 1
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600">
                <p className="text-xl font-bold text-center text-white">
                  6 hours
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm h-full bg-green-600 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">
                  Option 2
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <p className="text-xl font-bold text-center text-gray-200">
                  4.5 hours
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Option 3 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm h-full bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">
                  Option 3
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <p className="text-xl font-bold text-center text-gray-200">
                  2 hours
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Option 4 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm h-full bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">
                  Option 4
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <p className="text-xl font-bold text-center text-gray-200">
                  3.5 hours
                </p>
              </CardContent>
            </Card>
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
  );
}
