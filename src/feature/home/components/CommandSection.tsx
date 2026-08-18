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
    <section className='py-16 px-4 max-w-4xl mx-auto'>
      <div className='text-center mb-10'>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004c4c]/40 border border-[#006666]/50 text-[#b2d8d8] text-xs font-mono mb-4'>
          <Terminal className='w-3.5 h-3.5 text-[#66b2b2]' />
          <span>BUN CLI COMMAND CENTER</span>
        </div>
        <h2 className='text-3xl font-semibold tracking-tight text-white mb-2'>
          Developer Command Suite
        </h2>
        <p className='text-[#66b2b2] text-sm max-w-md mx-auto'>
          Click any command row to copy directly to your terminal clipboard.
        </p>
      </div>

      <div className='space-y-3'>
        {commandsList.map((item) => {
          const isCopied = copiedCommand === item.cmd;
          return (
            <div
              key={item.cmd}
              onClick={() => onCopy(item.cmd)}
              className='group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl bg-[#004c4c]/15 border border-[#006666]/30 hover:border-[#66b2b2]/40 backdrop-blur-xl transition-all cursor-pointer hover:bg-[#004c4c]/30 gap-3'
            >
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-xl bg-[#004c4c]/40 text-[#66b2b2] group-hover:text-[#b2d8d8] group-hover:bg-[#008080]/30 transition-colors'>
                  <Play className='w-3.5 h-3.5' />
                </div>
                <div>
                  <h4 className='text-sm font-medium text-white group-hover:text-[#b2d8d8] transition-colors'>
                    {item.label}
                  </h4>
                  <p className='text-xs text-[#66b2b2]'>{item.desc}</p>
                </div>
              </div>

              <div className='flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end'>
                <code className='px-3 py-1.5 rounded-xl bg-[#070b0b] text-[#b2d8d8] font-mono text-xs border border-[#006666]/40'>
                  $ {item.cmd}
                </code>
                <button
                  type='button'
                  className='p-2 rounded-xl bg-[#004c4c]/30 text-[#66b2b2] hover:text-white hover:bg-[#008080]/40 transition-colors cursor-pointer'
                  title='Copy command'
                >
                  {isCopied ? (
                    <Check className='w-4 h-4 text-[#b2d8d8]' />
                  ) : (
                    <Copy className='w-4 h-4' />
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
