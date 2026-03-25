import type { MistakeTag } from "../types.js";

export function tagMistake(input: string): MistakeTag | undefined {
  const normalized = input.trim().toLowerCase();

  if (normalized.includes("concept")) return "concept-gap";
  if (normalized.includes("misread")) return "misread";
  if (normalized.includes("rush")) return "rushed";
  if (normalized.includes("guess")) return "guessed";
  if (normalized.includes("careless")) return "careless";

  return undefined;
}
