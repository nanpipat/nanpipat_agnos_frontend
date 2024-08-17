import React from "react";
import { abdominalAreas, fingerAreas } from "../constants";

interface ResultDisplayProps {
  abdominalArea: string | null;
  fingerArea: string | null;
  onRestart: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  abdominalArea,
  fingerArea,
  onRestart,
}) => {
  const getAreaName = (areaId: string | null, areas: typeof abdominalAreas) => {
    return areas.find((area) => area.id === areaId)?.name || "ไม่ระบุ";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">ผลลัพธ์</h2>
      <p className="mb-2">
        อาการปวดท้อง: {getAreaName(abdominalArea, abdominalAreas)}
      </p>
      <p className="mb-4">
        อาการปวดนิ้ว: {getAreaName(fingerArea, fingerAreas)}
      </p>
      <button
        onClick={onRestart}
        className="mt-4 w-full py-2 px-4 rounded bg-blue-500 text-white"
      >
        เริ่มใหม่
      </button>
    </div>
  );
};

export default ResultDisplay;
