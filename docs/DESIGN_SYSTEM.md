# 🎨 Scalable Design System

The design system is powered by **Tailwind CSS v4** and **OKLCH** color tokens defined in `src/styles/globals.css`.

---

## 🎨 Color Palette & OKLCH Tokens

Color variables are calibrated using the OKLCH space for predictable, vibrant color rendering:

| Token          | Light Mode         | Dark Mode            | Usage                   |
| :------------- | :----------------- | :------------------- | :---------------------- |
| `--background` | `oklch(1 0 0)`     | `oklch(0.145 0 0)`   | Page background         |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)`   | Primary text color      |
| `--card`       | `oklch(1 0 0)`     | `oklch(0.205 0 0)`   | Card containers         |
| `--primary`    | `oklch(0.205 0 0)` | `oklch(0.922 0 0)`   | Primary actions/buttons |
| `--border`     | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` | Component borders       |

---

## ⚙️ Tailwind v4 Integration

The design system imports Tailwind CSS v4 in `src/styles/globals.css`:

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));
```

### Styling Rules

- Always use semantic utility classes (`bg-background`, `text-foreground`, `bg-primary`, `border-border`).
- Combine classes using `cn()` from `@/utils/cn`.
- Do NOT hardcode raw hex values or arbitrary pixel numbers in components.
