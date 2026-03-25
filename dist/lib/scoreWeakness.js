export function scoreWeakness(attempts) {
    const byTopic = new Map();
    for (const attempt of attempts) {
        const current = byTopic.get(attempt.topic) ?? { attempts: 0, correct: 0, penalty: 0 };
        current.attempts += 1;
        if (attempt.isCorrect) {
            current.correct += 1;
        }
        else {
            current.penalty += attempt.mistakeTag === "concept-gap" ? 2 : 1;
        }
        byTopic.set(attempt.topic, current);
    }
    return [...byTopic.entries()]
        .map(([topic, value]) => {
        const accuracy = value.attempts === 0 ? 0 : value.correct / value.attempts;
        const weaknessScore = value.attempts - value.correct + value.penalty;
        return {
            topic,
            attempts: value.attempts,
            correct: value.correct,
            accuracy,
            weaknessScore
        };
    })
        .sort((a, b) => b.weaknessScore - a.weaknessScore);
}
