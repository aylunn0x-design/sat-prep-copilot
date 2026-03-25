import type { TopicScore } from "../types.js";

export function getRecommendedTopics(scores: TopicScore[], limit = 3): TopicScore[] {
  return [...scores]
    .sort((a, b) => b.weaknessScore - a.weaknessScore || a.accuracy - b.accuracy)
    .slice(0, limit);
}
