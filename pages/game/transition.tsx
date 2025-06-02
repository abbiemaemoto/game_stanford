import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AnswerPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/map");
  };

  return (
    <div className="h-screen bg-sky-200 flex flex-col items-center p-6 mt-2">
      {/* Header */}
      <div className="w-full max-w-4xl">
        <h2 className="text-5xl font-bold text-center text-gray-800">
          Let’s move to the next square!
        </h2>
      </div>

      {/* Image */}
      <div className="relative w-[550px] h-[550px] mt-2">
        <Image
          src="/tandem.png"
          alt="Students biking"
          fill
          className="object-contain"
        />
      </div>

      {/* Button */}
      <div className="mt-2">
        <Button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 text-lg"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
