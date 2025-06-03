"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function StoryPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/game/commencement/end");
  };

  return (
    <div className="min-h-screen bg-sky-200 relative overflow-hidden">
        <div className="pt-10 px-8 text-center">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-black leading-tight mt-6">
          {"Welcome to the final milestone of the Game of Stanford"}
        </h1>
        <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-black leading-tight mt-10">
          {"Read these instructions to determine what the future holds for you."}
        </h2>
        </div>

        {/* Instructions */}
        <ol className="mt-8 text-left text-lg md:text-xl lg:text-xl font-medium text-black max-w-7xl mx-auto list-decimal list-inside space-y-4">
        <li>Add up your total points in each category (Aura, Prodigy, Health)</li>
        <li>Place the Future Cards face down. There should be 3 decks, one for each category.</li>
        <li>Each player will randomly draw one card from each deck. Start with the person with the nearest birthday, and continue clockwise.</li>
        <li>
            On each of the Future Cards, you will see 3 tiers (Common, Rare, and Legendary). For each point category:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>If you have 0–4 points, you will be picking from the "Common" tier.</li>
            <li>If you have 5–8 points, you will be picking from the "Rare" tier.</li>
            <li>If you have 9+ points, you will be picking from the "Legendary" tier.</li>
            <li>As an example, if you have 3 Aura points, you will be picking from the "Common" tier on your selected Future Aura card.</li>
            </ul>
        </li>
        <li>Within your designated tier, pick one of the 3 options you like most!</li>
        <li>Once you are done selecting an option from each of your three Future Cards, share out loud with the group! These are the accomplishments that are "in the cards" for you!</li>
        <li>After everyone has shared, click "Continue".</li>
        </ol>


        <div className="fixed bottom-8 right-10">
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