
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OptionPage() {
    const router = useRouter();
  
    const handleContinue = () => {
      router.push("/game/activities/5-halloween/halloween3");
    };

    return (
      <div className="min-h-screen bg-[rgb(45,26,50)] p-8 relative">
        {/* Student image in bottom left corner, reflected over y-axis */}
        <div className="absolute bottom-2 left-2 z-0">
          <div className="relative w-80 h-80">
            <Image
              src="/sad_hall.png"
              alt="sick"
              fill
              className="object-contain pointer-events-none"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto pl-0 md:pl-32 pt-12">
          {" "}
          {/* Added padding to prevent overlap with image */}
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Halloween is your favorite holiday and you’ve been planning your costume for months!!! But you and your friends are feeling sick... 
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
                        Compromise. Even though Halloweekend has 4 days this year, just go out one of the days. 
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
                    You and your friends got everyone sick.... And you are SO much sicker than before 
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
                    You had a chill fun night! You missed the party of the year... but at least you’re not sick anymore.
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
    )
  }
  
