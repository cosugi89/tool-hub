export const allTags = [
  { id: "character", label: "人物", subLabel: "キャラクター", value: 500 },
  { id: "skill", label: "能力", subLabel: "スキル", value: 500 },
  { id: "magic", label: "魔法", subLabel: "マジック", value: 500 },
  { id: "arts", label: "技術", subLabel: "アーツ", value: 500 },
  { id: "energy", label: "存在値", subLabel: "エネルギー", value: 500 },
  { id: "weapon", label: "武具", subLabel: "ウェポン", value: 500 },
  { id: "group", label: "組織", subLabel: "グループ", value: 500 },
  { id: "monster", label: "魔物", subLabel: "モンスター", value: 500 },
  { id: "八星魔王", label: "八星魔王", category: "character" },
  { id: "異世界人", label: "異世界人", category: "character" },
  { id: "テンペスト", label: "テンペスト", category: "character" },
  { id: "四天王", label: "四天王", category: "character" },
  { id: "聖魔十二守護王", label: "聖魔十二守護王", category: "character" },
] as const;

export type TagId = (typeof allTags)[number]["id"];

export const mainTags: TagId[] = [
  "character",
  "skill",
  "magic",
  "arts",
  "energy",
  "weapon",
  "group",
  "monster",
];
