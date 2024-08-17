import { Area, VoronoiPoint } from "../types";

export const abdominalAreas: Area[] = [
  { id: "ruq", name: "ช่องท้องขวาบน" },
  { id: "luq", name: "ช่องท้องซ้ายบน" },
  { id: "rlq", name: "ช่องท้องขวาล่าง" },
  { id: "llq", name: "ช่องท้องซ้ายล่าง" },
  { id: "epigastrium", name: "ลิ้นปี่" },
  { id: "umbilicus", name: "รอบสะดือ" },
  { id: "suprapubic", name: "ท้องน้อย" },
  { id: "all-over", name: "ทั่วทั้งท้อง" },
];

export const fingerAreas: Area[] = [
  { id: "mcp", name: "ข้อโคนนิ้ว" },
  { id: "pip", name: "ข้อกลางนิ้ว" },
  { id: "dip", name: "ข้อปลายนิ้ว" },
  { id: "others", name: "อื่นๆ หรือไม่ได้ปวดบริเวณข้อ" },
];

export const abdominalVoronoiPoints: VoronoiPoint[] = [
  { x: 64, y: 64, id: "ruq" },
  { x: 192, y: 64, id: "luq" },
  { x: 64, y: 192, id: "rlq" },
  { x: 180, y: 192, id: "llq" },
  { x: 128, y: 64, id: "epigastrium" },
  { x: 110, y: 128, id: "umbilicus" },
  { x: 128, y: 192, id: "suprapubic" },
  { x: 128, y: 194, id: "all-over" },
];

export const fingerVoronoiPoints: VoronoiPoint[] = [
  { x: 128, y: 192, id: "mcp" },
  { x: 128, y: 128, id: "pip" },
  { x: 128, y: 64, id: "dip" },
  { x: 136, y: 243, id: "others" },
];
