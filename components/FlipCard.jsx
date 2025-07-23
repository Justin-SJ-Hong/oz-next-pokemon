'use client';

import { useState } from "react";

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-[200px] h-[200px]"
        style={{ perspective: "1000px" }} // ✅ 3D 효과 적용
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* 앞면 */}
          <img
            src={front}
            alt="Front"
            className="absolute w-full h-full object-cover"
            style={{ backfaceVisibility: "hidden" }}
          />
          {/* 뒷면 */}
          <img
            src={back}
            alt="Back"
            className="absolute w-full h-full object-cover"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>
      </div>
      <button
        onClick={() => setFlipped((prev) => !prev)}
        className="mt-2 px-3 py-1 border rounded"
      >
        뒤집기
      </button>
    </div>
  );
}
