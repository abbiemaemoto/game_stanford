import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlaceholderPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/transition");
  };

  return (
    <div className="relative min-h-screen bg-sky-200 overflow-hidden">
            {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/arbor.png"
          alt="Background Arbor"
          fill
          className="opacity-50 object-cover"
          priority
        />
      </div>

      {/* Student image */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="relative w-40 h-40 md:w-64 md:h-64">
          <Image
            src="/trivia.png"
            alt="Students at trivia"
            fill
            style={{ transform: "scaleX(-1)" }}
            className="object-contain"
          />
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-[50vh] px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 drop-shadow">
          Why is Stanford's mascot a tree anyways?
        </h2>

        {/* Trivia Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          <Card className="bg-green-600 border-2 border-yellow-400 text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-yellow-300">
                Option 1
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-base font-semibold text-gray-100 text-center">
                It represents El Palo Alto, the namesake of Palo Alto
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-800 border-2 border-yellow-400 text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-yellow-300">
                Option 2
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-base font-semibold text-gray-100 text-center">
                Redwood trees are native to Stanford’s campus
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-800 border-2 border-yellow-400 text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-yellow-300">
                Option 3
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-base font-semibold text-gray-100 text-center">
                It is a neutral mascot after a campus-wide vote eliminated all
                animals
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-800 border-2 border-yellow-400 text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-yellow-300">
                Option 4
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-base font-semibold text-gray-100 text-center">
                It honors the founder’s favorite tree, which stood outside his
                childhood home
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="relative z-20 mt-6 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow">
          If you got it right...
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 leading-snug mt-4">
          You either know your Spanish or your history really well! Here’s some
          health for fully embracing the Tree’s energy — that’s peak senior-year
          vitality.
        </h2>
      </div>
      <div className="relative z-20 flex justify-center space-x-4 text-4xl font-semibold mt-6">
        <span className="text-blue-400">Prodigy: +1</span>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-30">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg shadow-lg"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
