# Home Feature Module (`src/feature/home/`)

## 📌 Overview

The Home Feature module handles the primary landing/dashboard view of the application.

## 📂 Component & File Structure

- `index.tsx`: Main export container component rendered by `src/app/page.tsx`.
- `hooks/use-home.ts`: Custom state & tab selection hook for the home view.
- `services/home.service.ts`: Domain service computing feature metrics & status.
- `services/home.service.test.ts`: Unit tests verifying `home.service.ts` logic.

## 🪝 Logic & State Flow

- `useHome()` hook manages state for tab navigation between `overview` and `analytics`.
- `homeService.getFeatureStatus()` retrieves feature initialization status.
- `homeService.calculateMetrics()` calculates user metrics.
