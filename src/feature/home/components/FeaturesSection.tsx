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
    <section className='py-16 px-4 max-w-5xl mx-auto'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3'>
          Architecture & Design System
        </h2>
        <p className='text-[#66b2b2] max-w-lg mx-auto text-sm sm:text-base font-normal'>
          Designed with Apple-like simplicity and enterprise modular standards.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className='group p-6 rounded-3xl bg-[#004c4c]/20 border border-[#006666]/30 hover:border-[#66b2b2]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='w-10 h-10 rounded-2xl bg-[#004c4c]/50 border border-[#006666]/60 p-2 text-[#b2d8d8] mb-5 flex items-center justify-center transition-colors group-hover:bg-[#008080]/40 group-hover:text-white'>
                <Icon className='w-5 h-5' />
              </div>

              <h3 className='text-base font-semibold text-white mb-2 group-hover:text-[#b2d8d8] transition-colors'>
                {item.title}
              </h3>

              <span className='inline-block px-2.5 py-0.5 mb-3 rounded-md bg-[#070b0b] text-[#66b2b2] text-xs font-mono border border-[#006666]/40'>
                {item.tag}
              </span>

              <p className='text-[#66b2b2] text-xs sm:text-sm leading-relaxed'>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
