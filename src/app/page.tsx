"use client";

import { useState } from "react";
import { Wheel } from "react-custom-roulette";

interface WheelSlice {
  option: string;
}

export default function Home() {
  // managed state
  const [textarea, setTextarea] = useState("");
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  // convert to react‑custom‑roulette format
  const names = textarea.split(/\r?\n/).map((n) => n.trim()).filter(Boolean);

  const data: WheelSlice[] = names.map((n) => ({ option: n || " " }));

  function spin() {
    if (names.length === 0 || mustSpin) return;
    setPrizeNumber(Math.floor(Math.random() * names.length));
    setMustSpin(true);
  }

  return (
    <main className="flex flex-col items-center gap-6 p-8 max-w-lg w-full">
      <h1 className="text-3xl font-bold text-center">Name Picker Wheel</h1>

      {/* live-updating textarea */}
      <textarea
        className="border rounded w-full px-3 py-2 h-32 resize-none"
        placeholder="Enter one name per line"
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
      />

      {/* wheel wrapper with overlaid button */}
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        {data.length > 0 ? (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => setMustSpin(false)}
            backgroundColors={["#60A5FA", "#F87171"]}
            textColors={["#ffffff"]}
            outerBorderColor="#000000"
            innerBorderColor="#000000"
          />
        ) : (
          <p className="text-gray-500 text-center absolute">
            Start typing names to populate the wheel
          </p>
        )}

        {/* Spin button positioned in the centre of the wheel */}
        {names.length > 0 ?(
          <button
          className="absolute z-10 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg disabled:opacity-40 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          disabled={names.length === 0 || mustSpin}
          onClick={spin}
        >
          Spin
        </button>
        ) : (
          <div></div>
        )}
      </div>

      {/* winner */}
      {!mustSpin && names.length > 0 && (
        <p className="mt-4 text-xl">
          Winner: <span className="font-semibold">{names[prizeNumber]}</span>
        </p>
      )}
    </main>
  );
}
