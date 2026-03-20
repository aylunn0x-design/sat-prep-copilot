# SAT Prep Copilot — Product Spec

## Core idea
An SAT prep tool that does more than give random questions.
It should help students identify weak topics, practice intentionally, and review mistakes in a structured way.

## Target user
- students preparing for the SAT
- especially students who need a clearer system than just doing random practice sets

## v1 features
1. topic-based practice
2. answer checking + explanation view
3. weakness tracking
4. mistake tagging
5. simple progress dashboard

## Key data model ideas
### User
- id
- name
- email
- target score

### Question
- id
- section
- topic
- difficulty
- prompt
- choices
- correct answer
- explanation

### Attempt
- id
- userId
- questionId
- chosen answer
- correct
- mistake tag
- createdAt

## Mistake tags
- concept gap
- misread question
- rushed
- guessed
- careless mistake

## v1 success condition
A student should be able to finish a practice block and clearly see:
- what they got wrong
- why they got it wrong
- what topic needs work next
