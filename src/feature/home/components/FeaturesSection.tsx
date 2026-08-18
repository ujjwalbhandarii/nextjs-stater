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
    <section className='py-20 px-4 max-w-6xl mx-auto'>
      <div className='text-center mb-14'>
        <h2 className='text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4'>
          Architectural Core Principles
        </h2>
        <p className='text-slate-300/90 max-w-xl mx-auto text-base sm:text-lg font-normal'>
          Designed with strict enterprise standards for modern AI agents and
          high-performance teams.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className='group p-7 rounded-3xl bg-[#004c4c]/15 border border-[#006666]/40 hover:border-[#66b2b2]/60 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#004c4c]/30 hover:shadow-xl hover:shadow-[#004c4c]/20'
            >
              <div className='w-11 h-11 rounded-2xl bg-[#004c4c]/50 border border-[#006666]/60 p-2.5 text-[#b2d8d8] mb-6 flex items-center justify-center transition-all group-hover:bg-[#008080] group-hover:text-white shadow-md'>
                <Icon className='w-5 h-5' />
              </div>

              <h3 className='text-lg font-semibold text-white mb-2.5 group-hover:text-[#b2d8d8] transition-colors'>
                {item.title}
              </h3>

              <span className='inline-block px-3 py-1 mb-4 rounded-lg bg-[#060909]/80 text-[#b2d8d8] text-xs font-mono border border-[#006666]/50'>
                {item.tag}
              </span>

              <p className='text-slate-300/90 text-sm leading-relaxed'>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
