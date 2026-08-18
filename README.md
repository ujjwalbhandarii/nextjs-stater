# Next.js & Tailwind CSS v4 Starter

A lightweight, enterprise-ready web application built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, **Bun**, and **Radix UI**.

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
- 🤖 **[AI Engineering Directives (CLAUDE.md)](CLAUDE.md)** — Standards and conventions for AI assistants coding in this repo.

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
