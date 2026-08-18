'use client';

import { Folder, FileCode, CheckCircle2 } from 'lucide-react';
import { ArchitectureNode } from '../types/home.types';

interface ArchitectureNodeDetailsProps {
  activeNode: ArchitectureNode;
}

export function ArchitectureNodeDetails({
  activeNode,
}: ArchitectureNodeDetailsProps) {
  const Icon = activeNode.icon;

  return (
    <div className='lg:col-span-6 p-5 sm:p-7 rounded-2xl sm:rounded-3xl liquid-glass-card border border-[#006666]/50 flex flex-col justify-between'>
      <div>
        <div className='flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#006666]/40 mb-5'>
          <div className='flex items-center gap-2.5 min-w-0'>
            <div className='p-2 rounded-xl bg-[#008080]/30 text-[#b2d8d8] border border-[#006666]/50 shrink-0'>
              <Icon className='w-5 h-5 text-[#66b2b2]' />
            </div>
            <div className='min-w-0'>
              <h3 className='text-base sm:text-lg font-bold text-white truncate'>
                {activeNode.title}
              </h3>
              <span className='font-mono text-xs text-[#b2d8d8] truncate block'>
                {activeNode.name}
              </span>
            </div>
          </div>

          <span className='text-xs px-3 py-1 rounded-full bg-[#004c4c]/40 text-[#b2d8d8] border border-[#006666]/50 font-medium shrink-0'>
            {activeNode.badge}
          </span>
        </div>

        {/* Purpose & Boundary Description */}
        <div className='mb-6'>
          <h4 className='text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2'>
            Architectural Role
          </h4>
          <p className='text-slate-300 text-xs sm:text-sm leading-relaxed bg-[#060909]/75 p-4 rounded-xl border border-[#006666]/30'>
            {activeNode.desc}
          </p>
        </div>

        {/* Child File Inspection (If Available) */}
        {activeNode.children && activeNode.children.length > 0 && (
          <div className='mb-6'>
            <h4 className='text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3'>
              Included Node Files
            </h4>
            <div className='space-y-2'>
              {activeNode.children.map((child) => (
                <div
                  key={child.name}
                  className='flex items-center justify-between p-3 rounded-xl bg-[#060909]/60 border border-[#006666]/30 gap-2'
                >
                  <div className='flex items-center gap-2.5 min-w-0'>
                    {child.name.endsWith('/') ? (
                      <Folder className='w-4 h-4 text-[#66b2b2] shrink-0' />
                    ) : (
                      <FileCode className='w-4 h-4 text-[#b2d8d8] shrink-0' />
                    )}
                    <span className='font-mono text-xs font-medium text-white truncate'>
                      {child.name}
                    </span>
                  </div>
                  <span className='text-[11px] text-slate-300/80 truncate shrink-0 max-w-[50%]'>
                    {child.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* AGENTS.md Protocol Verification Badge */}
      <div className='pt-4 border-t border-[#006666]/30 flex flex-wrap items-center justify-between text-xs gap-2 mt-4'>
        <span className='text-slate-400'>Quality Control Protocol</span>
        <span className='text-[#b2d8d8] font-mono flex items-center gap-1.5 font-medium'>
          <CheckCircle2 className='w-4 h-4 text-[#008080]' />
          <span>AGENTS.md & Bun Verified</span>
        </span>
      </div>
    </div>
  );
}
