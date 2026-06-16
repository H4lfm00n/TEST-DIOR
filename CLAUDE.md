# Project: Student Learning Assistant

## What This Project Is
An AI-powered web app where students type a question (e.g. "what is a supra") and get a visual, easy-to-understand answer. Think of it as a smart educational chat interface.

## Current Status
- `index.html` — a static Supra info page with light/dark mode toggle. Used as a starting point to learn HTML/CSS/JS structure.
- No backend yet
- No AI API connection yet

## Stack (planned)
- **Frontend:** HTML, CSS, JavaScript (possibly React later)
- **Backend:** Node.js (to proxy AI API calls and keep API key secret)
- **AI:** Claude API (Anthropic) or OpenAI
- **Hosting:** TBD (Vercel recommended for easy deployment)

## Branch Structure
| Branch | Owner | Purpose |
|--------|-------|---------|
| `main` | everyone | stable, working version only |
| `front-end` | Bobby | UI, chat interface, styling |
| `backend` | backend dev | API server, AI integration |

## Workflow Rules
1. Never commit directly to `main`
2. Always pull latest `main` before starting new work
3. Merge into `main` only when a feature is fully working
4. Commit messages should be clear: `"add chat input UI"` not `"stuff"`

## What Needs To Be Built (in order)
- [ ] Chat UI — input box + response display area
- [ ] Mock response — hardcode a fake AI answer to test the UI
- [ ] Backend server — Node.js endpoint that receives the question
- [ ] AI API connection — wire backend to Claude or OpenAI
- [ ] Prompt engineering — write a system prompt that gives good educational answers
- [ ] Visual response formatting — display answers with structure (headers, cards, etc.)
- [ ] Deploy — push live so students can use it

## What Bobby Is Learning
- HTML / CSS / JavaScript fundamentals
- How Fetch and async JS works
- How to call an API from the frontend
- Git branching and team workflow
- How AI APIs work (sending a prompt, receiving a response)

## Key Concepts To Know
- **Session ownership** — verifying a session belongs to the right user (relevant once login is added)
- **Token auth** — using JWT or API keys to authenticate requests (needed when backend is live)
- **CORS** — why the browser blocks cross-origin requests and how to allow them in the backend
- **API contract** — agreeing on request/response shape between frontend and backend before building
