import React, { useState } from "react";
import PainSelector from "../components/PainSelector";
import ResultDisplay from "../components/ResultDisplay";
import {
  abdominalAreas,
  fingerAreas,
  abdominalVoronoiPoints,
  fingerVoronoiPoints,
} from "../constants";

enum Step {
  Abdominal,
  Finger,
  Result,
}

export default function Home() {
  const [step, setStep] = useState<Step>(Step.Abdominal);
  const [selectedAbdomen, setSelectedAbdomen] = useState<string | null>(null);
  const [selectedFinger, setSelectedFinger] = useState<string | null>(null);

  const handleNext = () => {
    if (step === Step.Abdominal && selectedAbdomen) {
      setStep(Step.Finger);
    } else if (step === Step.Finger && selectedFinger) {
      setStep(Step.Result);
    }
  };

  const handleRestart = () => {
    setStep(Step.Abdominal);
    setSelectedAbdomen(null);
    setSelectedFinger(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-5 text-center">
            แบบสอบถามทางการแพทย์
          </h1>

          {step === Step.Abdominal && (
            <>
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
              <button
                onClick={handleNext}
                disabled={!selectedAbdomen}
                className={`mt-4 w-full py-2 px-4 rounded ${
                  selectedAbdomen
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                ถัดไป
              </button>
            </>
          )}

          {step === Step.Finger && (
            <>
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
              <button
                onClick={handleNext}
                disabled={!selectedFinger}
                className={`mt-4 w-full py-2 px-4 rounded ${
                  selectedFinger
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                ดูผลลัพธ์
              </button>
            </>
          )}

          {step === Step.Result && (
            <ResultDisplay
              abdominalArea={selectedAbdomen}
              fingerArea={selectedFinger}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </div>
  );
}
