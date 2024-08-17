import { Area, VoronoiPoint } from "../types";

export const abdominalAreas: Area[] = [
  { id: "ruq", name: "ช่องท้องขวาบน" },
  { id: "luq", name: "ช่องท้องซ้ายบน" },
  { id: "rlq", name: "ช่องท้องขวาล่าง" },
  { id: "llq", name: "ช่องท้องซ้ายล่าง" },
  { id: "epigastrium", name: "ลิ้นปี่" },
  { id: "umbilicus", name: "รอบสะดือ" },
  { id: "suprapubic", name: "เหนือหัวเหน่า" },
  { id: "all-over", name: "ทั่วทั้งท้อง" },
];

export const fingerAreas: Area[] = [
  { id: "mcp", name: "ข้อโคนนิ้ว" },
  { id: "pip", name: "ข้อกลางนิ้ว" },
  { id: "dip", name: "ข้อปลายนิ้ว" },
  { id: "others", name: "อื่นๆ หรือไม่ได้ปวดบริเวณข้อ" },
];

export const abdominalVoronoiPoints: VoronoiPoint[] = [
  { x: 100, y: 50, id: "ruq" },
  { x: 150, y: 50, id: "luq" },
  { x: 100, y: 150, id: "rlq" },
  { x: 150, y: 150, id: "llq" },
  { x: 125, y: 75, id: "epigastrium" },
  { x: 125, y: 125, id: "umbilicus" },
  { x: 125, y: 175, id: "suprapubic" },
];

export const fingerVoronoiPoints: VoronoiPoint[] = [
  { x: 50, y: 200, id: "mcp" },
  { x: 125, y: 125, id: "pip" },
  { x: 200, y: 50, id: "dip" },
];
