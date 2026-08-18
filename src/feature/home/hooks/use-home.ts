'use client';

import { useState } from 'react';
import { homeService } from '../services/home.service';

export type HomeTab =
  'overview' | 'features' | 'commands' | 'architecture' | 'docker';

export function useHome() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<HomeTab>('overview');

  const featureStatus = homeService.getFeatureStatus();

  const handleCopyCommand = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => {
        setCopiedCommand(null);
      }, 2000);
    } catch {
      // Fallback for non-secure contexts
      setCopiedCommand(command);
      setTimeout(() => {
        setCopiedCommand(null);
      }, 2000);
    }
  };

  return {
    activeTab,
    setActiveTab,
    copiedCommand,
    handleCopyCommand,
    featureStatus,
  };
}
