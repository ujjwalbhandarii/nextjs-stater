import { FolderTree, FileCode, Check } from 'lucide-react';

const folderStructure = [
  {
    path: 'src/app/',
    purpose:
      'Next.js App Router route handlers & page entry points. Thin wrappers rendering feature components.',
    badge: 'Routing Layer',
  },
  {
    path: 'src/feature/<feature-name>/',
    purpose:
      'Encapsulated domain modules containing components, hooks, services, types, and README.md.',
    badge: 'Domain Core',
  },
  {
    path: 'src/components/ui/',
    purpose:
      'Atomic UI primitives built with Radix UI, CVA, and cn() helper utilities.',
    badge: 'Design System',
  },
  {
    path: 'src/styles/globals.css',
    purpose:
      'OKLCH semantic design tokens and Tailwind CSS v4 custom theme setup.',
    badge: 'Global Styles',
  },
  {
    path: '.husky/pre-push',
    purpose:
      'Automated Git hook executing auto-formatting and verification before pushing to GitHub.',
    badge: 'Git Quality Control',
  },
  {
    path: 'Dockerfile',
    purpose:
      'Multi-stage Alpine Linux Docker build using Next.js standalone server tracing.',
    badge: 'Containerization',
  },
];

export function ArchitectureSection() {
  return (
    <section className='py-16 px-4 max-w-5xl mx-auto'>
      <div className='p-8 rounded-3xl bg-zinc-900/50 border border-purple-500/20 backdrop-blur-xl relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none' />

        <div className='flex items-center gap-3 mb-6'>
          <div className='p-2.5 rounded-xl bg-purple-500/20 text-purple-300'>
            <FolderTree className='w-6 h-6' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-white'>
              Project Directory Architecture
            </h3>
            <p className='text-zinc-400 text-xs sm:text-sm'>
              Standardized structure designed for high AI context indexing and
              clean developer onboarding.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {folderStructure.map((item) => (
            <div
              key={item.path}
              className='p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-purple-500/30 transition-all flex flex-col justify-between'
            >
              <div>
                <div className='flex items-center justify-between gap-2 mb-2'>
                  <span className='font-mono text-xs font-semibold text-purple-300 flex items-center gap-1.5'>
                    <FileCode className='w-3.5 h-3.5 text-purple-400' />
                    {item.path}
                  </span>
                  <span className='text-[10px] px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-200 border border-purple-800/50 font-medium'>
                    {item.badge}
                  </span>
                </div>
                <p className='text-zinc-400 text-xs leading-relaxed'>
                  {item.purpose}
                </p>
              </div>

              <div className='mt-3 pt-2 border-t border-zinc-900 flex items-center gap-1 text-[11px] text-emerald-400 font-medium'>
                <Check className='w-3 h-3' />
                <span>AGENTS.md Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
