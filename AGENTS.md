# 🤖 AGENTS.md - MANDATORY AI AGENT PRE-CODING PROTOCOL

> **ATTENTION ALL AI AGENTS (Claude, Cursor, Copilot, Gemini, ChatGPT, Windsurf, Antigravity, etc.)**
> You MUST read and follow this protocol BEFORE inspecting, generating, or modifying any code in this repository.

---

## 🛑 MANDATORY CHECKLIST BEFORE WRITING ANY CODE

Before writing or editing code, execute the following steps:

1. **Package Manager Mandate**:
   - You MUST use **Bun** for all commands and package management (`bun dev`, `bun run build`, `bun run typecheck`, `bun run check`, `bun run format`).
   - NEVER use `npm`, `yarn`, or `pnpm`.

2. **Check System Architecture Docs**:
   - Read [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for feature module rules.
   - Read [`docs/API_ROUTES.md`](docs/API_ROUTES.md) for API route controllers & backend service rules.
   - Read [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) for OKLCH tokens & Tailwind CSS v4 styling rules.
   - Read [`docs/COMPONENT_SYSTEM.md`](docs/COMPONENT_SYSTEM.md) for UI primitive standards.
   - Read [`docs/HOOKS_GUIDE.md`](docs/HOOKS_GUIDE.md) for state & side-effect extraction.

3. **Verify File Placement**:
   - **Feature Logic**: Place all domain components, hooks, and types in `src/feature/<feature-name>/`.
   - **App Router Pages**: Keep `src/app/<route>/page.tsx` as thin wrappers that only render the main feature container `src/feature/<feature-name>/index.tsx`.
   - **Atomic UI Primitives**: Place reusable UI blocks in `src/components/ui/` using `cva`, `cn()`, and `@radix-ui/react-slot` (`asChild`).

4. **Hook-Based Separation of Concerns**:
   - NEVER place stateful logic, API calls, side-effects, or heavy handlers inside presentational JSX components.
   - ALWAYS extract business logic into custom hooks under `src/feature/<feature-name>/hooks/use-<feature-name>.ts`.

5. **Design System & Styling**:
   - ALWAYS use Tailwind CSS v4 semantic tokens (`bg-background`, `text-foreground`, `bg-primary`, `border-border`).
   - NEVER hardcode HEX colors, RGB values, or arbitrary pixel values in component classes.
   - ALWAYS combine class names using `cn()` from `@/utils/cn`.

6. **Post-Coding & Pre-Push Verification**:
   - After completing edits and ALWAYS before pushing to GitHub, run `bun run verify` (which runs `typecheck`, `check`, and `lint`) to guarantee zero errors and clean formatting.
   - A git pre-push hook (`.git/hooks/pre-push`) is active to block pushes if `bun run verify` fails.

---

## ⚡ CLI Command Reference

```bash
bun dev          # Start local dev server
bun run build    # Build production bundle
bun run typecheck# Verify TypeScript types
bun run check    # Verify Prettier code formatting
bun run format   # Auto-format codebase
bun run verify   # Run full pre-push verification (typecheck + check + lint)
```
