# 🎨 Scalable Design System & Typography

The design system is powered by **Tailwind CSS v4**, OKLCH color tokens, and a dedicated typography system defined in `src/styles/typography.css`, following an **Apple-inspired minimalist dark aesthetic**.

---

## 🎨 Official Teal Palette

The application strictly adheres to the curated 5-color Teal design palette over a dark background:

| Color Level      | Hex Code  | RGB             | Usage Purpose                                |
| :--------------- | :-------- | :-------------- | :------------------------------------------- |
| **Light Teal**   | `#b2d8d8` | `(178,216,216)` | Primary text, glowing highlights, code text  |
| **Medium Teal**  | `#66b2b2` | `(102,178,178)` | Secondary body text, icons, subheadings      |
| **Primary Teal** | `#008080` | `(0,128,128)`   | Primary action buttons, active indicators    |
| **Deep Teal**    | `#006666` | `(0,102,102)`   | Borders, dividers, subtle button outlines    |
| **Dark Teal**    | `#004c4c` | `(0,76,76)`     | Card containers, glassmorphism surface fills |

---

## 🔤 Typography & Font System (`src/styles/typography.css`)

To prevent font mismatching across components and AI-generated views, all typography rules are standardized:

| HTML Element / Class  | Scale / Line Height                                     | Color & Weight                  | Purpose                   |
| :-------------------- | :------------------------------------------------------ | :------------------------------ | :------------------------ |
| `h1`, `.h1`           | `clamp(2rem, 5vw + 1rem, 4.5rem)` / `1.12`              | `#ffffff` (Extrabold 800)       | Primary Hero Headlines    |
| `h2`, `.h2`           | `clamp(1.5rem, 3.5vw + 0.5rem, 3rem)` / `1.2`           | `#ffffff` (Bold 700)            | Main Section Headers      |
| `h3`, `.h3`           | `clamp(1.125rem, 2vw + 0.5rem, 1.5rem)` / `1.3`         | `#ffffff` (Bold 700)            | Subsection & Card Titles  |
| `h4`, `.h4`           | `clamp(0.875rem, 1.5vw + 0.25rem, 1.125rem)` / `1.4`    | `#ffffff` (Semibold 600)        | Component & Item Headers  |
| `h5`, `.h5`           | `clamp(0.75rem, 1vw + 0.25rem, 0.875rem)` / `1.4`       | `#b2d8d8` (Semibold 600)        | Sub-item Labels & Badges  |
| `h6`, `.h6`           | `clamp(0.6875rem, 0.8vw + 0.2rem, 0.75rem)` / Monospace | `#94a3b8` (Uppercase 600)       | Eyebrow & Category Badges |
| `p`                   | `0.9375rem` / `1.6`                                     | `rgba(226,232,240,0.9)`         | Default Body Paragraphs   |
| `code`, `pre`         | `0.8125rem` / Monospace                                 | `#b2d8d8`                       | Monospace Code Snippets   |
| `.text-gradient-teal` | Gradient Clip Text                                      | White to `#b2d8d8` to `#66b2b2` | Specular Title Accents    |

---

## 🍎 Apple-Inspired Component Guidelines

1. **Ultra-Clean Surface Cards**:
   - Use `rounded-3xl` (or `rounded-2xl`), `.liquid-glass-card`, `border border-[#006666]/30`, and `backdrop-blur-xl`.
2. **Minimalist Typography**:
   - Use standardized tags (`h1`-`h6`, `p`) or typography utilities (`.text-gradient-teal`, `.text-body-hero`).
3. **Subtle Background & Noise Texture**:
   - Dark background (`#060909`) overlaid with repeating noise texture (`/images/noise.png`) and soft ambient teal glows.

---

## ⚙️ Tailwind v4 & CSS Architecture

```css
@import 'tailwindcss';
@import 'tw-animate-css';
@import './typography.css';

@custom-variant dark (&:is(.dark *));
```

### Styling Rules

- ALWAYS stick to the official 5-color Teal palette and typography design system.
- Combine classes using `cn()` from `@/utils/cn`.
