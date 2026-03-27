import type { TopicScore } from "../types.js";

export interface StudyPlanItem {
  topic: string;
  priority: "high" | "medium" | "low";
  suggestedAction: string;
}

export function generateStudyPlan(scores: TopicScore[]): StudyPlanItem[] {
  return scores.map((score, index) => {
    const priority = index === 0 ? "high" : index < 3 ? "medium" : "low";

    const suggestedAction = score.accuracy < 0.5
      ? "Do a focused drill set and review every mistake."
      : score.accuracy < 0.8
      ? "Do mixed practice and log weak patterns."
      : "Keep warm with light review only.";

    return {
      topic: score.topic,
      priority,
      suggestedAction,
    };
  });
}
