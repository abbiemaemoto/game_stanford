"use client"

import Link from "next/link"

export default function GamePage() {
  return (
    <div className="min-h-screen w-full bg-white flex items-start justify-center overflow-hidden p-4">
      <div className="relative w-[70vw]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Map%21%20%281%29.png-Igpgi4AoxhkFmQeVgXmKGYSLktzGVZ.jpeg"
          alt="Stanford Campus Map"
          className="w-full h-auto object-contain"
        />

        {/* Emojis positioned relative to the image container */}
        <Link href="/fortune-teller" className="absolute left-[6%] top-[17%] text-3xl">🔮</Link>
        <Link href="/drama" className="absolute left-[47%] top-[28%] text-3xl">🕺</Link>
        <Link href="/sports" className="absolute left-[56%] top-[19%] text-3xl">⛷️</Link>
        <Link href="/events" className="absolute left-[72%] top-[10%] text-3xl">🎄</Link>
        <Link href="/stadium" className="absolute left-[87%] top-[20%] text-3xl">🪓</Link>
        <Link href="/music" className="absolute left-[67.5%] top-[32%] text-3xl">🎶</Link>
        <Link href="/search" className="absolute left-[30%] top-[42%] text-3xl">🔍</Link>
        <Link href="/fun" className="absolute left-[32%] top-[50%] text-3xl">🏋🏼</Link>
        <Link href="/green" className="absolute left-[45%] top-[48%] text-3xl">🌳</Link>
        <Link href="/green" className="absolute left-[57%] top-[40%] text-3xl">🌕</Link>
        <Link href="/green" className="absolute left-[48%] top-[41%] text-3xl">🍽️</Link>
        <Link href="/green" className="absolute left-[60%] top-[32%] text-3xl">🏃🏻‍♀️</Link>
        <Link href="/honors" className="absolute left-[44%] top-[63%] text-3xl">🌟</Link>
        <Link href="/tech" className="absolute left-[50.5%] top-[66%] text-3xl">📱</Link>
        <Link href="/health" className="absolute left-[43%] top-[71%] text-3xl">❤️</Link>
        <Link href="/bike" className="absolute left-[50%] top-[72%] text-3xl">🚲</Link>
        <Link href="/sunshine" className="absolute left-[56%] top-[70%] text-3xl">☀️</Link>
        <Link href="/backpack" className="absolute left-[54%] top-[75%] text-3xl">🎒</Link>
        <Link href="/halloween" className="absolute left-[47.5%] top-[88.5%] text-3xl">🎃</Link>
        <Link href="/halloween" className="absolute left-[40%] top-[84%] text-3xl">🫧</Link>
        <Link href="/landmark" className="absolute left-[58.5%] top-[85.5%] text-3xl">🪨</Link>
        <Link href="/academics" className="absolute left-[66%] top-[60.5%] text-3xl">📚</Link>
        <Link href="/writing" className="absolute left-[62.5%] top-[62%] text-3xl">📝</Link>
        <Link href="/writing" className="absolute left-[80%] top-[49%] text-2xl">📅</Link>
      </div>
    </div>
  )
}
