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
    <section className='py-16 px-4 max-w-4xl mx-auto'>
      <div className='p-8 rounded-3xl bg-[#004c4c]/15 border border-[#006666]/30 backdrop-blur-2xl'>
        <div className='flex items-center gap-3 mb-6'>
          <div className='p-2.5 rounded-2xl bg-[#004c4c]/40 text-[#b2d8d8] border border-[#006666]/50'>
            <FolderTree className='w-5 h-5 text-[#66b2b2]' />
          </div>
          <div>
            <h3 className='text-2xl font-semibold text-white'>
              Directory Architecture
            </h3>
            <p className='text-[#66b2b2] text-xs sm:text-sm'>
              Standardized structure designed for high AI context indexing and
              clean developer onboarding.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {folderStructure.map((item) => (
            <div
              key={item.path}
              className='p-4 rounded-2xl bg-[#070b0b]/60 border border-[#006666]/30 hover:border-[#66b2b2]/40 transition-all flex flex-col justify-between'
            >
              <div>
                <div className='flex items-center justify-between gap-2 mb-2'>
                  <span className='font-mono text-xs font-semibold text-[#b2d8d8] flex items-center gap-1.5'>
                    <FileCode className='w-3.5 h-3.5 text-[#66b2b2]' />
                    {item.path}
                  </span>
                  <span className='text-[10px] px-2 py-0.5 rounded-full bg-[#004c4c]/40 text-[#b2d8d8] border border-[#006666]/50 font-medium'>
                    {item.badge}
                  </span>
                </div>
                <p className='text-[#66b2b2] text-xs leading-relaxed'>
                  {item.purpose}
                </p>
              </div>

              <div className='mt-3 pt-2 border-t border-[#006666]/20 flex items-center gap-1 text-[11px] text-[#b2d8d8] font-medium'>
                <Check className='w-3 h-3 text-[#008080]' />
                <span>AGENTS.md Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
