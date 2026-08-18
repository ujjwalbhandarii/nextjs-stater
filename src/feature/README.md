# Feature-Based Folder Architecture (`src/feature/`)

This directory houses all domain-specific application feature modules.

---

## 🏛️ Modular Feature Pattern

Every domain feature or standalone page flow lives in its own dedicated directory under `src/feature/<feature-name>/`.

### Folder Anatomy

```
src/feature/<feature-name>/
├── components/          # Feature presentational components
├── hooks/               # Custom hooks for state, logic & side-effects
├── types/               # Feature-specific interfaces & type definitions
├── utils/               # Feature-specific helper logic / API calls
└── index.tsx            # Exported main feature view container
```

---

## 🔑 Key Rules for Feature Modules

1. **Self-Containment**: A feature module should keep its private components and hooks encapsulated within its own folder unless explicitly needed across multiple features.
2. **App Router Linkage**: App Router page files (`src/app/<route>/page.tsx`) must only act as routing shells and import the top-level feature view:
   ```tsx
   import FeatureView from '@/feature/<feature-name>';

   export default function Page() {
     return <FeatureView />;
   }
   ```
3. **Hook Separation**: Never embed business logic, data fetching, or stateful side-effects directly inside the JSX component file (`index.tsx` or `components/*`). Always delegate logic to custom hooks in `hooks/`.

---

## 💡 Concrete Implementation Example

### 1. Hook (`src/feature/home/hooks/use-home.ts`)

```ts
import { useState, useCallback } from 'react';

export function useHome() {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics'>(
    'overview',
  );

  const selectTab = useCallback((tab: 'overview' | 'analytics') => {
    setActiveTab(tab);
  }, []);

  return {
    activeTab,
    selectTab,
  };
}
```

### 2. Presentational View (`src/feature/home/index.tsx`)

```tsx
import { useHome } from './hooks/use-home';
import { Button } from '@/components/ui/button';

export default function HomeFeature() {
  const { activeTab, selectTab } = useHome();

  return (
    <main className='container mx-auto flex flex-col gap-6 p-8'>
      <header className='flex items-center justify-between border-b border-border pb-4'>
        <h1 className='text-2xl font-bold tracking-tight'>
          Dashboard Overview
        </h1>
        <div className='flex gap-2'>
          <Button
            variant={activeTab === 'overview' ? 'default' : 'outline'}
            onClick={() => selectTab('overview')}
          >
            Overview
          </Button>
          <Button
            variant={activeTab === 'analytics' ? 'default' : 'outline'}
            onClick={() => selectTab('analytics')}
          >
            Analytics
          </Button>
        </div>
      </header>
      {/* Sub-views composed cleanly */}
    </main>
  );
}
```
