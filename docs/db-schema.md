# Draft Data Model

## User
- id
- name
- email
- targetScore
- createdAt

## Question
- id
- section
- topic
- difficulty
- prompt
- choices
- correctAnswer
- explanation

## Attempt
- id
- userId
- questionId
- selectedAnswer
- isCorrect
- mistakeTag
- createdAt

## TopicScore
- id
- userId
- topic
- totalAttempts
- totalCorrect
- weaknessScore

## Notes
The goal is not just to store questions, but to make weak areas measurable over time.
