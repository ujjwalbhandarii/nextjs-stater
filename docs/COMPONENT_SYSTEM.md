# 🧩 Component Architecture Design System

UI building blocks reside in `src/components/ui/` and follow the **Radix UI + Class Variance Authority (CVA)** pattern.

---

## 🛠️ Primitive Construction Pattern

1. **Polymorphic Rendering (`asChild`)**: Powered by `@radix-ui/react-slot` to allow element swapping without DOM pollution.
2. **Variant Management (`cva`)**: Standardized variant declarations with default fallback props.
3. **Data Attributes (`data-slot`)**: Explicit slot labeling for scoped CSS targeting.

```tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-border bg-background hover:bg-accent',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```
