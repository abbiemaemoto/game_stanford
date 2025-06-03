import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnswerPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/activities/19-spring-midterms/spring-midterms6");
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
        {" "}
        {/* Added padding to prevent overlap with image */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          In the 2024 Stanford Marriage Pact, which major had the highest
          proportion of students respond that they would rather cheat on an exam
          than fail it?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch mb-12">
          {/* Option 1 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm h-full bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">
                  Option 1
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <p className="text-xl font-bold text-center text-gray-200">
                  Computer Science
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm h-full bg-red-800 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">
                  Option 2
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <p className="text-xl font-bold text-center text-gray-200">
                  Psychology
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
                  MS&E
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Option 4 */}
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-sm h-full bg-green-600 border-2 border-gold text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-yellow-300">
                  Option 4
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <p className="text-xl font-bold text-center text-gray-200">
                  STS
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          {"If you got it right..."}
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-black leading-tight mt-6">
          {"You know your classmates really well! We know you’d never cheat..."}
        </h2>
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
