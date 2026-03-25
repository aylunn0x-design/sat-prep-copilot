import { sampleQuestions } from "./data/sampleQuestions.js";
import { scoreWeakness } from "./lib/scoreWeakness.js";

const sampleAttempts = [
  {
    questionId: "math-linear-1",
    chosenAnswer: "4",
    isCorrect: false,
    topic: "Linear Equations",
    mistakeTag: "concept-gap" as const
  },
  {
    questionId: "rw-grammar-1",
    chosenAnswer: "The group of students is studying.",
    isCorrect: true,
    topic: "Subject-Verb Agreement"
  }
];

console.log("Sample questions:", sampleQuestions.length);
console.log("Weakness ranking:", scoreWeakness(sampleAttempts));
