# 🎨 Scalable Design System

The design system is powered by **Tailwind CSS v4** and OKLCH color tokens defined in `src/styles/globals.css`, following an **Apple-inspired minimalist dark aesthetic**.

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

## 🍎 Apple-Inspired Component Guidelines

1. **Ultra-Clean Surface Cards**:
   - Use `rounded-3xl` (or `rounded-2xl`), `bg-[#004c4c]/20`, `border border-[#006666]/30`, and `backdrop-blur-xl`.
2. **Minimalist Typography**:
   - Use tight letter spacing (`tracking-tight`), crisp font weights (`font-semibold` for headings), and clean color hierarchy (`#b2d8d8` for titles, `#66b2b2` for body text).
3. **Subtle Background & Noise Texture**:
   - Dark background (`#070b0b`) overlaid with repeating noise texture (`/images/noise.png`) and soft ambient teal glows.

---

## ⚙️ Tailwind v4 Integration

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));
```

### Styling Rules

- ALWAYS stick to the official 5-color Teal palette.
- Combine classes using `cn()` from `@/utils/cn`.
