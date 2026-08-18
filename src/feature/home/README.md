# Home Feature Module (`src/feature/home/`)

## 📌 Overview

The Home Feature module provides the primary landing page showcase for the Vibe Ready Next.js Starter Pack.

## 📂 Component & File Structure

- `index.tsx`: Main export container component rendered by `src/app/page.tsx`.
- `hooks/use-home.ts`: Custom state & clipboard copy hook for developer workflow commands.
- `components/HeroSection.tsx`: Top header with title, tech stack badges, quick action CTAs, and lofi banner image.
- `components/FeaturesSection.tsx`: Grid of core architectural principles (Feature-based structure, logic separation, testing, pre-push, Docker).
- `components/CommandSection.tsx`: Interactive CLI snippet cards with one-click copy feedback.
- `components/ArchitectureSection.tsx`: Visual breakdown of repository directory structure.
- `components/FooterSection.tsx`: Footer links and stack info.
- `services/home.service.ts`: Domain service computing feature metrics & status.
- `services/home.service.test.ts`: Unit tests verifying `home.service.ts` logic.

## 🪝 Logic & State Flow

- `useHome()` hook manages state for command copying (`handleCopyCommand`) and active tab navigation.
- Presentational components (`HeroSection`, `FeaturesSection`, `CommandSection`, `ArchitectureSection`) remain pure JSX views.
