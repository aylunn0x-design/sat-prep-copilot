import type { Question } from "../types.js";
import { filterQuestionsByTopic } from "./filterQuestionsByTopic.js";

export function createPracticeSet(options: {
  questions: Question[];
  weakTopics?: string[];
  limit?: number;
}): Question[] {
  const { questions, weakTopics = [], limit = 5 } = options;

  const prioritized = weakTopics.length > 0
    ? filterQuestionsByTopic(questions, weakTopics)
    : questions;

  return prioritized.slice(0, limit);
}
