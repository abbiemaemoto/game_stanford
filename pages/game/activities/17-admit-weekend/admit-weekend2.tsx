
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OptionPage() {
    const router = useRouter();
  
    const handleContinue = () => {
      router.push("/game/activities/17-admit-weekend/admit-weekend3");
    };

    return (
      <div className="min-h-screen bg-sky-200 p-8 relative">

        {/* Student image in bottom left corner, reflected over y-axis */}
        <div className="absolute bottom-4 left-4 z-0">
          <div className="relative w-70 h-70 sm:w-70 sm:h-70 md:w-80 md:h-80 lg:w-90 lg:h-90">
            <Image
              src="/admit.png"
              alt="pondering"
              fill
              className="object-contain pointer-events-none"
            />
          </div>
        </div>


  
        <div className="max-w-6xl mx-auto pl-0 md:pl-32 pt-12">
          {" "}
          {/* Added padding to prevent overlap with image */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          WWYD during Admit Weekend?
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
                  Host a ProFro! Its so cute to see the new admits experiencing THE BEST SCHOOL ON EARTH
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
                  Heckle at the high schoolers. They’re clogging my path to class.
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
                  Ignorance is bliss. Say hi to a Profro on your way to the airport- you're escaping to Vegas!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-medium text-gray-800 p-4 bg-white/90 rounded-lg inline-block shadow-md">
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
  
