import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AnswerPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/map");
  };

  return (
    <div className="h-screen bg-sky-200 flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-full max-w-4xl pt-12">
        <h2 className="text-5xl font-bold text-center text-gray-800">
          Let’s move to the next square!
        </h2>
      </div>

      {/* Image */}
      <div className="relative w-[600px] h-[600px] mt-4">
        <Image
          src="/tandem.png"
          alt="Students biking"
          fill
          className="object-contain"
        />
      </div>

      {/* Button */}
      <div className="mt-4">
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
