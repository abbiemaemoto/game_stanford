"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import "../pages/globals.css";


export default function StanfordWebsite() {
  const router = useRouter();

  const handleSeniorYearClick = () => {
    router.push("/instructions/intro1");
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%201%2C%202025%2C%2012_16_52%20PM-yWjmhMid2wcEmODJDU9ZBJ0EfNyuLG.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Disabled buttons */}
            <Button
              disabled
              className="bg-gray-500 text-white cursor-not-allowed hover:bg-gray-500 px-6 py-3 text-lg font-medium opacity-100"
              style={{ opacity: 1, backgroundColor: "#6b7280" }}
            >
              Freshman year
            </Button>

            <Button
              disabled
              className="bg-gray-500 text-white cursor-not-allowed hover:bg-gray-500 px-6 py-3 text-lg font-medium opacity-100"
              style={{ opacity: 1, backgroundColor: "#6b7280" }}
            >
              Sophomore year
            </Button>

            <Button
              disabled
              className="bg-gray-500 text-white cursor-not-allowed hover:bg-gray-500 px-6 py-3 text-lg font-medium opacity-100"
              style={{ opacity: 1, backgroundColor: "#6b7280" }}
            >
              Junior year
            </Button>

            {/* Active Senior year button with bounce animation and glow */}

            <Button
              onClick={handleSeniorYearClick}
              className="senior-button px-6 py-3 text-lg font-medium text-white bg-red-600 hover:bg-red-700 transition duration-300 flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-white" />
              Senior year
            </Button>

          </div>
        </div>
      </div>

      <style jsx>{`
        .senior-button {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
            0 0 40px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2);
          animation: bounce-glow 2s ease-in-out infinite;
        }

        @keyframes bounce-glow {
          0%,
          100% {
            transform: translateY(0);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
              0 0 40px rgba(255, 255, 255, 0.4),
              0 0 60px rgba(255, 255, 255, 0.2);
          }
          50% {
            transform: translateY(-10px);
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.8),
              0 0 60px rgba(255, 255, 255, 0.6),
              0 0 90px rgba(255, 255, 255, 0.4);
          }
        }
      `}</style>
    </div>
  );
}
