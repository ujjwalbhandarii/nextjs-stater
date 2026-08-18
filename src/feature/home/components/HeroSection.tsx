import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onCopy: (cmd: string) => void;
  copiedCommand: string | null;
}

const techBadges = [
  { name: 'Next.js 16', color: 'bg-black text-white border-zinc-700' },
  { name: 'React 19', color: 'bg-sky-950/60 text-sky-300 border-sky-800/50' },
  {
    name: 'Tailwind v4',
    color: 'bg-cyan-950/60 text-cyan-300 border-cyan-800/50',
  },
  {
    name: 'Bun Runtime',
    color: 'bg-amber-950/60 text-amber-300 border-amber-800/50',
  },
  {
    name: 'TypeScript 5',
    color: 'bg-blue-950/60 text-blue-300 border-blue-800/50',
  },
  {
    name: 'Radix UI',
    color: 'bg-purple-950/60 text-purple-300 border-purple-800/50',
  },
  {
    name: 'Docker Ready',
    color: 'bg-indigo-950/60 text-indigo-300 border-indigo-800/50',
  },
];

export function HeroSection({ onCopy, copiedCommand }: HeroSectionProps) {
  const quickStartCmd = 'bun run verify';

  return (
    <section className='relative pt-12 pb-16 px-4 max-w-6xl mx-auto text-center'>
      {/* Top Tag Pill */}
      <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md animate-pulse'>
        <Sparkles className='w-4 h-4 text-purple-400' />
        <span>Vibe Ready Startup Template for AI & Developers</span>
      </div>

      {/* Main Title */}
      <h1 className='text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent leading-tight'>
        Production Next.js 16 <br className='hidden sm:inline' />
        <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'>
          Starter Pack
        </span>
      </h1>

      {/* Subtitle */}
      <p className='max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 mb-8 leading-relaxed'>
        Engineered for rapid startup development with strict feature-based
        module architecture, custom hook logic separation, mandatory service
        unit testing, and pre-push quality control.
      </p>

      {/* Technology Pills */}
      <div className='flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto'>
        {techBadges.map((badge) => (
          <span
            key={badge.name}
            className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm shadow-sm transition-all hover:scale-105 ${badge.color}`}
          >
            {badge.name}
          </span>
        ))}
      </div>

      {/* Primary Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'>
        <Button
          size='lg'
          onClick={() => onCopy(quickStartCmd)}
          className='w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium shadow-lg shadow-purple-900/30 px-6 py-6 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-102 cursor-pointer'
        >
          <Terminal className='w-5 h-5 text-purple-200' />
          <span>
            {copiedCommand === quickStartCmd
              ? 'Copied to Clipboard! ✨'
              : '$ bun run verify'}
          </span>
        </Button>

        <a
          href='https://github.com/ujjwalbhandarii/nextjs-stater'
          target='_blank'
          rel='noopener noreferrer'
          className='w-full sm:w-auto'
        >
          <Button
            variant='outline'
            size='lg'
            className='w-full sm:w-auto border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 font-medium px-6 py-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer'
          >
            <svg
              className='w-5 h-5 fill-current text-zinc-400'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
              />
            </svg>
            <span>GitHub Repository</span>
            <ArrowRight className='w-4 h-4 text-zinc-400' />
          </Button>
        </a>
      </div>

      {/* Cute Lofi Banner Image */}
      <div className='relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-950/40 bg-zinc-900/80 group'>
        <div className='absolute inset-0 bg-gradient-to-t from-[#0b0914] via-transparent to-transparent opacity-60 z-10 pointer-events-none' />
        <Image
          src='/images/vibe_ready_banner.png'
          alt='Lofi Vibe Coding Banner'
          width={1024}
          height={393}
          className='w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-102'
          priority
        />
        <div className='absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-zinc-950/70 backdrop-blur-md border border-white/10 text-xs text-zinc-300'>
          <span className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-emerald-400 animate-ping' />
            <span>Vibe Ready & Ambient Coding Aesthetics Active</span>
          </span>
          <span className='text-zinc-400 font-mono flex items-center gap-1'>
            <ShieldCheck className='w-3.5 h-3.5 text-purple-400' />
            <span>Husky Pre-Push & Bun Verified</span>
          </span>
        </div>
      </div>
    </section>
  );
}
