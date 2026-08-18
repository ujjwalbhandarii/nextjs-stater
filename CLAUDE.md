# CLAUDE.md: AI Engineering Directives & Standards

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
- **Unit Tests**: `bun test`
- **Pre-Push Verification**: `bun run verify` (runs `typecheck`, `check`, `lint`, and `test`)

---

## 🏗️ Architectural Rules & Directory Placement

### 1. Route Layer (`src/app/`)

- `src/app/` is strictly reserved for Next.js App Router route definitions (e.g., `layout.tsx`, `page.tsx`, `providers.tsx`).
- **Rule**: Page files inside `src/app/` MUST remain thin wrappers. They must NOT contain inline UI markups or complex state. They must import and render the entry point component from `src/feature/<feature-name>/index.tsx`.

### 2. Feature Layer (`src/feature/<feature-name>/`)

- All business domain logic, view containers, presentational sub-components, and custom hooks MUST live inside `src/feature/<feature-name>/`.
- **Feature README Mandate**: EVERY feature folder MUST contain a `README.md` file documenting its domain overview, components, hooks, services, and state flow. Read this `README.md` first when modifying a feature, and create one when building a new feature.
- Standard Folder Layout for a feature:
  ```
  src/feature/<feature-name>/
  ├── components/          # Sub-components specific to this feature
  ├── hooks/               # Custom state & side-effect hooks
  ├── services/            # Domain & backend business services
  ├── types/               # Feature-specific TypeScript types/interfaces
  ├── README.md            # Feature module documentation & AI index
  └── index.tsx            # Exported main feature component
  ```

### 3. Static Asset Placement Mandate (`public/`)

- ALL static images, banners, icons, and media files MUST be organized into dedicated subdirectories under `public/` (e.g. `public/images/`, `public/icons/`, `public/fonts/`).
- NEVER place loose images directly at the root of `public/`.

### 4. Service Unit Testing Mandate

- ALL business services in `services/` MUST have a corresponding `<service-name>.test.ts` file.
- Unit tests are run via `bun test` and verified during `bun run verify`.

### 5. Writing Style Rule (No Em Dash)

- **STRICT RULE**: NEVER use the em dash "—" symbol anywhere in code, markdown, documentation, or comments as it looks AI-generated. Use standard hyphens "-", colons ":", or clean punctuation instead.

---

## 🪝 Hook-Based Logic Separation

AI assistants must strictly maintain separation between **Presentation (JSX)** and **Logic (Hooks)**.

- **Rule**: If a component requires state, effects, API calls, or complex event handlers, extract the logic into a custom hook in `src/feature/<feature-name>/hooks/use-<feature-name>.ts`.
- Components should only call the hook, extract the props/handlers, and return clean, declarative JSX.

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
3. **Feature README**: Ensure `README.md` exists inside `src/feature/<feature-name>/`.
4. **Clean Asset Placement**: Ensure all images are placed in `public/images/` or subdirectories.
5. **No Em Dash**: Verify no em dash "—" symbols are present.
6. **Validation**: Execute `bun run verify` to guarantee zero compilation, formatting, lint, or test errors.
