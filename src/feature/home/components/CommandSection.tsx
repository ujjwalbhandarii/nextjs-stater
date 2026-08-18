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
    <section className='py-16 px-4 max-w-5xl mx-auto'>
      <div className='text-center mb-10'>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4'>
          <Terminal className='w-3.5 h-3.5' />
          <span>BUN CLI COMMAND CENTER</span>
        </div>
        <h2 className='text-3xl font-bold tracking-tight text-white mb-3'>
          Developer Workflow Commands
        </h2>
        <p className='text-zinc-400 text-sm max-w-lg mx-auto'>
          Click any command snippet to copy directly to your terminal.
        </p>
      </div>

      <div className='space-y-4'>
        {commandsList.map((item) => {
          const isCopied = copiedCommand === item.cmd;
          return (
            <div
              key={item.cmd}
              onClick={() => onCopy(item.cmd)}
              className='group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/40 backdrop-blur-md transition-all cursor-pointer hover:bg-zinc-800/80 gap-3'
            >
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-zinc-800 group-hover:bg-cyan-950/60 text-zinc-400 group-hover:text-cyan-400 transition-colors'>
                  <Play className='w-4 h-4' />
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors'>
                    {item.label}
                  </h4>
                  <p className='text-xs text-zinc-400'>{item.desc}</p>
                </div>
              </div>

              <div className='flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end'>
                <code className='px-3 py-1.5 rounded-lg bg-zinc-950 text-cyan-300 font-mono text-xs border border-zinc-800 group-hover:border-cyan-900/60'>
                  $ {item.cmd}
                </code>
                <button
                  type='button'
                  className='p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer'
                  title='Copy command'
                >
                  {isCopied ? (
                    <Check className='w-4 h-4 text-emerald-400' />
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
