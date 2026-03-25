import type { Question } from "../types.js";

export function filterQuestionsByTopic(
  questions: Question[],
  topics: string[]
): Question[] {
  const wanted = new Set(topics);
  return questions.filter((question) => wanted.has(question.topic));
}
