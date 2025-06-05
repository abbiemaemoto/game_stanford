"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const instructions = [
  "🧮 Add up your total points in each category: Aura, Prodigy, and Health.",
  "🃏 Place the Future Cards face down. There should be 3 decks—one for each category.",
  "🎂 The player with the next upcoming birthday draws first. Each player will draw one card from each of the 3 Future Card decks, going clockwise.",
  <>
    📊 Each Future Card includes 3 tiers:
    <ul className="list-disc list-inside ml-6 mt-4 space-y-2 text-left text-xl font-semibold">
      <li>🟤 <strong>Common</strong>: If you have <strong>0–4</strong> points in a category</li>
      <li>🔵 <strong>Rare</strong>: If you have <strong>5–8</strong> points</li>
      <li>🟣 <strong>Legendary</strong>: If you have <strong>9+</strong> points</li>
      <li>
        For example, if you have <strong>3 Aura points</strong>, you’ll pick from the <strong>🟤 Common</strong> tier on the Aura card you drew.
      </li>
    </ul>
  </>,
  "🎯 Within your assigned tier, choose one of the 3 options you like the most.",
  "📣 Once everyone has made their choices, share your three Future outcomes aloud with the group!",
  "✅ When you're ready, click 'Continue' to complete the game.",
];

export default function StoryPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < instructions.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleContinue = () => {
    router.push("/game/commencement/end");
  };

  return (
    <div className="min-h-screen bg-sky-200 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
        Welcome to the final milestone of the Game of Stanford
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-black mb-8">
        Read these instructions to discover what the future holds for you.
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl min-h-[300px] flex items-center justify-center text-black">
        <div className="text-2xl md:text-3xl font-bold leading-relaxed">
          {instructions[step]}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex gap-4">
        <Button
          variant="outline"
          className="px-6 py-3 text-md"
          onClick={handleBack}
          disabled={step === 0}
        >
          Back
        </Button>
        {step < instructions.length - 1 ? (
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-md"
            onClick={handleNext}
          >
            Next
          </Button>
        ) : (
          <Button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-md"
            onClick={handleContinue}
          >
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}
