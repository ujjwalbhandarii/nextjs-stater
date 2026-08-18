# Home Feature Module (`src/feature/home/`)

## 📌 Overview

The Home Feature module provides the primary landing page showcase for the Vibe Ready Next.js Starter Pack.

## 📂 Component & File Structure

- `index.tsx`: Main export container component rendered by `src/app/page.tsx`.
- `hooks/use-home.ts`: Custom state & clipboard copy hook for developer workflow commands.
- `types/home.types.ts`: TypeScript interfaces for feature components, nodes, and commands.
- `constants/home.constants.ts`: Separated static data arrays (`ARCHITECTURE_NODES`, `FEATURES`, `COMMANDS_LIST`, `TECH_BADGES`).
- `components/HeroSection.tsx`: Top header with title, tech stack badges, quick action CTAs, and lofi banner image.
- `components/FeaturesSection.tsx`: Grid of core architectural principles.
- `components/CommandSection.tsx`: Interactive CLI snippet cards with one-click copy feedback.
- `components/ArchitectureSection.tsx`: Composition container for graphical architecture tree & details inspector.
- `components/ArchitectureTreeGraph.tsx`: Visual connected tree branch graph component.
- `components/ArchitectureNodeDetails.tsx`: Interactive node inspection details panel.
- `components/FooterSection.tsx`: Footer links and stack info.
- `services/home.service.ts`: Domain service computing feature metrics & status.
- `services/home.service.test.ts`: Unit tests verifying `home.service.ts` logic.

## 🪝 Logic & State Flow

- `useHome()` hook manages state for command copying (`handleCopyCommand`) and active tab navigation.
- All static data arrays are decoupled into `constants/home.constants.ts`.
- Presentational views are decomposed into reusable sub-components (`ArchitectureTreeGraph`, `ArchitectureNodeDetails`).
