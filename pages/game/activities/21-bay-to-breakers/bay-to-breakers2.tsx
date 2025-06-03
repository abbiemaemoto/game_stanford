
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OptionPage() {
    const router = useRouter();
  
    const handleContinue = () => {
      router.push("/game/activities/21-bay-to-breakers/bay-to-breakers3");
    };

    return (
      <div className="min-h-screen bg-[#6A5ACD] p-8 relative">

        {/* Student image in bottom left corner, reflected over y-axis */}
       
            <div className="absolute bottom-0 left-0">
                <Image
                src="/costume.png"
                alt="Bottom-left image"
                width={400}
                height={400}
                className="object-contain"
                />
            </div>
          

  
        <div className="max-w-6xl mx-auto pl-0 md:pl-32 pt-12">
          {" "}
          {/* Added padding to prevent overlap with image */}
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Go big or go home. Pick a costume for your final B2B debut on the Oval.
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
                  Re-use your Halloween costume and be fairies with your friend group!
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
                  Get HUGE inflatable costumes.
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
                  Your alarm went off but you’re hungover and sleep deprived...hit snooze.
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
  
