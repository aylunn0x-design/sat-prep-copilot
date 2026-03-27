import { sampleAttempts } from "./data/sampleAttempts.js";
import { scoreWeakness } from "./lib/scoreWeakness.js";
import { generateStudyPlan } from "./lib/generateStudyPlan.js";

const scores = scoreWeakness(sampleAttempts);
const plan = generateStudyPlan(scores);

console.log("Study plan:");
for (const item of plan) {
  console.log(`- [${item.priority}] ${item.topic}: ${item.suggestedAction}`);
}
