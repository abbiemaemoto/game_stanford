"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InstructionsPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/instructions/intro2");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%201%2C%202025%2C%2012_28_43%20PM-nmClUBhfDONnTrrPDopABrXDiBu017.png')",
        }}
      />
      {/*black overlay*/}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl px-4">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          You made it to Senior Year!!
        </h1>
        <h2 className="mt-6 text-gray-100 text-xl md:text-2xl drop-shadow">
          It's time to make the most of your last year on the Farm.
        </h2>
      </div>
      {/* Continue Button */}
      <div className="fixed bottom-8 right-10 z-10">
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
