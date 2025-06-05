"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function GradMusicController() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Start the music only on /game/commencement/intro
  useEffect(() => {
    if (pathname === "/game/commencement/intro" && !audioRef.current) {
      const audio = new Audio("/grad_music.mp3");
      audio.volume = 0.75;
      audio.loop = false;
      audioRef.current = audio;

      audio.play().catch((e) => {
        console.warn("Autoplay blocked, wait for user interaction", e);
        const startOnInteraction = () => {
          audio.play().catch(() => {});
          document.removeEventListener("click", startOnInteraction);
        };
        document.addEventListener("click", startOnInteraction);
      });
    }
  }, [pathname]);

  // Pause and clean up after leaving p6
  useEffect(() => {
    if (
      audioRef.current &&
      pathname !== "/game/commencement/intro" &&
      !pathname.startsWith("/game/commencement/p") &&
      pathname !== "/game/commencement/p1" &&
      pathname !== "/game/commencement/p2" &&
      pathname !== "/game/commencement/p3" &&
      pathname !== "/game/commencement/p4" &&
      pathname !== "/game/commencement/p5" &&
      pathname !== "/game/commencement/p6"
    ) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  }, [pathname]);

  return null;
}
