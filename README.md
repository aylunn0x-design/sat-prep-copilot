# SAT Prep Copilot

AI-assisted SAT prep project focused on weakness tracking, structured practice, and feedback loops.

## Goal
Build a study tool that helps students:
- identify weak topics fast
- practice with structure
- get feedback and explanations
- track progress over time

## Planned v1
- topic-based practice sets
- answer checking + explanation flow
- weakness tracking dashboard
- daily study streak / consistency system
- simple progress analytics

## Intended stack
- Frontend: Next.js
- Backend: Node.js / Express or Fastify
- Database: PostgreSQL
- AI: explanation / feedback provider API

## Why this exists
This is both:
- a real product idea for students
- a strong portfolio project for CS admissions and future internships

## Docs
- [Product Spec](./docs/product-spec.md)
- [Roadmap](./docs/roadmap.md)
- [Draft Data Model](./docs/db-schema.md)
- [UI Flow](./docs/ui-flow.md)
- [MVP Checklist](./docs/mvp-checklist.md)

## Starter code
- `src/types.ts` — core app types
- `src/data/sampleQuestions.ts` — sample SAT-style data
- `src/data/sampleAttempts.ts` — sample student attempt history
- `src/lib/scoreWeakness.ts` — weakness scoring logic
- `src/lib/getRecommendedTopics.ts` — recommendation helper
- `src/lib/summarizeAttempts.ts` — quick stats helper
- `src/lib/createPracticeSet.ts` — generate a weak-topic practice set
- `src/lib/tagMistake.ts` — normalize mistake tags
- `src/demo.ts` — tiny runnable summary flow
- `src/demoPracticeFlow.ts` — recommendation → practice flow demo

## Quick run
```bash
npm install
npm run build
npm run demo
npm run demo:practice
```

## Roadmap
- [ ] project setup
- [ ] auth + student profile
- [ ] question bank schema
- [ ] practice mode
- [ ] weakness scoring logic
- [ ] analytics dashboard
- [ ] MVP deploy

## Build notes
Initial public scaffold. More product, UX, and architecture work will be added over time.
