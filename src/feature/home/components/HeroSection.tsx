import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sparkles, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onCopy: (cmd: string) => void;
  copiedCommand: string | null;
}

const techBadges = [
  'Next.js 16',
  'React 19',
  'Tailwind CSS v4',
  'Bun Runtime',
  'TypeScript 5',
  'Radix UI',
  'Docker Ready',
];

export function HeroSection({ onCopy, copiedCommand }: HeroSectionProps) {
  const quickStartCmd = 'bun run verify';

  return (
    <section className='relative pt-16 pb-16 px-4 max-w-5xl mx-auto text-center'>
      {/* Top Tag Pill - Apple Minimal Pill */}
      <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004c4c]/40 border border-[#006666]/50 text-[#b2d8d8] text-xs font-medium mb-8 backdrop-blur-xl'>
        <Sparkles className='w-3.5 h-3.5 text-[#66b2b2]' />
        <span>Vibe Ready Startup Pack</span>
      </div>

      {/* Main Title - Clean Apple Typography */}
      <h1 className='text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]'>
        Production Next.js <br />
        <span className='text-[#b2d8d8]'>Starter Template</span>
      </h1>

      {/* Subtitle */}
      <p className='max-w-xl mx-auto text-base sm:text-lg text-[#66b2b2] mb-8 leading-relaxed font-normal'>
        Engineered with strict feature module architecture, hook-based logic
        separation, mandatory unit testing, and automated pre-push verification.
      </p>

      {/* Tech Badges */}
      <div className='flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto'>
        {techBadges.map((badge) => (
          <span
            key={badge}
            className='px-3.5 py-1 text-xs font-medium rounded-full bg-[#004c4c]/30 text-[#b2d8d8] border border-[#006666]/40 backdrop-blur-md transition-colors hover:border-[#66b2b2]/60'
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-3 mb-14'>
        <Button
          size='lg'
          onClick={() => onCopy(quickStartCmd)}
          className='w-full sm:w-auto bg-[#008080] hover:bg-[#66b2b2] text-white font-medium px-6 py-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#004c4c]/30 cursor-pointer'
        >
          <Terminal className='w-4 h-4 text-[#b2d8d8]' />
          <span>
            {copiedCommand === quickStartCmd
              ? 'Copied to Clipboard ✨'
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
            className='w-full sm:w-auto border-[#006666]/60 bg-[#004c4c]/20 hover:bg-[#004c4c]/40 text-[#b2d8d8] font-medium px-6 py-6 rounded-2xl flex items-center justify-center gap-2 transition-all cursor-pointer'
          >
            <svg
              className='w-4 h-4 fill-current text-[#66b2b2]'
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
            <ArrowRight className='w-4 h-4 text-[#66b2b2]' />
          </Button>
        </a>
      </div>

      {/* Apple-Style Glass Banner Frame */}
      <div className='relative rounded-3xl overflow-hidden border border-[#006666]/40 bg-[#004c4c]/20 backdrop-blur-2xl shadow-2xl group'>
        <Image
          src='/images/vibe_ready_banner.png'
          alt='Vibe Ready Banner'
          width={1024}
          height={393}
          className='w-full h-auto object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100'
          priority
        />
        <div className='absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2.5 rounded-2xl bg-[#070b0b]/80 backdrop-blur-xl border border-[#006666]/50 text-xs text-[#b2d8d8]'>
          <span className='flex items-center gap-2'>
            <span className='w-2 h-2 rounded-full bg-[#66b2b2] animate-pulse' />
            <span>Vibe Ready Architecture Active</span>
          </span>
          <span className='text-[#66b2b2] font-mono flex items-center gap-1'>
            <ShieldCheck className='w-3.5 h-3.5 text-[#008080]' />
            <span>Husky & Bun Verified</span>
          </span>
        </div>
      </div>
    </section>
  );
}
