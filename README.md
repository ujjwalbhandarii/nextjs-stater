# Production-Ready Next.js & Tailwind CSS v4 Architecture

A enterprise-grade, highly scalable web application setup built with **Next.js 16 (App Router & Turbopack)**, **React 19**, **Tailwind CSS v4**, **Bun**, **TypeScript**, and **Radix UI Primitives**.

This repository is built following strict architectural principles: **Feature-Based Folder Structure**, **Atomic & Scalable Design System**, **Component Architecture Design System**, and **Hook-Based Logic Separation**.

---

## 🏛️ Core Architectural Principles

All code written in this codebase—whether by human engineers or AI assistants—must adhere to these four core pillars:

```
src/
├── app/                     # 🌐 Next.js App Router (Thin routing shell)
├── feature/                 # 📦 Feature-Based Architecture (Domain logic & views)
├── components/              # 🎨 Design System Primitives (Atomic UI / Shadcn)
├── styles/                  # 🪄 Design Tokens & Tailwind CSS v4 Theme
└── utils/                   # 🛠️ Shared Utilities, Types, & Constants
```

### 1. 📦 Feature-Based Architecture (`src/feature/<feature_name>/`)

- **Domain Encapsulation**: Each business domain or page section lives in its own feature folder inside `src/feature/` (e.g., `src/feature/home/`, `src/feature/dashboard/`, `src/feature/auth/`).
- **Thin App Router Shell**: Files inside `src/app/` are strictly light route handlers or page wrappers. They import and render the top-level view from `src/feature/<feature_name>/index.tsx`.
- **Self-Contained Modules**: Features manage their own components, custom hooks, types, and services without leaking logic into global space.

### 2. 🎨 Scalable Design System (`src/styles/` & `src/components/ui/`)

- **Tailwind CSS v4 Engine**: Built on `@import 'tailwindcss';` with theme customization using CSS variables and OKLCH color spaces.
- **Design Tokens**: Standardized CSS variables in `src/styles/globals.css` define theme tokens for primary, background, card, popover, destructive, border, ring, and sidebar colors in both light and dark modes.
- **Dark Mode Support**: Seamless dark mode support using CSS custom variants (`@custom-variant dark (&:is(.dark *));`) and OKLCH color mappings.
- **Class Variance Authority (`cva`)**: Variant-driven component styling with `cn()` utility (`clsx` + `tailwind-merge`) ensuring zero class collision and clean theme extensions.

### 3. 🧩 Component Architecture Design System

- **Atomic UI Primitives (`src/components/ui/`)**: Reusable, unstyled-to-styled building blocks (Buttons, Cards, Inputs, Dialogs) powered by Radix UI primitives.
- **Radix Slot Pattern (`asChild`)**: Every UI primitive supports polymorphic rendering via `@radix-ui/react-slot`, allowing elements to swap underlying tags while preserving full accessibility and styling.
- **Strict Accessibility (WAI-ARIA)**: Components include proper `aria-*` attributes, semantic HTML elements, keyboard focus rings, and `data-slot` selectors for styling hooks.
- **Composition over Inheritance**: Complex UIs are assembled by composing atomic primitives rather than creating massive monolithic components.

### 4. 🪝 Hook-Based Logic Separation

- **Headless UI Pattern**: Render components (`JSX`) are strictly responsible for presentation. All complex state management, data fetching, event handling, and side-effects are extracted into custom hooks.
- **Custom Hook Placement**:
  - Feature-specific hooks reside in `src/feature/<feature_name>/hooks/`.
  - Global cross-cutting hooks reside in `src/hooks/`.
- **Predictable Data Flow**: Custom hooks return clean, typed interfaces containing state values and handler functions, making testing and maintenance effortless.

---

## 📁 Directory Structure & File Hierarchy

```
thebitrates-production/
├── src/
│   ├── app/                         # App Router Page Routes (Shell)
│   │   ├── layout.tsx               # Root Layout with Font & Metadata Configuration
│   │   ├── page.tsx                 # Root Route (renders src/feature/home)
│   │   └── favicon.ico              # App Favicon
│   ├── components/                  # Design System & UI Primitives
│   │   ├── ui/                      # Atomic Shadcn / Radix UI Components
│   │   │   └── button.tsx           # Scalable Button Primitive with CVA
│   │   └── README.md                # UI Component Architectural Guidelines
│   ├── feature/                     # Domain-Driven Feature Modules
│   │   ├── README.md                # Feature Architecture Guidelines
│   │   └── home/                    # Home Feature Module
│   │       ├── components/          # Feature-Specific UI Components
│   │       ├── hooks/               # Feature-Specific Custom Hooks
│   │       ├── types/               # Feature-Specific Type Definitions
│   │       └── index.tsx            # Main Feature Entry Component
│   ├── styles/                      # Global CSS & Tailwind Configuration
│   │   └── globals.css              # Design System Tokens & Theme Definition
│   └── utils/                       # Core Helpers & Shared Libraries
│       ├── cn.ts                    # Tailwind Merge & Clsx Utility
│       ├── constant/                # Immutable App Constants
│       └── types/                   # Shared TypeScript Interfaces
├── components.json                  # Shadcn UI CLI Configuration
├── next.config.ts                   # Next.js Server Configuration
├── tsconfig.json                    # TypeScript Configuration
├── package.json                     # Project Dependencies & Scripts
├── CLAUDE.md                        # AI Engineering Directives & Standards
└── README.md                        # System Architecture Documentation
```

---

## 🚀 Getting Started & CLI Tooling

This project uses **Bun** as the official package manager and runtime.

### Prerequisites

- [Bun](https://bun.sh) `v1.3+` installed on your system.

### Commands

| Task                 | Command             | Description                                                |
| :------------------- | :------------------ | :--------------------------------------------------------- |
| **Development**      | `bun dev`           | Start dev server with Turbopack on `http://localhost:3000` |
| **Production Build** | `bun run build`     | Generate optimized Next.js production build                |
| **Start Production** | `bun run start`     | Serve production build locally                             |
| **Type Check**       | `bun run typecheck` | Run TypeScript type checking without emitting files        |
| **Lint**             | `bun run lint`      | Run ESLint static analysis                                 |
| **Format Check**     | `bun run check`     | Validate code formatting with Prettier                     |
| **Format Fix**       | `bun run format`    | Auto-format all code files with Prettier                   |

---

## 📐 Coding Conventions for AI & Human Developers

When creating or editing code in this repository, **all engineers and AI coding assistants must comply with the following conventions**:

### 1. Import Path Aliases

Always use path aliases defined in `tsconfig.json`:

- `@/components/ui/*` -> Atomic UI primitives
- `@/feature/*` -> Domain feature modules
- `@/styles/*` -> Design system global CSS
- `@/utils/*` -> Utilities, constants, and global types

### 2. UI Component Template Standard

All primitives in `src/components/ui/` must use `cva`, `cn()`, and `@radix-ui/react-slot`:

```tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const containerVariants = cva(
  'transition-all duration-200 focus-visible:outline-none',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground border border-border',
        primary: 'bg-primary text-primary-foreground shadow-sm',
      },
      size: {
        default: 'p-4 rounded-lg',
        sm: 'p-2 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ContainerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

export function Container({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ContainerProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      data-slot='container'
      className={cn(containerVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

### 3. Feature & Hook Separation Standard

Never clutter presentational components with side-effects or inline logic. Separate logic into a custom hook:

```tsx
// src/feature/example/hooks/use-example.ts
import { useState, useCallback } from 'react';

export function useExample() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  return { count, increment };
}

// src/feature/example/index.tsx
import { useExample } from './hooks/use-example';
import { Button } from '@/components/ui/button';

export default function ExampleFeature() {
  const { count, increment } = useExample();

  return (
    <div className='flex flex-col gap-4 p-6'>
      <h2 className='text-xl font-bold'>Count: {count}</h2>
      <Button onClick={increment}>Increment Counter</Button>
    </div>
  );
}
```

---

## 🎨 Design System & Token Specification

Color definitions use **OKLCH** spaces in `src/styles/globals.css` to deliver vivid, consistent colors across displays:

```css
@import 'tailwindcss';
@import 'tw-animate-css';

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... full OKLCH tokens ... */
}
```

- **Border Radius Rules**: Use `--radius-sm`, `--radius-md`, `--radius-lg` variables mapped from `--radius`.
- **Micro-Animations**: Utilize `tw-animate-css` utilities for subtle transitions and interactive hover effects.
- **Glassmorphism & Elevation**: Layer components using backdrop blurs (`backdrop-blur-md`), subtle borders (`border-border`), and calibrated shadows (`shadow-xs`, `shadow-sm`).

---

## 📄 License & Maintainers

Maintained by **The Bitrates Engineering Team**. Built for high-performance production workloads.
