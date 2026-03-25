import { sampleAttempts } from "./data/sampleAttempts.js";
import { sampleQuestions } from "./data/sampleQuestions.js";
import { scoreWeakness } from "./lib/scoreWeakness.js";
import { getRecommendedTopics } from "./lib/getRecommendedTopics.js";
import { createPracticeSet } from "./lib/createPracticeSet.js";

const weakness = scoreWeakness(sampleAttempts);
const recommendedTopics = getRecommendedTopics(weakness, 1).map((item) => item.topic);
const practiceSet = createPracticeSet({
  questions: sampleQuestions,
  weakTopics: recommendedTopics,
  limit: 3,
});

console.log("Recommended topics:", recommendedTopics);
console.log(
  "Practice set:",
  practiceSet.map((q) => ({ id: q.id, topic: q.topic, prompt: q.prompt }))
);
