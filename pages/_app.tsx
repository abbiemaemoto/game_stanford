// pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import "../app/globals.css"; // ✅ Correct path to globals.css in app/


let gradAudio: HTMLAudioElement | null = null;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const kidsAudioRef = useRef<HTMLAudioElement | null>(null);

  const kidsRoutes = ["/", ...Array.from({ length: 6 }, (_, i) => `/instructions/intro${i}`)];
  const isKidsRoute = kidsRoutes.includes(router.pathname);
  const isKidsFinalPage = router.pathname === "/instructions/intro5";

  const commencementPages = [
    "/game/commencement/intro",
    "/game/commencement/p1",
    "/game/commencement/p2",
    "/game/commencement/p3",
    "/game/commencement/p4",
    "/game/commencement/p5",
    "/game/commencement/p6",
  ];
  const isCommencementRoute = commencementPages.includes(router.pathname);
  const isGradFinalPage = router.pathname === "/game/commencement/end";

  // 🎵 Start kids music
  useEffect(() => {
    const startKidsAudio = () => {
      if (isKidsRoute && kidsAudioRef.current && kidsAudioRef.current.paused) {
        kidsAudioRef.current.volume = 0.2;
        kidsAudioRef.current.play().catch((err) => console.warn("Kids autoplay blocked:", err));
      }
    };

    window.addEventListener("click", startKidsAudio, { once: true });
    window.addEventListener("keydown", startKidsAudio, { once: true });

    return () => {
      window.removeEventListener("click", startKidsAudio);
      window.removeEventListener("keydown", startKidsAudio);
    };
  }, [isKidsRoute]);

  // 🛑 Stop kids music when leaving
  useEffect(() => {
    if (!isKidsRoute && kidsAudioRef.current) {
      kidsAudioRef.current.pause();
      kidsAudioRef.current.currentTime = 0;
    }
  }, [isKidsRoute]);

  // 🎓 Play grad music only once across /commencement/intro to p6
  useEffect(() => {
    const shouldStart = router.pathname === "/game/commencement/intro";
    const shouldStop = !isCommencementRoute || isGradFinalPage;

    // Start once
    const tryPlay = () => {
      if (!gradAudio) {
        gradAudio = new Audio("/grad_music.mp3");
        gradAudio.volume = 0.75;
        gradAudio.loop = false;

        gradAudio.addEventListener("ended", () => {
          if (!isGradFinalPage) {
            gradAudio?.play().catch(() => {});
          }
        });
      }

      if (gradAudio.paused && shouldStart) {
        gradAudio.play().catch((err) => console.warn("Grad autoplay blocked:", err));
      }
    };

    if (shouldStart) {
      window.addEventListener("click", tryPlay, { once: true });
      window.addEventListener("keydown", tryPlay, { once: true });
    }

    // Stop when leaving or on p6
    if (shouldStop && gradAudio) {
      gradAudio.pause();
      gradAudio.currentTime = 0;
      gradAudio = null;
    }

    return () => {
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("keydown", tryPlay);
    };
  }, [router.pathname, isCommencementRoute, isGradFinalPage]);

  return (
    <>
      <Component {...pageProps} />
      <audio
        ref={kidsAudioRef}
        src="/kids-happy-background-music-354662.mp3"
        hidden
        preload="auto"
      />
    </>
  );
}
