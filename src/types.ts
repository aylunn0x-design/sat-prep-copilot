export type Section = "Math" | "Reading" | "Writing";

export type MistakeTag =
  | "concept-gap"
  | "misread"
  | "rushed"
  | "guessed"
  | "careless";

export interface Question {
  id: string;
  section: Section;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  prompt: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Attempt {
  questionId: string;
  chosenAnswer: string;
  isCorrect: boolean;
  topic: string;
  mistakeTag?: MistakeTag;
}

export interface TopicScore {
  topic: string;
  attempts: number;
  correct: number;
  accuracy: number;
  weaknessScore: number;
}
