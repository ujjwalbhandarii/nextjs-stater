'use client';

import { useState } from 'react';
import { FolderTree } from 'lucide-react';
import { ARCHITECTURE_NODES } from '../constants/home.constants';
import { ArchitectureTreeGraph } from './ArchitectureTreeGraph';
import { ArchitectureNodeDetails } from './ArchitectureNodeDetails';

export function ArchitectureSection() {
  const [selectedId, setSelectedId] = useState<string>('feature');
  const activeNode =
    ARCHITECTURE_NODES.find((n) => n.id === selectedId) ||
    ARCHITECTURE_NODES[1];

  return (
    <section className='py-12 sm:py-20 px-4 max-w-6xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-10 sm:mb-14'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-3.5 text-mono-badge'>
          <FolderTree className='w-3.5 h-3.5 text-[#66b2b2]' />
          <span>GRAPHICAL ARCHITECTURE TREE</span>
        </div>
        <h2 className='mb-3'>Interactive Architecture Graph</h2>
        <p className='text-body-md max-w-xl mx-auto px-2'>
          Click any branch node to explore its structural role, AI
          searchability, and domain boundaries.
        </p>
      </div>

      {/* Main Graphical Canvas with Equalized Heights */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch'>
        <ArchitectureTreeGraph
          nodes={ARCHITECTURE_NODES}
          selectedId={selectedId}
          onSelectNode={setSelectedId}
        />
        <ArchitectureNodeDetails activeNode={activeNode} />
      </div>
    </section>
  );
}
