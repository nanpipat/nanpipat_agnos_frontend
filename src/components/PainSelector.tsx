import React from "react";
import Image from "next/image";
import { Area } from "../types";
import VoronoiSelector from "./VoronoiSelector";

interface PainSelectorProps {
  areas: Area[];
  selectedArea: string | null;
  setSelectedArea: (id: string) => void;
  baseImage: string;
  highlightImage: string;
  activeImage: string;
  title: string;
  voronoiPoints: { x: number; y: number; id: string }[];
}

const PainSelector: React.FC<PainSelectorProps> = ({
  areas,
  selectedArea,
  setSelectedArea,
  baseImage,
  highlightImage,
  activeImage,
  title,
  voronoiPoints,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="relative w-64 h-64 mx-auto">
        <Image
          src={baseImage}
          alt="ภาพพื้นฐาน"
          layout="fill"
          objectFit="contain"
        />
        <VoronoiSelector
          width={256}
          height={256}
          points={voronoiPoints}
          onSelect={setSelectedArea}
        />
        {selectedArea &&
          selectedArea !== "all-over" &&
          selectedArea !== "others" && (
            <>
              <Image
                src={highlightImage.replace("{area}", selectedArea)}
                alt={`${selectedArea} ที่ถูกเลือก`}
                layout="fill"
                objectFit="contain"
              />
              <Image
                src={activeImage.replace("{area}", selectedArea)}
                alt={`${selectedArea} ที่กำลังเลือก`}
                layout="fill"
                objectFit="contain"
              />
            </>
          )}
        {selectedArea === "all-over" && (
          <Image
            src="/images/all-over-highlight.png"
            alt="ทั้งหมด"
            layout="fill"
            objectFit="contain"
          />
        )}
        {selectedArea === "others" && (
          <Image
            src="/images/others-highlight.png"
            alt="อื่นๆ"
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {areas.map((area) => (
          <button
            key={area.id}
            className={`p-2 rounded ${
              selectedArea === area.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedArea(area.id)}
          >
            {area.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PainSelector;
