"use client";

import Link from "next/link";

export default function GamePage() {
  return (
    <div className="min-h-screen w-full bg-white flex items-start justify-center overflow-hidden p-4">
      <Link
        href="/instructions/intro1"
        className="fixed top-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md transition"
      >
        Help
      </Link>
      <div className="relative w-[70vw]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Map%21%20%281%29.png-Igpgi4AoxhkFmQeVgXmKGYSLktzGVZ.jpeg"
          alt="Stanford Campus Map"
          className="w-full h-auto object-contain"
        />

        {/* Emojis positioned relative to the image container */}
        <Link
          href="activities/24-fortune-teller/fortune-teller1"
          className="absolute left-[6%] top-[17%] text-3xl"
        >
          🔮
        </Link>
        <Link
          href="activities/13-formal/formal1"
          className="absolute left-[47%] top-[28%] text-3xl"
        >
          🕺
        </Link>
        <Link
          href="activities/15-tahoe/tahoe1"
          className="absolute left-[56%] top-[19%] text-3xl"
        >
          ⛷️
        </Link>
        <Link
          href="activities/3-mascot/mascot1"
          className="absolute left-[72%] top-[10%] text-3xl"
        >
          🎄
        </Link>
        <Link
          href="activities/7-axe/axe1"
          className="absolute left-[87%] top-[20%] text-3xl"
        >
          🪓
        </Link>
        <Link
          href="activities/18-frost-fest/frost-fest1"
          className="absolute left-[67.5%] top-[32%] text-3xl"
        >
          🎶
        </Link>
        <Link
          href="activities/16-winter-finals/winter-finals1"
          className="absolute left-[30%] top-[42%] text-3xl"
        >
          🔍
        </Link>
        <Link
          href="activities/10-gym/gym1"
          className="absolute left-[32%] top-[50%] text-3xl"
        >
          🏋️
        </Link>
        <Link
          href="activities/4-neighborhoods/neighborhoods1"
          className="absolute left-[45%] top-[48%] text-3xl"
        >
          🌳
        </Link>
        <Link
          href="activities/14-moon/moon1"
          className="absolute left-[57%] top-[40%] text-3xl"
        >
          🌕
        </Link>
        <Link
          href="activities/22-dinner-on-the-quad/dinner-on-the-quad1"
          className="absolute left-[48%] top-[41%] text-3xl"
        >
          🍽️
        </Link>
        <Link
          href="activities/21-bay-to-breakers/bay-to-breakers1"
          className="absolute left-[60%] top-[32%] text-3xl"
        >
          🏃🏻‍♀️
        </Link>
        <Link
          href="activities/23-end-of-year/end-of-year1"
          className="absolute left-[44%] top-[63%] text-3xl"
        >
          🌟
        </Link>
        <Link
          href="activities/6-phone/phone1"
          className="absolute left-[50.5%] top-[66%] text-3xl"
        >
          📱
        </Link>
        <Link
          href="activities/11-valentines/valentines1"
          className="absolute left-[43%] top-[71%] text-3xl"
        >
          ❤️
        </Link>
        <Link
          href="activities/2-bike/bike1"
          className="absolute left-[50%] top-[72%] text-3xl"
        >
          🚲
        </Link>
        <Link
          href="activities/17-admit-weekend/admit-weekend1s"
          className="absolute left-[56%] top-[70%] text-3xl"
        >
          ☀️
        </Link>
        <Link
          href="activities/1-fdoc/fdoc1"
          className="absolute left-[54%] top-[75%] text-3xl"
        >
          🎒
        </Link>
        <Link
          href="activities/5-halloween/halloween1"
          className="absolute left-[47.5%] top-[88.5%] text-3xl"
        >
          🎃
        </Link>
        <Link
          href="activities/20-dunch/dunch1"
          className="absolute left-[40%] top-[84%] text-3xl"
        >
          🫧
        </Link>
        <Link
          href="activities/12-winter-midterms/winter-midterms1"
          className="absolute left-[58.5%] top-[85.5%] text-3xl"
        >
          🪨
        </Link>
        <Link
          href="activities/8-fall-finals/fall-finals1"
          className="absolute left-[66%] top-[60.5%] text-3xl"
        >
          📚
        </Link>
        <Link
          href="activities/19-spring-midterms/spring-midterms1"
          className="absolute left-[62.5%] top-[62%] text-3xl"
        >
          📝
        </Link>
        <Link
          href="activities/9-early-winter-weekend/early-winter-weekend1"
          className="absolute left-[80%] top-[49%] text-2xl"
        >
          📅
        </Link>
      </div>
    </div>
  );
}
