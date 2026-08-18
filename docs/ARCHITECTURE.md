# 🏛️ Application Architecture & Folder Structure

This project follows a **Feature-Based Architecture** where domain logic, views, custom hooks, and types are encapsulated within dedicated feature modules.

---

## 📁 Directory Layout

```
src/
├── app/                     # Next.js App Router (Thin page routing & API shells)
│   └── api/                 # API Route Controllers (see docs/API_ROUTES.md)
├── feature/                 # Domain-driven feature modules (UI, Hooks, Services)
├── components/              # Design System primitives (Atomic UI)
├── styles/                  # Global CSS & Tailwind CSS v4 design tokens
└── utils/                   # Shared utilities, constants, & global types
```

---

## 📦 Feature-Based Architecture (`src/feature/`)

Each business domain lives inside `src/feature/<feature-name>/`:

```
src/feature/<feature-name>/
├── components/          # Presentational components specific to this feature
├── hooks/               # State & logic custom hooks
├── services/            # Domain & backend business services
├── types/               # Feature-specific TypeScript definitions
├── README.md            # Feature documentation & AI search index
└── index.tsx            # Entry point view component for the feature
```

### 🧠 Feature README & AI Searchability

Every feature module MUST include a `README.md` file documenting its domain scope, components, hooks, services, and state flow. AI agents inspect this `README.md` first to index feature context quickly.

### Thin App Router Shell (`src/app/`)

Route files in `src/app/` must remain light wrappers. They import and render the top-level view from `src/feature/<feature-name>/index.tsx`.

```tsx
// src/app/page.tsx
import HomeFeature from '@/feature/home';

export default function Page() {
  return <HomeFeature />;
}
```
