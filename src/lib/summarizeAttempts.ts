import type { Attempt } from "../types.js";

export function summarizeAttempts(attempts: Attempt[]) {
  const total = attempts.length;
  const correct = attempts.filter((a) => a.isCorrect).length;
  const accuracy = total === 0 ? 0 : correct / total;

  const mistakes = attempts.reduce<Record<string, number>>((acc, attempt) => {
    if (!attempt.isCorrect && attempt.mistakeTag) {
      acc[attempt.mistakeTag] = (acc[attempt.mistakeTag] ?? 0) + 1;
    }
    return acc;
  }, {});

  return {
    total,
    correct,
    incorrect: total - correct,
    accuracy,
    mistakes,
  };
}
