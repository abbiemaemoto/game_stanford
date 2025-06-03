
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnswerPage() {
    const router = useRouter();
  
    const handleContinue = () => {
      router.push("/game/activities/17-admit-weekend/admit-weekend4");
    };

    return (
      <div className="min-h-screen bg-sky-200 p-8 relative">
        <div className="absolute bottom-4 left-4 z-0">
          <div className="relative w-80 h-80 sm:w-80 sm:h-80 md:w-90 md:h-90 lg:w-100 lg:h-100">
            <Image
              src="/travel.png"
              alt="travel student"
              fill
              className="object-contain pointer-events-none"
            />
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto pl-0 md:pl-32 pt-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            WWYD during Admit Weekend?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Option 1 */}
            <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform flex flex-col h-full">
                <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 1</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                Your profro has a massive ego...and has more friends than you already. Yikes.
                </p>
                </CardContent>
            </Card>

            {/* Option 2 */}
            <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 2</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                You yell at a profro... but turns out their dad is the CEO of the company you’re interning at... Uh oh.
                </p>
                </CardContent>
            </Card>

            {/* Option 3 */}
            <Card className="w-full max-w-sm bg-white border-2 border-red-600 shadow-1xl transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 3</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                Life goes on as usual! But what happens in Vegas, stays in Vegas... ;)
                </p>
                </CardContent>
            </Card>
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
  
