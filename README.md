# Startup Ready Pack

<p align="left">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=F9F1E1" alt="Bun" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radixui&logoColor=white" alt="Radix UI" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
</p>

An enterprise-ready, production-grade Next.js 16 starter template engineered for rapid startup development. Features strict **Feature-Based Architecture**, **Scalable Design Tokens**, **Component Architecture**, **Hook-Based State Management**, and **Standardized API Routes**.

---

## 🚀 Quick Start Commands

All commands must be executed using **Bun**:

```bash
bun dev          # Start local dev server on localhost:3000
bun run build    # Build production bundle
bun run typecheck# Verify TypeScript types
bun run check    # Verify Prettier code formatting
bun run format   # Auto-format codebase
```

---

## 🏛️ Core Architecture & System Docs

The template architecture is organized into modular documentation:

- 📦 **[Architecture & Folder Structure](docs/ARCHITECTURE.md)** — Feature-based module organization (`src/feature/`) & App Router shell rules.
- 🌐 **[API Routes & Backend Services](docs/API_ROUTES.md)** — Standards for Next.js App Router API handlers (`route.ts`), response formats, & validation.
- 🎨 **[Design System](docs/DESIGN_SYSTEM.md)** — OKLCH color tokens, dark mode, & Tailwind CSS v4 setup.
- 🧩 **[Component System](docs/COMPONENT_SYSTEM.md)** — Atomic UI primitives (`src/components/ui/`) built with Radix UI & CVA.
- 🪝 **[Hook-Based Logic Separation](docs/HOOKS_GUIDE.md)** — Clean separation of JSX views and stateful custom hooks.
- 🤖 **[AI Agent Pre-Coding Protocol (AGENTS.md)](AGENTS.md)** / **[CLAUDE.md](CLAUDE.md)** — Mandatory pre-coding directives for AI assistants.

---

## 📁 Directory Summary

```
src/
├── app/          # App Router page routes & API handlers (thin shells)
│   └── api/      # Next.js App Router API controller routes
├── feature/      # Business domain features (components, hooks, services, types)
├── components/   # Atomic UI design system primitives
├── styles/       # OKLCH design tokens & Tailwind CSS v4 globals
└── utils/        # Utility functions (cn) & shared types
```
