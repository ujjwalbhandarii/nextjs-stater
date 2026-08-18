'use client';

import { useHome } from './hooks/use-home';
import { HeroSection } from './components/HeroSection';
import { WhySection } from './components/WhySection';
import { FeaturesSection } from './components/FeaturesSection';
import { CommandSection } from './components/CommandSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { FooterSection } from './components/FooterSection';

export default function Homepage() {
  const { copiedCommand, handleCopyCommand } = useHome();

  return (
    <main className='min-h-screen bg-[#070b0b] text-[#b2d8d8] relative overflow-hidden vibe-bg-glow selection:bg-[#008080]/30 selection:text-white'>
      {/* Noise Texture Background Layer */}
      <div className='fixed inset-0 pointer-events-none z-0 opacity-30 mix-blend-overlay vibe-noise-overlay' />

      {/* Subtle Teal Ambient Glow */}
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#008080]/10 rounded-full blur-[140px] pointer-events-none' />
      <div className='absolute top-2/3 right-10 w-[450px] h-[450px] bg-[#004c4c]/20 rounded-full blur-[120px] pointer-events-none' />

      {/* Main Content Layout */}
      <div className='relative z-10'>
        <HeroSection
          onCopy={handleCopyCommand}
          copiedCommand={copiedCommand}
        />
        <WhySection />
        <FeaturesSection />
        <CommandSection
          onCopy={handleCopyCommand}
          copiedCommand={copiedCommand}
        />
        <ArchitectureSection />
        <FooterSection />
      </div>
    </main>
  );
}
