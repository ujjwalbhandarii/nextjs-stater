import {
  Layers,
  Webhook,
  CheckCircle2,
  GitPullRequest,
  Container,
  FileCode2,
} from 'lucide-react';

const features = [
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

export function FeaturesSection() {
  return (
    <section className='py-12 sm:py-20 px-4 max-w-6xl mx-auto'>
      <div className='text-center mb-10 sm:mb-14'>
        <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4'>
          Architectural Core Principles
        </h2>
        <p className='text-slate-300/90 max-w-xl mx-auto text-sm sm:text-lg font-normal px-2'>
          Designed with strict enterprise standards for modern AI agents and
          high-performance teams.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className='group p-5 sm:p-7 rounded-2xl sm:rounded-3xl liquid-glass-card'
            >
              <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl liquid-glass-pill p-2 sm:p-2.5 text-[#b2d8d8] mb-4 sm:mb-6 flex items-center justify-center transition-all group-hover:bg-[#008080] group-hover:text-white shadow-md'>
                <Icon className='w-4.5 h-4.5 sm:w-5 sm:h-5' />
              </div>

              <h3 className='text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-[#b2d8d8] transition-colors'>
                {item.title}
              </h3>

              <span className='inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 mb-3 sm:mb-4 rounded-lg bg-[#060909]/80 text-[#b2d8d8] text-[11px] sm:text-xs font-mono border border-[#006666]/50 max-w-full truncate'>
                {item.tag}
              </span>

              <p className='text-slate-300/90 text-xs sm:text-sm leading-relaxed'>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
