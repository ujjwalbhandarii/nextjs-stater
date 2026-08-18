# GitHub Copilot Instructions

- Package Manager: Always use `bun` (`bun dev`, `bun run build`, `bun run typecheck`, `bun run check`, `bun run format`).
- Architecture: Place feature logic in `src/feature/<feature-name>/`. Keep `src/app/` as thin wrappers.
- Primitives: UI components belong in `src/components/ui/` using `cva`, `cn()`, and `@radix-ui/react-slot`.
- Hook Separation: Extract state, side-effects, and handlers to custom hooks in `src/feature/<feature-name>/hooks/`.
- Styling: Use Tailwind CSS v4 OKLCH tokens (`bg-background`, `text-foreground`, `bg-primary`, `border-border`).
- Validation: Verify code using `bun run typecheck` and `bun run check`.
