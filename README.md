# Next.js & Tailwind CSS v4 Starter

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

An enterprise-ready, lightweight web application starter powered by **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Bun**, and **Radix UI Primitives**.

---

## 🚀 Quick Start Commands

All scripts must be executed using **Bun**:

```bash
bun dev          # Start development server on localhost:3000
bun run build    # Build production bundle
bun run typecheck# Run TypeScript type check
bun run check    # Verify code formatting
bun run format   # Auto-format codebase
```

---

## 🏛️ Core Architecture & System Docs

The architecture is broken into focused, modular documentation:

- 📦 **[Architecture & Folder Structure](docs/ARCHITECTURE.md)** — Feature-based module organization (`src/feature/`) and App Router shell rules.
- 🎨 **[Design System](docs/DESIGN_SYSTEM.md)** — OKLCH color tokens, dark mode, and Tailwind CSS v4 setup.
- 🧩 **[Component System](docs/COMPONENT_SYSTEM.md)** — Atomic UI primitives (`src/components/ui/`) built with Radix UI & CVA.
- 🪝 **[Hook-Based Logic Separation](docs/HOOKS_GUIDE.md)** — Clean separation of JSX views and stateful custom hooks.
- 🤖 **[AI Agent Pre-Coding Protocol (AGENTS.md)](AGENTS.md)** / **[CLAUDE.md](CLAUDE.md)** — Mandatory standards for AI assistants before writing code.

---

## 📁 Directory Summary

```
src/
├── app/          # App Router page routes (thin shells)
├── feature/      # Business domain features (components, hooks, types)
├── components/   # Atomic UI design system primitives
├── styles/       # OKLCH design tokens & Tailwind CSS v4 globals
└── utils/        # Utility functions (cn) & shared types
```
