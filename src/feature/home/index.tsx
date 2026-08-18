'use client';

import { useHome } from './hooks/use-home';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CommandSection } from './components/CommandSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { FooterSection } from './components/FooterSection';

export default function Homepage() {
  const { copiedCommand, handleCopyCommand } = useHome();

  return (
    <main className='min-h-screen bg-[#0b0914] text-zinc-100 relative overflow-hidden vibe-bg-glow vibe-grid-pattern selection:bg-purple-500/30 selection:text-purple-200'>
      {/* Background Ambient Glow Orbs */}
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none' />
      <div className='absolute top-2/3 right-10 w-[450px] h-[450px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none' />

      {/* Main Page Layout */}
      <div className='relative z-10'>
        <HeroSection
          onCopy={handleCopyCommand}
          copiedCommand={copiedCommand}
        />
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
