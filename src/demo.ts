import { sampleAttempts } from "./data/sampleAttempts.js";
import { scoreWeakness } from "./lib/scoreWeakness.js";
import { getRecommendedTopics } from "./lib/getRecommendedTopics.js";
import { summarizeAttempts } from "./lib/summarizeAttempts.js";

const scores = scoreWeakness(sampleAttempts);

console.log("Summary:", summarizeAttempts(sampleAttempts));
console.log("Weakness Scores:", scores);
console.log("Recommended Topics:", getRecommendedTopics(scores, 2));
