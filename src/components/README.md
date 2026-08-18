# Component Architecture Design System (`src/components/`)

This directory contains the core **Atomic UI Building Blocks** for the application design system.

---

## 📐 Component Guidelines & Principles

### 1. Atomic Responsibility

- Components inside `src/components/ui/` must be pure, highly reusable UI primitives (Buttons, Cards, Badges, Inputs, Dialogs, Tooltips, etc.).
- Primitive UI components must NOT contain business logic, domain-specific state, or API calls.

### 2. Polymorphic Rendering (`asChild` Pattern)

- Every UI primitive must support the `asChild` prop using `@radix-ui/react-slot`.
- This allows passing child elements (such as Next.js `<Link />` or custom tags) without breaking the DOM hierarchy or duplicated DOM wrappers.

### 3. Variant Management (`cva`)

- All visual variations (color variants, sizing options, states) must be defined using `class-variance-authority` (`cva`).
- Class combinations must be merged using `cn()` from `@/utils/cn`.

### 4. Accessibility & Data Attributes

- Root elements must include a `data-slot="<component-name>"` attribute for granular CSS styling hooks.
- Components must handle keyboard navigation (`focus-visible`), disabled states (`disabled:pointer-events-none disabled:opacity-50`), and `aria-*` attributes seamlessly.

---

## 💻 Standard Primitive Blueprint

```tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow-xs hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-white shadow-xs hover:bg-destructive/80',
        outline: 'text-foreground border-border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      data-slot='badge'
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}
```
