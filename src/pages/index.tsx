import { useState } from "react";
import PainSelector from "../components/PainSelector";
import {
  abdominalAreas,
  fingerAreas,
  abdominalVoronoiPoints,
  fingerVoronoiPoints,
} from "../utils/constants";

export default function Home() {
  const [selectedAbdomen, setSelectedAbdomen] = useState<string | null>(null);
  const [selectedFinger, setSelectedFinger] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-5 text-center">
            แบบสอบถามทางการแพทย์
          </h1>

          <PainSelector
            areas={abdominalAreas}
            selectedArea={selectedAbdomen}
            setSelectedArea={setSelectedAbdomen}
            baseImage="/images/default-abs.png"
            highlightImage="/images/{area}-highlight.png"
            activeImage="/images/{area}-active.png"
            title="คุณมีอาการปวดท้องบริเวณใด?"
            voronoiPoints={abdominalVoronoiPoints}
          />

          <PainSelector
            areas={fingerAreas}
            selectedArea={selectedFinger}
            setSelectedArea={setSelectedFinger}
            baseImage="/images/default-finger.png"
            highlightImage="/images/{area}-highlight.png"
            activeImage="/images/{area}-active.png"
            title="คุณมีอาการปวดนิ้วบริเวณใด?"
            voronoiPoints={fingerVoronoiPoints}
          />
        </div>
      </div>
    </div>
  );
}
