
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnswerPage() {
    const router = useRouter();
  
    const handleContinue = () => {
      router.push("/game/transition");
    };

    return (
      <div className="min-h-screen bg-sky-200 p-8 relative">
        <div className="absolute bottom-4 left-4 z-0">
          <div className="relative w-50 h-50 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-70 lg:h-70">
            <Image
              src="/cold.png"
              alt="cold student"
              fill
              className="object-contain pointer-events-none"
            />
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto pl-0 md:pl-32 pt-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Let’s start the year off on the right foot with FDOC pictures. You’re running a little late for class though...
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Option 1 */}
        <div className="flex flex-col h-full">
            <Card className="w-full bg-white border-2 border-red-600 shadow-2xl transform hover:scale-105 transition-transform flex flex-col flex-1">
            <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 1</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                BRRR it’s kinda cold! The photos turned out great but the TA personally emailed you about the importance of attendance.
                </p>
            </CardContent>
            </Card>

            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
            <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-red-600">Health: -2</span>
                <span className="text-green-600">Aura: +2</span>
                <span className="text-blue-600">Prodigy: -1</span>
            </div>
            </div>
        </div>

        {/* Option 2 */}
        <div className="flex flex-col h-full">
            <Card className="w-full bg-white border-2 border-red-600 shadow-2xl transform hover:scale-105 transition-transform flex flex-col flex-1">
            <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 2</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                The pic is cute, but the background was ugly so you didn’t post it–your mom loved it tho! You also made it to class without a problem!
                </p>
            </CardContent>
            </Card>

            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
            <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-red-600">Health: +0</span>
                <span className="text-green-600">Aura: +1</span>
                <span className="text-blue-600">Prodigy: +1</span>
            </div>
            </div>
        </div>

        {/* Option 3 */}
        <div className="flex flex-col h-full">
            <Card className="w-full bg-white border-2 border-red-600 shadow-2xl transform hover:scale-105 transition-transform flex flex-col flex-1">
            <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-red-600">Option 3</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-gray-600 flex-1">
                <p className="text-xl font-bold text-center">
                You now feel FOMO looking at everyone’s cute FDOC photos. But you were able to get valuable 1:1 time with the Nobel Laureate professor!
                </p>
            </CardContent>
            </Card>

            <div className="mt-4 bg-white rounded-lg p-3 border border-red-500">
            <div className="flex justify-center space-x-4 text-sm font-semibold">
                <span className="text-red-600">Health: +1</span>
                <span className="text-green-600">Aura: -2</span>
                <span className="text-blue-600">Prodigy: +3</span>
            </div>
            </div>
        </div>
 
        <div className="md:col-span-3 flex justify-center mt-12">
            <div className="text-2xl font-bold text-gray-800 p-4 bg-white rounded-lg shadow-md">
                Don't forget to gather your point cards!
            </div>
            </div>




          {/* Continue Button */}
          <div className="fixed bottom-8 right-10 items-center">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
