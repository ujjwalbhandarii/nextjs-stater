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
    gradient: 'from-purple-500 to-indigo-500',
    tag: 'src/feature/',
  },
  {
    icon: Webhook,
    title: 'Hook-Based Logic Separation',
    description:
      'JSX views remain purely presentational. All state, API calls, and handlers reside in dedicated custom hooks.',
    gradient: 'from-pink-500 to-purple-500',
    tag: 'hooks/use-feature.ts',
  },
  {
    icon: CheckCircle2,
    title: 'Service Unit Testing Mandate',
    description:
      'All business and data services in services/ require matching test files (<service>.test.ts) run via bun test.',
    gradient: 'from-cyan-500 to-blue-500',
    tag: 'services/*.test.ts',
  },
  {
    icon: GitPullRequest,
    title: 'Automated Git Pre-Push Hook',
    description:
      'Configured via Husky to auto-format, typecheck, lint, and test before pushing code to GitHub repositories.',
    gradient: 'from-emerald-500 to-teal-500',
    tag: '.husky/pre-push',
  },
  {
    icon: Container,
    title: 'Ultra-Optimized Docker Setup',
    description:
      'Next.js standalone output tracing with multi-stage Alpine Dockerfile for ultra-fast, minimal container deployments.',
    gradient: 'from-amber-500 to-orange-500',
    tag: 'Dockerfile',
  },
  {
    icon: FileCode2,
    title: 'Feature README Indexing',
    description:
      'Every feature module contains a README.md to provide instant contextual searchability for AI agents and devs.',
    gradient: 'from-violet-500 to-purple-500',
    tag: 'README.md',
  },
];

export function FeaturesSection() {
  return (
    <section className='py-16 px-4 max-w-6xl mx-auto'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white'>
          Architectural Core Principles
        </h2>
        <p className='text-zinc-400 max-w-xl mx-auto text-sm sm:text-base'>
          Built with strict enterprise standards to maximize scalability, AI
          assistant efficiency, and developer joy.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className='group relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20'
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-2.5 text-white mb-5 shadow-md flex items-center justify-center transform transition-transform group-hover:scale-110`}
              >
                <Icon className='w-6 h-6' />
              </div>

              <div className='flex items-center justify-between mb-2'>
                <h3 className='text-lg font-semibold text-white group-hover:text-purple-300 transition-colors'>
                  {item.title}
                </h3>
              </div>

              <span className='inline-block px-2.5 py-0.5 mb-3 rounded-md bg-zinc-800 text-purple-300 text-xs font-mono border border-zinc-700/60'>
                {item.tag}
              </span>

              <p className='text-zinc-400 text-xs sm:text-sm leading-relaxed'>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
