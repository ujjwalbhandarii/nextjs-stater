'use client';

import { Sparkles, ChevronRight } from 'lucide-react';
import { ArchitectureNode } from '../types/home.types';

interface ArchitectureTreeGraphProps {
  nodes: ArchitectureNode[];
  selectedId: string;
  onSelectNode: (id: string) => void;
}

export function ArchitectureTreeGraph({
  nodes,
  selectedId,
  onSelectNode,
}: ArchitectureTreeGraphProps) {
  return (
    <div className='lg:col-span-6 p-5 sm:p-7 rounded-2xl sm:rounded-3xl liquid-glass-card flex flex-col justify-between'>
      <div>
        {/* Root Project Node Header */}
        <div className='flex items-center gap-3 pb-5 border-b border-[#006666]/40 mb-6'>
          <div className='w-10 h-10 rounded-xl bg-[#008080]/30 border border-[#66b2b2]/40 flex items-center justify-center text-[#b2d8d8] shadow-md shrink-0'>
            <Sparkles className='w-5 h-5 text-[#66b2b2]' />
          </div>
          <div className='min-w-0'>
            <div className='flex items-center gap-2'>
              <span className='font-mono text-sm sm:text-base font-bold text-white truncate'>
                thebitrates-production /
              </span>
              <span className='text-[10px] px-2 py-0.5 rounded-md bg-[#004c4c]/40 text-[#b2d8d8] font-mono border border-[#006666]/50 shrink-0'>
                ROOT
              </span>
            </div>
            <p className='text-xs text-slate-300/80 truncate'>
              Bun + Next.js Startup Repository Tree
            </p>
          </div>
        </div>

        {/* Connected Tree Branch Lines Container */}
        <div className='relative pl-5 sm:pl-7 space-y-3'>
          {/* Continuous Vertical Trunk Line */}
          <div className='absolute left-2 sm:left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#008080] via-[#006666] to-[#004c4c]' />

          {nodes.map((node) => {
            const Icon = node.icon;
            const isSelected = selectedId === node.id;
            return (
              <div
                key={node.id}
                onClick={() => onSelectNode(node.id)}
                className={`relative flex items-center justify-between p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#008080]/25 border border-[#66b2b2]/60 shadow-lg shadow-[#008080]/15 translate-x-1'
                    : 'bg-[#060909]/60 border border-[#006666]/30 hover:border-[#66b2b2]/40 hover:bg-[#004c4c]/20'
                }`}
              >
                {/* Horizontal Branch Connector */}
                <div
                  className={`absolute -left-3 sm:-left-4 w-3 sm:w-4 h-0.5 top-1/2 -translate-y-1/2 transition-colors ${
                    isSelected ? 'bg-[#66b2b2]' : 'bg-[#006666]/60'
                  }`}
                />
                {/* Connector Junction Dot */}
                <div
                  className={`absolute -left-[15px] sm:-left-[19px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-all z-10 ${
                    isSelected
                      ? 'bg-[#b2d8d8] ring-4 ring-[#008080]/60'
                      : 'bg-[#008080] border-2 border-[#060909]'
                  }`}
                />

                <div className='flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2'>
                  <div
                    className={`p-2 rounded-lg transition-colors shrink-0 ${
                      isSelected
                        ? 'bg-[#008080] text-white'
                        : 'bg-[#004c4c]/30 text-[#66b2b2]'
                    }`}
                  >
                    <Icon className='w-4 h-4' />
                  </div>

                  <div className='min-w-0'>
                    <h4
                      className={`font-mono text-xs sm:text-sm font-semibold truncate transition-colors ${
                        isSelected ? 'text-white' : 'text-[#b2d8d8]'
                      }`}
                    >
                      {node.name}
                    </h4>
                    <p className='text-[11px] text-slate-300/80 truncate'>
                      {node.title}
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-2 shrink-0'>
                  <span className='hidden xs:inline-block text-[10px] px-2 py-0.5 rounded-full bg-[#004c4c]/30 text-[#b2d8d8] border border-[#006666]/40 font-medium'>
                    {node.badge}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-white translate-x-0.5'
                        : 'text-[#006666]'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
