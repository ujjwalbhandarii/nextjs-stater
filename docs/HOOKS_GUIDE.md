# 🪝 Hook-Based Logic Separation

Render components (`JSX`) must remain pure and presentational. All complex state management, data fetching, side-effects, and handlers are extracted into custom hooks.

---

## 📍 Hook Placement Rules

- **Feature Hooks**: Placed in `src/feature/<feature-name>/hooks/use-<feature-name>.ts`
- **Global Hooks**: Placed in `src/hooks/use-<hook-name>.ts`

---

## 💡 Code Blueprint

### 1. Custom Hook (`src/feature/home/hooks/use-home.ts`)

```ts
import { useState, useCallback } from 'react';

export function useHome() {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics'>(
    'overview',
  );

  const selectTab = useCallback((tab: 'overview' | 'analytics') => {
    setActiveTab(tab);
  }, []);

  return { activeTab, selectTab };
}
```

### 2. View Component (`src/feature/home/index.tsx`)

```tsx
import { useHome } from './hooks/use-home';
import { Button } from '@/components/ui/button';

export default function HomeFeature() {
  const { activeTab, selectTab } = useHome();

  return (
    <div className='p-6'>
      <Button
        variant={activeTab === 'overview' ? 'default' : 'outline'}
        onClick={() => selectTab('overview')}
      >
        Overview
      </Button>
    </div>
  );
}
```
