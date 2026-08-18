import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Terminal, ArrowRight } from 'lucide-react';
import { TECH_BADGES } from '../constants/home.constants';

interface HeroSectionProps {
  onCopy: (cmd: string) => void;
  copiedCommand: string | null;
}

export function HeroSection({ onCopy, copiedCommand }: HeroSectionProps) {
  const quickStartCmd = 'bun run verify';

  return (
    <section className='relative pt-12 sm:pt-20 pb-10 sm:pb-16 px-4 max-w-6xl mx-auto text-center'>
      {/* Mobile-Optimized SaaS Headline */}
      <h1 className='text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.03em] text-white mb-4 sm:mb-6 leading-[1.12]'>
        The Production Next.js <br className='hidden sm:inline' />
        <span className='bg-gradient-to-r from-white via-[#b2d8d8] to-[#66b2b2] bg-clip-text text-transparent'>
          Startup Foundation
        </span>
      </h1>

      {/* Responsive Subtitle */}
      <p className='max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-slate-300/90 mb-8 sm:mb-10 leading-relaxed font-normal px-2'>
        Engineered with strict feature module boundaries, hook-based logic
        separation, mandatory service unit testing, and automated pre-push
        quality controls.
      </p>

      {/* Prominent Tech Stack Liquid Glass Pills */}
      <div className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 max-w-4xl mx-auto'>
        {TECH_BADGES.map((badge) => {
          const Icon = badge.icon;
          return (
            <span
              key={badge.label}
              className='px-3.5 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-base font-medium rounded-full liquid-glass-pill text-[#b2d8d8] flex items-center gap-2 sm:gap-2.5 transition-all hover:scale-105 hover:text-white shadow-sm'
            >
              <Icon className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#66b2b2]' />
              <span>{badge.label}</span>
            </span>
          );
        })}
      </div>

      {/* Primary Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto'>
        <Button
          size='lg'
          onClick={() => onCopy(quickStartCmd)}
          className='w-full sm:w-auto bg-[#008080] hover:bg-[#66b2b2] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-2xl flex items-center justify-center gap-2.5 sm:gap-3 transition-all duration-300 shadow-xl shadow-[#008080]/30 hover:shadow-[#008080]/50 cursor-pointer text-xs sm:text-sm'
        >
          <Terminal className='w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#b2d8d8]' />
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
            className='w-full sm:w-auto liquid-glass-pill text-slate-200 hover:text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-2xl flex items-center justify-center gap-2 sm:gap-2.5 transition-all cursor-pointer text-xs sm:text-sm'
          >
            <svg
              className='w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current text-[#66b2b2]'
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
            <ArrowRight className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#66b2b2]' />
          </Button>
        </a>
      </div>

      {/* Liquid Glass Hero Frame Container */}
      <div className='relative rounded-2xl sm:rounded-3xl overflow-hidden liquid-glass-card group p-1.5 sm:p-2'>
        <Image
          src='/images/vibe_ready_banner.png'
          alt='Vibe Ready Banner'
          width={1024}
          height={393}
          className='w-full h-auto object-cover rounded-xl sm:rounded-2xl opacity-95 transition-all duration-700 group-hover:opacity-100 group-hover:scale-101'
          priority
        />
      </div>
    </section>
  );
}
