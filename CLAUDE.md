# CLAUDE.md - AI Engineering Directives & Standards

> **🛑 MANDATORY BEFORE CODING PROTOCOL (ALL AI AGENTS MUST FOLLOW)**
> Before generating, editing, or refactoring code in this repository, you MUST read and follow the principles defined in [`AGENTS.md`](AGENTS.md) and the system docs in `docs/`.

---

## ⚡ Quick Reference Commands

All commands MUST be executed using **Bun**. Never run `npm`, `yarn`, or `pnpm`.

- **Development Server**: `bun dev`
- **Build Production Bundle**: `bun run build`
- **TypeScript Verification**: `bun run typecheck`
- **Lint Check**: `bun run lint`
- **Format Code**: `bun run format`
- **Check Code Formatting**: `bun run check`

---

## 🏗️ Architectural Rules & Directory Placement

### 1. Route Layer (`src/app/`)

- `src/app/` is strictly reserved for Next.js App Router route definitions (e.g., `layout.tsx`, `page.tsx`, `providers.tsx`).
- **Rule**: Page files inside `src/app/` MUST remain thin wrappers. They must NOT contain inline UI markups or complex state. They must import and render the entry point component from `src/feature/<feature-name>/index.tsx`.

### 2. Feature Layer (`src/feature/<feature-name>/`)

- All business domain logic, view containers, presentational sub-components, and custom hooks MUST live inside `src/feature/<feature-name>/`.
- Standard Folder Layout for a feature:
  ```
  src/feature/<feature-name>/
  ├── components/          # Sub-components specific to this feature
  ├── hooks/               # Custom state & side-effect hooks
  ├── types/               # Feature-specific TypeScript types/interfaces
  ├── utils/               # Feature-specific helper logic
  └── index.tsx            # Exported main feature component
  ```

### 3. Component Layer (`src/components/ui/`)

- Shared atomic UI building blocks (Buttons, Cards, Inputs, Dialogs, Tooltips, etc.) MUST reside in `src/components/ui/`.
- Must follow the **shadcn/ui** primitive pattern using `class-variance-authority` (`cva`), `clsx`, `tailwind-merge`, and `@radix-ui/react-slot`.
- Must include a `data-slot` attribute on the root element.

### 4. Design Tokens & Styling (`src/styles/globals.css`)

- Styling MUST utilize **Tailwind CSS v4** (`@import "tailwindcss";`).
- Color variables are defined in **OKLCH** color space in `src/styles/globals.css`.
- **Rule**: NEVER hardcode HEX colors, RGB values, or arbitrary pixel values in component classes. Always use semantic design tokens:
  - Backgrounds: `bg-background`, `bg-card`, `bg-popover`, `bg-primary`, `bg-secondary`, `bg-muted`
  - Foregrounds: `text-foreground`, `text-primary-foreground`, `text-muted-foreground`
  - Borders/Rings: `border-border`, `ring-ring`

---

## 🪝 Hook-Based Logic Separation

AI assistants must strictly maintain separation between **Presentation (JSX)** and **Logic (Hooks)**.

- **Rule**: If a component requires state, effects, API calls, or complex event handlers, extract the logic into a custom hook in `src/feature/<feature-name>/hooks/use-<feature-name>.ts`.
- Components should only call the hook, extract the props/handlers, and return clean, declarative JSX.

### Example Hook Pattern:

```tsx
// src/feature/user-profile/hooks/use-user-profile.ts
import { useState, useCallback } from 'react';

export function useUserProfile(initialUserId: string) {
  const [userId, setUserId] = useState(initialUserId);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  return {
    userId,
    isEditing,
    toggleEdit,
  };
}
```

---

## 🎨 UI Component Construction Guidelines

When creating atomic components in `src/components/ui/`, always use this structure:

```tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const componentVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline:
          'border border-border bg-background hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ComponentProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  asChild?: boolean;
}

export function CustomComponent({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      data-slot='custom-component'
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

---

## 🛡️ Code Quality & Validation Checklist

Before submitting code changes, AI assistants MUST ensure:

1. **Path Aliases**: All imports use `@/components`, `@/feature`, `@/styles`, or `@/utils`. No relative parent paths like `../../..`.
2. **Type Safety**: TypeScript `strict` mode is active. Explicitly type all component props, function parameters, and hook return values. `any` is forbidden.
3. **No Unused Imports/Variables**: Code must clean up unused variables or imports.
4. **Validation**: Execute `bun run typecheck` to guarantee zero compilation errors.
5. **Formatting**: Ensure files pass `bun run check`. Run `bun run format` if needed.
