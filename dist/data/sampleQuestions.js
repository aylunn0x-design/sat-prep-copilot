export const sampleQuestions = [
    {
        id: "math-linear-1",
        section: "Math",
        topic: "Linear Equations",
        difficulty: "easy",
        prompt: "If 3x + 5 = 20, what is x?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "Subtract 5 from both sides to get 3x = 15, then divide by 3."
    },
    {
        id: "rw-grammar-1",
        section: "Writing",
        topic: "Subject-Verb Agreement",
        difficulty: "medium",
        prompt: "Choose the correct sentence.",
        choices: [
            "The group of students are studying.",
            "The group of students is studying.",
            "The group of students study.",
            "The group of students were studying."
        ],
        correctAnswer: "The group of students is studying.",
        explanation: "The subject is 'group', which is singular, so the verb should be 'is'."
    }
];
