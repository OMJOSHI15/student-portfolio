# Student Portfolio

A React + Vite portfolio app built across the AWDF (Advanced Web Development
Frameworks) practicals.

## Practical progress

| # | Practical | Status | Notes |
|---|---|---|---|
| 1 | Intro to React & Component Architecture | ✅ Done | 4+ reusable components (Header, About, Skills, Footer, NavBar), props-driven |
| 2 | State Management & Routing | ✅ Done | React Router (`/`, `/projects`, `/contact`, 404), 2+ `useState` variables, controlled form |
| 3 | API Integration & Data Rendering | ✅ Done | Live GitHub REST API on `/projects` with loading/error states, retry, and search filter |
| 4 | RESTful API with Node.js & Express | ✅ Done | Full CRUD + middleware pipeline in `task-manager-api/` — [repo](https://github.com/OMJOSHI15/task-manager-api) |

## Routes (Practical 2)

- `/` — Home (Header, About, Skills)
- `/projects` — Projects (live GitHub repositories)
- `/contact` — Contact (controlled form input with live character count, toggleable tip)
- `*` — 404 Not Found

Navigation uses React Router's `Link` (no full page reloads), with the active route highlighted in the NavBar. A dark/light theme toggle in the NavBar demonstrates a second `useState` UI toggle.

## API Integration (Practical 3)

The `/projects` page fetches live repositories from the public GitHub REST API — no auth/API key required:

```
GET https://api.github.com/users/OMJOSHI15/repos
```

- Fetch logic lives in `src/utils/github.js` (kept out of JSX per rubric).
- `Projects.jsx` uses `useEffect` + three state vars (`repos`, `loading`, `error`) to fetch on mount.
- `src/components/Spinner.jsx` renders while loading; `src/components/ErrorMessage.jsx` renders on failure with a **Retry** button.
- Each repo card shows name, description, language, star count, and a link to the repo.
- A search input filters the rendered list by repo name client-side.

No setup needed beyond `npm install` — the GitHub API is public and rate-limited per IP (60 req/hr unauthenticated).

## Run locally

```
npm install
npm run dev
```

---

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
