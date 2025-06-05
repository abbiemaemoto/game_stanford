// pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioStarted, setAudioStarted] = useState(false);

  const validRoutes = ["/", ...Array.from({ length: 6 }, (_, i) => `/instructions/intro${i}`)];
  const isValidRoute = validRoutes.includes(router.pathname);
  const isFinalPage = router.pathname === "/instructions/intro5";

  // Start music on any user interaction
  useEffect(() => {
    const tryStartAudio = () => {
      if (!audioStarted && isValidRoute && audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch((err) => console.warn("Autoplay blocked:", err));
        setAudioStarted(true);
      }
    };

    window.addEventListener("click", tryStartAudio, { once: true });
    window.addEventListener("keydown", tryStartAudio, { once: true });

    return () => {
      window.removeEventListener("click", tryStartAudio);
      window.removeEventListener("keydown", tryStartAudio);
    };
  }, [audioStarted, isValidRoute]);

  // Stop music if leaving allowed pages
  useEffect(() => {
    if (!isValidRoute && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isValidRoute]);

  // Replay if music ends before final page
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      if (!isFinalPage) {
        audio.play().catch(() => {});
      }
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isFinalPage]);

  return (
    <>
      <Component {...pageProps} />
      <audio
        ref={audioRef}
        src="/kids-happy-background-music-354662.mp3"
        loop={false}
        hidden
        preload="auto"
      />
    </>
  );
}
