import { Terminal, Copy, Check, Play } from 'lucide-react';

interface CommandSectionProps {
  onCopy: (cmd: string) => void;
  copiedCommand: string | null;
}

const commandsList = [
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

export function CommandSection({ onCopy, copiedCommand }: CommandSectionProps) {
  return (
    <section className='py-12 sm:py-20 px-4 max-w-5xl mx-auto'>
      <div className='text-center mb-8 sm:mb-12'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-[#b2d8d8] text-xs font-mono mb-3.5'>
          <Terminal className='w-3.5 h-3.5 text-[#66b2b2]' />
          <span>BUN CLI COMMAND SUITE</span>
        </div>
        <h2 className='text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2.5'>
          Developer Command Suite
        </h2>
        <p className='text-slate-300/90 text-sm sm:text-base max-w-md mx-auto px-2'>
          Click any command row to copy directly to your terminal clipboard.
        </p>
      </div>

      <div className='space-y-3 sm:space-y-3.5'>
        {commandsList.map((item) => {
          const isCopied = copiedCommand === item.cmd;
          return (
            <div
              key={item.cmd}
              onClick={() => onCopy(item.cmd)}
              className='group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl liquid-glass-card cursor-pointer gap-3 sm:gap-4'
            >
              <div className='flex items-center gap-3 sm:gap-3.5'>
                <div className='p-2 sm:p-2.5 rounded-lg sm:rounded-xl liquid-glass-pill text-[#66b2b2] group-hover:text-white group-hover:bg-[#008080] transition-colors shrink-0'>
                  <Play className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
                </div>
                <div>
                  <h4 className='text-sm sm:text-base font-semibold text-white group-hover:text-[#b2d8d8] transition-colors'>
                    {item.label}
                  </h4>
                  <p className='text-xs sm:text-sm text-slate-300/90 leading-tight sm:leading-normal'>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end pt-2 sm:pt-0 border-t border-[#006666]/20 sm:border-t-0'>
                <code className='px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#060909]/90 text-[#b2d8d8] font-mono text-[11px] sm:text-xs border border-[#006666]/50 shrink-0'>
                  $ {item.cmd}
                </code>
                <button
                  type='button'
                  className='p-2 sm:p-2.5 rounded-lg sm:rounded-xl liquid-glass-pill text-[#66b2b2] hover:text-white hover:bg-[#008080] transition-colors cursor-pointer shrink-0'
                  title='Copy command'
                >
                  {isCopied ? (
                    <Check className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b2d8d8]' />
                  ) : (
                    <Copy className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
