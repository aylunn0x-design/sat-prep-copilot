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

## Roadmap
- [ ] project setup
- [ ] auth + student profile
- [ ] question bank schema
- [ ] practice mode
- [ ] weakness scoring logic
- [ ] analytics dashboard
- [ ] MVP deploy

## Starter code
- `src/types.ts` — core app types
- `src/data/sampleQuestions.ts` — sample SAT-style data
- `src/lib/scoreWeakness.ts` — first-pass weakness scoring logic
- `src/index.ts` — tiny entry file for local testing

## Build notes
Initial public scaffold. More product, UX, and architecture work will be added over time.
