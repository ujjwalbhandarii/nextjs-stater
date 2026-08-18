import {
  Globe,
  Layers,
  Boxes,
  Palette,
  ShieldCheck,
  Container,
  Webhook,
  CheckCircle2,
  GitPullRequest,
  FileCode2,
  Zap,
  Atom,
  Flame,
  Code2,
} from 'lucide-react';
import {
  ArchitectureNode,
  FeatureItem,
  CommandItem,
  TechBadge,
} from '../types/home.types';

export const TECH_BADGES: TechBadge[] = [
  { label: 'Next.js 16', icon: Zap },
  { label: 'React 19', icon: Atom },
  { label: 'Tailwind CSS v4', icon: Palette },
  { label: 'Bun Runtime', icon: Flame },
  { label: 'TypeScript 5', icon: Code2 },
  { label: 'Radix UI', icon: Boxes },
  { label: 'Docker Ready', icon: Container },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: Layers,
    title: 'Feature-Based Architecture',
    description:
      'Domain code lives neatly encapsulated in src/feature/<feature-name>/ with clean modular boundary separation.',
    tag: 'src/feature/',
  },
  {
    icon: Webhook,
    title: 'Hook-Based Logic Separation',
    description:
      'JSX views remain purely presentational. All state, API calls, and handlers reside in dedicated custom hooks.',
    tag: 'hooks/use-feature.ts',
  },
  {
    icon: CheckCircle2,
    title: 'Service Unit Testing Mandate',
    description:
      'All business and data services in services/ require matching test files (<service>.test.ts) run via bun test.',
    tag: 'services/*.test.ts',
  },
  {
    icon: GitPullRequest,
    title: 'Automated Git Pre-Push Hook',
    description:
      'Configured via Husky to auto-format, typecheck, lint, and test before pushing code to GitHub repositories.',
    tag: '.husky/pre-push',
  },
  {
    icon: Container,
    title: 'Ultra-Optimized Docker Setup',
    description:
      'Next.js standalone output tracing with multi-stage Alpine Dockerfile for ultra-fast, minimal container deployments.',
    tag: 'Dockerfile',
  },
  {
    icon: FileCode2,
    title: 'Feature README Indexing',
    description:
      'Every feature module contains a README.md to provide instant contextual searchability for AI agents and devs.',
    tag: 'README.md',
  },
];

export const COMMANDS_LIST: CommandItem[] = [
  {
    label: 'Start Local Development',
    cmd: 'bun dev',
    desc: 'Launches local Next.js dev server with Turbopack on port 3000.',
  },
  {
    label: 'Full Pre-Push Verification',
    cmd: 'bun run verify',
    desc: 'Runs TypeScript typecheck, Prettier check, ESLint, and Bun unit tests.',
  },
  {
    label: 'Execute Service Unit Tests',
    cmd: 'bun test',
    desc: 'Fast native Bun test runner executing domain service unit tests.',
  },
  {
    label: 'Build Standalone Production',
    cmd: 'bun run build',
    desc: 'Compiles Turbopack production bundle with Next.js standalone output.',
  },
  {
    label: 'Build Minimal Docker Image',
    cmd: 'bun run docker:build',
    desc: 'Builds lightweight multi-stage Alpine Docker container.',
  },
];

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'app',
    name: 'src/app/',
    type: 'folder',
    icon: Globe,
    title: 'App Router Layer',
    badge: 'Routing & Pages',
    desc: 'Thin Next.js App Router wrappers. Route pages exclusively render main feature module containers (e.g. src/feature/home/index.tsx).',
    children: [
      { name: 'page.tsx', desc: 'Renders feature container index' },
      { name: 'layout.tsx', desc: 'Root HTML layout & Geist fonts' },
    ],
  },
  {
    id: 'feature',
    name: 'src/feature/<feature-name>/',
    type: 'folder',
    icon: Layers,
    title: 'Encapsulated Domain Core',
    badge: 'Feature Modules',
    desc: 'Self-contained feature module. Houses presentational views, custom state hooks, domain services, types, and mandatory README.md for fast AI indexing.',
    children: [
      { name: 'components/', desc: 'Presentational UI views' },
      { name: 'hooks/', desc: 'Stateful logic & side effects' },
      { name: 'services/', desc: 'Domain services & unit tests' },
      { name: 'README.md', desc: 'AI searchability & docs' },
    ],
  },
  {
    id: 'components',
    name: 'src/components/ui/',
    type: 'folder',
    icon: Boxes,
    title: 'Atomic Design System',
    badge: 'UI Primitives',
    desc: 'Reusable UI component primitives built with Radix UI, Class Variance Authority (CVA), and cn() class utility helpers.',
    children: [
      { name: 'button.tsx', desc: 'CVA-powered button component' },
      { name: 'README.md', desc: 'UI primitive usage guidelines' },
    ],
  },
  {
    id: 'styles',
    name: 'src/styles/globals.css',
    type: 'file',
    icon: Palette,
    title: 'Global Styling System',
    badge: 'Tailwind v4 & OKLCH',
    desc: 'OKLCH semantic color tokens, Tailwind CSS v4 theme variables, and liquid glass dark mode utilities.',
    children: [],
  },
  {
    id: 'husky',
    name: '.husky/pre-push',
    type: 'file',
    icon: ShieldCheck,
    title: 'Automated Quality Gate',
    badge: 'Git Quality Control',
    desc: 'Automated Git hook executing bun run verify (typecheck + prettier check + lint + bun test) before code push.',
    children: [],
  },
  {
    id: 'docker',
    name: 'Dockerfile',
    type: 'file',
    icon: Container,
    title: 'Production Containerization',
    badge: 'Bun Alpine Multi-Stage',
    desc: 'Ultra-lightweight Alpine Linux Docker container build using Next.js standalone output tracing.',
    children: [],
  },
];
