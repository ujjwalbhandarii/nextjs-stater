'use client';

import { useState } from 'react';
import {
  FolderTree,
  Folder,
  FileCode,
  Globe,
  Layers,
  Boxes,
  Palette,
  ShieldCheck,
  Container,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  icon: typeof FolderTree;
  title: string;
  badge: string;
  desc: string;
  children?: { name: string; desc: string }[];
}

const architectureNodes: ArchitectureNode[] = [
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

export function ArchitectureSection() {
  const [selectedId, setSelectedId] = useState<string>('feature');
  const activeNode =
    architectureNodes.find((n) => n.id === selectedId) || architectureNodes[1];

  return (
    <section className='py-12 sm:py-20 px-4 max-w-6xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-10 sm:mb-14'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-[#b2d8d8] text-xs font-mono mb-3.5'>
          <FolderTree className='w-3.5 h-3.5 text-[#66b2b2]' />
          <span>GRAPHICAL ARCHITECTURE TREE</span>
        </div>
        <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3'>
          Interactive Architecture Graph
        </h2>
        <p className='text-slate-300/90 text-sm sm:text-lg max-w-xl mx-auto font-normal px-2'>
          Click any branch node to explore its structural role, AI
          searchability, and domain boundaries.
        </p>
      </div>

      {/* Main Graphical Canvas */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
        {/* Left Column: Visual Tree Graph Diagram */}
        <div className='lg:col-span-6 p-5 sm:p-7 rounded-2xl sm:rounded-3xl liquid-glass-card'>
          {/* Root Project Node */}
          <div className='flex items-center gap-3 pb-5 border-b border-[#006666]/40 mb-6'>
            <div className='w-10 h-10 rounded-xl bg-[#008080]/30 border border-[#66b2b2]/40 flex items-center justify-center text-[#b2d8d8] shadow-md'>
              <Sparkles className='w-5 h-5 text-[#66b2b2]' />
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <span className='font-mono text-sm sm:text-base font-bold text-white'>
                  thebitrates-production /
                </span>
                <span className='text-[10px] px-2 py-0.5 rounded-md bg-[#004c4c]/40 text-[#b2d8d8] font-mono border border-[#006666]/50'>
                  ROOT
                </span>
              </div>
              <p className='text-xs text-slate-300/80'>
                Bun + Next.js Startup Repository Tree
              </p>
            </div>
          </div>

          {/* Connected Tree Branch Lines Container */}
          <div className='relative pl-3 sm:pl-4 space-y-3 before:absolute before:left-6 before:top-2 before:bottom-6 before:w-0.5 before:bg-gradient-to-b before:from-[#008080] before:via-[#006666] before:to-transparent'>
            {architectureNodes.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedId === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedId(node.id)}
                  className={`relative flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#008080]/25 border border-[#66b2b2]/60 shadow-lg shadow-[#008080]/15 translate-x-1.5'
                      : 'bg-[#060909]/60 border border-[#006666]/30 hover:border-[#66b2b2]/40 hover:bg-[#004c4c]/20'
                  }`}
                >
                  {/* Branch Horizontal Connector Line */}
                  <div
                    className={`absolute -left-3 sm:-left-4 w-3.5 sm:w-4.5 h-0.5 top-1/2 -translate-y-1/2 transition-colors ${
                      isSelected ? 'bg-[#66b2b2]' : 'bg-[#006666]/60'
                    }`}
                  />
                  {/* Branch Glowing Connector Dot */}
                  <div
                    className={`absolute -left-4 sm:-left-5 w-2 h-2 rounded-full top-1/2 -translate-y-1/2 transition-all ${
                      isSelected
                        ? 'bg-[#b2d8d8] ring-4 ring-[#008080]/50'
                        : 'bg-[#006666]'
                    }`}
                  />

                  <div className='flex items-center gap-3 min-w-0 pr-2'>
                    <div
                      className={`p-2 rounded-lg transition-colors shrink-0 ${
                        isSelected
                          ? 'bg-[#008080] text-white'
                          : 'bg-[#004c4c]/30 text-[#66b2b2]'
                      }`}
                    >
                      <Icon className='w-4 h-4' />
                    </div>

                    <div className='min-w-0'>
                      <h4
                        className={`font-mono text-xs sm:text-sm font-semibold truncate transition-colors ${
                          isSelected ? 'text-white' : 'text-[#b2d8d8]'
                        }`}
                      >
                        {node.name}
                      </h4>
                      <p className='text-[11px] text-slate-300/80 truncate'>
                        {node.title}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center gap-2 shrink-0'>
                    <span className='hidden xs:inline-block text-[10px] px-2 py-0.5 rounded-full bg-[#004c4c]/30 text-[#b2d8d8] border border-[#006666]/40 font-medium'>
                      {node.badge}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? 'text-white translate-x-0.5'
                          : 'text-[#006666]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Node Visual Details & File Inspection Panel */}
        <div className='lg:col-span-6 p-5 sm:p-7 rounded-2xl sm:rounded-3xl liquid-glass-card border border-[#006666]/50'>
          <div className='flex items-center justify-between gap-3 pb-4 border-b border-[#006666]/40 mb-5'>
            <div className='flex items-center gap-2.5'>
              <div className='p-2 rounded-xl bg-[#008080]/30 text-[#b2d8d8] border border-[#006666]/50'>
                <activeNode.icon className='w-5 h-5 text-[#66b2b2]' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-white'>
                  {activeNode.title}
                </h3>
                <span className='font-mono text-xs text-[#b2d8d8]'>
                  {activeNode.name}
                </span>
              </div>
            </div>

            <span className='text-xs px-3 py-1 rounded-full bg-[#004c4c]/40 text-[#b2d8d8] border border-[#006666]/50 font-medium'>
              {activeNode.badge}
            </span>
          </div>

          {/* Purpose & Boundary Description */}
          <div className='mb-6'>
            <h4 className='text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2'>
              Architectural Role
            </h4>
            <p className='text-slate-300 text-sm leading-relaxed bg-[#060909]/75 p-4 rounded-xl border border-[#006666]/30'>
              {activeNode.desc}
            </p>
          </div>

          {/* Child File Inspection (If Available) */}
          {activeNode.children && activeNode.children.length > 0 && (
            <div className='mb-6'>
              <h4 className='text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3'>
                Included Node Files
              </h4>
              <div className='space-y-2'>
                {activeNode.children.map((child) => (
                  <div
                    key={child.name}
                    className='flex items-center justify-between p-3 rounded-xl bg-[#060909]/60 border border-[#006666]/30'
                  >
                    <div className='flex items-center gap-2.5 min-w-0'>
                      {child.name.endsWith('/') ? (
                        <Folder className='w-4 h-4 text-[#66b2b2] shrink-0' />
                      ) : (
                        <FileCode className='w-4 h-4 text-[#b2d8d8] shrink-0' />
                      )}
                      <span className='font-mono text-xs font-medium text-white truncate'>
                        {child.name}
                      </span>
                    </div>
                    <span className='text-[11px] text-slate-300/80 truncate pl-2'>
                      {child.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AGENTS.md Protocol Verification Badge */}
          <div className='pt-4 border-t border-[#006666]/30 flex items-center justify-between text-xs'>
            <span className='text-slate-400'>Quality Control Protocol</span>
            <span className='text-[#b2d8d8] font-mono flex items-center gap-1.5 font-medium'>
              <CheckCircle2 className='w-4 h-4 text-[#008080]' />
              <span>AGENTS.md & Bun Verified</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
